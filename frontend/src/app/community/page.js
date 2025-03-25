"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MessageSquare, Calendar, Users, Plus, Filter, ThumbsUp, MessageCircle, Share } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import { users, communityPosts, upcomingEvents } from "@/lib/mockData";

export default function Community() {
  const [activeTab, setActiveTab] = useState("posts");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewPostDialog, setShowNewPostDialog] = useState(false);
  
  // Filter posts based on search term
  const filteredPosts = searchTerm
    ? communityPosts.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : communityPosts;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Comunidad</h1>
            <p className="text-gray-600">Conecta con otros hispanohablantes en Arabia Saudita</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Dialog open={showNewPostDialog} onOpenChange={setShowNewPostDialog}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  <span>Nueva Publicación</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Crear Nueva Publicación</DialogTitle>
                  <DialogDescription>
                    Comparte tus experiencias, preguntas o consejos con la comunidad
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="post-title" className="text-sm font-medium">
                      Título
                    </label>
                    <Input id="post-title" placeholder="Escribe un título descriptivo" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="post-content" className="text-sm font-medium">
                      Contenido
                    </label>
                    <Textarea
                      id="post-content"
                      placeholder="Comparte tu experiencia, pregunta o consejo..."
                      rows={6}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Categoría</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Consejos</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Preguntas</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Experiencias</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Eventos</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Otros</Badge>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowNewPostDialog(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={() => setShowNewPostDialog(false)}>Publicar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar en la comunidad..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filtrar</span>
              </Button>
              <Button>Buscar</Button>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <Tabs defaultValue="posts" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full mb-6">
            <TabsTrigger value="posts" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>Publicaciones</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Eventos</span>
            </TabsTrigger>
            <TabsTrigger value="groups" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Grupos</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron publicaciones</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-6">
                      No hemos encontrado publicaciones que coincidan con tu búsqueda. Intenta con otros términos o crea una nueva publicación.
                    </p>
                    <Button onClick={() => setShowNewPostDialog(true)}>Crear Publicación</Button>
                  </div>
                ) : (
                  <>
                    {filteredPosts.map((post) => {
                      const author = users.find(user => user.id === post.userId);
                      return (
                        <Card key={post.id}>
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarImage src={author.avatar} alt={author.name} />
                                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
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
                          <CardFooter className="flex justify-between border-t pt-4">
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                <span>{post.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>{post.comments.length}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <Share className="h-4 w-4" />
                                <span>Compartir</span>
                              </Button>
                            </div>
                            <Button variant="outline" size="sm">Ver Comentarios</Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Community Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Comunidad en Números</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span>Miembros</span>
                      </div>
                      <span className="font-bold">1,245</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-green-600" />
                        <span>Publicaciones</span>
                      </div>
                      <span className="font-bold">3,872</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-red-600" />
                        <span>Eventos</span>
                      </div>
                      <span className="font-bold">128</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Próximos Eventos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.slice(0, 2).map((event) => (
                      <div key={event.id} className="flex gap-3">
                        <div className="bg-red-100 text-red-600 h-12 w-12 flex flex-col items-center justify-center rounded-lg flex-shrink-0">
                          <span className="text-xs font-medium">{event.date.split('-')[1]}</span>
                          <span className="text-lg font-bold">{event.date.split('-')[2]}</span>
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-1">{event.title}</h4>
                          <p className="text-sm text-gray-500">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => setActiveTab("events")}>
                      Ver Todos los Eventos
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Temas Populares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Consejos</Badge>
                      <Badge variant="outline">Trámites</Badge>
                      <Badge variant="outline">Vivienda</Badge>
                      <Badge variant="outline">Gastronomía</Badge>
                      <Badge variant="outline">Idioma</Badge>
                      <Badge variant="outline">Cultura</Badge>
                      <Badge variant="outline">Trabajo</Badge>
                      <Badge variant="outline">Educación</Badge>
                      <Badge variant="outline">Salud</Badge>
                      <Badge variant="outline">Viajes</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="events">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Eventos de la Comunidad</h2>
                <Button>Crear Evento</Button>
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
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white text-gray-900 hover:bg-white">
                          {event.date}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Más Información</Button>
                      <Button>Asistir</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="groups">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Grupos de la Comunidad</h2>
                <Button>Crear Grupo</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Españoles en Riyadh</CardTitle>
                    <CardDescription>
                      <Badge>124 miembros</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Grupo para españoles viviendo en Riyadh. Compartimos experiencias, consejos y organizamos encuentros.
                    </p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {users.slice(0, 3).map((user) => (
                        <Avatar key={user.id} className="border-2 border-white">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                        +121
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Unirse al Grupo</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Latinoamericanos en Jeddah</CardTitle>
                    <CardDescription>
                      <Badge>98 miembros</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Comunidad de latinoamericanos en Jeddah. Compartimos nuestra cultura y nos apoyamos mutuamente.
                    </p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {users.slice(1, 3).map((user) => (
                        <Avatar key={user.id} className="border-2 border-white">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                        +96
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Unirse al Grupo</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Profesionales Hispanohablantes</CardTitle>
                    <CardDescription>
                      <Badge>156 miembros</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Red de profesionales hispanohablantes en Arabia Saudita. Networking y oportunidades laborales.
                    </p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {users.map((user) => (
                        <Avatar key={user.id} className="border-2 border-white">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                        +153
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Unirse al Grupo</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Familias Hispanohablantes</CardTitle>
                    <CardDescription>
                      <Badge>87 miembros</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Grupo para familias hispanohablantes. Actividades para niños, consejos sobre colegios y más.
                    </p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {users.slice(0, 2).map((user) => (
                        <Avatar key={user.id} className="border-2 border-white">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                        +85
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Unirse al Grupo</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Amantes de la Gastronomía</CardTitle>
                    <CardDescription>
                      <Badge>112 miembros</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Para los apasionados de la cocina española y latinoamericana. Compartimos recetas y restaurantes.
                    </p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {users.slice(1, 3).map((user) => (
                        <Avatar key={user.id} className="border-2 border-white">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                        +110
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Unirse al Grupo</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Deportes y Actividades</CardTitle>
                    <CardDescription>
                      <Badge>76 miembros</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Grupo para organizar actividades deportivas y al aire libre. Fútbol, senderismo, ciclismo y más.
                    </p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {users.slice(0, 2).map((user) => (
                        <Avatar key={user.id} className="border-2 border-white">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
                        +74
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Unirse al Grupo</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}