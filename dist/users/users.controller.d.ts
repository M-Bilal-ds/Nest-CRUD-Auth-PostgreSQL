import { UsersService } from './users.service';
import { updateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'): Promise<import("./entities/user.entity").User[]>;
    getProfile(user: any): Promise<import("./entities/user.entity").User>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    updateProfile(user: any, updateUserDto: updateUserDto): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: updateUserDto): Promise<import("./entities/user.entity").User>;
    delete(id: string): Promise<import("./entities/user.entity").User>;
    deactivate(id: string): Promise<import("./entities/user.entity").User>;
}
