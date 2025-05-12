import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function FormationsPage() {
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
            <h1 className="text-xl font-bold">Gestión de Formaciones</h1>
          </div>
          <Link href="/formations/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Formación
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <Card>
          <CardHeader>
            <CardTitle>Formaciones Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Maquinista</TableHead>
                  <TableHead>Vagones</TableHead>
                  <TableHead>Capacidad Total</TableHead>
                  <TableHead>Categorías</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">F-001</TableCell>
                  <TableCell>Juan Pérez</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>504</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="outline">Turista</Badge>
                      <Badge variant="outline">Pullman</Badge>
                    </div>
                  </TableCell>
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
                  <TableCell className="font-medium">F-002</TableCell>
                  <TableCell>María González</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>378</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="outline">Turista</Badge>
                      <Badge variant="outline">Ejecutivo</Badge>
                    </div>
                  </TableCell>
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
                  <TableCell className="font-medium">F-003</TableCell>
                  <TableCell>Carlos Rodríguez</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>666</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="outline">Turista</Badge>
                      <Badge variant="outline">Pullman</Badge>
                      <Badge variant="outline">Ejecutivo</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Mantenimiento</Badge>
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
