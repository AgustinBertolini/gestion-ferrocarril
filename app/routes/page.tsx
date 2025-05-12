import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function RoutesPage() {
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
            <h1 className="text-xl font-bold">Gestión de Rutas</h1>
          </div>
          <Link href="/routes/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Ruta
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <Card>
          <CardHeader>
            <CardTitle>Rutas Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Origen</TableHead>
                  <TableHead>Destino</TableHead>
                  <TableHead>Distancia Total</TableHead>
                  <TableHead>Tiempo Estimado</TableHead>
                  <TableHead>Estaciones Intermedias</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Constitución - Miramar</TableCell>
                  <TableCell>Constitución</TableCell>
                  <TableCell>Miramar</TableCell>
                  <TableCell>450 km</TableCell>
                  <TableCell>5h 45m</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>
                    <Badge>Activa</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Retiro - Rosario</TableCell>
                  <TableCell>Retiro</TableCell>
                  <TableCell>Rosario</TableCell>
                  <TableCell>300 km</TableCell>
                  <TableCell>3h 30m</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <Badge>Activa</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">La Plata - Mar del Plata</TableCell>
                  <TableCell>La Plata</TableCell>
                  <TableCell>Mar del Plata</TableCell>
                  <TableCell>350 km</TableCell>
                  <TableCell>4h 15m</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>
                    <Badge variant="outline">Inactiva</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
