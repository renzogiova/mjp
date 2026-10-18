const secciones = [
  {
    id: "meditaciones",
    titulo: "Meditaciones",
    descripcion:
      "Meditaciones en PDF para acompañar tu oración y reflexión personal, disponibles en Google Drive.",
    pendiente: "Próximamente compartiremos las meditaciones.",
    color: "border-t-[var(--brand-blue)]",
  },
  {
    id: "media",
    titulo: "Media",
    descripcion:
      "Podcasts, canales de YouTube, cuentas de Instagram y otros sitios de interés. También encontrarás enlaces a videos almacenados en Google Drive.",
    pendiente: "Próximamente compartiremos los enlaces y videos.",
    color: "border-t-[var(--brand-green)]",
  },
  {
    id: "biblioteca",
    titulo: "Biblioteca",
    descripcion:
      "Libros y textos para profundizar en la fe, disponibles en Google Drive.",
    pendiente: "Próximamente compartiremos los libros y textos.",
    color: "border-t-[var(--brand-yellow)]",
  },
];

export default function Recursos() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="mx-auto w-full max-w-7xl flex-1 px-5 py-16 sm:px-8 sm:py-24"
    >
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Recursos
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        Materiales para acompañarte en tu camino de fe.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {secciones.map(({ id, titulo, descripcion, pendiente, color }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-titulo`}
            className={`rounded-lg border border-[var(--border)] border-t-4 p-6 ${color}`}
          >
            <h2 id={`${id}-titulo`} className="text-2xl font-bold">
              {titulo}
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              {descripcion}
            </p>
            <p className="mt-6 border-t border-[var(--border)] pt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {pendiente}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
