// lib/stream.ts
import { Readable } from 'stream'

export function requestToStream(request: Request): Readable {
  const reader = request.body?.getReader()
  if (!reader) throw new Error('Request body is empty')

  return new Readable({
    async read() {
      const { done, value } = await reader.read()
      if (done) {
        this.push(null)
      } else {
        this.push(value)
      }
    }
  })
}
