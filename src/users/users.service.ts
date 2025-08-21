import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    const queryBuilder = this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.email', 
        'user.name', 
        'user.role', 
        'user.isActive',
        'user.createdAt',
        'user.updatedAt'
      ]); // Exclude password field

    if (role) {
      queryBuilder.where('user.role = :role', { role });
    }

    const users = await queryBuilder.getMany();
    
    if (role && !users.length) {
      throw new NotFoundException("Users with specified role not found");
    }
    
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.email', 
        'user.name', 
        'user.role', 
        'user.isActive',
        'user.createdAt',
        'user.updatedAt'
      ])
      .where('user.id = :id', { id })
      .getOne();
    
    if (!user) {
      throw new NotFoundException("User not found");
    }
    
    return user;
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ 
      where: { email },
      select: ['id', 'email', 'name', 'password', 'role', 'isActive'] // Include password for auth
    });
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(user);
    
    // Return user without password
    const { password, ...result } = savedUser;
    return result;
  }

  async update(id: string, updateUserDto: updateUserDto) {
    const result = await this.userRepository.update(id, updateUserDto);
    
    if (result.affected === 0) {
      throw new NotFoundException("User not found");
    }
    
    return this.findOne(id);
  }

  async updatePassword(id: string, hashedPassword: string) {
    const result = await this.userRepository.update(id, { password: hashedPassword });
    
    if (result.affected === 0) {
      throw new NotFoundException("User not found");
    }
    
    return this.findOne(id);
  }

  async delete(id: string) {
    const user = await this.findOne(id); // Check if user exists
    await this.userRepository.delete(id);
    return user;
  }

  async deactivateUser(id: string) {
    const result = await this.userRepository.update(id, { isActive: false });
    
    if (result.affected === 0) {
      throw new NotFoundException("User not found");
    }
    
    return this.findOne(id);
  }
}