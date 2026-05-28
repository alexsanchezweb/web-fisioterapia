# Guía de personalización para nuevo cliente

Todo lo que necesitas cambiar está concentrado en un solo archivo: **`config.js`** (raíz del proyecto).
Solo para fotos y textos de técnicas/patologías hay que tocar archivos adicionales.

---

## 1. Nombre y datos de la clínica → `config.js`

Abre `config.js` y edita los campos del bloque **Identidad** y **Contacto**:

```js
clinicName: "NombreClínica",      // nombre completo (usado en SEO y footer)
logoPart1:  "Nombre",             // primera parte del logo (color primario)
logoPart2:  "Clínica",            // segunda parte del logo (color secundario)
clinicCity: "Barcelona",
tagline:    "Clínica de Fisioterapia en Barcelona",
description: "Descripción corta para SEO…",
registroSanitario: "B-00000-BA",
colegio:    "Col·legi de Fisioterapeutes de Catalunya",
foundingYear: 2020,

phone:      "+34 93 000 00 00",
phoneHref:  "tel:+34930000000",   // sin espacios ni guiones
email:      "hola@clinica.es",
whatsappNumber: "34930000000",    // código de país + número, sin "+" ni espacios

addressStreet: "C/ Exemple 10, 1r",
addressCity:   "08001 Barcelona",
scheduleWeekdays: "L–V: 9:00–19:00",
scheduleSaturday: "Sábados: 9:00–13:00",

stats: [
  { value: "500+", label: "Pacientes tratados" },
  { value: "5 años", label: "De experiencia" },
  { value: "97%",  label: "Satisfacción" },
],
```

---

## 2. Colores → `config.js`

En el bloque **Colores de marca** de `config.js`:

```js
colorPrimary:         "#1a3a5c",  // color principal (azul oscuro, textos y fondos)
colorPrimaryDark:     "#142d48",  // versión más oscura del primario (hover)
colorPrimaryLight:    "#f0f4f8",  // versión muy clara (fondos de sección)
colorSecondary:       "#2d6a4f",  // color de acento (verde, botones y badges)
colorSecondaryDark:   "#245a42",  // versión más oscura del secundario (hover)
colorSecondaryLight:  "#f0f7f4",  // fondo suave del secundario
colorSecondaryBorder: "#c3e0d6",  // borde de badges y cajas del secundario
colorSecondaryAccent: "#7ecfc0",  // tono claro decorativo
```

**Cómo elegir colores:**
1. Decide un color corporativo principal (suele ser azul, verde o gris oscuro).
2. Crea una versión 15–20 % más oscura para `Dark` (para estados hover).
3. Crea una versión muy clara (casi blanco con tinte) para `Light`.
4. Repite el proceso para el color de acento secundario.

Los colores se aplican automáticamente a toda la web a través de variables CSS. No es necesario tocar ningún otro archivo.

---

## 3. Fotos

### Foto del hero (portada)
Edita `app/components/Hero.tsx`. Busca la etiqueta `<Image` con `alt` parecido a "fisioterapeuta" y cambia el atributo `src`:

```tsx
<Image
  src="https://url-de-la-nueva-foto.jpg"   // ← cambia esta URL
  alt="Descripción accesible de la foto"
  ...
/>
```

Usa imágenes de al menos **1400 × 900 px** para el hero.

### Fotos de técnicas
Edita `app/tecnicas/page.tsx`. Al principio del archivo hay un array `techniques`. Cada técnica tiene un campo `image` y `alt`:

```js
{
  title: "Fisioterapia Manual",
  description: "...",
  image: "https://nueva-url-foto.jpg",   // ← cambia esta URL
  alt:   "Descripción accesible",        // ← actualiza el texto alt
},
```

**Consejo:** usa fotos de Unsplash (`unsplash.com`), Freepik o las propias del cliente. Tamaño recomendado: **800 × 550 px**.

