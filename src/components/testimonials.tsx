"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mockTestimonials } from "@/data/mock-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--cream-50)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_var(--coffee-900)_0%,_transparent_70%)]" />
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
            Trusted by Coffee Lovers
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-coffee-900 dark:text-cream-50 mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-coffee-500 dark:text-coffee-300 max-w-2xl mx-auto">
            Real reviews from real coffee enthusiasts, baristas, and shop owners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {mockTestimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card p-6 lg:p-8 hover-lift relative"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-coffee-700 dark:text-cream-100 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {testimonial.coffeeName && (
                <p className="text-sm text-gold-600 dark:text-gold-400 font-medium mb-4">
                  &dash; {testimonial.coffeeName}
                </p>
              )}

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-cream-200 dark:ring-coffee-500">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-coffee-900 dark:text-cream-50">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-coffee-500 dark:text-coffee-300">
                    {testimonial.role}
                    {testimonial.company && <span className="text-coffee-400 dark:text-coffee-600">, {testimonial.company}</span>}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}