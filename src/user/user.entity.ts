// src/user/user.entity.ts
import { Post } from '../post/post.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Post, post => post.user)  // Relasi OneToMany ke Post
  posts: Post[];  // Array untuk menyimpan banyak Post terkait dengan User
}