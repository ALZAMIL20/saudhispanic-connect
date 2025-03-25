// Mock data for the Saudi Spanish Club dashboard

// User profiles
export const users = [
  {
    id: 1,
    name: "María González",
    email: "maria@example.com", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    memberSince: "2022-03-15",
    membershipStatus: "Member",
    language: "Spanish",
    location: "Riyadh",
    bio: "Profesora de español viviendo en Arabia Saudita desde hace 3 años.",
    interests: ["Cultura", "Gastronomía", "Idiomas"],
    role: "user"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    email: "carlos@example.com",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop", 
    memberSince: "2021-07-22",
    membershipStatus: "Member",
    language: "Spanish",
    location: "Jeddah",
    bio: "Ingeniero trabajando en proyectos de infraestructura en Jeddah.",
    interests: ["Negocios", "Deportes", "Viajes"],
    role: "user"
  },
  {
    id: 3,
    name: "Ana Martínez",
    email: "ana@example.com",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    memberSince: "2023-01-10", 
    membershipStatus: "Member",
    language: "Spanish",
    location: "Dammam",
    bio: "Médica especialista en pediatría, recién llegada a Arabia Saudita.",
    interests: ["Salud", "Educación", "Cultura"],
    role: "user"
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@saudispanishclub.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    memberSince: "2020-01-01",
    membershipStatus: "Member",
    language: "Spanish, English",
    location: "Riyadh",
    bio: "Club administrator and coordinator for the Saudi Spanish Club.",
    interests: ["Management", "Events", "Community"],
    role: "admin"
  }
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
    question: "¿Cómo puedo unirme al club?",
    answer: "Puedes unirte al club registrándote directamente en nuestra web. El registro es gratuito y te da acceso a todos los servicios y recursos de la comunidad.",
  },
  {
    id: 2,
    question: "¿Qué documentos necesito para registrarme como profesional en el directorio?",
    answer: "Para registrarte como profesional necesitas: 1) Copia de tu identificación, 2) Credenciales profesionales o licencias, 3) Comprobante de domicilio en Arabia Saudita. Todos los documentos deben estar en formato PDF.",
  },
  {
    id: 3,
    question: "¿Cómo puedo publicar un evento comunitario?",
    answer: "Todos los miembros pueden publicar eventos directamente desde la sección 'Comunidad' > 'Crear Evento'. Los eventos serán revisados por los administradores antes de ser publicados.",
  },
  {
    id: 4,
    question: "¿Ofrecen clases de árabe para hispanohablantes?",
    answer: "Sí, organizamos regularmente clases de árabe para hispanohablantes. Puedes encontrar información sobre los próximos cursos en la sección de eventos.",
  },
  {
    id: 5,
    question: "¿Cómo puedo cambiar mi idioma preferido en la plataforma?",
    answer: "Puedes cambiar el idioma en cualquier momento usando el selector de idioma en la esquina superior derecha de la página.",
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

// AI Assistant responses about Saudi Arabia
export const aiResponses = [
  {
    question: "¿Cuáles son los principales lugares turísticos en Arabia Saudita?",
    answer: "Arabia Saudita ofrece una variedad de atracciones turísticas fascinantes. Entre los lugares más destacados están: Al-Ula y Hegra (Madain Saleh), un sitio arqueológico similar a Petra; Diriyah, el lugar de nacimiento del primer estado saudí; la Corniche de Jeddah con su famosa fuente Rey Fahd; las montañas de Asir con su clima único; y las modernas atracciones de Riyadh como Kingdom Centre Tower y el distrito histórico de Al-Turaif. También son importantes los sitios religiosos como La Meca y Medina para los musulmanes."
  },
  {
    question: "¿Cómo es el clima en Arabia Saudita?",
    answer: "Arabia Saudita tiene principalmente un clima desértico, caracterizado por temperaturas extremadamente altas durante el día y noches más frescas. Los veranos (mayo a septiembre) son muy calurosos, con temperaturas que pueden superar los 45°C en el interior. Los inviernos (diciembre a febrero) son más suaves, con temperaturas entre 10°C y 25°C. La región suroeste (Asir) tiene un clima más templado y recibe más precipitaciones. Las tormentas de arena son comunes en primavera y principios de verano. La humedad es alta en las zonas costeras del Mar Rojo y el Golfo Pérsico."
  },
  {
    question: "¿Qué costumbres debo conocer antes de viajar a Arabia Saudita?",
    answer: "Antes de viajar a Arabia Saudita, es importante conocer algunas costumbres locales: 1) Vestimenta: aunque se ha flexibilizado, se recomienda ropa modesta que cubra hombros y rodillas. 2) Ramadán: durante este mes sagrado, se debe evitar comer, beber o fumar en público durante el día. 3) Fotografía: pedir permiso antes de fotografiar a personas, especialmente mujeres. 4) Saludos: los hombres se saludan con un apretón de manos; entre hombres y mujeres que no son familiares, es mejor esperar a que la mujer extienda su mano primero. 5) Alcohol: está prohibido en todo el país. 6) Oración: los negocios cierran durante los cinco momentos de oración diaria. 7) Gestos: mostrar la suela del zapato o usar el pulgar hacia arriba puede considerarse ofensivo en algunos contextos."
  },
  {
    question: "¿Qué documentos necesito para visitar Arabia Saudita?",
    answer: "Para visitar Arabia Saudita, necesitarás: 1) Pasaporte con validez mínima de 6 meses desde la fecha de entrada. 2) Visado turístico (e-visa), que puede obtenerse online a través del portal Saudi Visa o mediante la aplicación Visit Saudi. 3) Seguro médico de viaje que cubra COVID-19. 4) Reserva de hotel confirmada. 5) Billete de avión de ida y vuelta. Los ciudadanos de ciertos países pueden obtener visa a la llegada. Es recomendable verificar los requisitos específicos para tu nacionalidad en la embajada o consulado saudí más cercano, ya que los requisitos pueden cambiar."
  },
  {
    question: "¿Cómo es el transporte público en las ciudades saudíes?",
    answer: "El transporte público en Arabia Saudita está en desarrollo. En Riyadh, se está construyendo un sistema de metro de seis líneas, aunque aún no está completamente operativo. Los autobuses públicos existen pero son limitados. La forma más común de transporte es el taxi o servicios de ride-hailing como Uber y Careem, que son muy populares y relativamente económicos. En Jeddah y otras ciudades principales, también hay servicios de autobús, pero con rutas limitadas. Para viajes entre ciudades, hay servicios de autobús (SAPTCO) y vuelos domésticos frecuentes. Recientemente, se inauguró el tren de alta velocidad Haramain que conecta Meca, Jeddah y Medina."
  },
  {
    question: "¿Cuál es la gastronomía típica de Arabia Saudita?",
    answer: "La gastronomía saudí es rica y variada, con influencias beduinas y de países vecinos. Platos típicos incluyen: 1) Kabsa: arroz con especias y carne (generalmente cordero o pollo). 2) Mandi: carne ahumada con arroz. 3) Jareesh: trigo triturado cocido con carne. 4) Mutabbaq: pan relleno de carne, verduras o plátano. 5) Shawarma: popular en todo el país. 6) Dates (dátiles): fundamentales en la dieta saudí, especialmente durante el Ramadán. 7) Qahwa: café árabe con cardamomo, servido en pequeñas tazas sin asa. 8) Mathbi: pollo o cordero asado sobre piedras. La hospitalidad es muy importante, y las comidas suelen ser abundantes y compartidas."
  },
  {
    question: "¿Cómo es el sistema sanitario en Arabia Saudita?",
    answer: "El sistema sanitario en Arabia Saudita es de alta calidad, especialmente en las grandes ciudades. Hay hospitales públicos y privados con equipamiento moderno y personal internacional cualificado. Los ciudadanos saudíes tienen acceso gratuito a la sanidad pública, mientras que los expatriados generalmente necesitan un seguro médico, que suele ser proporcionado por los empleadores. Los hospitales privados como Kingdom Hospital, Saudi German Hospital y Dr. Sulaiman Al-Habib ofrecen servicios de primera categoría. En caso de emergencia, el número a llamar es el 997. Es recomendable tener un seguro médico internacional si vas a viajar como turista. Muchos médicos y personal sanitario hablan inglés, pero puede ser útil tener conocimientos básicos de árabe para comunicarse mejor."
  },
  {
    question: "¿Qué festividades importantes se celebran en Arabia Saudita?",
    answer: "En Arabia Saudita se celebran principalmente festividades islámicas: 1) Eid al-Fitr: marca el final del Ramadán con tres días de celebraciones, comidas familiares y regalos. 2) Eid al-Adha (Fiesta del Sacrificio): conmemora la disposición de Ibrahim para sacrificar a su hijo, con cuatro días de festividades. 3) Día Nacional Saudí (23 de septiembre): celebra la unificación del Reino en 1932. Además, hay festivales culturales como el Festival de Janadriyah (celebración de la cultura saudí), el Festival de Invierno de Tantora en Al-Ula, y el Riyadh Season, que incluye conciertos, eventos deportivos y actividades culturales. El Ramadán, aunque no es una festividad sino un mes de ayuno, también transforma la vida diaria con actividades nocturnas especiales."
  },
  {
    question: "¿Cómo es la vida para los expatriados en Arabia Saudita?",
    answer: "La vida para expatriados en Arabia Saudita ha cambiado significativamente en los últimos años, volviéndose más abierta. Los expatriados suelen disfrutar de: 1) Paquetes salariales atractivos, generalmente libres de impuestos. 2) Vivienda en compounds (complejos residenciales) con instalaciones como piscinas, gimnasios y áreas sociales. 3) Una comunidad internacional diversa, especialmente en ciudades como Riyadh, Jeddah y Dammam. 4) Oportunidades para explorar un país rico en historia y cultura. Los desafíos pueden incluir la adaptación al clima, diferencias culturales y, para algunos, la separación familiar. Con las reformas de Visión 2030, hay más opciones de entretenimiento, cines, conciertos y eventos deportivos. El conocimiento básico del árabe es útil pero no esencial, ya que el inglés es ampliamente hablado en entornos profesionales y comerciales."
  },
  {
    question: "¿Qué oportunidades laborales hay para hispanohablantes en Arabia Saudita?",
    answer: "Los hispanohablantes encuentran diversas oportunidades laborales en Arabia Saudita, especialmente en: 1) Ingeniería y construcción: empresas españolas y latinoamericanas participan en grandes proyectos de infraestructura. 2) Educación: enseñanza de español en universidades y academias privadas. 3) Turismo y hospitalidad: con la apertura turística del país, se valoran profesionales multilingües. 4) Sanidad: médicos y enfermeros con formación internacional. 5) Tecnología: profesionales IT para proyectos de transformación digital. 6) Energía: especialistas en energías renovables y petróleo. 7) Consultoría: asesores para empresas que buscan expandirse entre Arabia Saudita y países hispanohablantes. El conocimiento del inglés es generalmente necesario, y la experiencia internacional es valorada. Los salarios suelen ser competitivos y libres de impuestos, aunque es importante informarse sobre los requisitos de visado y permisos de trabajo."
  },
  {
    question: "¿Cómo es el sistema educativo en Arabia Saudita?",
    answer: "El sistema educativo saudí ha experimentado importantes reformas en los últimos años. La educación es gratuita para los ciudadanos saudíes y obligatoria desde los 6 hasta los 15 años. El sistema incluye: 1) Educación preescolar (opcional). 2) Educación primaria (6 años). 3) Educación intermedia (3 años). 4) Educación secundaria (3 años). 5) Educación superior (universidades y colleges). Para expatriados, existen numerosas escuelas internacionales que siguen currículos americanos, británicos, franceses y otros, con enseñanza en inglés u otros idiomas. Universidades destacadas incluyen la Universidad Rey Saud, la Universidad de Ciencia y Tecnología Rey Abdullah (KAUST) y la Universidad Princesa Nourah. El gobierno invierte fuertemente en becas para estudios en el extranjero a través del programa King Abdullah Scholarship."
  }
];