import { livroInterface } from "./interface"
import { Livro } from "./models"
import { connectDB } from "./mongoose"

export const criarLivro = async (livro: livroInterface) => {
  await connectDB()
  try {
      const livroRecord = await Livro.create(livro)
      return livroRecord
  } catch(err: unknown) {
    console.log(err)
      if (err instanceof Error) {
          return { error: err.message } as { error: string }
      }
      return { error: 'Erro desconhecido' } as { error: string }
  }
}

export const buscarLivros = async() => {
  try {
    const livrosRecord = await Livro.find()
    return livrosRecord
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message } as { error: string }
  }
  return { error: 'Erro desconhecido' } as { error: string }
  }
}