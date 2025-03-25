"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, Filter, MapPin, Phone, Mail, Star, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navigation from "@/components/Navigation";
import { services } from "@/lib/mockData";

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredServices, setFilteredServices] = useState(services);
  
  // Filter services based on search term and category
  useEffect(() => {
    let results = services;
    
    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(service => service.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(service => 
        service.name.toLowerCase().includes(term) || 
        service.description.toLowerCase().includes(term) ||
        service.specialty.toLowerCase().includes(term)
      );
    }
    
    setFilteredServices(results);
  }, [searchTerm, selectedCategory]);
  
  // Get unique categories
  const categories = ["all", ...new Set(services.map(service => service.category))];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Directorio de Servicios</h1>
            <p className="text-gray-600">Encuentra servicios en español en Arabia Saudita</p>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por nombre, especialidad o descripción..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Filtrar</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => setSelectedCategory("all")}>
                    Todos los servicios
                  </DropdownMenuItem>
                  {categories.filter(cat => cat !== "all").map((category) => (
                    <DropdownMenuItem 
                      key={category} 
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button>Buscar</Button>
            </div>
          </div>
          
          {/* Active filters */}
          {selectedCategory !== "all" && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-gray-500">Filtros activos:</span>
              <Badge variant="outline" className="flex items-center gap-1">
                {selectedCategory}
                <button onClick={() => setSelectedCategory("all")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </Badge>
            </div>
          )}
        </div>
        
        {/* Category Tabs */}
        <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="w-full flex overflow-x-auto pb-1 justify-start">
            <TabsTrigger value="all">Todos</TabsTrigger>
            {categories.filter(cat => cat !== "all").map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* Results Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              {filteredServices.length} {filteredServices.length === 1 ? "resultado" : "resultados"} encontrados
            </h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <span>Ordenar por</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Relevancia</DropdownMenuItem>
                <DropdownMenuItem>Mejor valorados</DropdownMenuItem>
                <DropdownMenuItem>Más recientes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                No hemos encontrado servicios que coincidan con tu búsqueda. Intenta con otros términos o filtros.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={service.image} 
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white text-gray-900 hover:bg-white">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {service.rating}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>{service.specialty}</CardDescription>
                      </div>
                      <Badge>{service.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-2">{service.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                        <div>
                          <p className="font-medium">{service.location}</p>
                          <p className="text-gray-500">{service.address}</p>
                        </div>
                      </div>
                      
                      {service.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>{service.phone}</span>
                        </div>
                      )}
                      
                      {service.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="truncate">{service.email}</span>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Idiomas:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.languages.map((language, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Contactar</Button>
                    <Button>Ver Detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {filteredServices.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-red-50 text-red-600 border-red-200">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="sm">8</Button>
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}