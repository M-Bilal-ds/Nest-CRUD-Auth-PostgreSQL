import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @Index()   
  email: string;

  @Column()
  name: string;

  @Column()
  @Exclude() // This will exclude password from serialization
  password: string;

  @Column({
    type: 'enum',
    enum: ['INTERN', 'ADMIN', 'ENGINEER'],
    default: 'INTERN'
  })
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}