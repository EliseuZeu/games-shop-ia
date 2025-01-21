
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/entitys/produtos.entity';
import { ProdutosModule } from './produtos/produto.module';
import { CategoriaModule } from './categorias/categoria.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '193243',
      database: 'db_gamesshop',
      entities: [Produto, CategoriaModule, AuthModule],
      synchronize: true,
    }),
    ProdutosModule,CategoriaModule, AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
