# Citas por WhatsApp — demo (Kit para negocios locales de Oviedo)

Demo estática (sin servidor, sin base de datos, sin API de WhatsApp) con datos **ficticios**:

- `cita.html` — página de citas: el cliente elige servicio/día/hora y se abre WhatsApp con el mensaje escrito (enlace oficial click-to-chat `wa.me`).
- `panel.html` — panel del negocio: citas de hoy/mañana, recordatorio en un toque, pedir reseña, lista de clientes y «recuperar» inactivos. Datos en `localStorage` del móvil del negocio; exportación CSV.
- `resena.html` — página para pedir reseña en Google (sin filtrar opiniones: todos van al mismo botón, conforme a las políticas de Google).
- `qr.html` — carteles QR imprimibles.
- `carta.html` — extra: carta digital QR para sidrería/restaurante.

Personalizar para un cliente = editar `config.js` (nombre, WhatsApp, horario, servicios, enlace de reseñas) y poner `demo: false`.

Licencia MIT. Incluye `vendor/qrcode.js` de [kazuhikoarase/qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) (MIT).
