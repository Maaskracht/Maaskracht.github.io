import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TrainingSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Trainingen</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Bij Maaskracht Rotterdam bieden we verschillende soorten bokstrainingen aan voor alle niveaus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Training Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image src="https://i.pinimg.com/736x/44/6a/d2/446ad24684c35ed44ac8e730aef6b7fa.jpg" alt="Beginners Boksen" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Beginners Boksen</h3>
              <p className="text-gray-600 mb-4">
                Perfect voor mensen zonder ervaring. Leer de basistechnieken en bouw conditie op in een veilige
                omgeving.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/signup">
                  Aanmelden <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Training Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image
                src="https://i.pinimg.com/736x/ee/f5/0f/eef50f96558062d68313401652aa39f7.jpg"
                alt="Techniek & Sparring"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Techniek & Sparring</h3>
              <p className="text-gray-600 mb-4">
                Voor gevorderde boksers. Focus op technische vaardigheden en licht sparren met andere boksers.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/signup">
                  Aanmelden <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Training Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image src="https://i.pinimg.com/736x/29/73/ab/2973abbcd4a71aa50d9afebaa948faf7.jpg" alt="Conditie Boksen" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Conditie Boksen</h3>
              <p className="text-gray-600 mb-4">
                Intensieve training gericht op conditie en kracht. Combineer bokstechnieken met cardio oefeningen.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/signup">
                  Aanmelden <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/pricing">
              Bekijk alle lidmaatschappen <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
