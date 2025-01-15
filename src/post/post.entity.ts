// src/entities/post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';  // Import User entity jika Anda ingin membuat relasi

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, user => user.posts)  // Relasi ManyToOne ke User
  @JoinColumn({ name: 'user_id' })  // Menyebut kolom yang menghubungkan dengan tabel User
  user: User;
}
