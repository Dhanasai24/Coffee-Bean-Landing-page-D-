"use client";

import { Canvas } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

function CoffeeBeanModel() {
  const { scene } = useGLTF("/models/coffee-bean.glb");
  const ref = useRef<THREE.Group>(null);

  return (
    <motion.group
      ref={ref}
      initial={{ rotationY: -Math.PI / 2, scale: 0.8 }}
      animate={{ rotationY: Math.PI * 1.5 }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      className="float"
    >
      <primitive object={scene} scale={1.5} />
    </motion.group>
  );
}

function FallbackBean() {
  return (
    <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] animate-float">
      <div className="absolute inset-0 bg-gradient-radial from-gold-400 via-coffee-500 to-coffee-900 rounded-full opacity-20 blur-3xl animate-pulse-soft" />
      <div className="relative w-full h-full">
        <svg className="w-full h-full text-gold-500" viewBox="0 0 200 200" fill="currentColor">
          <ellipse cx="100" cy="100" rx="70" ry="50" fill="url(#beanGradient)" />
          <defs>
            <linearGradient id="beanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c5a058" />
              <stop offset="50%" stopColor="#a88a4a" />
              <stop offset="100%" stopColor="#6f4e37" />
            </linearGradient>
          </defs>
          <path
            d="M100 50 Q100 40 110 50 Q115 55 100 65 Q85 55 90 50 Q100 40 100 50"
            fill="#8b6914"
            opacity="0.6"
          />
          <ellipse cx="100" cy="100" rx="65" ry="45" fill="none" stroke="#d4b87a" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[20px] bg-coffee-900/10 rounded-full blur-xl" />
    </div>
  );
}

function HeroContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--cream-50)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,_var(--coffee-900)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 text-gold-600 dark:text-gold-400 text-sm font-medium mb-6 border border-gold-400/20"
          >
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-soft" />
            Freshly Roasted • Ethically Sourced • Delivered to Your Door
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-coffee-900 dark:text-cream-50 mb-6"
          >
            Exceptional Coffee,{" "}
            <span className="gradient-text">Crafted for You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-coffee-500 dark:text-coffee-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Discover the world's finest specialty coffee beans. Sourced from sustainable farms, roasted to perfection, and delivered at peak freshness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#featured"
              className="btn-gold w-full sm:w-auto text-lg px-10 py-5"
            >
              Explore Our Beans
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#process"
              className="btn-secondary w-full sm:w-auto text-lg px-10 py-5"
            >
              Our Process
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-coffee-500 dark:text-coffee-300"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free shipping on orders $50+</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Roasted to order weekly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% satisfaction guarantee</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 30 }}
            gl={{ antialias: true, alpha: true }}
            className="w-full h-[500px] md:h-[600px]"
            onCreated={({ gl }) => {
              gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 10, 7]} intensity={1.5} />
            <directionalLight position={[-5, 5, -5]} intensity={0.5} />
            <Suspense fallback={<FallbackBean />}>
              <CoffeeBeanModel />
            </Suspense>
          </Canvas>
          
          <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-[180px] h-[180px] md:w-[250px] md:h-[250px] bg-gradient-radial from-gold-400/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-gradient-radial from-gold-300/20 via-transparent to-transparent rounded-full blur-3xl animate-float-slow" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg className="w-6 h-6 text-coffee-300 dark:text-coffee-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

export default function Hero() {
  return <HeroContent />;
}