import Link from "next/link";

export default function Actividades() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-24"
    >
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        OASIS
      </h1>
      <p className="mt-6 mb-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        Un oasis es un retiro espiritual católico hecho POR JOVENES y PARA
        JOVENES, con el fin de que nuevas personas puedan conocer a Dios
      </p>

      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        ¿POR QUÉ OASIS?
      </h1>
      <p className="mt-6 mb-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        loremipsum
      </p>

      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        ¿QUÉ SE HACE EN EL OASIS?
      </h1>

      <p className="mt-6 mb-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        Hay quien piensa ;)
      </p>



    </main>
  );
}
