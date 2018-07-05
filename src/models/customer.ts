import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    public id: number| undefined;
    
    @Column()
    public firstName: string | undefined;

    @Column()
    public lastName: string | undefined;
}