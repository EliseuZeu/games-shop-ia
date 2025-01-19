import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entitys/produtos.entity';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutoService } from './services/produtos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutoService],
  exports: [TypeOrmModule],
})
export class ProdutosModule {}