import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

class Profile {
  @Column()
  nickname: string;

  @Column()
  image: string;

  @Column({ nullable: true })
  introduce?: string;
}
@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column(() => Profile) // 임베디드 객체로 선언
  profile: Profile;
}
