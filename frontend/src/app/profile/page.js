"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { users } from "@/lib/mockData";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  // Using the first user as the mock logged-in user
  const currentUser = users[0];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
            <p className="text-gray-600">Gestiona tu información personal y preferencias</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Summary Card */}
          <div className="w-full md:w-1/3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                      <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      </svg>
                    </Button>
                  </div>
                  <h2 className="text-xl font-bold">{currentUser.name}</h2>
                  <p className="text-gray-500 mb-2">{currentUser.location}</p>
                  <Badge className="mb-4" variant={currentUser.membershipStatus === "Premium" ? "default" : "outline"}>
                    {currentUser.membershipStatus}
                  </Badge>
                  <p className="text-sm text-gray-500">Miembro desde {new Date(currentUser.memberSince).toLocaleDateString()}</p>
                </div>
                
                <div className="mt-6 border-t pt-6">
                  <h3 className="font-medium mb-3">Información de Contacto</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span>{currentUser.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>+966 50 123 4567</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 border-t pt-6">
                  <h3 className="font-medium mb-3">Intereses</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentUser.interests.map((interest, index) => (
                      <Badge key={index} variant="outline">{interest}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Profile Edit Tabs */}
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 w-full mb-6">
                <TabsTrigger value="personal">Información Personal</TabsTrigger>
                <TabsTrigger value="account">Cuenta</TabsTrigger>
                <TabsTrigger value="preferences">Preferencias</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>
                      Actualiza tu información personal y de contacto
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" defaultValue={currentUser.name.split(' ')[0]} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" defaultValue={currentUser.name.split(' ')[1]} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" defaultValue={currentUser.email} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue="+966 50 123 4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Ciudad</Label>
                      <Input id="location" defaultValue={currentUser.location} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografía</Label>
                      <Textarea id="bio" defaultValue={currentUser.bio} rows={4} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Intereses</Label>
                      <div className="flex flex-wrap gap-2">
                        {currentUser.interests.map((interest, index) => (
                          <Badge key={index} variant="outline" className="cursor-pointer">
                            {interest}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Badge>
                        ))}
                        <Badge variant="outline" className="cursor-pointer bg-gray-100">
                          + Añadir
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar Cambios</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración de Cuenta</CardTitle>
                    <CardDescription>
                      Gestiona tu contraseña y configuración de seguridad
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Contraseña Actual</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nueva Contraseña</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    
                    <div className="border-t pt-4 mt-6">
                      <h3 className="font-medium mb-4">Seguridad de la Cuenta</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Autenticación de Dos Factores</Label>
                            <p className="text-sm text-gray-500">
                              Añade una capa adicional de seguridad a tu cuenta
                            </p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Notificaciones de Inicio de Sesión</Label>
                            <p className="text-sm text-gray-500">
                              Recibe alertas cuando alguien inicie sesión en tu cuenta
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar Cambios</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferencias</CardTitle>
                    <CardDescription>
                      Personaliza tu experiencia en la plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Idioma y Región</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="language">Idioma Preferido</Label>
                        <select
                          id="language"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="es"
                        >
                          <option value="es">Español</option>
                          <option value="ar">العربية (Árabe)</option>
                          <option value="en">English (Inglés)</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Zona Horaria</Label>
                        <select
                          id="timezone"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="asia_riyadh"
                        >
                          <option value="asia_riyadh">Arabia Saudita (GMT+3)</option>
                          <option value="europe_madrid">España (GMT+1/+2)</option>
                          <option value="america_mexico_city">México (GMT-6)</option>
                          <option value="america_bogota">Colombia (GMT-5)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 space-y-4">
                      <h3 className="font-medium">Notificaciones</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Notificaciones por Email</Label>
                            <p className="text-sm text-gray-500">
                              Recibe actualizaciones sobre eventos y actividad
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Notificaciones de Eventos</Label>
                            <p className="text-sm text-gray-500">
                              Recibe alertas sobre nuevos eventos
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Notificaciones de la Comunidad</Label>
                            <p className="text-sm text-gray-500">
                              Recibe alertas sobre actividad en la comunidad
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Boletín Mensual</Label>
                            <p className="text-sm text-gray-500">
                              Recibe nuestro boletín con novedades y consejos
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 space-y-4">
                      <h3 className="font-medium">Privacidad</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Perfil Público</Label>
                            <p className="text-sm text-gray-500">
                              Permite que otros miembros vean tu perfil
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Mostrar Email</Label>
                            <p className="text-sm text-gray-500">
                              Permite que otros miembros vean tu email
                            </p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Mostrar Teléfono</Label>
                            <p className="text-sm text-gray-500">
                              Permite que otros miembros vean tu teléfono
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar Preferencias</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}