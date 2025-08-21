import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        role: "INTERN" | "ADMIN" | "ENGINEER";
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            name: string;
            role: "INTERN" | "ADMIN" | "ENGINEER";
        };
    }>;
    validateUser(email: string, password: string): Promise<import("../users/entities/user.entity").User>;
    changePassword(userId: string, currentPassword: string, newPassword: string): Promise<import("../users/entities/user.entity").User>;
}
