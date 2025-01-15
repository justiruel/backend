// src/posts/post.controller.ts
import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto'; // DTO untuk create post
import { Post as PostEntity } from './post.entity'; // Import Post entity
import { User } from '../user/user.entity'; // Import Post entity
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    @InjectRepository(User)
    private userRepository: Repository<User>,  // Repository untuk User
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>  // Repository untuk Post
  ) {}  

  // Mendapatkan semua post
  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  // Mendapatkan post berdasarkan ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.findOne(id);
  }

  // Menyimpan post baru
  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
      // Mencari User berdasarkan userId yang ada di dalam DTO
      const user = await this.userRepository.findOne({
      where: { id: createPostDto.userId },
      });
      
      if (!user) {
        //throw new Error('User not found');  // yang ini akan tampil di cmd log
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      // Membuat post dan menetapkan user yang ditemukan
      const post = this.postRepository.create(createPostDto);
      post.user = user;  // Menetapkan relasi User ke Post

      return this.postRepository.save(post);  // Menyimpan post ke database
  }

  // Menghapus post berdasarkan ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
      return this.postService.remove(id);
  }
}
