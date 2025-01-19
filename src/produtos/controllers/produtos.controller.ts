import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { Produto } from '../entitys/produtos.entity';
import { ProdutoService } from '../services/produtos.repository';


@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Produto[]> {
        return this.produtosService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: number): Promise<Produto> {
        return this.produtosService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() produto: Produto): Promise<Produto> {
        return this.produtosService.create(produto);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: number, @Body() produto: Produto): Promise<Produto> {
        return this.produtosService.update(id, produto);
    }

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    async findName(@Param('nome') nome: string): Promise<Produto> {
        return this.produtosService.findByName(nome);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number): Promise<void> {
        return this.produtosService.remove(id);
    }

    @Get('preco/maior-que/:valor')
    @HttpCode(HttpStatus.OK)
    async findProdutosPrecoMaiorQue(@Param('valor') valor: number): Promise<Produto[]> {
    return this.produtosService.findProdutosPrecoMaiorQue(valor);
    }

    @Get('preco/menor-que/:valor')
    @HttpCode(HttpStatus.OK)
    async findProdutosPrecoMenorQue(@Param('valor') valor: number): Promise<Produto[]> {
        return this.produtosService.findProdutosPrecoMenorQue(valor);
    }
}