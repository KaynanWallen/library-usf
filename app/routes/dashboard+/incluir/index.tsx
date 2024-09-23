import { Calendar, CalendarIcon } from "lucide-react"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { format } from "date-fns"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover"
import { Separator } from "~/components/ui/separator"
import { livroInterface } from "~/data/interface"
import { cn } from "~/lib/utils"

export default function Index() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<livroInterface>()

  const onSubmit: SubmitHandler<livroInterface> = (data) => {
    console.log(data)
  }

  const [date, setDate] = useState<Date>()

  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-[1080px]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Incluir Novo livro</CardTitle>
            <CardDescription>Utilize essa página para adicionar novos itens no sistema</CardDescription>
            <Separator />
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)} id="form-incluir-livro">
              <span>
                <Label>
                  Título
                </Label>
                <Input {...register('titulo')} />
              </span>

              <span>
                <Label>
                  Autor
                </Label>
                <Input {...register('autor')} />

              </span>

              <span>
                <Label>
                  Editora
                </Label>
                <Input {...register('editora')} />

              </span>

              <span>
                <Label>
                  Gêneros
                </Label>
                <Input {...register('generos')} />

              </span>

              <span>
                <Label>
                  ISBN
                </Label>
                <Input {...register('isbn')} />

              </span>

              <span>
                <Label>
                  Data Publicação
                </Label>
                {/* <Input {...register('data_publicacao')} /> */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </span>

              <span>
                <Label>
                  Data Aquisição
                </Label>
                <Input {...register('data_aquisicao')} />

              </span>
            </form>
          </CardContent>
          <CardFooter>
            <section className="flex flex-row gap-4 w-full justify-end">
              <Button variant={'outline'}>Cancelar</Button>
              <Button type="submit" form="form-incluir-livro">Incluir</Button>
            </section>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}