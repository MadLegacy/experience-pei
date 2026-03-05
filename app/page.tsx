import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Experience Péï 🌋
        </h1>
        <p className="text-gray-500 mb-8">
          Découvrez les meilleures activités de La Réunion
        </p>
        
        <Card className="p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">Randonnée Piton de la Fournaise</h2>
          <p className="text-gray-500 mb-4">Une expérience inoubliable au coeur du volcan actif.</p>
          <Button>Réserver</Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Surf à Saint-Leu</h2>
          <p className="text-gray-500 mb-4">Cours de surf pour tous niveaux face au lagon.</p>
          <Button>Réserver</Button>
        </Card>
      </div>
    </main>
  )
}