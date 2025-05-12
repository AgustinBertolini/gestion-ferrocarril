import { ArrowLeft, Printer, Ban } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function TicketDetailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/tickets">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Detalle del Pasaje</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
            <Button variant="destructive">
              <Ban className="mr-2 h-4 w-4" />
              Cancelar Pasaje
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl">Pasaje Nº P-00123</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Emitido el 10/05/2025</p>
                </div>
                <Badge className="text-lg py-1 px-3">Emitido</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Información del Pasajero</h3>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Nombre:</span> Juan Gómez
                    </p>
                    <p>
                      <span className="font-medium">DNI:</span> 25789456
                    </p>
                    <p>
                      <span className="font-medium">Fecha de Nacimiento:</span> 15/03/1980
                    </p>
                    <p>
                      <span className="font-medium">Edad:</span> 45 años
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Información del Viaje</h3>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Ruta:</span> Constitución - Mar del Plata
                    </p>
                    <p>
                      <span className="font-medium">Fecha:</span> 15/05/2025
                    </p>
                    <p>
                      <span className="font-medium">Hora de Salida:</span> 08:30 hs
                    </p>
                    <p>
                      <span className="font-medium">Duración Estimada:</span> 5h 15m
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-lg mb-2">Detalles del Recorrido</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Constitución</p>
                      <p className="text-sm text-muted-foreground">Salida: 08:30 hs</p>
                    </div>
                  </div>
                  <div className="ml-4 border-l-2 border-dashed border-muted-foreground h-8"></div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">2</div>
                    <div className="flex-1">
                      <p className="font-medium">Alejandro Korn</p>
                      <p className="text-sm text-muted-foreground">Parada: 09:15 hs (15 min)</p>
                    </div>
                  </div>
                  <div className="ml-4 border-l-2 border-dashed border-muted-foreground h-8"></div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">3</div>
                    <div className="flex-1">
                      <p className="font-medium">Chascomús</p>
                      <p className="text-sm text-muted-foreground">Parada: 10:30 hs (15 min)</p>
                    </div>
                  </div>
                  <div className="ml-4 border-l-2 border-dashed border-muted-foreground h-8"></div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Mar del Plata</p>
                      <p className="text-sm text-muted-foreground">Llegada: 13:45 hs</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Detalles del Asiento</h3>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Formación:</span> F-001
                    </p>
                    <p>
                      <span className="font-medium">Vagón:</span> 3
                    </p>
                    <p>
                      <span className="font-medium">Categoría:</span> Turista
                    </p>
                    <p>
                      <span className="font-medium">Butaca:</span> 45
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Detalles del Pago</h3>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Valor Base:</span> $800
                    </p>
                    <p>
                      <span className="font-medium">Descuento Estaciones:</span> -$16 (2%)
                    </p>
                    <p>
                      <span className="font-medium">Recargo Categoría:</span> $0 (0%)
                    </p>
                    <p>
                      <span className="font-medium">Total:</span> $784
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-between">
              <p className="text-sm text-muted-foreground">
                Este pasaje puede ser cancelado hasta 48 horas antes de la salida.
              </p>
              <p className="text-sm font-medium">Código de Verificación: ABC123XYZ</p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
