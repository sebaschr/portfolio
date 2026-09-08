import type { Localized } from './types';

// Fictional restaurant used for a demo/mockup page. Not a real client.
export const restaurantInfo = {
  name: 'Fuego y Sal',
  tagline: {
    en: 'A restaurant that does not exist. A demo that does.',
    es: 'Un restaurante que no existe. Una demo que sí.',
  } satisfies Localized,
  disclaimer: {
    en: "Fuego y Sal is a fictional restaurant, built to show what rojomasrojo would build for one: a menu site, an ordering flow, and an AI concierge. Every screen here is a working mockup, not a live business.",
    es: 'Fuego y Sal es un restaurante ficticio, construido para mostrar qué haría rojomasrojo para uno: un sitio de menú, un flujo de pedidos y un concierge con IA. Cada pantalla aquí es un mockup funcional, no un negocio real.',
  } satisfies Localized,
  hours: {
    en: 'Tue–Sun, 12:00–22:00',
    es: 'Mar–Dom, 12:00–22:00',
  } satisfies Localized,
  location: {
    en: 'San José, Costa Rica (fictional address)',
    es: 'San José, Costa Rica (dirección ficticia)',
  } satisfies Localized,
};

export type MenuItem = {
  id: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  name: Localized;
  description: Localized;
  price: number;
  variant: 'dots' | 'gradient' | 'grain' | 'stripes' | 'radial';
};

export const menuCategories: { id: MenuItem['category']; label: Localized }[] = [
  { id: 'starters', label: { en: 'Starters', es: 'Entradas' } },
  { id: 'mains', label: { en: 'Mains', es: 'Platos Fuertes' } },
  { id: 'desserts', label: { en: 'Desserts', es: 'Postres' } },
  { id: 'drinks', label: { en: 'Drinks', es: 'Bebidas' } },
];

export const menuItems: MenuItem[] = [
  {
    id: 'ceviche',
    category: 'starters',
    name: { en: 'Ceviche de Corvina', es: 'Ceviche de Corvina' },
    description: {
      en: 'Sea bass cured in lime, red onion, cilantro, a hit of chile.',
      es: 'Corvina curada en limón, cebolla morada, culantro, un toque de chile.',
    },
    price: 9.5,
    variant: 'dots',
  },
  {
    id: 'patacones',
    category: 'starters',
    name: { en: 'Patacones Bravas', es: 'Patacones Bravas' },
    description: {
      en: 'Twice-fried plantain, smoked tomato salsa, garlic aioli.',
      es: 'Plátano frito dos veces, salsa de tomate ahumado, alioli de ajo.',
    },
    price: 6,
    variant: 'stripes',
  },
  {
    id: 'sopa-negra',
    category: 'starters',
    name: { en: 'Sopa Negra', es: 'Sopa Negra' },
    description: {
      en: 'Black bean broth, poached egg, queso fresco, cilantro oil.',
      es: 'Caldo de frijol negro, huevo pochado, queso fresco, aceite de culantro.',
    },
    price: 5.5,
    variant: 'grain',
  },
  {
    id: 'casado',
    category: 'mains',
    name: { en: 'Casado de Res', es: 'Casado de Res' },
    description: {
      en: 'Grilled beef, rice, black beans, plantain, cabbage salad.',
      es: 'Res a la parrilla, arroz, frijoles negros, plátano, ensalada de repollo.',
    },
    price: 14,
    variant: 'gradient',
  },
  {
    id: 'chifrijo-bowl',
    category: 'mains',
    name: { en: 'Chifrijo Bowl', es: 'Bowl de Chifrijo' },
    description: {
      en: 'Crispy pork, rice, beans, pico de gallo, tortilla chips.',
      es: 'Chicharrón crocante, arroz, frijoles, pico de gallo, tortillas.',
    },
    price: 12,
    variant: 'radial',
  },
  {
    id: 'pescado-entero',
    category: 'mains',
    name: { en: 'Whole Fried Snapper', es: 'Pargo Entero Frito' },
    description: {
      en: 'Market fish, garlic butter, coconut rice, fried yuca.',
      es: 'Pescado del día, mantequilla de ajo, arroz de coco, yuca frita.',
    },
    price: 19,
    variant: 'dots',
  },
  {
    id: 'olla-carne',
    category: 'mains',
    name: { en: 'Olla de Carne', es: 'Olla de Carne' },
    description: {
      en: 'Slow beef stew, yuca, ayote, elote, chayote, culantro.',
      es: 'Res cocida lento, yuca, ayote, elote, chayote, culantro.',
    },
    price: 15,
    variant: 'stripes',
  },
  {
    id: 'tres-leches',
    category: 'desserts',
    name: { en: 'Tres Leches', es: 'Tres Leches' },
    description: {
      en: 'Soaked sponge cake, cinnamon cream, toasted coconut.',
      es: 'Bizcocho calado, crema de canela, coco tostado.',
    },
    price: 6,
    variant: 'gradient',
  },
  {
    id: 'churros',
    category: 'desserts',
    name: { en: 'Churros con Cajeta', es: 'Churros con Cajeta' },
    description: {
      en: 'Cinnamon sugar churros, warm goat-milk caramel.',
      es: 'Churros con azúcar y canela, cajeta tibia.',
    },
    price: 5.5,
    variant: 'grain',
  },
  {
    id: 'flan',
    category: 'desserts',
    name: { en: 'Flan de Café', es: 'Flan de Café' },
    description: {
      en: 'Coffee custard, condensed milk, a dark caramel shell.',
      es: 'Flan de café, leche condensada, caramelo oscuro.',
    },
    price: 5,
    variant: 'radial',
  },
  {
    id: 'agua-dulce',
    category: 'drinks',
    name: { en: 'Agua Dulce Hot Cacao', es: 'Agua Dulce con Cacao' },
    description: {
      en: 'Raw cane sugar water, house cacao, a pinch of cinnamon.',
      es: 'Agua de tapa dulce, cacao de la casa, un toque de canela.',
    },
    price: 4,
    variant: 'dots',
  },
  {
    id: 'cas-fresco',
    category: 'drinks',
    name: { en: 'Cas Fresco', es: 'Fresco de Cas' },
    description: {
      en: 'Costa Rican wild guava, lime, mint.',
      es: 'Cas costarricense, limón, menta.',
    },
    price: 3.5,
    variant: 'stripes',
  },
  {
    id: 'cafe-chorreado',
    category: 'drinks',
    name: { en: 'Café Chorreado', es: 'Café Chorreado' },
    description: {
      en: 'Cloth-filtered coffee, grown in Tarrazú.',
      es: 'Café colado en chorreador, cultivado en Tarrazú.',
    },
    price: 3,
    variant: 'gradient',
  },
];

