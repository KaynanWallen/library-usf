import type { MetaFunction } from "@remix-run/node";
import { Ellipsis, Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Link } from "@remix-run/react";
import { Input } from "~/components/ui/input";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (

    <main className="w-full h-full">
      <div className="p-5 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Biblioteca</h1>
        <span className="flex flex-row justify-between">
          <Input className="max-w-[320px]"/>
          <Link to={'incluir'}>
            <Button>
              <Plus />
              Adicionar
            </Button>
          </Link>
        </span>

        <section className="border rounded-md p-2">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>titulo</TableHead>
                <TableHead>autor</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Editora</TableHead>
                <TableHead>Data de Publicação</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Sherlock Holmes - Estudo em Vermelho</TableCell>
                <TableCell>Arthur Conan Doyle</TableCell>
                <TableCell>AK2CA</TableCell>
                <TableCell>Flor Azul</TableCell>
                <TableCell>02/10/2002</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <Ellipsis />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <Link to={'editar'}>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                      </Link>
                        <DropdownMenuItem>Remover</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <span className="flex flex-row justify-end gap-3">
          <Button>
            Anterior
          </Button>

          <Button>
            Próximo
          </Button>
        </span>
      </div>
    </main>
  );
}
