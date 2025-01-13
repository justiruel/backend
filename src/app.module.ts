// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // Gunakan host docker-compose
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'nestjs',
      entities: [User],  // Pastikan entitas User dimasukkan di sini
      synchronize: true, // Jangan gunakan di production
    }),
    UserModule,
  ],
})
export class AppModule {}
