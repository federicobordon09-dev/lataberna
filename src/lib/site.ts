export const site = {
  name: "La Taberna",
  legalName: "La Taberna Ristorante",
  tagline: "Cocina italiana de autor, hecha en casa",
  claim:
    "Cocina italiana de autor, hecha en casa, en el corazón de Lomas de Zamora desde hace más de 20 años.",
  // TODO: reemplazar por el dominio final "https://latabernalomas.com.ar"
  // cuando esté activo. Mientras tanto se usa la URL de la demo en Vercel
  // para que canonical, sitemap, robots y og:image sean válidos.
  url: "https://lataberna-six.vercel.app",
  description:
    "Cocina italiana de autor hecha en casa en Lomas de Zamora. Pastas con sémola y huevo, mariscos, carnes y helados artesanales por kilo. Reservá tu mesa en Ramón Falcón 146.",
  servedCuisine: ["Italiana", "Europea"],
  priceRange: "$$$$",
  founded: 2000,

  address: {
    street: "Cnel. Ramón Falcón 146",
    locality: "Lomas de Zamora",
    region: "Provincia de Buenos Aires",
    postalCode: "B1832JIB",
    country: "AR",
  },

  geo: { lat: -34.7671, lng: -58.3993 },

  phone: {
    display: "+54 11 4292-5187",
    tel: "+541142925187",
  },
  heladoPhone: {
    display: "4292-5187 / 4292-5297",
  },
  email: "lataberna@sottovoce.com.ar",

  ratings: {
    google: { value: 4.7, count: 2488, source: "Google (referencia)" },
    tripadvisor: { value: 4.5, count: 216, rank: "N.º 2 de 152 restaurantes en Lomas de Zamora" },
    cartamenu: { value: 4.5 },
  },

  hoursNote:
    "Horarios según la información pública disponible (agosto 2026). Consultá la disponibilidad al reservar.",

  finalCta: "La mesa no espera, se llena.",
} as const;

// Horarios publicados en la landing (único punto de referencia). Alineados
// con local.md §6: mediodía y cena, con días de semana y fin de semana.
export const schedule = [
  { id: "lunch-week", day: "Martes a viernes", time: "12:00 – 15:30", source: "mediodía · menú ejecutivo" },
  { id: "lunch-weekend", day: "Sábados y domingos", time: "12:00 – 16:00", source: "mediodía" },
  { id: "dinner-week", day: "Martes a viernes", time: "20:00 – 00:00", source: "cena" },
  { id: "dinner-weekend", day: "Sábados y domingos", time: "20:00 – 01:00", source: "cena" },
] as const;

// Misma información en formato Schema.org para el JSON-LD (openingHoursSpecification).
export const openingHours = [
  { dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "12:00", closes: "15:30" },
  { dayOfWeek: ["Saturday", "Sunday"], opens: "12:00", closes: "16:00" },
  { dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "20:00", closes: "00:00" },
  { dayOfWeek: ["Saturday", "Sunday"], opens: "20:00", closes: "01:00" },
] as const;

export const links = {
  reservas:
    "https://www.covermanager.com/reserve/module_restaurant/la-taberna-buenosaires/spanish",
  giftCard:
    "https://www.covermanager.com/eco/buy_products/la-taberna-buenosaires/spanish",
  linktree: "https://linktr.ee/lataberna_ristorante",
  instagram: "https://www.instagram.com/latabernaristorante",
  facebook: "https://www.facebook.com/279540218730837",
  rappi: "https://www.rappi.com.ar/restaurantes/117184-la-taberna",
  tripadvisor:
    "https://www.tripadvisor.com.ar/Restaurant_Review-g1172344-d3159982-Reviews-La_Taberna-Lomas_de_Zamora",
  menuPdf: "https://drive.google.com/file/d/1E1_HMJi-gX9yhezPiiJN1r5ER073PKE9/view",
} as const;

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Cnel.%20Ram%C3%B3n%20Falc%C3%B3n%20146%2C%20Lomas%20de%20Zamora&output=embed";

export const nav = [
  { label: "Nuestra historia", href: "#historia" },
  { label: "La carta", href: "#carta" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Visitános", href: "#visitanos" },
] as const;