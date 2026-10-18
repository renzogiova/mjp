import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-24"
    >
      <p className="mb-6 rounded-full bg-[var(--brand-yellow)] px-5 py-2 text-sm font-bold tracking-widest">
        ERROR 404
      </p>
      <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
        No encontramos esta página o sección
      </h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        Puede que el enlace haya cambiado o que la dirección sea incorrecta.
        Volvé al inicio para seguir recorriendo MOVI WEB.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-yellow)] px-6 py-3 font-semibold hover:underline"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
