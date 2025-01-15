import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';

describe('PostService', () => {
  let service: PostService;
  let postRepository: Repository<Post>;

  // Mock the repository methods
  const mockPostRepository = {
    create: jest.fn().mockImplementation((dto: CreatePostDto) => {
      return { ...dto, id: Date.now() }; // Mocked entity with an id
    }),
    save: jest.fn().mockImplementation((post: Post) => Promise.resolve(post)),
    find: jest.fn().mockImplementation(() => Promise.resolve([{ id: 1, title: 'Test Post', user: {} }])),
    findOne: jest.fn().mockImplementation((id: number) => {
      if (id === 1) {
        return Promise.resolve({ id: 1, title: 'Test Post', user: {} });
      }
      return Promise.resolve(null); // Return null if post not found
    }),
    delete: jest.fn().mockImplementation((id: number) => Promise.resolve({ affected: 1 })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useValue: mockPostRepository, // Mock the repository for Post entity
        },
      ],
    }).compile();

    service = module.get<PostService>(PostService);
    postRepository = module.get<Repository<Post>>(getRepositoryToken(Post));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a post', async () => {
    const createPostDto: CreatePostDto = { title: 'New Post', content: "test", userId : 100 };
    const result = await service.create(createPostDto);
    expect(result).toHaveProperty('id');
    expect(result.title).toBe('New Post');
    expect(postRepository.create).toHaveBeenCalledWith(createPostDto);
    expect(postRepository.save).toHaveBeenCalled();
  });

  it('should find all posts', async () => {
    const posts = await service.findAll();
    expect(posts).toBeInstanceOf(Array);
    expect(posts[0]).toHaveProperty('id');
    expect(posts[0].title).toBe('Test Post');
    expect(postRepository.find).toHaveBeenCalled();
  });

  it('should find one post by ID', async () => {
    const post = await service.findOne(1);
    expect(post).toHaveProperty('id');
    expect(post.title).toBe('Test Post');
    expect(postRepository.findOne).toHaveBeenCalledWith({
      where: { id: 1 },
      relations: ['user'],
    });
  });

  it('should return null if post not found', async () => {
    const post = await service.findOne(999);
    expect(post).toBeNull();
    expect(postRepository.findOne).toHaveBeenCalledWith({
      where: { id: 999 },
      relations: ['user'],
    });
  });

  it('should delete a post', async () => {
    await service.remove(1);
    expect(postRepository.delete).toHaveBeenCalledWith(1);
  });
});
