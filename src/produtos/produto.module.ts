import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entitys/produtos.entity';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutoService } from './services/produtos.repository';
import { Categoria } from 'src/categorias/entitys/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria])],
  controllers: [ProdutosController],
  providers: [ProdutoService],
})
export class ProdutosModule {}