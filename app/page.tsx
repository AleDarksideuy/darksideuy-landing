import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
export default function Home() {
  return (
    <>
      <LoadingScreen />
      {/* Todo el contenido real de la página */}
      <main className="bg-black text-white">
        <Hero/>
      </main>
    </>
  )
}