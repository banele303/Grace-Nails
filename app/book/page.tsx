"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setSubmitted(true)
  }

  const services = [
    "Gel Manicure",
    "Acrylic Full Set",
    "Express Facial",
    "Deep Cleansing Facial",
    "Back & Neck Massage",
    "Full Body Massage",
    "Express Manicure",
    "Luxury Manicure",
    "Express Pedicure",
    "Luxury Pedicure",
    "Eyebrow Wax",
    "Full Leg Wax",
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]

  return (
    <main className="flex min-h-screen flex-col pt-24">
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule your beauty and spa services with us. We look forward to pampering you!
            </p>
          </motion.div>

          {!submitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Your phone number" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-medium">
                        Service
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Preferred Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="time" className="block text-sm font-medium">
                        Preferred Time
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="notes" className="block text-sm font-medium">
                      Special Requests or Notes
                    </label>
                    <Textarea id="notes" placeholder="Any special requests or notes for your appointment" rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="bg-green-50 text-green-800 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold mb-2">Booking Request Received!</h2>
                <p>Thank you for booking with GRACE NAILS. We will confirm your appointment shortly.</p>
              </div>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Make Another Booking
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
