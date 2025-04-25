"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full bg-gradient-to-r from-pink-100 to-pink-200 overflow-hidden">
      <div className="absolute inset-0 z-0">
      <Image
        src="/nails2.jpg"
        alt="GRACE NAILS Spa"
        fill
        className="object-cover opacity-30"
        priority
      />
    </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-pink-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GRACE NAILS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-pink-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate your beauty experience with our premium nail and spa services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              <Link href="/book">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  )
}
