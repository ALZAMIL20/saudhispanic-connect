"use client";

import { useState } from "react";
import { Search, HelpCircle, MessageSquare, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import { supportFAQs } from "@/lib/mockData";

export default function Support() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("faq");
  
  // Filter FAQs based on search term
  const filteredFAQs = searchTerm
    ? supportFAQs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : supportFAQs;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Centro de Soporte</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a tus preguntas sobre la vida en Arabia Saudita y cómo aprovechar al máximo tu membresía.
          </p>
        </div>
        
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Buscar en preguntas frecuentes..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Tabs Section */}
        <Tabs defaultValue="faq" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full mb-8">
            <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
            <TabsTrigger value="contact">Contacto</TabsTrigger>
            <TabsTrigger value="resources">Recursos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  No hemos encontrado preguntas que coincidan con tu búsqueda. Intenta con otros términos o contacta con nosotros directamente.
                </p>
                <Button className="mt-4" onClick={() => setActiveTab("contact")}>Contactar Soporte</Button>
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
              <p className="text-gray-600 mb-4">¿No encuentras lo que buscas?</p>
              <Button onClick={() => setActiveTab("contact")}>Contactar Soporte</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y te responderemos lo antes posible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="María" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="González" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="Consulta sobre membresía" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" placeholder="Escribe tu consulta aquí..." rows={5} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enviar Mensaje</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                  <CardDescription>
                    Otras formas de contactarnos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">soporte@saudihispanicconnect.com</p>
                      <p className="text-sm text-gray-500 mt-1">Respuesta en 24-48 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">+966 11 234 5678</p>
                      <p className="text-sm text-gray-500 mt-1">Lun-Vie: 9:00 - 17:00 (GMT+3)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Chat en Vivo</p>
                      <p className="text-gray-600">Disponible para miembros Premium</p>
                      <p className="text-sm text-gray-500 mt-1">Soporte inmediato</p>
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
                  <CardTitle>Guías para Recién Llegados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Guía de Adaptación Cultural</p>
                      <p className="text-sm text-gray-600">Consejos para adaptarse a la vida en Arabia Saudita</p>
                      <Button variant="link" className="text-purple-600 p-0 h-auto mt-1">Descargar PDF</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Trámites Administrativos</p>
                      <p className="text-sm text-gray-600">Guía para gestionar visados, permisos y documentación</p>
                      <Button variant="link" className="text-purple-600 p-0 h-auto mt-1">Descargar PDF</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Guía de Vivienda</p>
                      <p className="text-sm text-gray-600">Cómo encontrar alojamiento en las principales ciudades</p>
                      <Button variant="link" className="text-purple-600 p-0 h-auto mt-1">Descargar PDF</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recursos de Idioma</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m16 12-4-4-4 4"></path>
                        <path d="M12 16V8"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Frases Básicas en Árabe</p>
                      <p className="text-sm text-gray-600">Guía de pronunciación y frases útiles</p>
                      <Button variant="link" className="text-blue-600 p-0 h-auto mt-1">Descargar</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Aplicaciones Recomendadas</p>
                      <p className="text-sm text-gray-600">Las mejores apps para aprender árabe</p>
                      <Button variant="link" className="text-blue-600 p-0 h-auto mt-1">Ver Lista</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M17 2v6h-6"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Diccionario Español-Árabe</p>
                      <p className="text-sm text-gray-600">Términos específicos para expatriados</p>
                      <Button variant="link" className="text-blue-600 p-0 h-auto mt-1">Acceder</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Información Legal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Derechos y Deberes</p>
                      <p className="text-sm text-gray-600">Información sobre leyes y normativas para extranjeros</p>
                      <Button variant="link" className="text-amber-600 p-0 h-auto mt-1">Leer Más</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <line x1="3" x2="21" y1="9" y2="9"></line>
                        <line x1="9" x2="9" y1="21" y2="9"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Visados y Permisos</p>
                      <p className="text-sm text-gray-600">Guía sobre tipos de visados y requisitos</p>
                      <Button variant="link" className="text-amber-600 p-0 h-auto mt-1">Leer Más</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                        <path d="M14 9.01V9"></path>
                        <path d="M14 12.01V12"></path>
                        <path d="M14 15.01V15"></path>
                        <path d="M9.5 9H4.5"></path>
                        <path d="M9.5 12H4.5"></path>
                        <path d="M9.5 15H4.5"></path>
                        <path d="M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Contratos Laborales</p>
                      <p className="text-sm text-gray-600">Información sobre contratos y derechos laborales</p>
                      <Button variant="link" className="text-amber-600 p-0 h-auto mt-1">Leer Más</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Vida Cotidiana</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                        <path d="M12 3v6"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Guía de Compras</p>
                      <p className="text-sm text-gray-600">Dónde encontrar productos españoles y latinos</p>
                      <Button variant="link" className="text-green-600 p-0 h-auto mt-1">Ver Guía</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Transporte y Movilidad</p>
                      <p className="text-sm text-gray-600">Opciones de transporte en las principales ciudades</p>
                      <Button variant="link" className="text-green-600 p-0 h-auto mt-1">Ver Guía</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Lugares de Interés</p>
                      <p className="text-sm text-gray-600">Sitios turísticos y culturales recomendados</p>
                      <Button variant="link" className="text-green-600 p-0 h-auto mt-1">Ver Mapa</Button>
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