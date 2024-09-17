import { LoaderFunctionArgs } from "@remix-run/node";
import { BookOpen, Focus } from "lucide-react";
import logo from '~/components/img/logo.png'
import { connectDB } from "~/data/mongoose";

export const loader = async ({ }: LoaderFunctionArgs) => {
  return null
};

export default function Index(){
  return (
    <>
      <main className="grid grid-cols-3 grid-rows-2 items-center justify-items-center gap-5">
      <section className="border rounded-md w-[220px] h-[220px] flex flex-col justify-center items-center">
          <Focus size={96}/>
          <p className="text-2xl font-bold text-center">Adicionar / Editar </p>
        </section>

        <section className="rounded-md w-[220px] h-[220px] flex flex-col justify-center items-center">
          <img src={logo} />
        </section>

        <section className="border rounded-md w-[220px] h-[220px] flex flex-col justify-center items-center">
          <BookOpen size={96}/>
          <p className="text-2xl font-bold text-center">Biblioteca </p>
        </section>

        <section className="border rounded-md w-[220px] h-[220px] flex flex-col justify-center items-center">
          <Focus size={96}/>
          <p className="text-2xl font-bold text-center">Adicionar / Editar </p>
        </section>

        <section className="border rounded-md w-[220px] h-[220px] flex flex-col justify-center items-center">
          <Focus size={96}/>
          <p className="text-2xl font-bold text-center">Adicionar / Editar </p>
        </section>

        <section className="border rounded-md w-[220px] h-[220px] flex flex-col justify-center items-center">
          <Focus size={96}/>
          <p className="text-2xl font-bold text-center">Remover </p>
        </section>

      </main>
    </>
  )
}