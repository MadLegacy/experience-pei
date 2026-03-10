'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-900">Experience Péï 🌋</h1>
            <p className="text-gray-500">Découvrez les meilleures activités de La Réunion</p>
          </div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{user.email}</span>
              <Button variant="outline" onClick={handleLogout}>Se déconnecter</Button>
            </div>
          ) : (
            <Button onClick={() => router.push('/login')}>Se connecter</Button>
          )}
        </div>

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