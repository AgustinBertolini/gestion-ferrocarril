import { Compass, Train, MapPin, Users, CreditCard, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Train className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">FerroGestión</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Inicio
            </Link>
            <Link href="/routes" className="text-sm font-medium">
              Rutas
            </Link>
            <Link href="/stations" className="text-sm font-medium">
              Estaciones
            </Link>
            <Link href="/formations" className="text-sm font-medium">
              Formaciones
            </Link>
            <Link href="/machinists" className="text-sm font-medium">
              Maquinistas
            </Link>
            <Link href="/tickets" className="text-sm font-medium">
              Venta de Pasajes
            </Link>
            <Link href="/reports" className="text-sm font-medium">
              Informes
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menú
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Panel de Control</h2>
            <p className="text-muted-foreground">
              Bienvenido al sistema de gestión ferroviaria. Administre rutas, estaciones, formaciones y venta de
              pasajes.
            </p>
          </div>
        </section>
        <section className="container py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rutas Activas</CardTitle>
                <Compass className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
              </CardContent>
              <CardFooter>
                <Link href="/routes">
                  <Button variant="outline" size="sm">
                    Ver rutas
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Estaciones</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">En 15 provincias</p>
              </CardContent>
              <CardFooter>
                <Link href="/stations">
                  <Button variant="outline" size="sm">
                    Ver estaciones
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pasajeros Mensuales</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,543</div>
                <p className="text-xs text-muted-foreground">+18% desde el mes pasado</p>
              </CardContent>
              <CardFooter>
                <Link href="/reports">
                  <Button variant="outline" size="sm">
                    Ver informes
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="container py-8">
          <h3 className="text-xl font-bold mb-4">Accesos Rápidos</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/tickets/new">
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Venta de Pasajes</CardTitle>
                  <CardDescription>
                    Registre nuevos pasajeros y venda pasajes para los viajes disponibles
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/tickets/cancel">
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <Train className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Cancelación de Pasajes</CardTitle>
                  <CardDescription>
                    Gestione las cancelaciones de pasajes con hasta 48 horas de antelación
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/reports">
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Informes y Estadísticas</CardTitle>
                  <CardDescription>
                    Consulte la recaudación y estadísticas de pasajeros por rutas y categorías
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FerroGestión. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
