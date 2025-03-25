"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { upcomingEvents } from "@/lib/mockData";
import { useLanguage } from "@/lib/languageContext";
import { Search, Users, HelpCircle } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E4E] mb-4">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {t("heroSubtitle")}
            </p>
            <p className="text-lg text-gray-500 mb-8">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/auth">
                <Button size="lg" className="w-full sm:w-auto bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                  {t("joinNow")}
                </Button>
              </Link>
              <Link href="/directory">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#0F1E4E] text-[#0F1E4E]">
                  {t("exploreDirectory")}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1578895210405-907db486c111?q=80&w=800&auto=format&fit=crop" 
                alt="Saudi Spanish Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0F1E4E] mb-12">{t("ourServices")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-[#0F1E4E]" />
                {t("directoryService")}
              </CardTitle>
              <CardDescription>{t("findProfessionals")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t("directoryDescription")}
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/directory" className="w-full">
                <Button variant="outline" className="w-full border-[#0F1E4E] text-[#0F1E4E]">
                  {t("exploreDirectory")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#0F1E4E]" />
                {t("activeCommunity")}
              </CardTitle>
              <CardDescription>{t("connectWithOthers")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t("communityDescription")}
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/community" className="w-full">
                <Button variant="outline" className="w-full border-[#0F1E4E] text-[#0F1E4E]">
                  {t("community")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#0F1E4E]" />
                {t("supportCenter")}
              </CardTitle>
              <CardDescription>{t("resolveQuestions")}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t("supportDescription")}
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/support" className="w-full">
                <Button variant="outline" className="w-full border-[#0F1E4E] text-[#0F1E4E]">
                  {t("support")}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0F1E4E] mb-12">{t("upcomingEvents")}</h2>
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
                  <Button variant="outline" className="w-full border-[#0F1E4E] text-[#0F1E4E]">
                    {t("viewDetails")}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/community">
            <Button variant="link" className="text-[#0F1E4E]">{t("viewAllEvents")} →</Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0F1E4E] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 bg-white rounded-full overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Saudi Spanish Club Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">SAUDI SPANISH CLUB</h3>
            </div>
            <p className="text-gray-300">
              Connecting the Spanish-speaking community in Saudi Arabia since 2022.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-gray-300 hover:text-white">{t("dashboard")}</Link></li>
              <li><Link href="/directory" className="text-gray-300 hover:text-white">{t("directory")}</Link></li>
              <li><Link href="/community" className="text-gray-300 hover:text-white">{t("community")}</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white">{t("support")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("legal")}</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">{t("termsOfService")}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">{t("privacyPolicy")}</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">{t("cookies")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("contact")}</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">info@saudispanishclub.com</li>
              <li className="text-gray-300">+966 11 234 5678</li>
              <li className="text-gray-300">Riyadh, Saudi Arabia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
          <p>© 2024 Saudi Spanish Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}