import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ unique: true })
  access_code: string;

  @Column({ nullable: true })
  profile_picture: string;

  @Column({ nullable: true })
  description: string;
}
