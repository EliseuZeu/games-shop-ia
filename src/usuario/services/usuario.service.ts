import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    async findOne(id: number): Promise<Usuario> {
        return this.usuarioRepository.findOne({ where: { id } });
    }

    async findByUsuario(usuario: string): Promise<Usuario> {
        return this.usuarioRepository.findOne({ where: { usuario } });
    }

    async create(usuario: Usuario): Promise<Usuario> {
        return this.usuarioRepository.save(usuario);
    }

    async update(id: number, usuario: Usuario): Promise<Usuario> {
        await this.usuarioRepository.update(id, usuario);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }
}