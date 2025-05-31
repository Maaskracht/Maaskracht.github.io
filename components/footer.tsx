import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Maaskracht Rotterdam</h3>
            <p className="text-gray-400 mb-4">
              Boksen voor iedereen, ongeacht leeftijd of niveau. Opgericht door Arjan Erkel.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/maaskrachtrotterdam/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Prijzen
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-400 hover:text-white transition-colors">
                  Locatie
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-400 hover:text-white transition-colors">
                  Aanmelden
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Schiehaven 15 C
                  <br />
                  3024 EC Rotterdam
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                <a href="tel:+31612345678" className="text-gray-400 hover:text-white transition-colors">
                  (Telefoonnummer)
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                <a
                  href="mailto:maaskrachtrotterdam@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  maaskrachtrotterdam@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Openingstijden</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Maandag - Vrijdag</span>
                <span className="text-gray-400">18:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Zaterdag</span>
                <span className="text-gray-400">10:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Zondag</span>
                <span className="text-gray-400">Gesloten</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Maaskracht Rotterdam. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacybeleid
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
