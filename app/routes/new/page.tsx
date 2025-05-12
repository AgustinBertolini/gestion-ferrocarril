import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function NewRoutePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/routes">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Nueva Ruta</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Ruta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre de la Ruta</Label>
                  <Input id="name" placeholder="Ej: Constitución - Miramar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="base-price">Valor Base por Kilómetro ($)</Label>
                  <Input id="base-price" type="number" placeholder="Ej: 2.00" />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Tramos de la Ruta</h3>

                <div className="space-y-4">
                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Tramo 1</CardTitle>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin-1">Estación de Origen</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="constitucion">Constitución</SelectItem>
                              <SelectItem value="retiro">Retiro</SelectItem>
                              <SelectItem value="la-plata">La Plata</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination-1">Estación de Destino</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="alejandro-korn">Alejandro Korn</SelectItem>
                              <SelectItem value="chascomus">Chascomús</SelectItem>
                              <SelectItem value="mar-del-plata">Mar del Plata</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="distance-1">Distancia (km)</Label>
                          <Input id="distance-1" type="number" placeholder="Ej: 100" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time-1">Tiempo Estimado (minutos)</Label>
                          <Input id="time-1" type="number" placeholder="Ej: 90" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Tramo 2</CardTitle>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin-2">Estación de Origen</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Alejandro Korn" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="alejandro-korn">Alejandro Korn</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination-2">Estación de Destino</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="chascomus">Chascomús</SelectItem>
                              <SelectItem value="mar-del-plata">Mar del Plata</SelectItem>
                              <SelectItem value="miramar">Miramar</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="distance-2">Distancia (km)</Label>
                          <Input id="distance-2" type="number" placeholder="Ej: 100" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time-2">Tiempo Estimado (minutos)</Label>
                          <Input id="time-2" type="number" placeholder="Ej: 90" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar Tramo
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Link href="/routes">
                <Button variant="outline">Cancelar</Button>
              </Link>
              <Button>Guardar Ruta</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
