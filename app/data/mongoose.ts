import mongoose from 'mongoose';

let db: mongoose.Connection;

export function connectDB() {
  if (db) return db;

  mongoose.connect(process.env.MONGODB_URI as string);
  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'Erro de conexão:'));
  db.once('open', () => {
    console.log('Conectado ao MongoDB');
  });

  return db;
}