import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Home,
  Package,
  PanelBottom,
  Users,
  Settings2,
  ShoppingBag,
  LogOut,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      {/* Versao desktop passando o sm:flex na tag de lateral*/}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center
            bg-primary text-primary-foreground rounded-full"
            >
              <Package className="h-5 w-5"/>
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            {/* cada icone da sidebar */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="h-5 w-5"/>
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              {/* nomezinho que aparece ao deixar o mouse em cima */}
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ShoppingBag className="h-5 w-5"/>
                  <span className="sr-only">Pedidos</span>
                </Link>
              </TooltipTrigger>
              {/* nomezinho que aparece ao deixar o mouse em cima */}
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Package className="h-5 w-5"/>
                  <span className="sr-only">Produtos</span>
                </Link>
              </TooltipTrigger>
              {/* nomezinho que aparece ao deixar o mouse em cima */}
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Users className="h-5 w-5"/>
                  <span className="sr-only">Clientes</span>
                </Link>
              </TooltipTrigger>
              {/* nomezinho que aparece ao deixar o mouse em cima */}
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Settings2 className="h-5 w-5"/>
                  <span className="sr-only">Configurações</span>
                </Link>
              </TooltipTrigger>
              {/* nomezinho que aparece ao deixar o mouse em cima */}
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
  
          </TooltipProvider>
        </nav>

        {/* Nav do icone de Deslogar */}
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
        <TooltipProvider>
          <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                    text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LogOut className="h-5 w-5 text-red-600"/>
                    <span className="sr-only">Sair</span>
                  </Link>
                </TooltipTrigger>
                {/* nomezinho que aparece ao deixar o mouse em cima */}
                <TooltipContent side="right" className="text-red-600">Sair</TooltipContent>
              </Tooltip>
        </TooltipProvider>
        </nav>
      </aside>

      {/* Versao Mobile passando o sm:hidden */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            {/* Trigger Para Abrir a Side Bar */}
            <SheetTrigger asChild>
              {/* sm:hidden só aparece no Mobile */}
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                {/* sr-only mantem o texto na DOM acessivel para leitores de tela, mas o mantem oculto visualmente*/}
                <span className="sr-only">abrir</span>
              </Button>
            </SheetTrigger>

            {/* Conteudo da Side Bar */}
            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo do projeto</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-2.5 text-muted-foreground md:text-base gap-4 hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Início
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-2.5 text-muted-foreground md:text-base gap-4 hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  Pedidos
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-2.5 text-muted-foreground md:text-base gap-4 hover:text-foreground"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  Produtos
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-2.5 text-muted-foreground md:text-base gap-4 hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all" />
                  Clientes
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-2.5 text-muted-foreground md:text-base gap-4 hover:text-foreground"
                  prefetch={false}
                >
                  <Settings2 className="h-5 w-5 transition-all" />
                  Configurações
                </Link>
                <Link
                  href="#"
                  className="flex items-center px-2.5 text-muted-foreground md:text-base gap-4 hover:text-foreground text-red-600"
                  prefetch={false}
                  >
                  <LogOut className="h-5 w-5 transition-all text-red-600" />
                  Sair
                </Link>
              </nav>
            </SheetContent>

          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
