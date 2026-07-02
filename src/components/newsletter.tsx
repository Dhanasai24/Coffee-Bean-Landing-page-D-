"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "Name is required").optional(),
});

type NewsletterForm = z.infer<typeof schema>;

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "" },
  });

  const onSubmit = async (data: NewsletterForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Subscription failed");

      setIsSubmitted(true);
      reset();
      toast.success("Welcome to Bean & Brew!", {
        description: "Check your inbox for a special welcome offer.",
      });
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-700 to-coffee-900" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold-400/20 text-gold-300 text-sm font-medium mb-6 border border-gold-400/30">
            Join the Club
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream-50 mb-4">
            Get 15% Off Your First Order
          </h2>
          <p className="text-lg text-cream-200 mb-8 max-w-lg mx-auto">
            Subscribe for brewing tips, new arrivals, and exclusive offers. No spam, just great coffee content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-400/20 mb-6"
                >
                  <svg className="w-10 h-10 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h3 className="font-display text-2xl font-semibold text-cream-50 mb-2">
                  You're In!
                </h3>
                <p className="text-cream-200">
                  Check your inbox for your 15% off code and our latest coffee discoveries.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-gold-400 hover:text-gold-300 font-medium text-sm flex items-center justify-center gap-1 mx-auto"
                >
                  Subscribe with another email
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name (optional)
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      placeholder="Your name (optional)"
                      className="w-full px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-cream-50 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-cream-50 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-transparent transition-all"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="email-error"
                        className="text-sm text-red-400 mt-1 ml-6"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe & Save 15%"
                  )}
                </button>

                <p className="text-sm text-cream-400 text-center">
                  By subscribing, you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-gold-400 transition-colors">
                    Privacy Policy
                  </a>
                  . Unsubscribe anytime.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
        >
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">10K+</div>
            <div className="text-cream-200 text-sm">Happy Subscribers</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">52</div>
            <div className="text-cream-200 text-sm">Weekly Editions</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-1">100%</div>
            <div className="text-cream-200 text-sm">Spam Free</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}