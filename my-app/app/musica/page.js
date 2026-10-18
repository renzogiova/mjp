import Link from "next/link";

export default function Musica() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-24"
    >
        {/* <div> */}
            <p className="mb-6 rounded-full bg-[var(--brand-yellow)] px-5 py-2 text-sm font-bold">
                Proximamente...
            </p>

            <Link
                href="/"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-yellow)] px-6 py-3 font-semibold hover:underline"
            >
                Volver al inicio
            </Link>
            
        {/* </div> */}

    </main>
  );
}
