import { Request, Response } from "express";
import { CustomerRepository } from "../model/repository/CustomerRepository";
import { Customer } from "../model/Customer";
import { CustomerUpdateDTO } from "./dtos/CustomerUpdatedTO";


export class CustomerUpdateById {

    constructor(readonly respository: CustomerRepository){
    }

    async execute(request: Request, response: Response) {
        const { id } = request.params 
        const { name, document } = request.body
        let  customer = Customer.create(name, document, id)
        const customerDto = new CustomerUpdateDTO(customer.getName(), customer.getDocument().getValue())
        customer = await this.respository.update(customer.getId(), customerDto)
        response.status(200).json({customer})
    }
}
