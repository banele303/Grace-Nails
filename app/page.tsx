"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServiceCard from "@/components/service-card"
import HeroSection from "@/components/hero-section"
import WorkingHours from "@/components/working-hours"
import BookingForm from "@/components/booking-form"
import WhatsAppButton from "@/components/whatsapp-button"
import Image from "next/image"
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Enhanced Services Section */}
      <section id="services" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Indulge in our premium beauty and spa services designed to pamper and rejuvenate you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Acrylic Overlay & Gel"
              description="Professional acrylic overlay with gel finish"
              image="/nails1.jpg"
              price="R250"
              duration="1 hour"
            />
            <ServiceCard
              title="Full Body Swedish Massage"
              description="Relaxing full body massage treatment"
              image="/medsf23.jpg"
              price="R350"
              duration="1 hour"
            />
            <ServiceCard
              title="Hydrating Facial"
              description="Deep hydrating facial treatment"
              image="/facial1.jpg"
              price="R350"
              duration="1 hour"
            />
            <ServiceCard
              title="Full Pedi + Gel"
              description="Complete pedicure treatment with gel polish"
              image="/perdicures3.jpg"
              price="R300"
              duration="1 hour"
            />
            <ServiceCard
              title="Eyelash Extensions - Classic"
              description="Classic eyelash extension application"
              image="/tooz.jpg"
              price="R350"
              duration="1.5 hours"
            />
            <ServiceCard
              title="Gel Hand Application"
              description="Professional gel polish for hands"
              image="/nails2.jpg"
              price="R200"
              duration="45 mins"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

    

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 bg-pink-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to GRACE NAILS</h2>
              <p className="text-muted-foreground mb-6">
                At GRACE NAILS, we believe in providing exceptional beauty and spa services in a relaxing and welcoming
                environment. Our skilled professionals are dedicated to enhancing your natural beauty and ensuring you
                leave feeling refreshed and rejuvenated.
              </p>
              <p className="text-muted-foreground mb-6">
                We use only premium products and the latest techniques to deliver outstanding results that exceed your
                expectations.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="rounded-lg overflow-hidden shadow-xl w-full max-h-[500px] flex justify-center items-center"
>
  <Image
    src="/sfmedspa.jpg"
    alt="GRACE NAILS Spa Interior"
    width={400}
    height={500}
    className="object-contain w-full h-full"
  />
</motion.div>

          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Book Your Appointment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We'd love to welcome you to our beauty sanctuary. Book your appointment today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0141886912384!2d28.0092!3d-26.2654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a7f%3A0x4c7944a1f0fc9478!2s11%20Amanda%20Ave%2C%20Glenanda%2C%20Johannesburg%20South%2C%202091%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GRACE NAILS Location"
                  ></iframe>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Address</h4>
                      <p className="text-muted-foreground">11 Amanda Avenue, Glenanda</p>
                      <p className="text-muted-foreground">Johannesburg South</p>
                    </div>

                    <WorkingHours />

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
                      <Link
                        href="https://www.instagram.com/grace.beauty.glenanda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>@grace.beauty.glenanda</span>
                      </Link>
                    </div>

                    <div className="space-y-4">
                      <Button asChild size="lg" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
                        <Link href="/book">Book Online</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="w-full">
                        <Link href="tel:+27123456789">Call Us Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <BookingForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


        {/* Stunning Gallery Section
        <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Our Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our beautiful work and inspiring transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                image: "/nails1.jpg",
                title: "Elegant Nail Art",
                category: "Nails",
                description: "Stunning nail art design with premium gel polish"
              },
              {
                image: "/facial1.jpg",
                title: "Radiant Skin",
                category: "Facial",
                description: "Our signature facial treatment results"
              },
              {
                image: "/medsf23.jpg",
                title: "Luxury Spa",
                category: "Spa",
                description: "Relaxing spa environment"
              },
              {
                image: "/nails2.jpg",
                title: "Perfect Manicure",
                category: "Manicure",
                description: "Professional manicure with premium products"
              },
              {
                image: "/perdicures3.jpg",
                title: "Heavenly Feet",
                category: "Pedicure",
                description: "Luxurious pedicure treatment"
              },
              {
                image: "/sfmedspa.jpg",
                title: "Our Space",
                category: "Interior",
                description: "Beautiful and relaxing environment"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="relative aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Special Offers Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Treat yourself to our exclusive packages and seasonal specials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pamper Package</h3>
                <p className="text-muted-foreground mb-4">
                  Enjoy our signature manicure and pedicure combo with a relaxing hand and foot massage. Includes our premium polish application.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-600">R450</span>
                  <Button asChild>
                    <Link href="/book">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Spa Day Special</h3>
                <p className="text-muted-foreground mb-4">
                  Indulge in a full day of pampering with facial, massage, and nail services. Perfect for special occasions or self-care days.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-600">R850</span>
                  <Button asChild>
                    <Link href="/book">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Monthly Membership</h3>
                <p className="text-muted-foreground mb-4">
                  Join our exclusive membership program for regular treatments at discounted rates. Includes priority booking and special member-only events.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-600">R299/mo</span>
                  <Button asChild>
                    <Link href="/membership">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our valued clients have to say about their experience at
              GRACE NAILS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-yellow-500">{"★★★★★"}</div>
                  <p className="mb-4 italic text-gray-700">
                    "I've been coming to GRACE NAILS for over a year now, and I'm always impressed by their attention to detail. The 'Royal Treatment' manicure is my absolute favorite - my hands have never felt so pampered!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold">
                      SM
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Sarah M.</p>
                      <p className="text-sm text-gray-600">Regular Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-yellow-500">{"★★★★★"}</div>
                  <p className="mb-4 italic text-gray-700">
                    "The Spa Day Special was the perfect birthday treat! The staff made me feel so special, and the results were amazing. I'll definitely be back for more pampering sessions."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-bold">
                      JT
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Jessica T.</p>
                      <p className="text-sm text-gray-600">First-time Visitor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-pink-100 to-purple-100 border-pink-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 text-yellow-500">{"★★★★★"}</div>
                  <p className="mb-4 italic text-gray-700">
                    "As a monthly member, I love the convenience and value of the membership program. The priority booking is a game-changer, and the member-only events are always so much fun!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold">
                      MR
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Michaela R.</p>
                      <p className="text-sm text-gray-600">Monthly Member</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add WhatsApp Button */}
      <WhatsAppButton />

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and policies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How far in advance should I book?</h3>
                <p className="text-muted-foreground">
                  We recommend booking at least 1-2 weeks in advance for popular time slots. Members enjoy priority booking privileges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What is your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  We require 24 hours notice for cancellations. Late cancellations may be subject to a fee. Members receive one free late cancellation per month.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer gift certificates?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer digital and physical gift certificates that can be used for any service or package. Perfect for birthdays, anniversaries, or just because!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What products do you use?</h3>
                <p className="text-muted-foreground">
                  We use only premium, professional-grade products from trusted brands. All our products are cruelty-free and many are vegan-friendly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
