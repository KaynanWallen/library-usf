import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
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
import { Calendar } from "~/components/ui/calendar"
import { useSubmit } from "@remix-run/react"
import { ActionFunctionArgs, json } from "@remix-run/node"
import { criarLivro } from "~/data/routes"

export const action = async ({ request }: ActionFunctionArgs) => {
  const body: livroInterface = await request.json()
  const livroRecord = await criarLivro(body)
  if('error' in livroRecord){
    return json({data: 'error'})
  }

  console.log('Livro Criado')
  return json({data: 'sucess'})
}

export default function Index() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<livroInterface>()

  const submit = useSubmit()
  const onSubmit: SubmitHandler<livroInterface> = (data) => {
    submit( 
      {...data},
      { method: "post", encType: "application/json" }
    );
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

              <span className="flex flex-col gap-2">
                <Label>
                  Data Publicação
                </Label>
                <Controller
                  name="data_publicacao"
                  control={control}
                  rules={{
                    required: "Campo obrigatório",
                  }}
                  defaultValue={""} // Define o valor padrão como false
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`justify-start text-left font-normal border-border rounded-lg ${!field.value && "text-muted-foreground"
                            }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Escolha a data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(v) => field.onChange(v)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
              </span>

              <span className="flex flex-col gap-2">
                <Label>
                  Data Aquisição
                </Label>
                <Controller
                  name="data_aquisicao"
                  control={control}
                  rules={{
                    required: "Campo obrigatório",
                  }}
                  defaultValue={""} // Define o valor padrão como false
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`justify-start text-left font-normal border-border rounded-lg ${!field.value && "text-muted-foreground"
                            }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>Escolha a data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(v) => field.onChange(v)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
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