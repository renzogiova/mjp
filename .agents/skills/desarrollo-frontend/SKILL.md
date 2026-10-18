---
name: desarrollo-frontend
description: Desarrollar y modificar páginas, componentes e interfaces de MOVI WEB con React, Next.js, CSS y Tailwind CSS. Usar cuando se soliciten tareas de frontend, diseño responsive, accesibilidad o integración de interfaces con una API.
---

# Desarrollo frontend de MOVI WEB

## Contexto

MOVI WEB es la página web del Movimiento Juvenil Peregrinos. Crear interfaces claras, accesibles y fáciles de usar, con textos en español salvo indicación contraria.

## Paleta de colores

Los colores principales de MOVI WEB son:

- Azul: `#0066b1`.
- Verde: `#26a52f`.
- Blanco: `#ffffff`.
- Amarillo: `#fce432`.

Usar estos colores como base de la identidad visual y centralizarlos en variables CSS o en los tokens de Tailwind CSS según la configuración del proyecto. Comprobar el contraste de texto, controles y estados de foco; no asumir que el texto blanco sobre estos colores cumple los requisitos de accesibilidad.

## Antes de implementar

1. Leer `agents.md` y las instrucciones aplicables del repositorio.
2. Revisar la estructura, las versiones instaladas, los scripts, el gestor de paquetes y los componentes existentes. Respetar el router y las convenciones de Next.js que use el proyecto.
3. Identificar el objetivo de la pantalla, sus usuarios y los estados necesarios. Reutilizar estilos y componentes antes de agregar dependencias.
4. Si todavía no existe una aplicación, explicar la estructura propuesta y crear únicamente lo necesario para la tarea. No asumir versiones, servicios o integraciones ya configuradas.

## Implementación

- Usar React y Next.js para páginas y componentes, Tailwind CSS para estilos utilitarios y CSS cuando aporte claridad. Respetar la configuración de la versión instalada.
- Usar JavaScript para el desarrollo frontend. No usar TypeScript ni crear archivos `.ts` o `.tsx`.
- Mantener componentes pequeños y con responsabilidades claras.
- En App Router, priorizar Server Components y agregar `use client` solo cuando se requieran estado, eventos o APIs del navegador. En Pages Router, seguir sus mecanismos de renderizado y obtención de datos.
- No exponer secretos ni credenciales en componentes, respuestas o variables públicas del frontend.
- Usar HTML semántico, encabezados ordenados, etiquetas en formularios, navegación por teclado y foco visible. Dar nombres accesibles a los controles y texto alternativo adecuado a las imágenes.
- Diseñar primero para pantallas pequeñas y adaptar la interfaz a tablet y escritorio. Evitar desbordamientos, mantener contraste legible y respetar la preferencia de movimiento reducido.
- Mantener una estética coherente con la identidad visual existente. Si aún no está definida, elegir una base sencilla sin inventar logos, testimonios ni información institucional.
- Usar los componentes de navegación e imágenes de Next.js cuando corresponda. Configurar dimensiones de imágenes y evitar cargas o dependencias innecesarias.
- En formularios, mostrar validaciones comprensibles y estados de envío, éxito y error. La validación del cliente no sustituye la validación del servidor.
- Al consumir una API, seguir el contrato disponible y contemplar carga, error, datos vacíos y éxito. No inventar endpoints; distinguir claramente los datos de demostración de los datos reales.
- No ampliar el alcance al backend o a la base de datos salvo que la tarea lo requiera.

## Validación

1. Ejecutar los comandos existentes de lint, comprobación de tipos, pruebas y build que sean pertinentes al cambio. No afirmar que pasaron comandos que no se ejecutaron.
2. Iniciar la aplicación cuando sea posible y comprobar la página o interacción modificada. Si hay herramientas de navegador, revisar tamaños móvil y escritorio, navegación por teclado y errores de consola.
3. Para cambios de comportamiento, usar las pruebas existentes y agregar cobertura útil cuando corresponda. No introducir un framework de pruebas solo para un cambio visual menor.
4. Revisar el diff para detectar archivos accidentales, secretos, cambios ajenos a la tarea y modificaciones innecesarias de dependencias.

## Entrega

Resumir qué cambió, cómo se verificó y cualquier limitación pendiente. No hacer commit, push ni despliegue sin autorización del usuario para esa acción.
