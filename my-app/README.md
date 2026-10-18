# MOVI WEB

Base de Next.js con App Router, React, JavaScript y Tailwind CSS.

## Desarrollo

Desde `my-app`, instalar las dependencias e iniciar el servidor:

```bash
npm install
npm run dev
```

Abrir http://localhost:3000. La página inicial está en `app/page.js`, el layout en `app/layout.js` y los estilos en `app/globals.css`.

El alias `@/*` apunta a la raíz de `my-app` y está definido en `jsconfig.json`.

En PowerShell, si la política de ejecución bloquea `npm`, usar `npm.cmd`.

## Validación y producción

```bash
npm run lint
npm run build
npm start
```

El proyecto usa `next/font/google` para Geist; la primera compilación requiere acceso a Google Fonts.
