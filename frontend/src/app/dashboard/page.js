```javascript
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
  Clock,
  Edit,
  Trash2,
  Plus,
  Save,
  X
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navigation from "@/components/Navigation";
import { users, upcomingEvents, communityPosts } from "@/lib/mockData";
import { useLanguage } from "@/lib/languageContext";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { t, language } = useLanguage();
  
  // Mock logged-in user - in a real app, this would come from authentication
  const currentUser = users[3]; // Using the admin user
  const isAdmin = currentUser.role === "admin";
  
  // State for admin event management
  const [showEventDialog, setShowEventDialog] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: ""
  });
  
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setEventForm({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      image: event.image
    });
    setShowEventDialog(true);
  };
  
  const handleAddEvent = () => {
    setEditingEvent(null);
    setEventForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: ""
    });
    setShowEventDialog(true);
  };
  
  const handleSaveEvent = () => {
    // In a real app, this would save to a database
    console.log("Saving event:", editingEvent ? "Edit" : "New", eventForm);
    setShowEventDialog(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F1E4E]">
              {isAdmin ? t("adminPanel") : t("dashboard")}
            </h1>
            <p className="text-gray-600">{t("welcomeBack")}, {currentUser.name}</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Bell className="h-4 w-4" />
              <span>{t("notifications")}</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span>{t("settings")}</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:w-[600px]">
            <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
            {isAdmin && <TabsTrigger value="manageEvents">{t("manageEvents")}</TabsTrigger>}
            {isAdmin && <TabsTrigger value="manageUsers">{t("manageUsers")}</TabsTrigger>}
            <TabsTrigger value="events">{t("events")}</TabsTrigger>
            <TabsTrigger value="community">{t("community")}</TabsTrigger>
            <TabsTrigger value="services">{t("services")}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* User Profile Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle>{t("profile")}</CardTitle>
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
                  <Badge className="mb-4" variant={isAdmin ? "default" : "outline"}>
                    {isAdmin ? "Admin" : t("membershipStatus")}
                  </Badge>
                  <p className="text-sm text-gray-500">
                    {language === "en" ? "Member since" : "Miembro desde"} {new Date(currentUser.memberSince).toLocaleDateString()}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/profile" className="w-full">
                    <Button variant="outline" className="w-full">
                      {language === "en" ? "Edit Profile" : "Editar Perfil"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>{language === "en" ? "Recent Activity" : "Actividad Reciente"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Event registered: Tapas Night" : "Evento registrado: Noche de Tapas"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {language === "en" ? "2 days ago" : "Hace 2 días"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Comment on: Tips for newcomers" : "Comentario en: Consejos para recién llegados"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {language === "en" ? "5 days ago" : "Hace 5 días"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Search className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {language === "en" ? "Directory search: Pediatricians" : "Búsqueda en directorio: Médicos pediatras"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {language === "en" ? "1 week ago" : "Hace 1 semana"}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-[#0F1E4E]">
                    {language === "en" ? "View all activity" : "Ver toda la actividad"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Quick Access */}
            <h2 className="text-2xl font-bold text-[#0F1E4E] mt-8 mb-4">
              {language === "en" ? "Quick Access" : "Acceso Rápido"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/directory">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Search className="h-8 w-8 text-[#0F1E4E] mb-2" />
                    <h3 className="font-medium text-center">
                      {language === "en" ? "Search Directory" : "Buscar en Directorio"}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/community">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Users className="h-8 w-8 text-[#0F1E4E] mb-2" />
                    <h3 className="font-medium text-center">{t("community")}</h3>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/support">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <MessageSquare className="h-8 w-8 text-[#0F1E4E] mb-2" />
                    <h3 className="font-medium text-center">{t("supportCenter")}</h3>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/profile">
                <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <User className="h-8 w-8 text-[#0F1E4E] mb-2" />
                    <h3 className="font-medium text-center">{t("profile")}</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
            
            {/* Upcoming Events Preview */}
            <h2 className="text-2xl font-bold text-[#0F1E4E] mt-8 mb-4">{t("upcomingEvents")}</h2>
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
                    <Button variant="outline" size="sm" className="w-full">
                      {language === "en" ? "View Details" : "Ver Detalles"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Admin: Manage Events Tab */}
          {isAdmin && (
            <TabsContent value="manageEvents" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#0F1E4E]">{t("manageEvents")}</h2>
                <Button onClick={handleAddEvent} className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                  <Plus className="h-4 w-4 mr-2" />
                  {t("addEvent")}
                </Button>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{language === "en" ? "Title" : "Título"}</TableHead>
                        <TableHead>{language === "en" ? "Date" : "Fecha"}</TableHead>
                        <TableHead>{language === "en" ? "Location" : "Ubicación"}</TableHead>
                        <TableHead className="text-right">{language === "en" ? "Actions" : "Acciones"}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingEvents.map((event) => (
                        <TableRow key={event.id}>
                          <TableCell className="font-medium">{event.title}</TableCell>
                          <TableCell>{event.date}</TableCell>
                          <TableCell>{event.location}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button 
                                variant="outline" 
                                size="icon"
                                onClick={() => handleEditEvent(event)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              {/* Event Edit/Add Dialog */}
              <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>
                      {editingEvent ? t("editEvent") : t("addEvent")}
                    </DialogTitle>
                    <DialogDescription>
                      {language === "en" 
                        ? "Fill in the details for this event. Click save when you're done."
                        : "Completa los detalles para este evento. Haz clic en guardar cuando hayas terminado."
                      }
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">
                        {language === "en" ? "Title" : "Título"}
                      </label>
                      <Input
                        className="col-span-3"
                        value={eventForm.title}
                        onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">
                        {language === "en" ? "Date" : "Fecha"}
                      </label>
                      <Input
                        className="col-span-3"
                        type="date"
                        value={eventForm.date}
                        onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">
                        {language === "en" ? "Time" : "Hora"}
                      </label>
                      <Input
                        className="col-span-3"
                        value={eventForm.time}
                        onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">
                        {language === "en" ? "Location" : "Ubicación"}
                      </label>
                      <Input
                        className="col-span-3"
                        value={eventForm.location}
                        onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">
                        {language === "en" ? "Image URL" : "URL de Imagen"}
                      </label>
                      <Input
                        className="col-span-3"
                        value={eventForm.image}
                        onChange={(e) => setEventForm({...eventForm, image: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label className="text-right text-sm font-medium">
                        {language === "en" ? "Description" : "Descripción"}
                      </label>
                      <Textarea
                        className="col-span-3"
                        value={eventForm.description}
                        onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowEventDialog(false)}>
                      {language === "en" ? "Cancel" : "Cancelar"}
                    </Button>
                    <Button onClick={handleSaveEvent} className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                      <Save className="h-4 w-4 mr-2" />
                      {language === "en" ? "Save" : "Guardar"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TabsContent>
          )}
          
          {/* Admin: Manage Users Tab */}
          {isAdmin && (
            <TabsContent value="manageUsers" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#0F1E4E]">{t("manageUsers")}</h2>
                <Button className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                  <Plus className="h-4 w-4 mr-2" />
                  {language === "en" ? "Add User" : "Añadir Usuario"}
                </Button>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{language === "en" ? "Name" : "Nombre"}</TableHead>
                        <TableHead>{language === "en" ? "Email" : "Correo"}</TableHead>
                        <TableHead>{language === "en" ? "Location" : "Ubicación"}</TableHead>
                        <TableHead>{language === "en" ? "Role" : "Rol"}</TableHead>
                        <TableHead className="text-right">{language === "en" ? "Actions" : "Acciones"}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                <Image 
                                  src={user.avatar} 
                                  alt={user.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span>{user.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.location}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === "admin" ? "default" : "outline"}>
                              {user.role === "admin" 
                                ? (language === "en" ? "Admin" : "Administrador") 
                                : (language === "en" ? "Member" : "Miembro")
                              }
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className="text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          )}
          
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#0F1E4E]">{t("events")}</h2>
              <Button className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                {language === "en" ? "View All" : "Ver Todos"}
              </Button>
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
                    <Button variant="outline">
                      {language === "en" ? "More Info" : "Más Información"}
                    </Button>
                    <Button className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                      {language === "en" ? "Register" : "Registrarse"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="community" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#0F1E4E]">{t("community")}</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  {language === "en" ? "View All" : "Ver Todos"}
                </Button>
                <Button className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                  {language === "en" ? "New Post" : "Nueva Publicación"}
                </Button>
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
                            {language === "en" ? "By" : "Por"} {author.name} • {new Date(post.date).toLocaleDateString()}
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
                      <Button variant="outline" size="sm">
                        {language === "en" ? "View Comments" : "Ver Comentarios"}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#0F1E4E]">
                {language === "en" ? "Featured Services" : "Servicios Destacados"}
              </h2>
              <Button className="bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                {language === "en" ? "View Full Directory" : "Ver Directorio Completo"}
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop" 
                    alt="Medical Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">
                      {language === "en" ? "Medical Services" : "Servicios Médicos"}
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 mb-4">
                    {language === "en" 
                      ? "Find Spanish-speaking doctors and specialists in Saudi Arabia."
                      : "Encuentra médicos y especialistas que hablan español en Arabia Saudita."
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">
                      {language === "en" ? "General Medicine" : "Medicina General"}
                    </Badge>
                    <Badge variant="outline">
                      {language === "en" ? "Pediatrics" : "Pediatría"}
                    </Badge>
                    <Badge variant="outline">
                      {language === "en" ? "Gynecology" : "Ginecología"}
                    </Badge>
                    <Badge variant="outline">
                      {language === "en" ? "Psychology" : "Psicología"}
                    </Badge>
                  </div>
                </Car