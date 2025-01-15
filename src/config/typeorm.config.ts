// src/typeorm.config.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
// import { User } from '../user/user.entity'; // Pastikan path entitas sudah benar
// import { Post } from '../post/post.entity';

// Memuat file .env
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,          // Menggunakan variabel dari file .env
  port: Number(process.env.DB_PORT),  // Pastikan port diubah menjadi number
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  //entities: [User, Post], // Daftar entitas yang digunakan
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/database/migrations/*.{ts,js}'], // Menentukan lokasi file migrasi
  //synchronize: true, // untuk auto migrate on run
  synchronize: false,
  logging: true, // Bisa diaktifkan untuk debugging
});
