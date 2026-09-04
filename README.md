# Timbre Inteligente — Rivadavia 2840

Prototipo de timbre digital: el visitante escanea un QR, elige piso y
departamento, y contacta al residente por WhatsApp o llamada telefónica.

## Archivos

- `index.html` — la app completa (HTML + CSS + JS en un solo archivo).
  Se puede abrir directamente en el navegador haciendo doble clic, o
  publicarla en cualquier hosting (GitHub Pages, Netlify, Vercel, etc.).

## Cómo cargar el directorio real

Abrí `index.html` con un editor de texto y buscá el comentario:

```
// ---- Directorio de ejemplo -------------------------------------------
const directorio = [ ... ];
```

Es un array por piso, y cada piso tiene una lista de `unidades`. Reemplazá
los datos de ejemplo por los reales, respetando el formato:

```js
{ piso: '1°', unidades: [
  { depto:'A', nombre:'Juan Pérez', whatsapp:'5491122334455', telefono:'+5491122334455' },
]},
```

- `whatsapp`: número completo con código de país, sin `+` ni espacios
  (ej: `5491122334455` = 54 Argentina + 9 + 11 + número).
- `telefono`: el número tal cual lo marcaría un teléfono (con `+`).
- Podés agregar o quitar pisos y unidades libremente.

## Cartel QR

Dentro de la app hay un botón "Ver cartel QR" que genera un código QR que
apunta a la URL donde esté publicada la página, con las instrucciones para
imprimir (como el cartel de bellify.io que usaste de referencia).
Para que el QR funcione, la página tiene que estar publicada en una URL
accesible desde el celular (no sirve un archivo local en tu PC).

## Próximos pasos posibles

- Publicar `index.html` en un hosting gratuito para tener una URL fija.
- Pasar a una versión "producto completo": panel de administración para
  cargar pisos/deptos/contactos sin tocar código, base de datos, y soporte
  para varios edificios (multi-cliente).

## Historial

- 2026-09-04: primer prototipo, generado con Claude, con directorio de
  ejemplo (5 pisos, PB incluida).

## Publicación

La página está publicada en GitHub Pages:
https://dmontu1980.github.io/portero-rioja1244/

Repositorio: https://github.com/dmontu1980/portero-rioja1244

Para actualizarla: editá `index.html` en esta carpeta y pedile a Claude que
la vuelva a publicar (hace `git add`, `commit` y `push`, GitHub Pages
actualiza sola en un minuto).
