import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Informes y Estadísticas</h1>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <Tabs defaultValue="revenue">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="revenue">Recaudación</TabsTrigger>
            <TabsTrigger value="passengers">Pasajeros</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Recaudación Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$156,784</div>
                  <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Categoría Turista</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$98,450</div>
                  <p className="text-xs text-muted-foreground">62.8% del total</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Categoría Pullman</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$35,784</div>
                  <p className="text-xs text-muted-foreground">22.8% del total</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Categoría Ejecutivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$22,550</div>
                  <p className="text-xs text-muted-foreground">14.4% del total</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recaudación por Ruta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Constitución - Miramar</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="bg-primary h-full w-[65%]"></div>
                        </div>
                        <span className="text-sm font-medium">$102,450</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Retiro - Rosario</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="bg-primary h-full w-[25%]"></div>
                        </div>
                        <span className="text-sm font-medium">$38,784</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>La Plata - Mar del Plata</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="bg-primary h-full w-[10%]"></div>
                        </div>
                        <span className="text-sm font-medium">$15,550</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Filtros</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Período</Label>
                        <Select defaultValue="month">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar período" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="day">Hoy</SelectItem>
                            <SelectItem value="week">Esta semana</SelectItem>
                            <SelectItem value="month">Este mes</SelectItem>
                            <SelectItem value="quarter">Este trimestre</SelectItem>
                            <SelectItem value="year">Este año</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Ruta</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar ruta" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las rutas</SelectItem>
                            <SelectItem value="constitucion-miramar">Constitución - Miramar</SelectItem>
                            <SelectItem value="retiro-rosario">Retiro - Rosario</SelectItem>
                            <SelectItem value="la-plata-mar-del-plata">La Plata - Mar del Plata</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Categoría</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las categorías</SelectItem>
                            <SelectItem value="turista">Turista</SelectItem>
                            <SelectItem value="pullman">Pullman</SelectItem>
                            <SelectItem value="ejecutivo">Ejecutivo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Formación</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar formación" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las formaciones</SelectItem>
                            <SelectItem value="f-001">F-001</SelectItem>
                            <SelectItem value="f-002">F-002</SelectItem>
                            <SelectItem value="f-003">F-003</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full">Aplicar Filtros</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="passengers">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total de Pasajeros</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,543</div>
                  <p className="text-xs text-muted-foreground">+18% desde el mes pasado</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Categoría Turista</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,450</div>
                  <p className="text-xs text-muted-foreground">67.4% del total</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Categoría Pullman</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,784</div>
                  <p className="text-xs text-muted-foreground">22.2% del total</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Categoría Ejecutivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,309</div>
                  <p className="text-xs text-muted-foreground">10.4% del total</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Pasajeros por Ruta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Constitución - Miramar</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="bg-primary h-full w-[70%]"></div>
                        </div>
                        <span className="text-sm font-medium">8,780</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Retiro - Rosario</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="bg-primary h-full w-[20%]"></div>
                        </div>
                        <span className="text-sm font-medium">2,513</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>La Plata - Mar del Plata</Label>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="bg-primary h-full w-[10%]"></div>
                        </div>
                        <span className="text-sm font-medium">1,250</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Filtros</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Período</Label>
                        <Select defaultValue="month">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar período" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="day">Hoy</SelectItem>
                            <SelectItem value="week">Esta semana</SelectItem>
                            <SelectItem value="month">Este mes</SelectItem>
                            <SelectItem value="quarter">Este trimestre</SelectItem>
                            <SelectItem value="year">Este año</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Ruta</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar ruta" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las rutas</SelectItem>
                            <SelectItem value="constitucion-miramar">Constitución - Miramar</SelectItem>
                            <SelectItem value="retiro-rosario">Retiro - Rosario</SelectItem>
                            <SelectItem value="la-plata-mar-del-plata">La Plata - Mar del Plata</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Categoría</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las categorías</SelectItem>
                            <SelectItem value="turista">Turista</SelectItem>
                            <SelectItem value="pullman">Pullman</SelectItem>
                            <SelectItem value="ejecutivo">Ejecutivo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Edad</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar rango de edad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las edades</SelectItem>
                            <SelectItem value="minor">Menores de 12 años</SelectItem>
                            <SelectItem value="teen">12-18 años</SelectItem>
                            <SelectItem value="adult">18-65 años</SelectItem>
                            <SelectItem value="senior">Mayores de 65 años</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full">Aplicar Filtros</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
