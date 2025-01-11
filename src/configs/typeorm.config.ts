import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres', // postgres db를 명시
  host: 'localhost', // postgres host
  port: 5432, // postgres port
  username: 'gimjeonghyeon', // db username
  password: 'root', // db password
  database: 'gimjeonghyeon', // database name
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // entity class를 기반으로 테이블을 생성할 수 있도록 entity 파일 규칙 정의
  synchronize: true,
};
