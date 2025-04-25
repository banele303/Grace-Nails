'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type ServiceItem = {
  name: string
  price: string
  duration?: string
}

type Service = {
  category: string
  description?: string
  image?: string
  items: ServiceItem[]
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      category: "Nails",
      description: "Transform your nails with our premium nail services. From classic manicures to intricate nail art, our skilled technicians use only the highest quality products to ensure your nails look flawless and last longer.",
      image: "/nails1.jpg",
      items: [
        { name: "Gel Manicure", price: "R250", duration: "45 min" },
        { name: "Acrylic Full Set", price: "R350", duration: "1.5 hours" },
        { name: "Nail Art (per nail)", price: "R20", duration: "5 min" },
        { name: "Gel Polish Removal", price: "R80", duration: "20 min" },
      ],
    },
    {
      category: "Facial",
      description: "Rejuvenate your skin with our customized facial treatments. Our expert estheticians analyze your skin type and concerns to provide personalized care that leaves your skin glowing and refreshed.",
      image: "/facial1.jpg",
      items: [
        { name: "Express Facial", price: "R300", duration: "30 min" },
        { name: "Deep Cleansing Facial", price: "R450", duration: "1 hour" },
        { name: "Anti-Aging Facial", price: "R550", duration: "1.5 hours" },
        { name: "Hydrating Facial", price: "R400", duration: "45 min" },
      ],
    },
    {
      category: "Massage",
      description: "Relax and rejuvenate with our therapeutic massage services. Our experienced therapists use various techniques to relieve tension, improve circulation, and promote overall wellness.",
      image: "/medsf23.jpg",
      items: [
        { name: "Back & Neck Massage (30 min)", price: "R280" },
        { name: "Full Body Massage (60 min)", price: "R500" },
        { name: "Hot Stone Massage", price: "R600" },
        { name: "Aromatherapy Massage", price: "R550" },
      ],
    },
    {
      category: "Manicure",
      description: "Treat your hands to our luxurious manicure services. We offer a range of options from express to luxury treatments, all designed to keep your hands looking and feeling their best.",
      image: "/tooz.jpg",
      items: [
        { name: "Express Manicure", price: "R150" },
        { name: "Luxury Manicure", price: "R250" },
        { name: "Paraffin Manicure", price: "R300" },
        { name: "Men's Manicure", price: "R180" },
      ],
    },
    {
      category: "Pedicure",
      description: "Step out with confidence after our refreshing pedicure treatments. Our pedicures combine relaxation with effective foot care, leaving your feet soft, smooth, and beautifully polished.",
      image: "/perdicures3.jpg",
      items: [
        { name: "Express Pedicure", price: "R180" },
        { name: "Luxury Pedicure", price: "R280" },
        { name: "Callus Removal", price: "R100" },
        { name: "Men's Pedicure", price: "R220" },
      ],
    },
    {
      category: "Wax",
      description: "Achieve smooth, hair-free skin with our professional waxing services. We use high-quality wax and techniques to ensure minimal discomfort and long-lasting results.",
      image: "/p.jpg",
      items: [
        { name: "Eyebrow Wax", price: "R80" },
        { name: "Lip Wax", price: "R60" },
        { name: "Underarm Wax", price: "R100" },
        { name: "Full Leg Wax", price: "R280" },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col pt-24">
      <section className="py-12 px-4 md:px-8 bg-pink-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and spa services designed to pamper and rejuvenate you.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3 relative aspect-[4/3]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.category}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4 text-pink-800">
                      {service.category}
                    </h2>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-pink-100">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-pink-600 font-semibold">{item.price}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          {item.duration && <span>Duration: {item.duration}</span>}
                          <Button size="sm" variant="outline" className="text-pink-600">
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Please note that prices may vary depending on specific requirements. Contact us for a personalized quote.
            </p>
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Link href="/book">Book Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
