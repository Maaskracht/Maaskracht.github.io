import Image from "next/image"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat onze leden zeggen</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ontdek waarom onze leden kiezen voor Maaskracht Rotterdam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/placeholder.svg?height=100&width=100" alt="Testimonial" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Thomas de Vries</h3>
                <p className="text-sm text-gray-500">Lid sinds 2021</p>
              </div>
            </div>
            <Quote className="h-8 w-8 text-red-600 opacity-20 mb-2" />
            <p className="text-gray-700 italic">
              "Sinds ik bij Maaskracht train, voel ik me zowel fysiek als mentaal sterker. De trainers zijn
              professioneel en de sfeer is altijd goed. Echt een aanrader!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/placeholder.svg?height=100&width=100" alt="Testimonial" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Laura Jansen</h3>
                <p className="text-sm text-gray-500">Lid sinds 2022</p>
              </div>
            </div>
            <Quote className="h-8 w-8 text-red-600 opacity-20 mb-2" />
            <p className="text-gray-700 italic">
              "Als beginner was ik eerst wat huiverig om te gaan boksen, maar bij Maaskracht werd ik meteen op mijn
              gemak gesteld. De trainingen zijn uitdagend maar altijd op je eigen niveau."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/placeholder.svg?height=100&width=100" alt="Testimonial" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Mohammed El Amrani</h3>
                <p className="text-sm text-gray-500">Lid sinds 2020</p>
              </div>
            </div>
            <Quote className="h-8 w-8 text-red-600 opacity-20 mb-2" />
            <p className="text-gray-700 italic">
              "De persoonlijke aandacht en professionele begeleiding bij Maaskracht is echt top. In twee jaar tijd heb
              ik enorme vooruitgang geboekt, zowel technisch als conditioneel."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
