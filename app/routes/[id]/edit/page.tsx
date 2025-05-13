import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function EditRoutePage({ params }: { params: { id: string } }) {
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
            <h1 className="text-xl font-bold">Editar Ruta</h1>
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
                  <Input id="name" defaultValue="Constitución - Miramar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="base-price">Valor Base por Kilómetro ($)</Label>
                  <Input id="base-price" type="number" defaultValue="2.00" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="active" defaultChecked />
                <Label htmlFor="active">Ruta activa</Label>
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
                          <Select defaultValue="constitucion">
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
                          <Select defaultValue="alejandro-korn">
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
                          <Input id="distance-1" type="number" defaultValue="50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time-1">Tiempo Estimado (minutos)</Label>
                          <Input id="time-1" type="number" defaultValue="45" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Switch id="intermediate-1" />
                        <Label htmlFor="intermediate-1">
                          Estación con parada para arribo y descenso (15 min adicionales)
                        </Label>
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
                          <Select defaultValue="alejandro-korn">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="alejandro-korn">Alejandro Korn</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination-2">Estación de Destino</Label>
                          <Select defaultValue="chascomus">
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
                          <Input id="distance-2" type="number" defaultValue="100" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time-2">Tiempo Estimado (minutos)</Label>
                          <Input id="time-2" type="number" defaultValue="75" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Switch id="intermediate-2" defaultChecked />
                        <Label htmlFor="intermediate-2">
                          Estación con parada para arribo y descenso (15 min adicionales)
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Tramo 3</CardTitle>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin-3">Estación de Origen</Label>
                          <Select defaultValue="chascomus">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="chascomus">Chascomús</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination-3">Estación de Destino</Label>
                          <Select defaultValue="mar-del-plata">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mar-del-plata">Mar del Plata</SelectItem>
                              <SelectItem value="miramar">Miramar</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="distance-3">Distancia (km)</Label>
                          <Input id="distance-3" type="number" defaultValue="250" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time-3">Tiempo Estimado (minutos)</Label>
                          <Input id="time-3" type="number" defaultValue="180" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Switch id="intermediate-3" defaultChecked />
                        <Label htmlFor="intermediate-3">
                          Estación con parada para arribo y descenso (15 min adicionales)
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Tramo 4</CardTitle>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin-4">Estación de Origen</Label>
                          <Select defaultValue="mar-del-plata">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mar-del-plata">Mar del Plata</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination-4">Estación de Destino</Label>
                          <Select defaultValue="miramar">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar estación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="miramar">Miramar</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="distance-4">Distancia (km)</Label>
                          <Input id="distance-4" type="number" defaultValue="50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time-4">Tiempo Estimado (minutos)</Label>
                          <Input id="time-4" type="number" defaultValue="45" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <Switch id="intermediate-4" />
                        <Label htmlFor="intermediate-4">
                          Estación con parada para arribo y descenso (15 min adicionales)
                        </Label>
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
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
