"use client";

import { useState, useRef, useEffect } from "react";
import { Search, HelpCircle, MessageSquare, Phone, Mail, Send, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { supportFAQs, aiResponses } from "@/lib/mockData";
import { useLanguage } from "@/lib/languageContext";

export default function Support() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("faq");
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiConversation, setAiConversation] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  
  // Filter FAQs based on search term
  const filteredFAQs = searchTerm
    ? supportFAQs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : supportFAQs;
  
  // Scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [aiConversation]);
  
  // Handle AI assistant question submission
  const handleAiSubmit = (e) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    
    // Add user question to conversation
    setAiConversation([...aiConversation, { role: "user", content: aiQuestion }]);
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Find a matching response or use a default one
    setTimeout(() => {
      const lowerQuestion = aiQuestion.toLowerCase();
      
      // Try to find a matching response
      let foundResponse = aiResponses.find(item => 
        lowerQuestion.includes(item.question.toLowerCase().substring(0, 10)) ||
        item.question.toLowerCase().includes(lowerQuestion.substring(0, 10))
      );
      
      // If no match found, use a default response
      if (!foundResponse) {
        if (lowerQuestion.includes("hola") || lowerQuestion.includes("buenos") || lowerQuestion.includes("saludos")) {
          foundResponse = {
            answer: "¡Hola! Soy el asistente virtual del Club Saudí Español. Estoy aquí para responder tus preguntas sobre Arabia Saudita. ¿En qué puedo ayudarte hoy?"
          };
        } else {
          foundResponse = {
            answer: "Gracias por tu pregunta. Actualmente no tengo información específica sobre ese tema. Te recomiendo consultar con nuestro equipo de soporte o revisar recursos oficiales como la página web de turismo de Arabia Saudita (visitsaudi.com) o la embajada española en Riyadh para obtener información más detallada."
          };
        }
      }
      
      setAiConversation([
        ...aiConversation, 
        { role: "user", content: aiQuestion },
        { role: "assistant", content: foundResponse.answer }
      ]);
      
      setAiQuestion("");
      setIsTyping(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#0F1E4E] mb-4">{t("supportCenter")}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "en" 
              ? "Find answers to your questions about life in Saudi Arabia and how to make the most of your membership."
              : "Encuentra respuestas a tus preguntas sobre la vida en Arabia Saudita y cómo aprovechar al máximo tu membresía."
            }
          </p>
        </div>
        
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder={language === "en" ? "Search in FAQs..." : "Buscar en preguntas frecuentes..."}
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Tabs Section */}
        <Tabs defaultValue="faq" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 w-full mb-8">
            <TabsTrigger value="faq">
              {language === "en" ? "FAQs" : "Preguntas Frecuentes"}
            </TabsTrigger>
            <TabsTrigger value="ai">
              {t("aiAssistant")}
            </TabsTrigger>
            <TabsTrigger value="contact">
              {language === "en" ? "Contact" : "Contacto"}
            </TabsTrigger>
            <TabsTrigger value="resources">
              {language === "en" ? "Resources" : "Recursos"}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {language === "en" ? "No results found" : "No se encontraron resultados"}
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  {language === "en"
                    ? "We couldn't find questions matching your search. Try with other terms or contact us directly."
                    : "No hemos encontrado preguntas que coincidan con tu búsqueda. Intenta con otros términos o contacta con nosotros directamente."
                  }
                </p>
                <Button className="mt-4 bg-[#0F1E4E] hover:bg-[#0F1E4E]/90" onClick={() => setActiveTab("contact")}>
                  {language === "en" ? "Contact Support" : "Contactar Soporte"}
                </Button>
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                {language === "en" ? "Can't find what you're looking for?" : "¿No encuentras lo que buscas?"}
              </p>
              <Button onClick={() => setActiveTab("contact")} className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                {language === "en" ? "Contact Support" : "Contactar Soporte"}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="ai">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-[#0F1E4E]" />
                  {t("aiAssistant")}
                </CardTitle>
                <CardDescription>
                  {t("askAboutSaudi")}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-50 rounded-lg border p-4 h-[400px] overflow-y-auto mb-4">
                  {aiConversation.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <Bot className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {language === "en" ? "AI Assistant" : "Asistente IA"}
                      </h3>
                      <p className="text-gray-500 max-w-md">
                        {language === "en"
                          ? "Ask me anything about Saudi Arabia in Spanish. I'm here to help with information about culture, tourism, regulations, and more."
                          : "Pregúntame cualquier cosa sobre Arabia Saudita en español. Estoy aquí para ayudarte con información sobre cultura, turismo, regulaciones y más."
                        }
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {aiConversation.map((message, index) => (
                        <div 
                          key={index} 
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.role === "user" 
                                ? "bg-[#0F1E4E] text-white" 
                                : "bg-white border border-gray-200"
                            }`}
                          >
                            {message.role === "assistant" && (
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src="/logo.png" alt="AI" />
                                  <AvatarFallback className="bg-[#0F1E4E] text-white text-xs">AI</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium text-[#0F1E4E]">
                                  {language === "en" ? "AI Assistant" : "Asistente IA"}
                                </span>
                              </div>
                            )}
                            <p className={message.role === "assistant" ? "text-gray-700" : ""}>
                              {message.content}
                            </p>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src="/logo.png" alt="AI" />
                                <AvatarFallback className="bg-[#0F1E4E] text-white text-xs">AI</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium text-[#0F1E4E]">
                                {language === "en" ? "AI Assistant" : "Asistente IA"}
                              </span>
                            </div>
                            <div className="flex gap-1">
                              <span className="animate-bounce">•</span>
                              <span className="animate-bounce delay-100">•</span>
                              <span className="animate-bounce delay-200">•</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>
                <form onSubmit={handleAiSubmit} className="flex gap-2">
                  <Input
                    placeholder={t("aiPlaceholder")}
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90"
                    disabled={isTyping || !aiQuestion.trim()}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {t("aiSend")}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                {language === "en" ? "About this AI Assistant" : "Acerca de este Asistente IA"}
              </h3>
              <p className="text-sm">
                {language === "en"
                  ? "This AI assistant is designed to provide information about Saudi Arabia in Spanish. It can answer questions about culture, tourism, regulations, and daily life in the kingdom. The responses are pre-generated and may not cover all topics. For more specific inquiries, please contact our support team."
                  : "Este asistente IA está diseñado para proporcionar información sobre Arabia Saudita en español. Puede responder preguntas sobre cultura, turismo, regulaciones y vida cotidiana en el reino. Las respuestas son pregeneradas y pueden no cubrir todos los temas. Para consultas más específicas, por favor contacta con nuestro equipo de soporte."
                }
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>
                    {language === "en" ? "Send us a Message" : "Envíanos un Mensaje"}
                  </CardTitle>
                  <CardDescription>
                    {language === "en"
                      ? "Complete the form and we'll get back to you as soon as possible"
                      : "Completa el formulario y te responderemos lo antes posible"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        {language === "en" ? "First Name" : "Nombre"}
                      </Label>
                      <Input id="firstName" placeholder={language === "en" ? "John" : "María"} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        {language === "en" ? "Last Name" : "Apellido"}
                      </Label>
                      <Input id="lastName" placeholder={language === "en" ? "Doe" : "González"} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === "en" ? "Email" : "Correo Electrónico"}
                    </Label>
                    <Input id="email" type="email" placeholder={language === "en" ? "you@example.com" : "tu@ejemplo.com"} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {language === "en" ? "Subject" : "Asunto"}
                    </Label>
                    <Input id="subject" placeholder={language === "en" ? "Membership inquiry" : "Consulta sobre membresía"} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {language === "en" ? "Message" : "Mensaje"}
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder={language === "en" ? "Write your inquiry here..." : "Escribe tu consulta aquí..."} 
                      rows={5} 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                    {language === "en" ? "Send Message" : "Enviar Mensaje"}
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" ? "Contact Information" : "Información de Contacto"}
                  </CardTitle>
                  <CardDescription>
                    {language === "en" ? "Other ways to reach us" : "Otras formas de contactarnos"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-[#0F1E4E]" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@saudispanishclub.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {language === "en" ? "Response within 24-48 hours" : "Respuesta en 24-48 horas"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-[#0F1E4E]" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Phone" : "Teléfono"}
                      </p>
                      <p className="text-gray-600">+966 11 234 5678</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {language === "en" ? "Mon-Fri: 9:00 - 17:00 (GMT+3)" : "Lun-Vie: 9:00 - 17:00 (GMT+3)"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-[#0F1E4E]" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Live Chat" : "Chat en Vivo"}
                      </p>
                      <p className="text-gray-600">
                        {language === "en" ? "Available for all members" : "Disponible para todos los miembros"}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {language === "en" ? "Immediate support" : "Soporte inmediato"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" ? "Guides for Newcomers" : "Guías para Recién Llegados"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F1E4E]">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Cultural Adaptation Guide" : "Guía de Adaptación Cultural"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === "en" 
                          ? "Tips for adapting to life in Saudi Arabia" 
                          : "Consejos para adaptarse a la vida en Arabia Saudita"
                        }
                      </p>
                      <Button variant="link" className="text-[#0F1E4E] p-0 h-auto mt-1">
                        {language === "en" ? "Download PDF" : "Descargar PDF"}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F1E4E]">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Administrative Procedures" : "Trámites Administrativos"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === "en"
                          ? "Guide for managing visas, permits, and documentation"
                          : "Guía para gestionar visados, permisos y documentación"
                        }
                      </p>
                      <Button variant="link" className="text-[#0F1E4E] p-0 h-auto mt-1">
                        {language === "en" ? "Download PDF" : "Descargar PDF"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "en" ? "Language Resources" : "Recursos de Idioma"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F1E4E]">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m16 12-4-4-4 4"></path>
                        <path d="M12 16V8"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Basic Arabic Phrases" : "Frases Básicas en Árabe"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === "en"
                          ? "Pronunciation guide and useful phrases"
                          : "Guía de pronunciación y frases útiles"
                        }
                      </p>
                      <Button variant="link" className="text-[#0F1E4E] p-0 h-auto mt-1">
                        {language === "en" ? "Download" : "Descargar"}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F1E4E]">
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Recommended Apps" : "Aplicaciones Recomendadas"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === "en"
                          ? "The best apps for learning Arabic"
                          : "Las mejores apps para aprender árabe"
                        }
                      </p>
                      <Button variant="link" className="text-[#0F1E4E] p-0 h-auto mt-1">
                        {language === "en" ? "View List" : "Ver Lista"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}