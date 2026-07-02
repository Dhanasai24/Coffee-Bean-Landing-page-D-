"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#featured", label: "Featured" },
  { href: "#features", label: "Features" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-white/95 dark:bg-coffee-900/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl font-semibold text-coffee-900 dark:text-cream-50 transition-colors hover:text-gold-500"
            aria-label="Bean & Brew Home"
          >
            Bean & Brew
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-coffee-700 dark:text-cream-100 hover:text-gold-500 dark:hover:text-gold-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-gold-500 after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left transition-transform duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="#newsletter"
              className="hidden sm:block px-5 py-2.5 text-sm font-medium text-coffee-700 dark:text-cream-100 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
            >
              Subscribe
            </Link>
            <Link
              href="#featured"
              className="px-6 py-2.5 text-sm font-medium text-cream-50 bg-coffee-700 hover:bg-coffee-900 dark:bg-cream-100 dark:hover:bg-cream-200 dark:text-coffee-900 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Shop Now
            </Link>

            <button
              className="md:hidden p-2 text-coffee-700 dark:text-cream-100 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence>
                {isMobileMenuOpen ? (
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-4 space-y-4 border-t border-cream-200 dark:border-coffee-500">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-2 py-2 text-base font-medium text-coffee-700 dark:text-cream-100 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <Link
                    href="#newsletter"
                    className="px-5 py-2.5 text-sm font-medium text-coffee-700 dark:text-cream-100 hover:text-gold-500 dark:hover:text-gold-400 transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Subscribe
                  </Link>
                  <Link
                    href="#featured"
                    className="px-6 py-2.5 text-sm font-medium text-cream-50 bg-coffee-700 hover:bg-coffee-900 dark:bg-cream-100 dark:hover:bg-cream-200 dark:text-coffee-900 rounded-full transition-all duration-300 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}