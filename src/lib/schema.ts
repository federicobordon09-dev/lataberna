import { site, links, openingHours } from "./site";
import { menu, type MenuItem } from "./menu";

const schemaPrice = (item: MenuItem) =>
  item.price != null ? { "@type": "Offer", priceCurrency: "ARS", price: item.price } : undefined;

function menuSection(category: (typeof menu)[number]) {
  return {
    "@type": "MenuSection",
    name: category.label,
    hasMenuItem: category.groups
      .flatMap((g) => g.items)
      .filter((i) => i.price != null)
      .map((i) => ({
        "@type": "MenuItem",
        name: i.name,
        ...(i.note ? { description: i.note } : {}),
        offers: schemaPrice(i),
      })),
  };
}

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  image: `${site.url}/opengraph-image`,
  url: site.url,
  telephone: site.phone.display,
  email: site.email,
  servesCuisine: site.servedCuisine,
  priceRange: site.priceRange,
  foundingDate: "2000",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  sameAs: [
    links.instagram,
    links.facebook,
    links.linktree,
    links.rappi,
    links.tripadvisor,
  ],
  openingHoursSpecification: openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.ratings.tripadvisor.value,
    reviewCount: site.ratings.tripadvisor.count,
    bestRating: 5,
  },
  hasMenu: {
    "@type": "Menu",
    name: "Carta de La Taberna",
    hasMenuSection: menu.map(menuSection),
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FoodEstablishment"],
  name: site.name,
  image: `${site.url}/opengraph-image`,
  url: site.url,
  telephone: site.phone.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: mapLink(),
};

function mapLink() {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    `${site.address.street}, ${site.address.locality}`,
  )}`;
}

export const jsonLd = [restaurantSchema, localBusinessSchema];