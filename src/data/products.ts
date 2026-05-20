import { Category } from "@/routes/index";

// Original Images
import pCombo from "../assets/images/p_combo_1779224267913.png";

// Original New Images
import pBadeOud from "../assets/images/p_bade_oud_1779196572050.png";
import pOilKarseell from "../assets/images/p_oil_karseell_1779196585542.png";
import pCremaKarseell from "../assets/images/p_crema_karseell_maca_essence_repair_collagen_hair_mask_500g_1779196627715.png";
import pWolf from "../assets/images/p_wolf_rayhaan_perfume_bottle_with_embossed_wolf_head_1779196643235.png";
import pKiss from "../assets/images/p_kiss_rayhaan_perfume_bottle_with_gold_lattice_pattern_1779196659325.png";
import pSabahAlWard from "../assets/images/p_sabah_al_ward_al_wataniah_perfume_bottle_with_crystal_cap_1779196674639.png";
import pVsBody from "../assets/images/p_vs_body_1779225584917.png";
import pKhamrah from "../assets/images/p_khamrah_1779225602887.png";
import pOdysseyCandee from "../assets/images/p_odyssey_candee_1779225620657.png";
import pOdysseyMarshmallow from "../assets/images/p_odyssey_marshmallow_1779225634520.png";
import pElixirChic from "../assets/images/p_elixir_chic_1779225649973.png";

// Brand New Generated Images
import pAmberOudFixed from "../assets/images/p_amber_oud_fixed_1779231445442.png";
import pFakharTrio from "../assets/images/p_lattafa_fakhar_trio_1779231469493.png";
import pYaraQuartet from "../assets/images/p_lattafa_yara_quartet_1779231490550.png";
import pAsadAll from "../assets/images/p_lattafa_asad_all_1779231515312.png";
import pKhamrahSeries from "../assets/images/p_lattafa_khamrah_series_1779231538313.png";
import pEclaire from "../assets/images/p_lattafa_eclaire_1779231563374.png";
import pIphonesLineup from "../assets/images/p_iphones_lineup_1779231584124.png";
import pArgShirt from "../assets/images/p_arg_shirt_1779237545917.png";
import pEstufa1200 from "../assets/images/p_estufa_cuarzo_1200w.png";
import pEstufa2Velas from "../assets/images/p_estufa_cuarzo_2velas.png";
import pEstufa3Velas from "../assets/images/p_estufa_3velas_duavf.png";
import pEscurridor from "../assets/images/p_escurridor_extensible.png";
import pBolsas from "../assets/images/p_bolsas_plegables.png";

export interface ProductOption {
  spec: string;
  price: string;
  colors?: string;
}

