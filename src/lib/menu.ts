export type MenuItem = {
  name: string;
  price: number | null;
  note?: string;
};

export type MenuGroup = {
  title?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  label: string;
  navLabel?: string;
  intro?: string;
  groups: MenuGroup[];
  highlight?: string;
};

export const menu: MenuCategory[] = [
  {
    id: "entradas",
    label: "Entradas",
    navLabel: "Entradas",
    intro:
      "Para empezar la mesa como se debe: pequeñas, generosas y para compartir.",
    groups: [
      {
        title: "Entradas de la casa",
        items: [
          { name: "Chistorra con pisto manchego y faina crocante", price: 26000 },
          { name: "Setas a la plancha, huevos y jamón serrano", price: 34800 },
          { name: "Ensalada de mortadela italiana con rúcula", price: 24100 },
          {
            name: "Berenjenas parmigianas (gratinadas con parmesano, tomate y albahaca)",
            price: 30300,
          },
          { name: "Croquetas de espinaca y jamón", price: 25100 },
          { name: "Olivas ascolanas", price: 36100 },
          { name: "Involtini di prosciutto", price: 26200 },
          { name: "Tortilla de papa con chistorra", price: 24100 },
        ],
      },
      {
        title: "Entradas de fruto de mar",
        items: [
          { name: "Langostinos alla milanese", price: 49600 },
          { name: "Calamaretti fritti", price: 49600 },
          { name: "Rabas", price: 36200 },
          { name: "Langostinos al champagne", price: 49600 },
          { name: "Chipirones y patatas encebolladas", price: 49600 },
        ],
      },
      {
        note: "Panera de fogatas $11.800 · Cubierto $4.600",
        items: [],
      },
    ],
  },
  {
    id: "pastas",
    label: "Pastas",
    navLabel: "Pastas",
    intro:
      "Hechas todos los días, en el local, con sémola de trigo candeal y huevo.",
    groups: [
      {
        title: "Pastas hechas en casa",
        items: [
          { name: "Macarrones con salciccia e funghi", price: 34200 },
          { name: "Tagliolini verde gratinado con jamón y queso", price: 28100 },
          {
            name: "Tagliolini alla puttanesca (tomate, aceitunas negras, alcaparras, peperoncino y anchoas)",
            price: 28100,
          },
          {
            name: "Tagliatelle La Taberna (tomate, albahaca, orégano, ajo, oliva y parmesano)",
            price: 28100,
          },
          {
            name: "Fusilli alla matricciana (panceta, prosciutto, cebolla y fileto)",
            price: 37700,
          },
          { name: "Pappardelle con crema y hongos", price: 34100 },
          { name: "Spaghetti nero con langostinos", price: 49600 },
          {
            name: "Spaghetti con berenjenas (fileto, berenjenas y mozzarella)",
            price: 30700,
          },
          { name: "Malfatti de ricota y espinaca gratinados con jamón", price: 28900 },
          { name: "Tagliatelle verde con frutos de mar", price: 49600 },
          { name: "Gnocchi de papa con tomate y albahaca", price: 28100 },
          { name: "Gnocchi de boniato al gorgonzola", price: 30300 },
        ],
      },
      {
        title: "Pastas rellenas",
        note: "Ravioles, lasagna y canelones se preparan cada día.",
        items: [
          {
            name: "Rotolo alla bolognesa (rollos de masa rellenos de ternera y espinaca, gratinados)",
            price: 35100,
          },
          { name: "Ravioli del día", price: null, note: "Consultar" },
          { name: "Lasagna del día", price: null, note: "Consultar" },
          { name: "Canelones del día", price: null, note: "Consultar" },
        ],
      },
    ],
    highlight:
      "Nuestra cocina puede preparar platos para celíacos. Avisanos al reservar.",
  },
  {
    id: "carnes",
    label: "Carnes y guisos",
    navLabel: "Carnes",
    intro:
      "Cocina de cuchara y carnes de autor, con guisos y salsas largas.",
    groups: [
      {
        title: "Platos de cuchara",
        items: [
          { name: "Zarzuela de pescado y mariscos", price: 62500 },
          { name: "Callos a la madrileña", price: 28100 },
          { name: "Guiso de lentejas", price: 28100 },
        ],
      },
      {
        title: "Carnes",
        items: [
          { name: "Rabo de buey al vino tinto", price: 43900 },
          { name: "Hígado a la veneciana con polenta frita", price: 27600 },
          {
            name: "Lomo a las tres mostazas con vegetales grillados",
            price: 47800,
          },
          { name: "Lomo a la pimienta con papas a la crema", price: 47800 },
          { name: "Ibérico con pimientos y papas", price: 36200 },
          {
            name: "Spezzatino de pollo al curry y almendras con arroz",
            price: 33400,
          },
          { name: "Solomillo de cerdo al marsala con puré de batatas", price: 38100 },
          { name: "Envoltini de lomo con puré de papas", price: 41800 },
        ],
      },
    ],
  },
  {
    id: "pescados",
    label: "Pescados y mariscos",
    navLabel: "Pescados",
    intro:
      "Del mar a la mesa, con la pasión de la cocina gallega e italiana.",
    groups: [
      {
        note: "Consultá siempre por la pesca del día.",
        items: [
          { name: "Grigliata di mare (para 3/4 personas)", price: 139600 },
          { name: "Grigliata di mare 1/2 (para 2 personas)", price: 86100 },
          { name: "Pulpo a la gallega", price: 203500 },
          { name: "Langostinos al curry", price: 49600 },
          {
            name: "Pescado blanco a la plancha (papas al natural, repollo y panceta)",
            price: null,
            note: "Consultar",
          },
          { name: "Trucha a la plancha (vegetales al vapor)", price: 52800 },
          {
            name: "Pescado blanco del día a la vasca",
            price: null,
            note: "Consultar",
          },
          { name: "Trucha a la vasca o almendradas", price: 54300 },
        ],
      },
    ],
  },
  {
    id: "postres",
    label: "Postres y helados",
    navLabel: "Postres",
    intro:
      "El cierre dulce: heladería propia y clásicos caseros hechos en la casa.",
    groups: [
      {
        title: "Postres",
        items: [
          { name: "Semifreddo de chocolate", price: 27600 },
          { name: "Tiramisú", price: 24600 },
          { name: "Pavlova con frutilla y frutos rojos", price: 18800 },
          { name: "Natilla con frutos rojos", price: 22100 },
          { name: "Panqueque de dulce de leche", price: 18800 },
          { name: "Flan casero con helado de dulce de leche", price: 18800 },
          { name: "Volcán de chocolate", price: 26400 },
          { name: "Affogato (helado de vainilla con café expreso)", price: 17000 },
          { name: "Profiteroles con frutillas y helado de vainilla", price: 24600 },
          { name: "Tarta tibia de manzana con helado de canela", price: 25900 },
          { name: "Almendrado La Taberna", price: 20700 },
          { name: "Crocante mousse de chocolate con helado", price: 25800 },
          {
            name: "Helados hechos en casa (chocolate, dulce de leche, vainilla, sabayón, canela, limón, frutilla y maracuyá)",
            price: 16100,
          },
          { name: "Volcán de dulce de leche con helado de vainilla", price: 19200 },
        ],
      },
    ],
  },
  {
    id: "helados",
    label: "Helado por kilo",
    navLabel: "Helados",
    intro:
      "“¡Helado casero en su casa!” Elaborado en el local, listo para llevar.",
    groups: [
      {
        note: "Pedidos por teléfono: 4292-5187 / 4292-5297.",
        items: [
          { name: "1/4 kg", price: 14900 },
          { name: "1/2 kg", price: 22200 },
          { name: "1 kg", price: 40800 },
        ],
      },
    ],
    highlight:
      "Sabores: chocolate, dulce de leche, vainilla, sabayón, canela, limón, frutilla y maracuyá.",
  },
  {
    id: "cafeteria",
    label: "Cafetería e infusiones",
    navLabel: "Cafetería",
    intro:
      "Infusiones Tealosophy y el café que acompaña el cierre de sobremesa.",
    groups: [
      {
        items: [
          { name: "Café / café descafeinado / té", price: 5200 },
          { name: "Cappuccino", price: 5300 },
          {
            name: "Spicy Orange (té Assam Tara, naranja tostada y especias de Birmania)",
            price: 6000,
          },
          { name: "English Breakfast (blend India / Ceylán / China)", price: 6000 },
          { name: "Earl Grey (Assam Mahaluxmi + bergamota)", price: 6000 },
          {
            name: "Very Berry (frutos rojos y pétalos de la Patagonia, sin cafeína)",
            price: 6000,
          },
          {
            name: "Calm (digestivo: verbena del sur de Francia, naranja y clementina)",
            price: 6000,
          },
        ],
      },
    ],
  },
];

export const menuFooterNote =
  "Precios de la carta al momento de la investigación (agosto 2026); pueden variar según el canal y la temporada.";
