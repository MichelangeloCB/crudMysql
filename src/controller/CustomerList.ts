import { Request, Response } from "express";
import { CustomerRepository } from "../model/repository/CustomerRepository";


export class CustomerList {

    constructor(readonly respository: CustomerRepository){

    }

    async execute(request: Request, response: Response) {
        
        const customerCollection = await this.respository.getAll()
        response.status(200).json({customerCollection})
    } 
}
