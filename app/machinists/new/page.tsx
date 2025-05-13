import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function NewMachinistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/machinists">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Nuevo Maquinista</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Información del Maquinista</CardTitle>
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

              <div className="space-y-2">
                <Label htmlFor="dni">DNI</Label>
                <Input id="dni" placeholder="Ingrese el DNI" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthdate">Fecha de Nacimiento</Label>
                <Input id="birthdate" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" placeholder="Ingrese la dirección" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="Ingrese el teléfono" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Ingrese el email" />
              </div>

              <div className="space-y-2">
                <Label>Formaciones Habilitadas</Label>
                <div className="grid grid-cols-3 gap-2 border rounded-md p-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="formation-1" />
                    <Label htmlFor="formation-1">F-001</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="formation-2" />
                    <Label htmlFor="formation-2">F-002</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="formation-3" />
                    <Label htmlFor="formation-3">F-003</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="formation-4" />
                    <Label htmlFor="formation-4">F-004</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="formation-5" />
                    <Label htmlFor="formation-5">F-005</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Estado</Label>
                <Select defaultValue="active">
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Activo</SelectItem>
                    <SelectItem value="license">Licencia</SelectItem>
                    <SelectItem value="inactive">Inactivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Link href="/machinists">
                <Button variant="outline">Cancelar</Button>
              </Link>
              <Button>Guardar Maquinista</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
