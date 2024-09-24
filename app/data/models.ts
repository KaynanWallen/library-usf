import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  id: String,
  email: String,
  senha: String,
  nome: String
});

const livroSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  autor: String,
  data_publicacao: String,
  data_aquisicao: String,
  isbn: String,
  editora: String,
});

export const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);
export const Livro = mongoose.models.Livro || mongoose.model('Livro', livroSchema)