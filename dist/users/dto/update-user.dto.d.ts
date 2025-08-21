import { CreateUserDto } from './create-user.dto';
declare const updateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateUserDto, "password">>>;
export declare class updateUserDto extends updateUserDto_base {
}
export {};
