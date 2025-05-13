import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function EditFormationPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/formations">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Editar Formación</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Formación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="id">ID de Formación</Label>
                  <Input id="id" defaultValue="F-001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="machinist">Maquinista Asignado</Label>
                  <Select defaultValue="juan-perez">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar maquinista" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="juan-perez">Juan Pérez</SelectItem>
                      <SelectItem value="maria-gonzalez">María González</SelectItem>
                      <SelectItem value="carlos-rodriguez">Carlos Rodríguez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="active" defaultChecked />
                <Label htmlFor="active">Formación activa</Label>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Vagones</h3>

                <div className="space-y-4">
                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Vagón 1</CardTitle>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="number-1">Número de Vagón</Label>
                          <Input id="number-1" defaultValue="1" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category-1">Categoría</Label>
                          <Select defaultValue="turista">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar categoría" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="turista">Turista (72 asientos)</SelectItem>
                              <SelectItem value="pullman">Pullman (54 butacas)</SelectItem>
                              <SelectItem value="ejecutivo">Ejecutivo (54 butacas)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Vagón 2</CardTitle>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="number-2">Número de Vagón</Label>
                          <Input id="number-2" defaultValue="2" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category-2">Categoría</Label>
                          <Select defaultValue="pullman">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar categoría" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="turista">Turista (72 asientos)</SelectItem>
                              <SelectItem value="pullman">Pullman (54 butacas)</SelectItem>
                              <SelectItem value="ejecutivo">Ejecutivo (54 butacas)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="py-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">Vagón 3</CardTitle>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="number-3">Número de Vagón</Label>
                          <Input id="number-3" defaultValue="3" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category-3">Categoría</Label>
                          <Select defaultValue="turista">
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar categoría" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="turista">Turista (72 asientos)</SelectItem>
                              <SelectItem value="pullman">Pullman (54 butacas)</SelectItem>
                              <SelectItem value="ejecutivo">Ejecutivo (54 butacas)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar Vagón
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Link href="/formations">
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
