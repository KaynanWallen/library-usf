import { livroInterface } from "./interface"
import { Livro } from "./models"

export const criarLivro = async (livro: livroInterface) => {
  try {
      const livroRecord = await Livro.create(livro)
      return livroRecord
  } catch(err: unknown) {
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