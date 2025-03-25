import Link from "next/link";
import Image from "next/image";
import { Search, Users, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { membershipPlans, upcomingEvents } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">Saudi</span>
              <span className="text-yellow-500">Hispanic</span> Connect
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Conectando a la comunidad hispanohablante en Arabia Saudita
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Encuentra servicios en español, conecta con otros hispanohablantes y accede a recursos para facilitar tu vida en Arabia Saudita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/auth">
                <Button size="lg" className="w-full sm:w-auto">Únete Ahora</Button>
              </Link>
              <Link href="/directory">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Explorar Directorio</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1578895210405-907db486c111?q=80&w=800&auto=format&fit=crop" 
                alt="Saudi Hispanic Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-red-600" />
                Directorio de Servicios
              </CardTitle>
              <CardDescription>Encuentra profesionales y negocios hispanohablantes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Accede a nuestro directorio de médicos, abogados, restaurantes y más servicios en español en toda Arabia Saudita.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/directory" className="w-full">
                <Button variant="outline" className="w-full">Explorar Directorio</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                Comunidad Activa
              </CardTitle>
              <CardDescription>Conecta con otros hispanohablantes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Participa en foros, eventos y grupos de interés para compartir experiencias y hacer nuevas amistades.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/community" className="w-full">
                <Button variant="outline" className="w-full">Unirse a la Comunidad</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-red-600" />
                Centro de Soporte
              </CardTitle>
              <CardDescription>Resuelve tus dudas sobre la vida en Arabia Saudita</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Encuentra respuestas a preguntas frecuentes y recibe asistencia personalizada para adaptarte al país.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/support" className="w-full">
                <Button variant="outline" className="w-full">Obtener Ayuda</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* Membership Plans */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Planes de Membresía</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de todos los beneficios.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {membershipPlans.map((plan) => (
            <Card key={plan.id} className={`${plan.recommended ? 'border-red-500 shadow-lg' : ''}`}>
              {plan.recommended && (
                <div className="bg-red-500 text-white text-center py-1 text-sm font-medium">
                  Recomendado
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-xl font-bold">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/auth" className="w-full">
                  <Button className="w-full" variant={plan.recommended ? "default" : "outline"}>
                    Seleccionar Plan
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  {event.date} • {event.time} • {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="/community" className="w-full">
                  <Button variant="outline" className="w-full">Ver Detalles</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/community">
            <Button variant="link" className="text-red-600">Ver todos los eventos →</Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SaudiHispanic Connect</h3>
            <p className="text-gray-400">
              Conectando a la comunidad hispanohablante en Arabia Saudita desde 2022.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
              <li><Link href="/directory" className="text-gray-400 hover:text-white">Directorio</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-white">Comunidad</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white">Soporte</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Términos de Servicio</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">info@saudihispanicconnect.com</li>
              <li className="text-gray-400">+966 11 234 5678</li>
              <li className="text-gray-400">Riyadh, Arabia Saudita</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 SaudiHispanic Connect. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}