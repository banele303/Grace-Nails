import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us for appointments, inquiries, or feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-0.5 text-pink-600" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">11 Amanda Avenue, Glenanda</p>
                      <p className="text-muted-foreground">Johannesburg South</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-pink-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+27 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-pink-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@gracenails.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 mt-0.5 text-pink-600" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 2:00 PM - 4:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <Link
                        href="https://www.instagram.com/grace.beauty.glenanda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:underline"
                      >
                        @grace.beauty.glenanda
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
