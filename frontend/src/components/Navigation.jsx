"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Home, 
  User, 
  Search, 
  HelpCircle, 
  Users, 
  Menu, 
  X, 
  LogIn,
  Globe,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/languageContext";
import { users } from "@/lib/mockData";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  // Mock logged in user - in a real app, this would come from authentication
  const isLoggedIn = false;
  const currentUser = isLoggedIn ? users[0] : null;
  const isAdmin = currentUser?.role === "admin";

  const isActive = (path) => pathname === path;

  const navItems = [
    { name: t("home"), path: "/", icon: <Home className="h-5 w-5" /> },
    { name: t("dashboard"), path: "/dashboard", icon: <Home className="h-5 w-5" /> },
    { name: t("profile"), path: "/profile", icon: <User className="h-5 w-5" /> },
    { name: t("directory"), path: "/directory", icon: <Search className="h-5 w-5" /> },
    { name: t("support"), path: "/support", icon: <HelpCircle className="h-5 w-5" /> },
    { name: t("community"), path: "/community", icon: <Users className="h-5 w-5" /> },
  ];

  // Add admin link if user is admin
  if (isAdmin) {
    navItems.push({ 
      name: t("adminPanel"), 
      path: "/admin", 
      icon: <ShieldCheck className="h-5 w-5" /> 
    });
  }

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/logo.png" 
                  alt="Saudi Spanish Club Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[#0F1E4E]">SAUDI SPANISH CLUB</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 ${
                  isActive(item.path)
                    ? "bg-[#0F1E4E]/10 text-[#0F1E4E]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage}
              className="flex items-center gap-1"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1">{language === "en" ? "ES" : "EN"}</span>
            </Button>
            
            <Link href="/auth">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <LogIn className="h-4 w-4" />
                <span>{t("login")}</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleLanguage}
              className="mr-2"
            >
              <Globe className="h-5 w-5" />
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{language === "en" ? "Menu" : "Menú"}</span>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${
                          isActive(item.path)
                            ? "bg-[#0F1E4E]/10 text-[#0F1E4E]"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <Link href="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="w-full flex items-center justify-center gap-2 bg-[#0F1E4E] hover:bg-[#0F1E4E]/90">
                        <LogIn className="h-4 w-4" />
                        <span>{t("login")}</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}