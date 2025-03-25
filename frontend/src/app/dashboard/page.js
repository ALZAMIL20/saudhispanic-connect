"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  User, 
  Search, 
  Calendar, 
  MessageSquare, 
  Bell, 
  Settings,
  Users,
  Building,
  FileText,
  Clock
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { users, upcomingEvents, communityPosts } from "@/lib/mockData";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  // Using the first user as the mock logged-in user
  const currentUser = users[0];
  
  // Calculate days remaining in membership
  const today = new Date();
  const expiryDate = new Date(currentUser.membershipExpiry);
  const daysRemaining = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
  const percentRemaining = (daysRemaining / 365) * 100;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Bienvenido/a de nuevo, {currentUser.name}</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Bell className="h-4 w-4" />
              <span>Notificaciones</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span>Configuración</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:w-[600px]">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="membership">Membresía</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
            <TabsTrigger value="community">Comunidad</TabsTrigger>
            <TabsTrigger value="services">Servicios</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* User Profile Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle>Perfil</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                    <Image 
                      src={currentUser.avatar} 
                      alt={currentUser.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{currentUser.name}</h3>
                  <p className="text-gray-500 mb-2">{currentUser.location}</p>
                  <Badge className="mb-4" variant={currentUser.membershipStatus === "Premium" ? "default" : "outline"}>
                    {currentUser.membershipStatus}
                  </Badge>
                  <p className="text-sm text-gray-500">Miembro desde {new Date(currentUser.memberSince).toLocaleDateString()}</p>
                </CardContent>
                <CardFooter>
                  <Link href="/profile" className="w-full">
                    <Button variant="outline" className="w-full">Editar Perfil</Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Evento registrado: Noche de Tapas</p>
                      <p className="text-sm text-gray-500">Hace 2 días</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Comentario en: Consejos para recién llegados</p>
                      <p className="text-sm text-gray-500">Hace 5 días</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Search className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Búsqueda en directorio: Médicos pediatras</p>
                      <p className="text-sm text-gray-500">Hace 1 semana</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-blue-600">Ver toda la actividad</Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Quick Access */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceso Rápido</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/directory">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Search className="h-8 w-8 text-red-600 mb-2" />
                    <h3 className="font-medium text-center">Buscar en Directorio</h3>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/community">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Users className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-medium text-center">Comunidad</h3>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/support">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <MessageSquare className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-medium text-center">Centro de Soporte</h3>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/profile">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <User className="h-8 w-8 text-purple-600 mb-2" />
                    <h3 className="font-medium text-center">Mi Perfil</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
            
            {/* Upcoming Events Preview */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Próximos Eventos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.slice(0, 3).map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>
                      {event.date} • {event.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">Ver Detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="membership" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estado de Membresía</CardTitle>
                <CardDescription>
                  Detalles de tu plan actual y beneficios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Badge className={currentUser.membershipStatus === "Premium" ? "bg-red-600" : ""}>
                        {currentUser.membershipStatus}
                      </Badge>
                    </h3>
                    <p className="text-gray-500 mt-1">Válido hasta: {new Date(currentUser.membershipExpiry).toLocaleDateString()}</p>
                  </div>
                  <Button>Renovar Membresía</Button>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Tiempo restante</span>
                    <span className="text-sm font-medium">{daysRemaining} días</span>
                  </div>
                  <Progress value={percentRemaining} className="h-2" />
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-bold mb-4">Beneficios de tu membresía</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Acceso completo al directorio de servicios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Participación en la comunidad y foros</span>
                    </li>
                    {currentUser.membershipStatus === "Premium" && (
                      <>
                        <li className="flex items-start gap-2">
                          <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Publicación de eventos y servicios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Acceso prioritario a eventos exclusivos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Descuentos en servicios asociados</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                
                {currentUser.membershipStatus !== "Premium" && (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                    <h4 className="font-bold mb-2">¿Quieres más beneficios?</h4>
                    <p className="text-gray-600 mb-4">Actualiza a Premium para disfrutar de todas las ventajas.</p>
                    <Button>Actualizar a Premium</Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Historial de Pagos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border-b">
                    <div>
                      <p className="font-medium">Renovación Membresía {currentUser.membershipStatus}</p>
                      <p className="text-sm text-gray-500">15 Mar 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{currentUser.membershipStatus === "Premium" ? "500 SAR" : "200 SAR"}</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Pagado</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border-b">
                    <div>
                      <p className="font-medium">Inscripción Membresía {currentUser.membershipStatus}</p>
                      <p className="text-sm text-gray-500">15 Mar 2022</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{currentUser.membershipStatus === "Premium" ? "500 SAR" : "200 SAR"}</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Pagado</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Eventos</h2>
              <Button>Ver Todos</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <p className="text-sm font-medium flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{event.location}</span>
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Más Información</Button>
                    <Button>Registrarse</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="community" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Comunidad</h2>
              <div className="flex gap-2">
                <Button variant="outline">Ver Todos</Button>
                <Button>Nueva Publicación</Button>
              </div>
            </div>
            
            <div className="space-y-6">
              {communityPosts.map((post) => {
                const author = users.find(user => user.id === post.userId);
                return (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <Image 
                            src={author.avatar} 
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{post.title}</CardTitle>
                          <CardDescription>
                            Por {author.name} • {new Date(post.date).toLocaleDateString()}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{post.content}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.comments.length}</span>
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">Ver Comentarios</Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Servicios Destacados</h2>
              <Button>Ver Directorio Completo</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop" 
                    alt="Servicios Médicos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">Servicios Médicos</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 mb-4">Encuentra médicos y especialistas que hablan español en Arabia Saudita.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Medicina General</Badge>
                    <Badge variant="outline">Pediatría</Badge>
                    <Badge variant="outline">Ginecología</Badge>
                    <Badge variant="outline">Psicología</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/directory" className="w-full">
                    <Button variant="outline" className="w-full">Explorar Servicios Médicos</Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=300&auto=format&fit=crop" 
                    alt="Gastronomía"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">Gastronomía</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 mb-4">Descubre restaurantes españoles y latinoamericanos en el reino.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Restaurantes</Badge>
                    <Badge variant="outline">Cafeterías</Badge>
                    <Badge variant="outline">Tiendas Gourmet</Badge>
                    <Badge variant="outline">Catering</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/directory" className="w-full">
                    <Button variant="outline" className="w-full">Explorar Gastronomía</Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=300&auto=format&fit=crop" 
                    alt="Educación"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">Educación</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 mb-4">Academias de idiomas, profesores particulares y colegios internacionales.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Clases de Español</Badge>
                    <Badge variant="outline">Clases de Árabe</Badge>
                    <Badge variant="outline">Colegios</Badge>
                    <Badge variant="outline">Tutores</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/directory" className="w-full">
                    <Button variant="outline" className="w-full">Explorar Educación</Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=300&auto=format&fit=crop" 
                    alt="Servicios Profesionales"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">Servicios Profesionales</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 mb-4">Abogados, traductores, asesores y otros profesionales hispanohablantes.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Legal</Badge>
                    <Badge variant="outline">Traducción</Badge>
                    <Badge variant="outline">Consultoría</Badge>
                    <Badge variant="outline">Inmobiliaria</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/directory" className="w-full">
                    <Button variant="outline" className="w-full">Explorar Servicios Profesionales</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}