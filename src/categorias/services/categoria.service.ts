import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entitys/categoria.entity';

@Injectable()
export class CategoriaService {
    async findByName(nome: string): Promise<Categoria> {
        return await this.categoriaRepository.findOne({ where: { nome } });
    }
    constructor(
        @InjectRepository(Categoria)
        private readonly categoriaRepository: Repository<Categoria>,
    ) {}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async findOne(id: number): Promise<Categoria> {
        return await this.categoriaRepository.findOne({ where: { id } });
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    async update(id: number, categoria: Categoria): Promise<Categoria> {
        await this.categoriaRepository.update(id, categoria);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.categoriaRepository.delete(id);
    }

}