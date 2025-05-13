import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import { ArrowLeft, Search, Ban } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function CancelTicketPage() {
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
            <h1 className="text-xl font-bold">Cancelación de Pasajes</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Buscar Pasaje para Cancelar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="ticket-search">Número de Pasaje o DNI del Pasajero</Label>
                  <Input id="ticket-search" placeholder="Ingrese número de pasaje o DNI" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Buscar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Importante</AlertTitle>
            <AlertDescription>
              La cancelación de pasajes solo es posible hasta 48 horas antes de la salida del viaje. Pasado este tiempo,
              no se podrá realizar la cancelación.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Resultados de la Búsqueda</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Pasajero</TableHead>
                    <TableHead>DNI</TableHead>
                    <TableHead>Ruta</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Tiempo Restante</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">P-00123</TableCell>
                    <TableCell>Juan Gómez</TableCell>
                    <TableCell>25789456</TableCell>
                    <TableCell>Constitución - Mar del Plata</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell className="text-green-600">72 horas</TableCell>
                    <TableCell>
                      <Badge>Emitido</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="destructive" size="sm">
                        <Ban className="mr-2 h-3 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-00124</TableCell>
                    <TableCell>María López</TableCell>
                    <TableCell>30456789</TableCell>
                    <TableCell>Constitución - Miramar</TableCell>
                    <TableCell>15/05/2025</TableCell>
                    <TableCell className="text-green-600">72 horas</TableCell>
                    <TableCell>
                      <Badge>Emitido</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="destructive" size="sm">
                        <Ban className="mr-2 h-3 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-00126</TableCell>
                    <TableCell>Ana Martínez</TableCell>
                    <TableCell>35789123</TableCell>
                    <TableCell>Constitución - Mar del Plata</TableCell>
                    <TableCell>13/05/2025</TableCell>
                    <TableCell className="text-red-600">24 horas</TableCell>
                    <TableCell>
                      <Badge>Emitido</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="destructive" size="sm" disabled>
                        <Ban className="mr-2 h-3 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">P-00125</TableCell>
                    <TableCell>Pedro Sánchez</TableCell>
                    <TableCell>28123456</TableCell>
                    <TableCell>Constitución - Chascomús</TableCell>
                    <TableCell>16/05/2025</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Badge variant="outline">Cancelado</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="destructive" size="sm" disabled>
                        <Ban className="mr-2 h-3 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Confirmación de Cancelación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md p-4 bg-muted/20">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Número de Pasaje:</p>
                    <p className="text-sm">P-00123</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pasajero:</p>
                    <p className="text-sm">Juan Gómez (DNI: 25789456)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ruta:</p>
                    <p className="text-sm">Constitución - Mar del Plata</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Fecha y Hora:</p>
                    <p className="text-sm">15/05/2025 - 08:30 hs</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Valor del Pasaje:</p>
                    <p className="text-sm">$784</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Reembolso:</p>
                    <p className="text-sm">$784 (100%)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cancel-reason">Motivo de la Cancelación</Label>
                <Select>
                  <SelectTrigger id="cancel-reason">
                    <SelectValue placeholder="Seleccionar motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="change-date">Cambio de fecha</SelectItem>
                    <SelectItem value="change-route">Cambio de ruta</SelectItem>
                    <SelectItem value="personal">Motivos personales</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Comentarios (opcional)</Label>
                <Input id="comments" placeholder="Ingrese comentarios adicionales" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancelar</Button>
              <Button variant="destructive">Confirmar Cancelación</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
