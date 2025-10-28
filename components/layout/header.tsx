"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          BizExpress
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/start-your-business/private-limited-company" className="text-sm hover:text-primary-600">
            Services
          </Link>
          <Link href="/about" className="text-sm hover:text-primary-600">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary-600">
            Contact
          </Link>
          <Link href="/contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/start-your-business/private-limited-company">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
