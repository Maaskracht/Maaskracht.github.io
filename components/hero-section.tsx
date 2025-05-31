import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/2e/38/0c/2e380c430b63f8ea2bf994851df3fa9a.jpg"
          alt="Maaskracht Boxing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Maaskracht Rotterdam</h1>
          <div className="w-20 h-1 bg-red-600 mb-6"></div>
          <p className="text-xl md:text-2xl text-white mb-8">
            Boksen voor iedereen. Ontdek hoe boksen je fysiek en mentaal sterker maakt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/signup">
                Proefles Aanvragen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black"
            >
              <Link href="/about">Meer over ons</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
