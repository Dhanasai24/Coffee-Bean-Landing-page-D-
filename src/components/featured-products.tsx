"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { mockCoffeeBeans } from "@/data/mock-data";
import { ROAST_LEVELS, PROCESS_TYPES } from "@/types";

function ProductCard({ bean, index }: { bean: typeof mockCoffeeBeans[0]; index: number }) {
  const roastInfo = ROAST_LEVELS.find(r => r.value === bean.roastLevel);
  const processInfo = PROCESS_TYPES.find(p => p.value === bean.process);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card group relative overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-coffee-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          src={bean.image}
          alt={bean.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {(bean.isNew || bean.isBestseller) && (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {bean.isNew && (
              <span className="px-3 py-1 text-xs font-semibold text-cream-50 bg-gold-500 rounded-full">
                New
              </span>
            )}
            {bean.isBestseller && (
              <span className="px-3 py-1 text-xs font-semibold text-coffee-900 bg-gold-400 rounded-full">
                Bestseller
              </span>
            )}
          </div>
        )}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <Link
            href={`/beans/${bean.slug}`}
            className="p-3 rounded-full bg-white/90 dark:bg-coffee-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
            aria-label={`Quick view ${bean.name}`}
          >
            <svg className="w-5 h-5 text-coffee-700 dark:text-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-gold-600 dark:text-gold-400 uppercase tracking-wide">
            {bean.origin}
          </span>
          <span className="w-px h-3 bg-cream-200 dark:bg-coffee-500" />
          <span className="text-xs text-coffee-500 dark:text-coffee-300">{bean.region}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-coffee-900 dark:text-cream-50 mb-2 group-hover:text-gold-500 transition-colors">
          {bean.name}
        </h3>

        <p className="text-sm text-coffee-500 dark:text-coffee-300 mb-4 line-clamp-2">
          {bean.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-cream-100 dark:bg-coffee-700 text-coffee-700 dark:text-cream-100 border border-cream-200 dark:border-coffee-500">
            {roastInfo?.label}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-cream-100 dark:bg-coffee-700 text-coffee-700 dark:text-cream-100 border border-cream-200 dark:border-coffee-500">
            {processInfo?.label}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-coffee-900 dark:text-cream-50">
              ${bean.price}
            </span>
            <span className="text-sm text-coffee-500 dark:text-coffee-300">/{bean.weight}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gold-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-coffee-700 dark:text-cream-100">
              {bean.rating} ({bean.reviewCount})
            </span>
          </div>
        </div>

        <Link
          href={`/beans/${bean.slug}`}
          className="mt-4 w-full btn-primary text-sm py-3"
        >
          View Details
        </Link>
      </div>
    </motion.article>
  );
}

export function FeaturedProducts() {
  const featuredBeans = mockCoffeeBeans.filter(b => b.isFeatured);

  return (
    <section id="featured" className="py-20 md:py-28 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--cream-100)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_var(--coffee-700)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold-400/10 text-gold-600 dark:text-gold-400 text-sm font-medium mb-4 border border-gold-400/20">
            Featured Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-coffee-900 dark:text-cream-50 mb-4">
            Our <span className="gradient-text">Top Picks</span>
          </h2>
          <p className="text-lg text-coffee-500 dark:text-coffee-300 max-w-2xl mx-auto">
            Hand-selected by our Q-graders. Each coffee represents the pinnacle of its origin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuredBeans.map((bean, index) => (
            <ProductCard key={bean.id} bean={bean} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/beans"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4"
          >
            View All Coffees
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}