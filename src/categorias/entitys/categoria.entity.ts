import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Produto } from '../../produtos/entitys/produtos.entity';
import { OneToMany } from 'typeorm';

@Entity('tb_categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    nome: string;

    @OneToMany(() => Produto, produto => produto.categoria)
    produtos: Produto[];
}
