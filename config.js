// ============================================================
//  CONFIGURACIÓN DEL NEGOCIO — lo único que se edita por cliente
//  (DEMO: negocio y datos ficticios)
// ============================================================
window.NEGOCIO = {
  demo: true,                         // true = no se envía nada a ningún número real
  nombre: "Peluquería Lúa",
  tipo: "Peluquería y estética",
  ciudad: "Oviedo",
  direccion: "C/ Ejemplo, 12 · 33003 Oviedo (dirección ficticia)",
  whatsapp: "34600000000",            // número del negocio, formato 34XXXXXXXXX
  googleResenas: "https://search.google.com/local/writereview?placeid=DEMO_PLACE_ID",
  colorPrincipal: "#7a3e65",
  horario: {                          // 0=domingo … 6=sábado ; null = cerrado
    0: null,
    1: ["09:30", "13:30", "16:30", "20:00"],
    2: ["09:30", "13:30", "16:30", "20:00"],
    3: ["09:30", "13:30", "16:30", "20:00"],
    4: ["09:30", "13:30", "16:30", "20:00"],
    5: ["09:30", "13:30", "16:30", "20:00"],
    6: ["09:30", "14:00"]
  },
  intervaloMin: 30,
  diasVista: 12,
  servicios: [
    { nombre: "Corte mujer",            duracion: 45,  precio: 22 },
    { nombre: "Corte caballero",        duracion: 30,  precio: 14 },
    { nombre: "Color raíz",             duracion: 90,  precio: 35 },
    { nombre: "Mechas / balayage",      duracion: 150, precio: 70 },
    { nombre: "Peinado / recogido",     duracion: 45,  precio: 25 },
    { nombre: "Tratamiento hidratante", duracion: 30,  precio: 18 }
  ],
  textos: {
    recordatorio: "¡Hola {nombre}! 👋 Te recordamos tu cita en {negocio} el {fecha} a las {hora} ({servicio}). Si no puedes venir, avísanos por aquí y te buscamos otro hueco. ¡Gracias!",
    resena: "¡Hola {nombre}! Gracias por venir a {negocio} 💜 Si te gustó, nos ayudas muchísimo dejando una reseña en Google (tarda 30 segundos): {enlace}",
    reactivar: "¡Hola {nombre}! Hace tiempo que no te vemos por {negocio} 😊 Esta semana tenemos huecos libres. ¿Te reservo cita? Responde a este mensaje y te lo cuadramos."
  }
};
