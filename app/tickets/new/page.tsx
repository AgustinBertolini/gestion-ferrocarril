import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Info } from "lucide-react"

export default function NewTicketPage() {
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
            <h1 className="text-xl font-bold">Nuevo Pasaje</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="passenger">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="passenger">Pasajero</TabsTrigger>
              <TabsTrigger value="trip">Viaje</TabsTrigger>
              <TabsTrigger value="payment">Pago y Emisión</TabsTrigger>
            </TabsList>

            <TabsContent value="passenger">
              <Card>
                <CardHeader>
                  <CardTitle>Información del Pasajero</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Ingrese el nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Apellido</Label>
                      <Input id="lastname" placeholder="Ingrese el apellido" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dni">DNI</Label>
                      <Input id="dni" placeholder="Ingrese el DNI" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Fecha de Nacimiento</Label>
                      <Input id="birthdate" type="date" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="minor" />
                      <Label htmlFor="minor">Es menor de edad</Label>
                    </div>
                  </div>

                  <div id="responsible-section" className="grid grid-cols-2 gap-4 border p-4 rounded-md bg-muted/20">
                    <div className="space-y-2">
                      <Label htmlFor="responsible">Responsable</Label>
                      <Select disabled>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar responsable" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">Agregar nuevo responsable</SelectItem>
                          <SelectItem value="existing">Seleccionar pasajero existente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship">Parentesco</Label>
                      <Select disabled>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar parentesco" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Padre/Madre</SelectItem>
                          <SelectItem value="grandparent">Abuelo/a</SelectItem>
                          <SelectItem value="sibling">Hermano/a</SelectItem>
                          <SelectItem value="uncle">Tío/a</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Información</AlertTitle>
                    <AlertDescription>
                      Los menores de 12 años tienen un descuento del 50% en el valor del pasaje. Los menores de edad
                      deben viajar con un responsable.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Continuar</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="trip">
              <Card>
                <CardHeader>
                  <CardTitle>Información del Viaje</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="route">Ruta</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar ruta" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="constitucion-miramar">Constitución - Miramar</SelectItem>
                          <SelectItem value="retiro-rosario">Retiro - Rosario</SelectItem>
                          <SelectItem value="la-plata-mar-del-plata">La Plata - Mar del Plata</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Fecha del Viaje</Label>
                      <Input id="date" type="date" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="origin">Estación de Origen</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar origen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="constitucion">Constitución</SelectItem>
                          <SelectItem value="alejandro-korn">Alejandro Korn</SelectItem>
                          <SelectItem value="chascomus">Chascomús</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Estación de Destino</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar destino" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alejandro-korn">Alejandro Korn</SelectItem>
                          <SelectItem value="chascomus">Chascomús</SelectItem>
                          <SelectItem value="mar-del-plata">Mar del Plata</SelectItem>
                          <SelectItem value="miramar">Miramar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="formation">Formación</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar formación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="f-001">F-001 (Constitución - Miramar, 15/05/2025)</SelectItem>
                        <SelectItem value="f-002">F-002 (Constitución - Mar del Plata, 15/05/2025)</SelectItem>
                        <SelectItem value="f-003">F-003 (Constitución - Chascomús, 16/05/2025)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Información de Tramos</AlertTitle>
                    <AlertDescription>
                      El viaje seleccionado tiene estaciones intermedias en Alejandro Korn, Chascomús y Mar del Plata.
                      El tiempo de demora en cada estación intermedia es de 15 minutos adicionales.
                    </AlertDescription>
                  </Alert>

                  <Separator />

                  <div className="space-y-4">
                    <Label>Categoría</Label>
                    <RadioGroup defaultValue="turista">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="turista" id="turista" />
                        <Label htmlFor="turista">Turista (sin recargo)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pullman" id="pullman" />
                        <Label htmlFor="pullman">Pullman (+5% recargo)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ejecutivo" id="ejecutivo" />
                        <Label htmlFor="ejecutivo">Ejecutivo (+10% recargo)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seat">Selección de Butaca</Label>
                    <div className="border rounded-md p-4 bg-muted/20">
                      <div className="flex justify-between mb-4">
                        <Select defaultValue="vagon-1">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccionar vagón" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vagon-1">Vagón 1 - Turista</SelectItem>
                            <SelectItem value="vagon-2">Vagón 2 - Pullman</SelectItem>
                            <SelectItem value="vagon-3">Vagón 3 - Ejecutivo</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                            <span className="text-xs">Disponible</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                            <span className="text-xs">Ocupado</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                            <span className="text-xs">Seleccionado</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <Button key={i} variant="outline" size="sm" className="h-10 w-10">
                            {i + 1}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-4 text-center text-sm text-muted-foreground">
                        Mostrando butacas 1-24 de 72. Desplácese para ver más.
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Información</AlertTitle>
                    <AlertDescription>
                      Recuerde que una butaca puede ser ocupada en diferentes tramos. Por ejemplo, la butaca 15 puede
                      estar ocupada de Constitución a Chascomús por un pasajero, y luego de Chascomús a Mar del Plata
                      por otro.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Atrás</Button>
                  <Button>Continuar</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Resumen y Pago</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 border-b pb-4">
                    <div>
                      <h3 className="font-medium">Información del Pasajero</h3>
                      <p className="text-sm text-muted-foreground mt-2">Juan Gómez</p>
                      <p className="text-sm text-muted-foreground">DNI: 25789456</p>
                      <p className="text-sm text-muted-foreground">Fecha de Nacimiento: 15/03/1980</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Información del Viaje</h3>
                      <p className="text-sm text-muted-foreground mt-2">Ruta: Constitución - Mar del Plata</p>
                      <p className="text-sm text-muted-foreground">Fecha: 15/05/2025 - 08:30 hs</p>
                      <p className="text-sm text-muted-foreground">Categoría: Turista - Vagón 1 - Butaca 45</p>
                      <p className="text-sm text-muted-foreground">Duración estimada: 5h 15m</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Detalle del Costo</h3>
                    <div className="bg-muted/20 p-4 rounded-md space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Valor base del tramo (400 km x $2)</span>
                        <span className="text-sm">$800</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Descuento por estaciones intermedias (2% x 2 estaciones)</span>
                        <span className="text-sm text-red-500">-$32</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Recargo por categoría (0% - Turista)</span>
                        <span className="text-sm">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Descuento por menor de edad (0%)</span>
                        <span className="text-sm">$0</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>$768</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Método de Pago</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar método de pago" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Tarjeta de Crédito</SelectItem>
                        <SelectItem value="debit-card">Tarjeta de Débito</SelectItem>
                        <SelectItem value="cash">Efectivo</SelectItem>
                        <SelectItem value="transfer">Transferencia Bancaria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Política de Cancelación</AlertTitle>
                    <AlertDescription>
                      La cancelación de los pasajes tiene un límite de 48 horas de antelación. Pasado este tiempo, no se
                      podrá realizar la cancelación ni se reembolsará el importe.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Atrás</Button>
                  <Button>Emitir Pasaje</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
