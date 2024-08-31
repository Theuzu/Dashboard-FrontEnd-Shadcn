import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Percent,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800">Total de Vendas</CardTitle>
            <DollarSign className="ml-auto w-4 h-4"/>
          </div>
          <CardDescription>Vendas nos ultimos 90 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800">Novos Clientes</CardTitle>
            <Users className="ml-auto w-4 h-4"/>
          </div>
          <CardDescription>Novos clientes nos ultimos 30 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">349</p>
          </CardContent>
        </Card>

        <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800">Pedidos</CardTitle>
            <Percent className="ml-auto w-4 h-4"/>
          </div>
          <CardDescription>Total de pedidos de hoje</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">349</p>
          </CardContent>
        </Card>

      </section>
    </main>
  );
}
