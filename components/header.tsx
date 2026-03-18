"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#compare", label: "Produto" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#features", label: "Funcionalidades" },
  { href: "#why", label: "Por que a RHCTech" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/92 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex h-[68px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-[9px] bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">R</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">RHCTech</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="#contato"
              className="hidden lg:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-display font-semibold hover:bg-foreground/85 transition-all hover:-translate-y-px"
            >
              Solicitar Demo →
            </Link>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 bg-background flex flex-col px-6 pt-8 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-xl font-display font-semibold text-foreground border-b border-border last:border-none hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center bg-primary text-primary-foreground px-6 py-4 rounded-full text-base font-display font-bold hover:bg-primary/90 transition-all"
          >
            Solicitar Demo →
          </Link>
        </div>
      )}
    </>
  )
}
