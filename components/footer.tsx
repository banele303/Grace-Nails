import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GRACE NAILS</h3>
            <p className="mb-4 text-pink-100">Premium beauty and spa services in Glenanda, Johannesburg South.</p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.instagram.com/grace.beauty.glenanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:info@gracenails.com" className="text-white hover:text-pink-300 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-pink-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-pink-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-pink-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-pink-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-pink-100 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-pink-300" />
                <span>
                  11 Amanda Avenue, Glenanda
                  <br />
                  Johannesburg South
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-300" />
                <span>+27 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-pink-300" />
                <span>info@gracenails.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-8 pt-8 text-center text-pink-200">
          <p>&copy; {new Date().getFullYear()} GRACE NAILS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
