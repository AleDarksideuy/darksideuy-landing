// pages/api/contact.ts
import formidable, { File } from 'formidable';
import { google } from 'googleapis';
import fs from 'fs';
import { IncomingMessage } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper para parsear el formulario usando Promesa
const parseForm = (req: IncomingMessage): Promise<{ fields: any; files: any }> => {
  const form = formidable({ multiples: false });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { files } = await parseForm(req);
    const file = files.archivos as File;

    if (!file || !file.filepath) {
      return res.status(400).json({ error: 'Archivo no encontrado' });
    }

    // Autenticación con Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const response = await drive.files.create({
      requestBody: {
        name: file.originalFilename || 'archivo',
        parents: [process.env.GOOGLE_FOLDER_ID || ''],
      },
      media: {
        mimeType: file.mimetype || 'application/octet-stream',
        body: fs.createReadStream(file.filepath),
      },
      fields: 'id',
    });

    return res.status(200).json({ success: true, fileId: response.data.id });

  } catch (error: any) {
    console.error('Error al subir archivo:', error);
    
    // Verificamos si el error viene de Google Auth
    if (error?.response?.data?.error === 'invalid_grant') {
      return res.status(401).json({
        error: 'Credenciales inválidas. Verifica GOOGLE_CLIENT_EMAIL y GOOGLE_PRIVATE_KEY',
      });
    }

    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
