"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Define translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard", 
    profile: "Profile",
    directory: "Directory",
    support: "Support",
    community: "Community",
    login: "Login",
    register: "Register",
    
    // Home page
    heroTitle: "SAUDI SPANISH CLUB",
    heroSubtitle: "Connecting the Spanish-speaking community in Saudi Arabia",
    heroDescription: "Find Spanish-speaking services, connect with other Spanish speakers, and access resources to make your life easier in Saudi Arabia.",
    joinNow: "Join Now",
    exploreDirectory: "Explore Directory",
    
    // Features
    ourServices: "Our Services",
    directoryService: "Service Directory",
    findProfessionals: "Find Spanish-speaking professionals and businesses",
    directoryDescription: "Access our directory of doctors, lawyers, restaurants, and more Spanish-speaking services throughout Saudi Arabia.",
    activeCommunity: "Active Community",
    connectWithOthers: "Connect with other Spanish speakers",
    communityDescription: "Participate in forums, events, and interest groups to share experiences and make new friends.",
    supportCenter: "Support Center",
    resolveQuestions: "Resolve your questions about life in Saudi Arabia",
    supportDescription: "Find answers to frequently asked questions and receive personalized assistance to adapt to the country.",
    
    // Events
    upcomingEvents: "Upcoming Events",
    viewAllEvents: "View all events",
    viewDetails: "View Details",
    
    // Footer
    quickLinks: "Quick Links",
    legal: "Legal",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    cookies: "Cookies",
    contact: "Contact",
    
    // Dashboard
    welcomeBack: "Welcome back",
    notifications: "Notifications",
    settings: "Settings",
    overview: "Overview",
    membership: "Membership",
    events: "Events",
    services: "Services",
    
    // Admin
    adminPanel: "Admin Panel",
    manageUsers: "Manage Users",
    manageEvents: "Manage Events",
    manageContent: "Manage Content",
    addEvent: "Add Event",
    editEvent: "Edit Event",
    deleteEvent: "Delete Event",
    
    // AI Assistant
    aiAssistant: "AI Assistant",
    askAboutSaudi: "Ask about Saudi Arabia in Spanish",
    aiPlaceholder: "Ask me anything about Saudi Arabia...",
    aiSend: "Send",
    
    // Auth
    emailAddress: "Email Address",
    password: "Password",
    forgotPassword: "Forgot password?",
    rememberMe: "Remember me",
    continueWith: "Or continue with",
    createAccount: "Create an account",
    completeForm: "Complete the form to join our community",
    firstName: "First Name",
    lastName: "Last Name",
    confirmPassword: "Confirm Password",
    cityInSaudi: "City in Saudi Arabia",
    agreeToTerms: "I agree to the",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
  },
  es: {
    // Navigation
    home: "Inicio",
    dashboard: "Dashboard",
    profile: "Perfil",
    directory: "Directorio",
    support: "Soporte",
    community: "Comunidad",
    login: "Iniciar Sesión",
    register: "Registrarse",
    
    // Home page
    heroTitle: "CLUB SAUDÍ ESPAÑOL",
    heroSubtitle: "Conectando a la comunidad hispanohablante en Arabia Saudita",
    heroDescription: "Encuentra servicios en español, conecta con otros hispanohablantes y accede a recursos para facilitar tu vida en Arabia Saudita.",
    joinNow: "Únete Ahora",
    exploreDirectory: "Explorar Directorio",
    
    // Features
    ourServices: "Nuestros Servicios",
    directoryService: "Directorio de Servicios",
    findProfessionals: "Encuentra profesionales y negocios hispanohablantes",
    directoryDescription: "Accede a nuestro directorio de médicos, abogados, restaurantes y más servicios en español en toda Arabia Saudita.",
    activeCommunity: "Comunidad Activa",
    connectWithOthers: "Conecta con otros hispanohablantes",
    communityDescription: "Participa en foros, eventos y grupos de interés para compartir experiencias y hacer nuevas amistades.",
    supportCenter: "Centro de Soporte",
    resolveQuestions: "Resuelve tus dudas sobre la vida en Arabia Saudita",
    supportDescription: "Encuentra respuestas a preguntas frecuentes y recibe asistencia personalizada para adaptarte al país.",
    
    // Events
    upcomingEvents: "Próximos Eventos",
    viewAllEvents: "Ver todos los eventos",
    viewDetails: "Ver Detalles",
    
    // Footer
    quickLinks: "Enlaces Rápidos",
    legal: "Legal",
    termsOfService: "Términos de Servicio",
    privacyPolicy: "Política de Privacidad",
    cookies: "Cookies",
    contact: "Contacto",
    
    // Dashboard
    welcomeBack: "Bienvenido/a de nuevo",
    notifications: "Notificaciones",
    settings: "Configuración",
    overview: "Resumen",
    membership: "Membresía",
    events: "Eventos",
    services: "Servicios",
    
    // Admin
    adminPanel: "Panel de Administración",
    manageUsers: "Gestionar Usuarios",
    manageEvents: "Gestionar Eventos",
    manageContent: "Gestionar Contenido",
    addEvent: "Añadir Evento",
    editEvent: "Editar Evento",
    deleteEvent: "Eliminar Evento",
    
    // AI Assistant
    aiAssistant: "Asistente IA",
    askAboutSaudi: "Pregunta sobre Arabia Saudita en español",
    aiPlaceholder: "Pregúntame cualquier cosa sobre Arabia Saudita...",
    aiSend: "Enviar",
    
    // Auth
    emailAddress: "Correo Electrónico",
    password: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    rememberMe: "Recordarme",
    continueWith: "O continúa con",
    createAccount: "Crear una cuenta",
    completeForm: "Completa el formulario para unirte a nuestra comunidad",
    firstName: "Nombre",
    lastName: "Apellido",
    confirmPassword: "Confirmar Contraseña",
    cityInSaudi: "Ciudad en Arabia Saudita",
    agreeToTerms: "Acepto los",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    dontHaveAccount: "¿No tienes una cuenta?",
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  
  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);
  
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}