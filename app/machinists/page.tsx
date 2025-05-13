import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function MachinistsPage() {
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
            <h1 className="text-xl font-bold">Gestión de Maquinistas</h1>
          </div>
          <Link href="/machinists/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Maquinista
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Buscar Maquinistas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input placeholder="Buscar por nombre" />
              </div>
              <div>
                <Input placeholder="Buscar por DNI" />
              </div>
              <div>
                <Button className="w-full">Buscar</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maquinistas Registrados</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DNI</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Apellido</TableHead>
                  <TableHead>Formaciones Habilitadas</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">25789456</TableCell>
                  <TableCell>Juan</TableCell>
                  <TableCell>Pérez</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline">F-001</Badge>
                      <Badge variant="outline">F-003</Badge>
                      <Badge variant="outline">F-005</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge>Activo</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href="/machinists/25789456/edit">
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">30456789</TableCell>
                  <TableCell>María</TableCell>
                  <TableCell>González</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline">F-002</Badge>
                      <Badge variant="outline">F-004</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge>Activo</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href="/machinists/30456789/edit">
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">28123456</TableCell>
                  <TableCell>Carlos</TableCell>
                  <TableCell>Rodríguez</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline">F-001</Badge>
                      <Badge variant="outline">F-002</Badge>
                      <Badge variant="outline">F-003</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Licencia</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Link href="/machinists/28123456/edit">
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
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
