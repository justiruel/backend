// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AppDataSource } from './config/typeorm.config'; // Import konfigurasi TypeORM

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => AppDataSource.options, // Gunakan opsi dari AppDataSource
    }),
    UserModule,
    PostModule,
  ],
})
export class AppModule {}
