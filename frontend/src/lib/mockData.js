// Mock data for the Saudi Spanish Club dashboard

// User profiles
export const users = [
  {
    id: 1,
    name: "María González",
    email: "maria@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    memberSince: "2022-03-15",
    membershipStatus: "Premium",
    membershipExpiry: "2024-03-15",
    language: "Spanish",
    location: "Riyadh",
    bio: "Profesora de español viviendo en Arabia Saudita desde hace 3 años.",
    interests: ["Cultura", "Gastronomía", "Idiomas"],
  },
  {
    id: 2,
    name: "Carlos Rodríguez", 
    email: "carlos@example.com",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    memberSince: "2021-07-22",
    membershipStatus: "Standard",
    membershipExpiry: "2024-07-22",
    language: "Spanish",
    location: "Jeddah",
    bio: "Ingeniero trabajando en proyectos de infraestructura en Jeddah.",
    interests: ["Negocios", "Deportes", "Viajes"],
  },
  {
    id: 3,
    name: "Ana Martínez",
    email: "ana@example.com", 
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    memberSince: "2023-01-10",
    membershipStatus: "Premium",
    membershipExpiry: "2025-01-10",
    language: "Spanish",
    location: "Dammam",
    bio: "Médica especialista en pediatría, recién llegada a Arabia Saudita.",
    interests: ["Salud", "Educación", "Cultura"],
  },
];

// Directory of services
export const services = [
  // Medical services
  {
    id: 1,
    category: "Médicos",
    name: "Dra. Isabel Sánchez",
    specialty: "Medicina General",
    languages: ["Español", "Inglés", "Árabe básico"],
    location: "Riyadh Medical Center",
    address: "King Fahd Road, Riyadh",
    phone: "+966 11 234 5678",
    email: "isabel.sanchez@example.com",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
    description: "Médica general con 10 años de experiencia. Consultas en español.",
    rating: 4.8,
  },
  {
    id: 2,
    category: "Médicos",
    name: "Dr. Miguel Fernández",
    specialty: "Pediatría",
    languages: ["Español", "Inglés"],
    location: "Saudi Spanish Hospital",
    address: "Prince Sultan Road, Jeddah",
    phone: "+966 12 345 6789",
    email: "miguel.fernandez@example.com",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&auto=format&fit=crop",
    description: "Pediatra especializado en desarrollo infantil. Atención en español.",
    rating: 4.9,
  },
  
  // Businesses
  {
    id: 3,
    category: "Negocios",
    name: "Tapas & Más",
    specialty: "Restaurante Español",
    languages: ["Español", "Inglés", "Árabe"],
    location: "Diplomatic Quarter",
    address: "Diplomatic Quarter, Riyadh",
    phone: "+966 11 987 6543",
    email: "info@tapasymas.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=300&auto=format&fit=crop",
    description: "Auténtica cocina española en el corazón de Riyadh. Paellas, tapas y vinos seleccionados.",
    rating: 4.7,
  },
  {
    id: 4,
    category: "Negocios",
    name: "Idiomas Conectados",
    specialty: "Academia de Idiomas",
    languages: ["Español", "Inglés", "Árabe"],
    location: "Al Olaya District",
    address: "Olaya Street, Riyadh",
    phone: "+966 11 456 7890",
    email: "info@idiomasconectados.com",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=300&auto=format&fit=crop",
    description: "Clases de español, inglés y árabe para todos los niveles. Profesores nativos.",
    rating: 4.6,
  },
  
  // Events
  {
    id: 5,
    category: "Eventos",
    name: "Festival Cultural Hispano-Saudí",
    specialty: "Festival Cultural",
    languages: ["Español", "Árabe", "Inglés"],
    location: "King Fahd Cultural Center",
    address: "King Fahd Road, Riyadh",
    date: "2024-05-15",
    time: "16:00 - 22:00",
    email: "festival@culturahispanosaudí.com",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop",
    description: "Celebración anual de la cultura española y saudí con música, gastronomía y arte.",
    rating: 4.9,
  },
  {
    id: 6,
    category: "Eventos",
    name: "Encuentro de Negocios España-Arabia",
    specialty: "Networking Empresarial",
    languages: ["Español", "Inglés", "Árabe"],
    location: "Riyadh Chamber of Commerce",
    address: "King Fahd Road, Riyadh",
    date: "2024-06-10",
    time: "09:00 - 17:00",
    email: "negocios@camarahispanoarabe.com",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=300&auto=format&fit=crop",
    description: "Oportunidad para conectar empresas españolas y saudíes. Incluye presentaciones y reuniones B2B.",
    rating: 4.7,
  },
];

