import mongoose from 'mongoose';

let db: mongoose.Connection;

export function connectDB() {
  if (db) return db;

  mongoose.connect("mongodb+srv://wallenkaynan:RmBAwIaM4adS07PH@usf-library.gwgqe.mongodb.net/");
  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Erro de conexão:'));
  db.once('open', () => {
    console.log('Conectado ao MongoDB');
  });

  return db;
}