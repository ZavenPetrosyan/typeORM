import { Customer } from "../models/customer";
import { DataBaseProvider } from "../database";

export class CustomerService {
    public async getById(id: number): Promise<Customer> {
        const connection = await DataBaseProvider.getConnection();
        return await connection.getRepository(Customer).findOneById(id);
    }
    public async create(customer: Customer): Promise<Customer> {
        const connection = await DataBaseProvider.getConnection();
        return await connection.getRepository(Customer).save(customer);
    }
    public async list(id: number): Promise<Customer[]> {
        const connection = await DataBaseProvider.getConnection();
        return await connection.getRepository(Customer).find();
    }
    public async update(customer: Customer): Promise<Customer> {
        const connection = await DataBaseProvider.getConnection();
        const repo = connection.getRepository(Customer);
        const entity = await repo.findOneById(customer.id);
        entity.firstName = customer.firstName;
        entity.lastName = customer.lastName;
        return await repo.save(entity);
    }
    public async delete(id: number): Promise<void> {
        const connection = await DataBaseProvider.getConnection();
        return await connection.getRepository(Customer).deleteByid(id);
    }
}

export const customerService = new CustomerService();