export declare class User {
    id: string;
    email: string;
    name: string;
    password: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
