# Timbre Inteligente — Rioja 1244, Edificio Chicago I

Prototipo/app de timbre digital: el visitante escanea un QR, elige piso y
unidad, y contacta al residente por WhatsApp o llamada telefónica.

## Publicación

https://dmontu1980.github.io/portero-rioja1244/

Repositorio: https://github.com/dmontu1980/portero-rioja1244

Para actualizarla: editá `index.html` en esta carpeta y pedile a Claude que
la vuelva a publicar (hace `git add`, `commit` y `push`; GitHub Pages
actualiza sola en menos de un minuto).

## Estructura del edificio (ya cargada en el código)

- **Planta Baja (PB)**: 1 unidad — Portería.
- **Entrepiso (EP)**: 1 unidad.
- **Pisos 1° a 10°**: 5 unidades cada uno, A a E.
  - A y B son las unidades de frente (primera fila del piso).
  - C, D y E son las de contrafrente (segunda fila).

## Cómo cargar los contactos reales

Abrí `index.html` con un editor de texto y buscá el comentario:

```
// ---- Directorio del edificio -------------------------------------------
```

Cada unidad es un objeto `{ codigo, nombre, whatsapp, telefono }`. Las que
todavía no tienen datos están así (generadas con `unidadVacia(...)`):

```js
{ codigo:'A', nombre:'', whatsapp:'', telefono:'' }
```

Completalas con los datos reales:

```js
{ codigo:'A', nombre:'Juan Pérez', whatsapp:'5491122334455', telefono:'+5491122334455' }
```

- `whatsapp`: número completo con código de país, sin `+` ni espacios.
- `telefono`: el número tal cual lo marcaría un teléfono (con `+`).
- Mientras una unidad no tenga `whatsapp` ni `telefono` cargados, la app
  muestra un aviso ("Todavía no se cargó un contacto para esta unidad")
  en vez de los botones — así se nota fácil qué falta completar.
- Los nombres de los propietarios NO se muestran en la lista pública (solo
  el código de unidad), por privacidad. El nombre solo aparece dentro del
  panel de contacto, una vez que ya elegiste la unidad.

## Cartel QR

Dentro de la app hay un botón "Ver cartel QR" que genera un código QR
apuntando a la URL publicada, con las instrucciones para imprimir.

## Historial

- 2026-09-04: primer prototipo con directorio de ejemplo.
- 2026-09-04: publicado en GitHub Pages (fuera del visor de Claude, para
  que funcionen los links `tel:`), agregado meta viewport.
- 2026-09-04: estructura real del edificio (PB Portería, Entrepiso, Pisos
  1-10 con A-E, frente/contrafrente), sin nombres visibles en la lista,
  sin leyendas de "prototipo" / "datos de ejemplo".
