"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mockProcessSteps } from "@/data/mock-data";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
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
            Farm to Cup
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-coffee-900 dark:text-cream-50 mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-coffee-500 dark:text-coffee-300 max-w-2xl mx-auto">
            Transparency at every step. From the farm gate to your cup, we honor the craft.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 lg:space-y-16"
        >
          {mockProcessSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden card relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-coffee-500/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 via-transparent to-transparent" />
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-coffee-900/90 backdrop-blur-sm text-sm font-medium text-coffee-900 dark:text-cream-50">
                      Step {step.id}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gold-gradient mb-6 mx-auto lg:mx-0 hover-glow transition-all duration-300">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-display text-3xl font-semibold text-coffee-900 dark:text-cream-50 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-coffee-500 dark:text-coffee-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}