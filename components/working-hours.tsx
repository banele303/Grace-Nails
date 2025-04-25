"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

export default function WorkingHours() {
  const hours = [
    { day: "Monday - Saturday", hours: "8:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "2:00 PM - 4:00 PM" },
  ]

  return (
    <div>
      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
        <Clock className="h-5 w-5 text-pink-600" />
        <span>Working Hours</span>
      </h4>
      <ul className="space-y-2">
        {hours.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex justify-between"
          >
            <span className="text-muted-foreground">{item.day}</span>
            <span className="font-medium">{item.hours}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
