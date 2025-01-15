// src/posts/posts.module.ts
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';  // Import Post entity
import { User } from '../user/user.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    TypeOrmModule.forFeature([User])
],  // Daftarkan entity Post
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
