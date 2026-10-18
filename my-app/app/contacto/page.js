const redesSociales = [
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/mjperegrinos1/",
  },
  {
    nombre: "Facebook",
    href: "https://web.facebook.com/mjp1centro/?locale=es_LA&_rdc=1&_rdr#",
  },
  {
    nombre: "Twitter (X)",
    href: "https://x.com/mjp1centro",
  },
  {
    nombre: "YouTube",
    href: "https://www.youtube.com/@movimientojuvenilperegrino6569",
  },
];

export default function Contacto() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="mx-auto w-full max-w-7xl flex-1 px-5 py-16 sm:px-8 sm:py-24"
    >
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Contacto
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        Encontranos en nuestras redes sociales y seguí las novedades del
        Movimiento Juvenil Peregrinos.
      </p>

      <section aria-labelledby="redes-sociales-titulo" className="mt-10">
        <h2 id="redes-sociales-titulo" className="text-2xl font-bold">
          Redes sociales
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {redesSociales.map(({ nombre, href }) => (
            <li key={nombre}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-[var(--border)] border-t-4 border-t-[var(--brand-blue)] p-6 hover:bg-[var(--brand-yellow)]"
              >
                <span className="text-xl font-semibold">{nombre}</span>
                <span className="mt-2 block text-sm text-[var(--text-muted)]">
                  Visitar perfil (se abre en una nueva pestaña)
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
