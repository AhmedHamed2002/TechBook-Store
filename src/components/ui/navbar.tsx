"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

export default function Navbar() {
  const pathname = usePathname();
  const { items: favorites } = useAppSelector((s) => s.favorite);
  const { items: cart } = useAppSelector((s) => s.cart);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const links = [
    { href: "/", label: "Home", icon: <i className="fa-solid fa-house-chimney ms-1"></i> },
    { href: "/about", label: "About", icon: <i className="fa-solid fa-address-card  ms-1"></i> },
    { href: "/book", label: "Books", icon: <i className="fa-solid fa-book-bookmark ms-1"></i> },
    { href: "/favorite", label: "Favorite", icon: <i className="fa-solid fa-bookmark ms-1"></i> },
    { href: "/cart", label: "Cart", icon: <i className="fa-solid fa-basket-shopping"></i> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-[#123b69] dark:bg-[#111215] shadow-sm shadow-neutral-700">
        <div className="mx-auto container px-8 md:px-0 flex h-24 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center justify-between"> 
            <Link href="/" className="text-2xl font-semibold me-2">
              <Image src="/assets/images/ITbook.png" alt="Bookstore logo" width={70} height={70} priority className="rounded-full"/>
            </Link>
            <ModeToggle/>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4 text-amber-50/80">
            {links.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <Link 
                  key={href} 
                  href={href} 
                  className={`flex items-center gap-3 mx-2 text-lg transition-colors pb-1 relative ${isActive ? "text-yellow-400 border-b-2 border-yellow-400": "hover:text-gray-100 border-b-2 border-transparent"}`}
                >
                  {isClient && label === "Favorite" && favorites.length > 0 && (
                    <p className="bg-red-500/80 rounded-full px-1.5 text-sm absolute -top-2.5 -left-1.5">
                      {favorites.length}
                    </p>
                  )}
                  {isClient && label === "Cart" && cart.length > 0 && (
                    <p className="bg-red-500/80 rounded-full px-1.5 text-sm absolute -top-2.5 -left-1.5">
                      {cart.length}
                    </p>
                  )}
                  {icon} {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-amber-50 hover:text-yellow-500 cursor-pointer hover:bg-white/30">
                  <Menu className="h-8 w-8" strokeWidth={3} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="flex flex-col gap-8 px-6 pt-14">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigate through site pages</SheetDescription>
                </SheetHeader>

                {links.map(({ href, label, icon }) => {
                  const isActive = pathname === href;
                  return (
                    <Link key={href} href={href} className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? "text-yellow-500" : "hover:text-primary"}`}>
                      <div>{icon} {label}</div>
                      {isClient && label === "Favorite" && favorites.length > 0 && (
                        <p className="bg-red-500 text-white rounded-full px-1.5 text-sm absolute right-6">
                          {favorites.length}
                        </p>
                      )}
                      {isClient && label === "Cart" && cart.length > 0 && (
                        <p className="bg-red-500 text-white rounded-full px-1.5 text-sm absolute right-6">
                          {cart.length}
                        </p>
                      )}
                    </Link>
                  );
                })}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
