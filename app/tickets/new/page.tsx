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

                  <div className="grid grid-cols-2 gap-4 border p-4 rounded-md bg-muted/20">
                    <div className="space-y-2">
                      <Label htmlFor="responsible">Responsable</Label>
                      <Select disabled>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar responsable" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">Agregar nuevo responsable</SelectItem>
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
                      <p className="text-sm text-muted-foreground">Fecha: 15/05/2025</p>
                      <p className="text-sm text-muted-foreground">Categoría: Turista - Butaca 45</p>
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
                        <span className="text-sm">Descuento por estaciones intermedias (2%)</span>
                        <span className="text-sm text-red-500">-$16</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Recargo por categoría (0%)</span>
                        <span className="text-sm">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Descuento por menor de edad (0%)</span>
                        <span className="text-sm">$0</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>$784</span>
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
