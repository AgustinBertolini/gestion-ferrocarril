import { ArrowLeft, Plus, Search, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function TicketsPage() {
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
            <h1 className="text-xl font-bold">Gestión de Pasajes</h1>
          </div>
          <div className="flex gap-2">
            <Link href="/tickets/cancel">
              <Button variant="outline">Cancelar Pasaje</Button>
            </Link>
            <Link href="/tickets/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Pasaje
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Buscar Pasajes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input placeholder="Buscar por DNI, nombre o número de pasaje" className="flex-1" />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pasajes Emitidos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Número</TableHead>
                  <TableHead>Pasajero</TableHead>
                  <TableHead>DNI</TableHead>
                  <TableHead>Ruta</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">P-00123</TableCell>
                  <TableCell>Juan Gómez</TableCell>
                  <TableCell>25789456</TableCell>
                  <TableCell>Constitución - Mar del Plata</TableCell>
                  <TableCell>15/05/2025</TableCell>
                  <TableCell>Turista</TableCell>
                  <TableCell>$800</TableCell>
                  <TableCell>
                    <Badge>Emitido</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">P-00124</TableCell>
                  <TableCell>María López</TableCell>
                  <TableCell>30456789</TableCell>
                  <TableCell>Constitución - Miramar</TableCell>
                  <TableCell>15/05/2025</TableCell>
                  <TableCell>Pullman</TableCell>
                  <TableCell>$945</TableCell>
                  <TableCell>
                    <Badge>Emitido</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">P-00125</TableCell>
                  <TableCell>Pedro Sánchez</TableCell>
                  <TableCell>28123456</TableCell>
                  <TableCell>Constitución - Chascomús</TableCell>
                  <TableCell>16/05/2025</TableCell>
                  <TableCell>Ejecutivo</TableCell>
                  <TableCell>$440</TableCell>
                  <TableCell>
                    <Badge variant="outline">Cancelado</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">P-00126</TableCell>
                  <TableCell>Ana Martínez</TableCell>
                  <TableCell>35789123</TableCell>
                  <TableCell>Constitución - Mar del Plata</TableCell>
                  <TableCell>16/05/2025</TableCell>
                  <TableCell>Turista</TableCell>
                  <TableCell>$400</TableCell>
                  <TableCell>
                    <Badge>Emitido</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
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