### Subir fotos propias al proyecto
Coloca los archivos en la carpeta `public/` (por ejemplo `public/hero.jpg`) y referencia con ruta relativa:

```tsx
src="/hero.jpg"
```

---

## 4. Textos de técnicas y patologías

### Técnicas → `app/tecnicas/page.tsx`
Edita el array `techniques` (líneas 4–47). Cada objeto tiene:

| Campo | Qué es |
|---|---|
| `title` | Nombre de la técnica |
| `description` | Párrafo explicativo (3–5 líneas) |
| `image` | URL de la foto |
| `alt` | Texto alternativo accesible |

Para **añadir** una técnica nueva, copia un objeto del array, pégalo al final (antes del `]`) y edita sus campos.

Para **eliminar** una técnica, borra el objeto completo (desde `{` hasta `},`).

### Patologías → `app/patologias/page.tsx`
Edita el array `categories` (líneas 3–64). Cada objeto tiene:

| Campo | Qué es |
|---|---|
| `title` | Nombre de la categoría |
| `description` | Descripción breve |
| `conditions` | Array de strings con cada patología |

Para añadir una patología a una categoría existente, añade un string más al array `conditions`:

```js
conditions: [
  "Patología existente",
  "Nueva patología aquí",   // ← añade aquí
],
```

---

## 5. Conectar el formulario a un nuevo Google Sheets

### Paso 1 — Crear la hoja
1. Crea un nuevo Google Sheets.
2. En la fila 1 añade estas cabeceras: `Fecha`, `Nombre`, `Email`, `Teléfono`, `Mensaje`.

### Paso 2 — Crear el script
1. En el Sheets: **Extensiones → Apps Script**.
2. Borra el contenido y pega este código:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data  = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.nombre   || "",
    data.email    || "",
    data.telefono || "",
    data.mensaje  || "",
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el script (Ctrl+S).

### Paso 3 — Publicar como aplicación web
1. **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Ejecutar como: **Yo (tu cuenta)**.
4. Acceso: **Cualquier usuario**.
5. Clic en **Implementar** y copia la URL que aparece (empieza por `https://script.google.com/macros/s/…/exec`).

### Paso 4 — Pegar la URL en config.js
```js
sheetsUrl: "https://script.google.com/macros/s/NUEVA_URL/exec",
```

> **Importante:** cada vez que modifiques el script debes crear una **nueva implementación** (no editar la existente) para que los cambios surtan efecto.

---

## 6. Publicar en Vercel

### Primera vez
1. Sube el proyecto a GitHub (repositorio privado o público).
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Clic en **Add New Project** → selecciona el repositorio.
4. Vercel detecta Next.js automáticamente. Deja la configuración por defecto.
5. Clic en **Deploy**. En ~2 minutos la web estará en línea.

### Dominio personalizado
1. En el dashboard del proyecto: **Settings → Domains**.
2. Añade el dominio del cliente (por ejemplo `clinica.es`).
3. Vercel te dará los registros DNS que debes configurar en el panel del registrador del dominio (GoDaddy, Namecheap, etc.).

### Actualizaciones posteriores
Cada vez que hagas un `git push` a la rama `master` (o `main`), Vercel redespliega la web automáticamente. No hay que hacer nada más.

### Variables de entorno (si las hubiera)
Si en el futuro añades claves de API que no quieras en el código, ve a **Settings → Environment Variables** en Vercel y añádelas ahí en lugar de en el código.

---

## Resumen de archivos a tocar

| Qué cambiar | Archivo |
|---|---|
| Nombre, contacto, horario, colores, stats, WhatsApp, Sheets | `config.js` |
| Foto del hero | `app/components/Hero.tsx` |
| Técnicas (textos y fotos) | `app/tecnicas/page.tsx` |
| Patologías (textos) | `app/patologias/page.tsx` |
| Fotos propias del cliente | Carpeta `public/` |
