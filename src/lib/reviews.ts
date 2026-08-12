export type Review = {
  quote: string;
  source: "TripAdvisor" | "Google";
  highlight?: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Realmente vale cada una de las recomendaciones. Excelente atmósfera, en una casona antigua de un barrio muy residencial. Te recibe un maître que te ofrece un trago de bienvenida; al final, un lemoncello. Sin lugar a dudas, volveremos.",
    source: "TripAdvisor",
    highlight: "Copa de bienvenida y lemoncello de despedida",
  },
  {
    quote:
      "El mejor restaurante de zona sur. Comida deliciosa, abundante y con sabor: las pastas son muy elogiadas y el ambiente de casona con encanto, ideal para parejas y familias.",
    source: "TripAdvisor",
    highlight: "“El mejor restaurante de zona sur”",
  },
  {
    quote:
      "La cocina mediterránea brilla con platos de pasta destacados junto a carnes y pescados excepcionales. Los postres son una conclusión deliciosa de la comida.",
    source: "TripAdvisor",
    highlight: "Un clásico del buen comer en Lomas",
  },
];

export const praiseFragments = [
  "Cocina italiana de autor y hecho en casa real",
  "Heladería y pan propia, elaborados en el local",
  "Atención cálida, tipo casa",
  "Casona con historia, entre vigas y entrepiso",
] as const;