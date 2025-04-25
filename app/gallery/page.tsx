"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categories = ["All", "Nails", "Facial", "Spa", "Manicure", "Pedicure", "Interior"]

const galleryItems = [
  {
    id: 1,
    image: "/nails1.jpg",
    title: "Elegant Nail Art",
    category: "Nails",
    description: "Stunning nail art design with premium gel polish",
    featured: true
  },
  {
    id: 2,
    image: "/facial1.jpg",
    title: "Radiant Skin",
    category: "Facial",
    description: "Our signature facial treatment results",
    featured: true
  },
  {
    id: 3,
    image: "/medsf23.jpg",
    title: "Luxury Spa",
    category: "Spa",
    description: "Relaxing spa environment",
    featured: true
  },
  {
    id: 4,
    image: "/nails2.jpg",
    title: "Perfect Manicure",
    category: "Manicure",
    description: "Professional manicure with premium products",
    featured: false
  },
  {
    id: 5,
    image: "/perdicures3.jpg",
    title: "Heavenly Feet",
    category: "Pedicure",
    description: "Luxurious pedicure treatment",
    featured: false
  },
  {
    id: 6,
    image: "/sfmedspa.jpg",
    title: "Our Space",
    category: "Interior",
    description: "Beautiful and relaxing environment",
    featured: false
  },
  {
    id: 7,
    image: "/tooz.jpg",
    title: "Eyelash Extensions",
    category: "Beauty",
    description: "Professional eyelash extension application",
    featured: false
  },
  {
    id: 8,
    image: "/medsf2.jpg",
    title: "Spa Treatment",
    category: "Spa",
    description: "Relaxing spa treatment experience",
    featured: false
  },
  {
    id: 9,
    image: "/mdsf.jpg",
    title: "Massage Therapy",
    category: "Massage",
    description: "Professional massage therapy session",
    featured: false
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('/gallery/hero-bg.jpg')] bg-cover bg-center" />
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Explore our beautiful work and inspiring transformations
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-pink-600 hover:bg-pink-700 text-white" 
                    : "hover:bg-pink-50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                  item.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{item.description}</p>
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  )
} 