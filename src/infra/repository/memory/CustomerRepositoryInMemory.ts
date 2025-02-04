import { Customer } from "../../../model/Customer";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";
import { Uuid } from "../../../model/Uuid";


export class CustomerRepositoryInMemory implements CustomerRepository {
    private customerCollection: Array<Customer> = []

    async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer)
    }

    async getAll(): Promise<Array<Customer>> {
        return this.customerCollection
    }

    getById(id: Uuid): Promise<Customer> {
        throw new Error("Method not implemented.");
    }

    remove(id: Uuid): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(id: Uuid): Promise<Customer> {
        throw new Error("Method not implemented.");
    }
}