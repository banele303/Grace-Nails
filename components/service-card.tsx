"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  price?: string
  duration?: string
}

export default function ServiceCard({ title, description, image, price, duration }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden border-pink-100 hover:border-pink-300 transition-colors group">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm opacity-90 mb-3">{description}</p>
                {(price || duration) && (
                  <div className="flex flex-wrap gap-4">
                    {price && (
                      <span className="inline-block px-3 py-1 bg-white/30 rounded-full text-sm backdrop-blur-sm">
                        {price}
                      </span>
                    )}
                    {duration && (
                      <span className="inline-block px-3 py-1 bg-white/30 rounded-full text-sm backdrop-blur-sm">
                        {duration}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