export const taxRates = {
  service: 0.1,
  vat: 0.13,
};

export const orderLabels = {
  subtotal: { en: 'Subtotal', es: 'Subtotal' } satisfies Localized,
  service: { en: 'Service (10%)', es: 'Servicio (10%)' } satisfies Localized,
  vat: { en: 'Tax (13%)', es: 'Impuesto (13%)' } satisfies Localized,
  total: { en: 'Total', es: 'Total' } satisfies Localized,
  empty: {
    en: 'Nothing in your order yet. Add something from the menu.',
    es: 'Todavía no hay nada en tu pedido. Agrega algo del menú.',
  } satisfies Localized,
  add: { en: 'Add', es: 'Agregar' } satisfies Localized,
  remove: { en: 'Remove', es: 'Quitar' } satisfies Localized,
  clear: { en: 'Clear order', es: 'Vaciar pedido' } satisfies Localized,
};

// Suggested prompts + canned replies for the AI concierge mockup. No real
// LLM call: this is a scripted demo of the interaction, not a live agent.
export const agentPrompts: { id: string; question: Localized; keywords: string[]; answer: Localized }[] = [
  {
    id: 'recommend',
    question: { en: 'What do you recommend?', es: '¿Qué me recomiendas?' },
    keywords: ['recommend', 'recomien', 'suggest', 'best', 'mejor'],
    answer: {
      en: 'The Casado de Res is the house favorite, and the Ceviche de Corvina is the lightest way to start. Both are on the Menu page.',
      es: 'El Casado de Res es el favorito de la casa, y el Ceviche de Corvina es la forma más ligera de empezar. Ambos están en la página de Menú.',
    },
  },
  {
    id: 'hours',
    question: { en: 'What are your hours?', es: '¿Cuál es el horario?' },
    keywords: ['hour', 'hora', 'open', 'abiert', 'cerrad', 'close'],
    answer: {
      en: "We're open Tuesday to Sunday, noon to 10pm. Closed Mondays.",
      es: 'Abrimos de martes a domingo, de 12pm a 10pm. Cerrado los lunes.',
    },
  },
  {
    id: 'vegetarian',
    question: { en: 'Any vegetarian options?', es: '¿Opciones vegetarianas?' },
    keywords: ['vegetari', 'vegan', 'vegg'],
    answer: {
      en: 'Patacones Bravas and Sopa Negra both work well without meat. Ask your server to hold the chicharrón on the Chifrijo Bowl for a veggie version.',
      es: 'Patacones Bravas y Sopa Negra funcionan bien sin carne. Pídele al mesero que omita el chicharrón en el Bowl de Chifrijo para una versión vegetariana.',
    },
  },
  {
    id: 'reservation',
    question: { en: 'Can I make a reservation?', es: '¿Puedo reservar?' },
    keywords: ['reserv', 'book', 'table', 'mesa'],
    answer: {
      en: 'Yep, head to the Reservations page and pick a date, time, and party size.',
      es: 'Sí, ve a la página de Reservaciones y elige fecha, hora y cantidad de personas.',
    },
  },
  {
    id: 'price',
    question: { en: 'How much does a meal cost?', es: '¿Cuánto cuesta comer aquí?' },
    keywords: ['price', 'cost', 'precio', 'cuanto', 'cuánto', 'cuesta'],
    answer: {
      en: 'Mains run $12 to $19. Add the Order page total: prices plus 10% service and 13% tax.',
      es: 'Los platos fuertes van de $12 a $19. Revisa el total en la página de Pedido: precios más 10% de servicio y 13% de impuesto.',
    },
  },
];

