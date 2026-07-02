"use client";

import { motion } from "framer-motion";
import { mockFeatures } from "@/data/mock-data";
import { FeatureIcon } from "./feature-icons";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 relative">
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
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-coffee-900 dark:text-cream-50 mb-4">
            Coffee <span className="gradient-text">Done Right</span>
          </h2>
          <p className="text-lg text-coffee-500 dark:text-coffee-300 max-w-2xl mx-auto">
            Every decision we make—from farm partnerships to packaging—is driven by quality and integrity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {mockFeatures.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card p-6 lg:p-8 text-center hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gold-gradient mb-6 hover-glow transition-all duration-300">
                <FeatureIcon name={feature.icon} className="w-8 h-8 text-coffee-900" />
              </div>
              <h3 className="font-display text-xl font-semibold text-coffee-900 dark:text-cream-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-coffee-500 dark:text-coffee-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}