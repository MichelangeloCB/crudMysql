import { Request, Response } from "express";
import { CustomerRepository } from "../model/repository/CustomerRepository";
import { Uuid } from "../model/Uuid";


export class CustomerById {

    constructor(readonly respository: CustomerRepository){

    }

    async execute(request: Request, response: Response) {
        let id: string|Uuid = request.params.id

        id = new Uuid(id)
        const customer = await this.respository.getById(id)
        response.status(200).json({customer})
    } 
}
