
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/entitys/produtos.entity';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '193243',
      database: 'db_gamesshop',
      entities: [Produto],
      synchronize: true,
    }),
    ProdutosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
