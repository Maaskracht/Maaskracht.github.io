import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LocationSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-red-600" />
              <span className="text-lg font-medium">Rotterdam Centrum</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vind ons in het hart van Rotterdam</h2>
            <p className="text-lg text-gray-700">
              Maaskracht Rotterdam is centraal gelegen en gemakkelijk bereikbaar met het openbaar vervoer en de auto.
            
            </p>
            <div className="pt-4">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/location">
                  Bekijk locatie <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
