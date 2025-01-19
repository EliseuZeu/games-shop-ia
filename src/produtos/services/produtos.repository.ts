import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../entitys/produtos.entity';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private readonly produtoRepository: Repository<Produto>,
    ) {}

    async findAll(): Promise<Produto[]> {
        return this.produtoRepository.find();
    }

    async findOne(id: number): Promise<Produto> {
        return this.produtoRepository.findOne({ where: { id } });
    }

    async findByName(nome: string): Promise<Produto> {
        return this.produtoRepository.findOne({ where: { nome } });
    }


    async create(produto: Produto): Promise<Produto> {
        return this.produtoRepository.save(produto);
    }

    async update(id: number, produto: Produto): Promise<Produto> {
        await this.produtoRepository.update(id, produto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.produtoRepository.delete(id);
    }

    async findProdutosPrecoMaiorQue(valor: number): Promise<Produto[]> {
      return this.produtoRepository.createQueryBuilder('produto')
        .where('produto.valor > :valor', { valor })
        .orderBy('produto.valor', 'ASC')
        .getMany();
    }

    async findProdutosPrecoMenorQue(valor: number): Promise<Produto[]> {
      return this.produtoRepository.createQueryBuilder('produto')
        .where('produto.valor < :valor', { valor })
        .orderBy('produto.valor', 'DESC')
        .getMany();
    }
}