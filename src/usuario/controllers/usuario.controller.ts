import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: number): Promise<Usuario> {
        return this.usuarioService.findOne(id);
    }

    @Get('usuario/:usuario')
    @HttpCode(HttpStatus.OK)
    async findByUsuario(@Param('usuario') usuario: string): Promise<Usuario> {
        return this.usuarioService.findByUsuario(usuario);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: number, @Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(id, usuario);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number): Promise<void> {
        return this.usuarioService.remove(id);
    }
}