// Community posts
export const communityPosts = [
  {
    id: 1,
    userId: 1,
    title: "Consejos para recién llegados a Riyadh",
    content: "Después de 3 años viviendo en Riyadh, quiero compartir algunos consejos para quienes acaban de llegar. Lo primero es familiarizarse con las aplicaciones locales como Careem para transporte y HungerStation para comida a domicilio. También recomiendo...",
    date: "2024-01-15",
    likes: 24,
    comments: [
      {
        id: 101,
        userId: 2,
        content: "¡Gracias por los consejos! Yo añadiría que es útil tener la aplicación Absher para trámites gubernamentales.",
        date: "2024-01-15",
      },
      {
        id: 102,
        userId: 3,
        content: "Muy útil. ¿Alguien sabe dónde puedo encontrar productos españoles en Riyadh?",
        date: "2024-01-16",
      },
    ],
  },
  {
    id: 2,
    userId: 3,
    title: "Buscando grupo para practicar árabe",
    content: "Hola a todos. Soy Ana, médica recién llegada a Dammam. Me gustaría encontrar un grupo para practicar árabe, preferiblemente con otros hispanohablantes que estén en mi misma situación. ¿Alguien conoce algún grupo o estaría interesado en formar uno?",
    date: "2024-02-10",
    likes: 15,
    comments: [
      {
        id: 201,
        userId: 1,
        content: "Hola Ana, yo estoy en un grupo de WhatsApp donde practicamos árabe. Te puedo añadir si quieres.",
        date: "2024-02-10",
      },
    ],
  },
  {
    id: 3,
    userId: 2,
    title: "Experiencia trabajando en Jeddah",
    content: "Llevo casi 3 años trabajando como ingeniero en Jeddah y quería compartir mi experiencia. El ambiente laboral es muy profesional y hay muchas oportunidades para hispanohablantes, especialmente en sectores como ingeniería, construcción y energía...",
    date: "2024-02-25",
    likes: 32,
    comments: [
      {
        id: 301,
        userId: 1,
        content: "Interesante experiencia. ¿Cómo es el equilibrio entre vida laboral y personal?",
        date: "2024-02-26",
      },
      {
        id: 302,
        userId: 3,
        content: "¿Hay muchas mujeres en tu sector? Estoy considerando oportunidades en Jeddah.",
        date: "2024-02-27",
      },
    ],
  },
];

// Support FAQs
export const supportFAQs = [
  {
    id: 1,
    question: "¿Cómo puedo renovar mi membresía?",
    answer: "Puedes renovar tu membresía directamente desde tu perfil en la sección 'Membresía'. Aceptamos pagos con tarjeta de crédito o transferencia bancaria. Si tienes problemas, contacta a soporte@saudihispanicconnect.com.",
  },
  {
    id: 2,
    question: "¿Qué documentos necesito para registrarme como profesional en el directorio?",
    answer: "Para registrarte como profesional necesitas: 1) Copia de tu identificación, 2) Credenciales profesionales o licencias, 3) Comprobante de domicilio en Arabia Saudita. Todos los documentos deben estar en formato PDF.",
  },
  {
    id: 3,
    question: "¿Cómo puedo publicar un evento comunitario?",
    answer: "Los miembros Premium pueden publicar eventos directamente desde la sección 'Comunidad' > 'Crear Evento'. Los miembros Standard deben enviar los detalles a eventos@saudihispanicconnect.com para aprobación.",
  },
  {
    id: 4,
    question: "¿Ofrecen descuentos para estudiantes?",
    answer: "Sí, ofrecemos un 30% de descuento en la membresía Standard para estudiantes con identificación válida. Envía tu carnet de estudiante a soporte@saudihispanicconnect.com para aplicar.",
  },
  {
    id: 5,
    question: "¿Cómo puedo cambiar mi idioma preferido en la plataforma?",
    answer: "Puedes cambiar el idioma en cualquier momento desde tu perfil en la sección 'Preferencias' o usando el selector de idioma en la esquina superior derecha de la página.",
  },
];

// Membership plans
export const membershipPlans = [
  {
    id: 1,
    name: "Standard",
    price: "200 SAR/año",
    features: [
      "Acceso al directorio de servicios",
      "Participación en la comunidad",
      "Acceso a eventos básicos",
      "Soporte por email",
    ],
    recommended: false,
  },
  {
    id: 2,
    name: "Premium",
    price: "500 SAR/año",
    features: [
      "Todo lo incluido en Standard",
      "Publicación de eventos y servicios",
      "Acceso prioritario a eventos exclusivos",
      "Descuentos en servicios asociados",
      "Soporte prioritario 24/7",
    ],
    recommended: true,
  },
];

// Upcoming events
export const upcomingEvents = [
  {
    id: 1,
    title: "Noche de Tapas",
    date: "2024-04-20",
    time: "19:00 - 22:00",
    location: "Restaurante Tapas & Más, Riyadh",
    description: "Disfruta de una auténtica noche española con tapas tradicionales y música en vivo.",
    image: "https://images.unsplash.com/photo-1541795795328-f073b763494e?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Taller de Cultura Saudí para Hispanohablantes",
    date: "2024-04-25",
    time: "17:00 - 19:00",
    location: "Centro Cultural Rey Fahd, Riyadh",
    description: "Aprende sobre las costumbres y tradiciones saudíes en este taller interactivo en español.",
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Encuentro de Networking Profesional",
    date: "2024-05-05",
    time: "18:30 - 21:00",
    location: "Hotel Hilton, Jeddah",
    description: "Conecta con otros profesionales hispanohablantes en Arabia Saudita.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=300&auto=format&fit=crop",
  },
];