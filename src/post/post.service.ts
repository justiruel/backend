// src/posts/post.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity'; // Import Post entity
import { CreatePostDto } from './dto/create-post.dto'; // DTO untuk Create Post

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>, // Inject repository untuk Post
  ) {}

  // Menyimpan post baru
  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  // Mendapatkan semua post
  async findAll(): Promise<Post[]> {
    return this.postRepository.find({ relations: ['user'] }); // Mendapatkan post beserta relasi ke User
  }

  // Mendapatkan post berdasarkan ID
  async findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({
        where: { id }, // Kondisi pencarian berdasarkan ID
        relations: ['user'], // Memuat relasi user
      }); // Mendapatkan post berdasarkan ID
  }

  // Menghapus post berdasarkan ID
  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
