import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        role: "INTERN" | "ADMIN" | "ENGINEER";
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: updateUserDto): Promise<User>;
    updatePassword(id: string, hashedPassword: string): Promise<User>;
    delete(id: string): Promise<User>;
    deactivateUser(id: string): Promise<User>;
}
