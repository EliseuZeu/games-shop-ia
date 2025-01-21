import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
import { Categoria } from 'src/categorias/entitys/categoria.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity('tb_produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @Column({ type: 'text', nullable: true })
  descricao: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', nullable: false })
  valor: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  img: string;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: false })
  quantidade: number;

  @ManyToOne(() => Categoria, categoria => categoria.produtos)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @ManyToOne(() => Usuario, (usuario) => usuario.Produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}