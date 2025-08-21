import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ChangePasswordDto } from '../users/dto/change-password.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    changePassword(user: any, changePasswordDto: ChangePasswordDto): Promise<import("../users/entities/user.entity").User>;
}
