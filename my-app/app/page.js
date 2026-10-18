import Image from "next/image";

export default function Home() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="relative isolate w-full flex-1 bg-[var(--brand-white)]"
    >
      <Image
        src="/jdv25foto.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-center opacity-70"
      />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="w-fit max-w-2xl rounded-lg bg-[var(--brand-white)]/90 p-5 text-3xl font-bold tracking-tight sm:p-6 sm:text-5xl">
          Movimiento Juvenil Peregrinos
        </h1>
      </div>

      <div>
        <p className="w-fit rounded-lg bg-[var(--brand-white)]/90 p-3 text-xl sm:p-6 sm:text-xl">
          &quot;Peregrinos&quot;. Movimiento diocesano para adolescentes y jóvenes, que tiene como objeto ayudar a descubrir el valor de la vida cristiana y comprometerse generosamente con una actividad apostólica dentro de una comunidad eclesial. El carisma que anima sus actividades se expresa a través de dos palabras que sintetizan el objetivo fundamental de su existencia: Conversión y Espiritualidad
        </p>
      </div>

      <div className="flex justify-center px-5 py-8 sm:px-8">
        <iframe
          className="aspect-video h-auto w-full max-w-[560px] border-0"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MKEou-HsuHA?si=p4sEQVaWmkm4LpMs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

    </main>
  );
}