export const agentCopy = {
  greeting: {
    en: "Hi, I'm the Fuego y Sal concierge. Ask me about the menu, hours, or reservations.",
    es: 'Hola, soy el concierge de Fuego y Sal. Pregúntame sobre el menú, el horario o las reservaciones.',
  } satisfies Localized,
  fallback: {
    en: "I don't have a scripted answer for that in this demo, try one of the questions below.",
    es: 'No tengo una respuesta preparada para eso en esta demo, prueba una de las preguntas de abajo.',
  } satisfies Localized,
  placeholder: { en: 'Ask something...', es: 'Pregunta algo...' } satisfies Localized,
  send: { en: 'Send', es: 'Enviar' } satisfies Localized,
  toggleOpen: { en: 'AI Concierge', es: 'Concierge IA' } satisfies Localized,
  toggleClose: { en: 'Close', es: 'Cerrar' } satisfies Localized,
};

export const reservationLabels = {
  title: { en: 'Reserve a Table', es: 'Reservar una Mesa' } satisfies Localized,
  name: { en: 'Name', es: 'Nombre' } satisfies Localized,
  email: { en: 'Email', es: 'Correo' } satisfies Localized,
  date: { en: 'Date', es: 'Fecha' } satisfies Localized,
  time: { en: 'Time', es: 'Hora' } satisfies Localized,
  guests: { en: 'Guests', es: 'Personas' } satisfies Localized,
  submit: { en: 'Request Reservation', es: 'Solicitar Reservación' } satisfies Localized,
  success: {
    en: 'Reservation requested. In a real build, this would hit a booking API.',
    es: 'Reservación solicitada. En un sitio real, esto llamaría a una API de reservas.',
  } satisfies Localized,
};

export const restaurantNav: { path: string; label: Localized }[] = [
  { path: '/lab/restaurant', label: { en: 'Home', es: 'Inicio' } },
  { path: '/lab/restaurant/menu', label: { en: 'Menu', es: 'Menú' } },
  { path: '/lab/restaurant/order', label: { en: 'Order', es: 'Pedido' } },
  { path: '/lab/restaurant/about', label: { en: 'About', es: 'Nosotros' } },
  { path: '/lab/restaurant/reservations', label: { en: 'Reservations', es: 'Reservaciones' } },
];

export const restaurantAbout: { title: Localized; text: Localized }[] = [
  {
    title: { en: 'The Idea', es: 'La Idea' },
    text: {
      en: 'Fuego y Sal is built around Costa Rican home cooking: casados, chifrijo, olla de carne, the kind of food people actually grew up eating, plated with a bit more care.',
      es: 'Fuego y Sal está construido alrededor de la comida casera costarricense: casados, chifrijo, olla de carne, el tipo de comida con la que la gente realmente creció, servida con un poco más de cuidado.',
    },
  },
  {
    title: { en: 'The Kitchen', es: 'La Cocina' },
    text: {
      en: 'Small menu, cooked to order, nothing sitting under a heat lamp. Fewer dishes, done properly.',
      es: 'Menú pequeño, cocinado al momento, nada esperando bajo una lámpara de calor. Menos platos, bien hechos.',
    },
  },
  {
    title: { en: 'The Demo', es: 'La Demo' },
    text: {
      en: 'None of this is real. It exists to show a menu site, an order flow with real tax math, and an AI concierge, built the way rojomasrojo would build them for an actual client.',
      es: 'Nada de esto es real. Existe para mostrar un sitio de menú, un flujo de pedidos con matemática de impuestos real, y un concierge con IA, construidos como rojomasrojo los haría para un cliente real.',
    },
  },
];
