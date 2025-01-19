import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { Categoria } from '../entitys/categoria.entity';
import { CategoriaService } from '../services/categoria.repository';

@Controller('categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: number): Promise<Categoria> {
        return this.categoriaService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: number, @Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(id, categoria);
    }

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    async findByName(@Param('nome') nome: string): Promise<Categoria> {
        return this.categoriaService.findByName(nome);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number): Promise<void> {
        return this.categoriaService.remove(id);
    }
}