export interface ProductColorVariant {
  name: string;
  price: string;
  image: string;
  colorName: string; // e.g. "Rosa", "Amarillo"
  colorHex: string; // e.g. "#f472b6" for the visual circle indicator
  colorBorder?: string; // e.g. "border-pink-300"
  description: string;
  tag?: string;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price?: string; // Standard price displayed on high-level
  image: string;
  description: string;
  tag?: string;
  options?: ProductOption[];
  variants?: ProductColorVariant[];
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Bade'e Al Oud Amethyst",
    category: "lattafa",
    price: "$55.000",
    image: pBadeOud,
    description:
      "Mística fragancia árabe de Lattafa. Notas ricas de rosa búlgara, vainilla de Madagascar, ámbar y pachulí.",
    tag: "Destacado",
  },
  {
    id: "2",
    name: "Oil Capilar Karseell Maca Essence",
    category: "karssell",
    price: "$22.000",
    image: pOilKarseell,
    description:
      "Reparación intensa y brillo instantáneo para frizz y puntas secas. Mayorista: x6 $14.500 c/u, x12 $13.000 c/u, x24 $12.000 c/u.",
    tag: "Precios Mayoristas",
  },
  {
    id: "3",
    name: "Al Haramain Amber Oud Gold",
    category: "al-haramain",
    price: "$82.000",
    image: pAmberOudFixed,
    description:
      "Perfume árabe importado de alta gama. Aroma dulce, frutal estilo Erba Pura con estela potente y durabilidad excepcional.",
    tag: "Alta Gama",
  },
  {
    id: "4",
    name: "Crema Capilar Karseell 500g",
    category: "karssell",
    price: "$22.000",
    image: pCremaKarseell,
    description:
      "Tratamiento intensivo con colágeno y esencia de Maca. Brinda brillo, suavidad extrema e hidratación profunda.",
    tag: "Recomendado",
  },
  {
    id: "5",
    name: "Rayhaan Wolf",
    category: "rayhaan",
    price: "$79.900",
    image: pWolf,
    description:
      "Fragancia audaz, sumamente imponente. Envase coleccionable negro mate con relieve tridimensional de cabeza de lobo.",
  },
  {
    id: "6",
    name: "Rayhaan Kiss",
    category: "rayhaan",
    price: "$72.000",
    image: pKiss,
    description:
      "Aroma sofisticado y ultrafemenino. Presentado en una botella prémium envuelta en patrones de encaje dorado labrado.",
  },
  {
    id: "7",
    name: "Sabah Al Ward Al Wataniah",
    category: "al-wataniah",
    price: "$59.900",
    image: pSabahAlWard,
    description:
      "Joya floral con acordes de jazmín, coco, vainilla de Madagascar y cacao. Botella única con tapa de cristal elegante.",
  },
  {
    id: "8_16",
    name: "⚡ iPhone 16",
    category: "iphone",
    price: "Desde u$ 760",
    image: pIphonesLineup,
    description:
      "Diseñado para Apple Intelligence con rendimiento extremo. Sellados en caja con 1 año de garantía oficial Apple.",
    tag: "Garantía Oficial",
    options: [
      {
        spec: "128GB",
        price: "u$ 760",
        colors: "Black · White · Pink · Teal · Ultramarine",
      },
    ],
  },
  {
    id: "8_17e",
    name: '⚡ iPhone 17 "E"',
    category: "iphone",
    price: "Desde u$ 660",
    image: pIphonesLineup,
    description:
      "Nueva y versátil edición ultra delgada. Máxima potencia y diseño. Garantía oficial de 1 año con Apple.",
    tag: "Novedad Apple",
    options: [
      {
        spec: "256GB",
        price: "u$ 660",
        colors: "Black · White · Pink",
      },
    ],
  },
  {
    id: "8_17",
    name: "⚡ iPhone 17",
    category: "iphone",
    price: "Desde u$ 840",
    image: pIphonesLineup,
    description:
      "El nuevo estándar. Pantalla Pro-Motion y eficiencia sin precedentes. Caja sellada con 1 año de garantía oficial.",
    tag: "Premium",
    options: [
      {
        spec: "256GB",
        price: "u$ 840",
        colors: "Black · White · Blue · Sage · Lavender",
      },
    ],
  },
  {
    id: "8_17pro",
    name: "⚡ iPhone 17 Pro",
    category: "iphone",
    price: "Desde u$ 1295",
    image: pIphonesLineup,
    description:
      "La potencia profesional ideal. Acabado en titanio aeroespacial, cámaras de última generación y rendimiento soberbio.",
    tag: "Modelo Pro",
    options: [
      {
        spec: "256GB (Orange / Blue)",
        price: "u$ 1295",
        colors: "Orange · Blue",
      },
      {
        spec: "256GB (Silver)",
        price: "u$ 1310",
        colors: "Silver",
      },
      {
        spec: "512GB (Orange / Blue)",
        price: "u$ 1495",
        colors: "Orange · Blue",
      },
      {
        spec: "512GB (Silver)",
        price: "u$ 1500",
        colors: "Silver",
      },
    ],
  },
  {
    id: "8_17promax",
    name: "⚡ iPhone 17 Pro Max",
    category: "iphone",
    price: "Desde u$ 1450",
    image: pIphonesLineup,
    description:
      "La cima absoluta. Mayor pantalla, autonomía estelar, potencia sin límites y el sistema de sensores más avanzado.",
    tag: "El Más Top",
    options: [
      {
        spec: "256GB (Orange / Blue)",
        price: "u$ 1450",
        colors: "Orange · Blue",
      },
      {
        spec: "256GB (Silver)",
        price: "u$ 1460",
        colors: "Silver",
      },
      {
        spec: "512GB (Orange)",
        price: "u$ 1595",
        colors: "Orange",
      },
      {
        spec: "512GB (Blue)",
        price: "u$ 1630",
        colors: "Blue",
      },
      {
        spec: "512GB (Silver)",
        price: "u$ 1635",
        colors: "Silver",
      },
      {
        spec: "1TB (Orange / Blue / Silver)",
        price: "u$ 1810",
        colors: "Orange · Blue · Silver",
      },
    ],
  },
  {
    id: "10",
    name: "Victoria's Secret Mists & Body",
    category: "victoria-secret",
    price: "$29.000",
    image: pVsBody,
    description:
      "Exquistas fragancias corporales y mists hidratantes de Victoria's Secret para tu rutina diaria de cuidado.",
    tag: "Favorito",
  },
  {
    id: "12",
    name: "Armaf Odyssey Candee",
    category: "armaf",
    price: "$50.000",
    image: pOdysseyCandee,
    description:
      "Seductora explosión de fresa acaramelada, frutas vibrantes y notas ambaradas. Innovador diseño de botella de viaje.",
    tag: "Novedad",
  },
  {
    id: "13",
    name: "Armaf Odyssey Marshmallow",
    category: "armaf",
    price: "$56.000",
    image: pOdysseyMarshmallow,
    description:
      "Delicioso aroma a malvaviscos tostados, crema batida, haba tonka y acordes florales sumamente reconfortantes.",
    tag: "Gourmand",
  },
  {
    id: "14",
    name: "Elixir Chic n Glam",
    category: "french-avenue",
    price: "$55.000",
    image: pElixirChic,
    description:
      "Excelente perfume frutal dulce ultrafemenino. Botella prémium en forma de corazón negro con corona de espinas.",
  },

  // GROUPED LATTAFA FAMILIES WITH SELECTABLE COLOR SPAN DOTS
  {
    id: "lattafa_yara_family",
    name: "Lattafa Yara Colección",
    category: "lattafa",
    price: "$59.900",
    image: pYaraQuartet,
    description: "La icónica línea Yara de Lattafa. Elegí entre sus deliciosas versiones virales.",
    tag: "Viral Tik-Tok",
    variants: [
      {
        name: "Lattafa Yara (Rosa)",
        price: "$59.900",
        image: pYaraQuartet,
        colorName: "Yara Rosa",
        colorHex: "#f472b6",
        description:
          "El gourmand cremoso viral. Notas de frutos rojos, heliotropo, vainilla y un suntuoso fondo de sándalo y almizcle.",
        tag: "Top Ventas",
      },
      {
        name: "Lattafa Yara Tous (Amarillo)",
        price: "$59.900",
        image: pYaraQuartet,
        colorName: "Yara Tous Amarillo",
        colorHex: "#facc15",
        description:
          "Explosión tropical exquisita. Notas jugosas de mango maduro, coco cremoso, maracuyá ácido y vainilla cálida.",
        tag: "Tropical",
      },
      {
        name: "Lattafa Yara Moi (Blanco)",
        price: "$59.900",
        image: pYaraQuartet,
        colorName: "Yara Moi Blanco",
        colorHex: "#ffffff",
        description:
          "Versión seductora, licorosa y elegante. Notas golosas de durazno dulce, caramelo caliente y sándalo suave.",
        tag: "Elegante",
      },
      {
        name: "Lattafa Yara Candy (Fucsia)",
        price: "$59.900",
        image: pYaraQuartet,
        colorName: "Yara Candy Fucsia",
        colorHex: "#db2777",
        description:
          "La más nueva delicia dulce. Mezcla golosa de fresas silvestres, sirope de vainilla y un toque de frambuesa.",
        tag: "Lanzamiento",
      },
    ],
  },
  {
    id: "lattafa_asad_family",
    name: "Lattafa Asad Colección",
    category: "lattafa",
    price: "$64.900",
    image: pAsadAll,
    description: "Saga Asad: fragancias imponentes masculinas de alta proyección.",
    tag: "Recomendado",
    variants: [
      {
        name: "Lattafa Asad Classic (Negro/Oro)",
        price: "$64.900",
        image: pAsadAll,
        colorName: "Classic Negro",
        colorHex: "#1a1a1a",
        description:
          "Insignia masculina similar a Sauvage Elixir. Pimienta negra, piña dulce, café, tabaco, pachulí y abundante vainilla.",
        tag: "Recomendado",
      },
      {
        name: "Lattafa Asad Zanzibar (Azul)",
        price: "$64.900",
        image: pAsadAll,
        colorName: "Zanzibar Azul",
        colorHex: "#0284c7",
        description:
          "El flanker veraniego fresco marino. Notas de sal, crema de coco exótica, lavanda, iris sutil y sándalo.",
        tag: "Fresco",
      },
      {
        name: "Lattafa Asad Elixir (Plateado)",
        price: "$64.900",
        image: pAsadAll,
        colorName: "Elixir Negro/Plata",
        colorHex: "#94a3b8",
        description:
          "Frasco negro mate premium con detalles plata. Notas amparadas de pimienta de Sichuan refinada y maderas.",
        tag: "Intenso",
      },
      {
        name: "Lattafa Asad Bourbon (Marrón)",
        price: "$64.900",
        image: pAsadAll,
        colorName: "Bourbon Marrón",
        colorHex: "#78350f",
        description:
          "Fragancia licorosa sofisticada. Mezcla espectacular de tabaco aromático rubio, uvas maceradas en barrica y vainilla.",
        tag: "Lujoso",
      },
    ],
  },
  {
    id: "lattafa_fakhar_family",
    name: "Lattafa Fakhar Colección",
    category: "lattafa",
    price: "$60.000",
    image: pFakharTrio,
    description:
      "Sofisticación de exportación. Elegí la joya ideal de la trilogía Fakhar de Lattafa.",
    tag: "Trilogía Lujo",
    variants: [
      {
        name: "Lattafa Fakhar Black",
        price: "$60.000",
        image: pFakharTrio,
        colorName: "Fakhar Negro",
        colorHex: "#0f172a",
        description:
          "Elegancia masculina. Aroma floral-amaderado con toques de jengibre fresco, lavandina silvestre y maderas finas.",
        tag: "Favorito",
      },
      {
        name: "Lattafa Fakhar Extrait (Oro)",
        price: "$60.000",
        image: pFakharTrio,
        colorName: "Fakhar Oro",
        colorHex: "#d97706",
        description:
          "Formato Extrait de larga duración. Nardos suntuosos, pomelo cítrico, madera de sándalo cremoso y ámbar gris.",
        tag: "Concentrado",
      },
      {
        name: "Lattafa Fakhar Woman",
        price: "$60.000",
        image: pFakharTrio,
        colorName: "Fakhar Blanco",
        colorHex: "#f8fafc",
        description:
          "Seducción y pulcritud refinada. Flores blancas de azahar, jazmín fresco de jardín y notas jugosas de granada.",
        tag: "Femenino",
      },
    ],
  },
  {
    id: "lattafa_khamrah_family",
    name: "Lattafa Khamrah Colección",
    category: "lattafa",
    price: "$55.000",
    image: pKhamrah,
    description: "La repostería de lujo árabe de Lattafa, suntuosas notas de dátiles y especias.",
    tag: "Gourmand Legend",
    variants: [
      {
        name: "Lattafa Khamrah (Original)",
        price: "$55.000",
        image: pKhamrah,
        colorName: "Khamrah Original",
        colorHex: "#b45309",
        description:
          "Suntuoso elixir de canela tierna, dátiles maduros, praliné dulce, maderas finas y vainilla de excelente calidad.",
        tag: "Extrema Estela",
      },
      {
        name: "Lattafa Khamrah Qahwa",
        price: "$59.900",
        image: pKhamrahSeries,
        colorName: "Qahwa Café",
        colorHex: "#451a03",
        description:
          "Deliciosa variante oriental que incorpora una nota amarga e intensa de café arábica recién tostado.",
        tag: "Gourmand Top",
      },
      {
        name: "Lattafa Khamrah Dukhan",
        price: "$59.900",
        image: pKhamrahSeries,
        colorName: "Dukhan Ahumado",
        colorHex: "#292524",
        description:
          "Misteriosa versión sutilmente ahumada, oscura y sumamente elegante de gran estirpe árabe otoñal.",
        tag: "Otoño-Invierno",
      },
    ],
  },
  {
    id: "28",
    name: "Lattafa Eclaire",
    category: "lattafa",
    price: "$65.000",
    image: pEclaire,
    description:
      "Boom repostero de lujo. Notas de caramelo toffee, crema de leche de vainilla, miel y delicadas flores suaves.",
    tag: "Viral TikTok",
  },
  {
    id: "remera_arg_afa",
    name: "Camiseta de la Selección Argentina (3 Estrellas)",
    category: "indumentaria",
    price: "$35.000",
    image: pArgShirt,
    description:
      "La pasión de las tres estrellas en tus manos. Camiseta de la Selección Argentina con escudo de la AFA bordado en relieve de alta definición, calce oficial con parche de Campeón de Mundo de la FIFA 2022. Disponibles para encargos tanto por menor como por mayor con la mejor calidad del mercado. ¡Reservá la tuya con tiempo!",
    tag: "Bajo Pedido",
    options: [
      {
        spec: "Talles Disponibles (S al XXL) - Por Menor / Mayor",
        price: "$35.000",
      },
    ],
  },
  {
    id: "estufa_cuarzo_1200w",
    name: "Estufa de Cuarzo 1200W Reforzada",
    category: "electro",
    price: "$23.000",
    image: pEstufa1200,
    description:
      "Calor rápido y directo para cualquier ambiente. 1200W de potencia, 2 niveles de calor, diseño vertical reforzado y bajo consumo. Industria Argentina con 2 llaves y 2 velas. Contiene 9 unidades por bulto mayorista.",
    tag: "Alta Rotación",
    options: [
      { spec: "Unidad", price: "$23.000" },
      { spec: "Bulto x9 (Mayorista)", price: "Consultar" },
    ],
  },
  {
    id: "estufa_cuarzo_2velas",
    name: "Estufa de Cuarzo 2 Velas",
    category: "electro",
    price: "$34.380",
    image: pEstufa2Velas,
    description:
      "Adelantate a la temporada y no te quedes sin stock. Calefacción rápida y potente, 2 niveles de calor, sistema de corte automático anti vuelco y diseño compacto. Producto de alta rotación.",
    tag: "Temporada",
    options: [
      { spec: "Unidad x1", price: "$34.380" },
      { spec: "Bulto x10 (c/u)", price: "$30.000" },
    ],
  },
  {
    id: "estufa_3velas_duavf",
    name: "Estufa 3 Velas Fija DUAVF",
    category: "electro",
    price: "$32.000",
    image: pEstufa3Velas,
    description:
      "Estufa eléctrica fija DUAVF con 3 tubos independientes. 3 niveles de potencia, sistema de seguridad por caída, calor rápido y regulable. Ideal para cualquier ambiente. 1 año de garantía.",
    tag: "Garantía",
  },
  {
    id: "escurridor_extensible",
    name: "Escurridor Extensible de Bacha",
    category: "electro",
    price: "$11.000",
    image: pEscurridor,
    description:
      "Extensible: se adapta a distintas medidas de bacha. Estructura resistente de acero inoxidable. Ideal para secar platos, vasos y utensilios. Práctico y duradero para tu cocina.",
    tag: "Cocina",
  },
  {
    id: "bolsas_plegables",
    name: "Bolsas de Compras Plegables",
    category: "electro",
    price: "$6.800",
    image: pBolsas,
    description:
      "Plegables y fáciles de guardar. Con ruedas para transportar sin esfuerzo. Ideales para compras, feria o uso diario. Disponibles en rojo, negro y naranja.",
    tag: "Práctico",
  },
];
