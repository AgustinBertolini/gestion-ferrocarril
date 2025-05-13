import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditStationPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/stations">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Editar Estación</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Estación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la Estación</Label>
                <Input id="name" defaultValue="Chascomús" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="locality">Localidad</Label>
                  <Input id="locality" defaultValue="Chascomús" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Provincia</Label>
                  <Select defaultValue="buenos-aires">
                    <SelectTrigger id="province">
                      <SelectValue placeholder="Seleccionar provincia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
                      <SelectItem value="caba">Ciudad Autónoma de Buenos Aires</SelectItem>
                      <SelectItem value="catamarca">Catamarca</SelectItem>
                      <SelectItem value="chaco">Chaco</SelectItem>
                      <SelectItem value="chubut">Chubut</SelectItem>
                      <SelectItem value="cordoba">Córdoba</SelectItem>
                      <SelectItem value="corrientes">Corrientes</SelectItem>
                      <SelectItem value="entre-rios">Entre Ríos</SelectItem>
                      <SelectItem value="formosa">Formosa</SelectItem>
                      <SelectItem value="jujuy">Jujuy</SelectItem>
                      <SelectItem value="la-pampa">La Pampa</SelectItem>
                      <SelectItem value="la-rioja">La Rioja</SelectItem>
                      <SelectItem value="mendoza">Mendoza</SelectItem>
                      <SelectItem value="misiones">Misiones</SelectItem>
                      <SelectItem value="neuquen">Neuquén</SelectItem>
                      <SelectItem value="rio-negro">Río Negro</SelectItem>
                      <SelectItem value="salta">Salta</SelectItem>
                      <SelectItem value="san-juan">San Juan</SelectItem>
                      <SelectItem value="san-luis">San Luis</SelectItem>
                      <SelectItem value="santa-cruz">Santa Cruz</SelectItem>
                      <SelectItem value="santa-fe">Santa Fe</SelectItem>
                      <SelectItem value="santiago-del-estero">Santiago del Estero</SelectItem>
                      <SelectItem value="tierra-del-fuego">Tierra del Fuego</SelectItem>
                      <SelectItem value="tucuman">Tucumán</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción (opcional)</Label>
                <Input id="description" defaultValue="Estación principal de la ciudad de Chascomús" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coordinates">Coordenadas (opcional)</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input id="latitude" defaultValue="-35.5728" />
                  <Input id="longitude" defaultValue="-58.0167" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Link href="/stations">
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
