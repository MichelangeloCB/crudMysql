import { Router, Response, Request } from 'express'
import { CustomerRepositoryInMemory } from '../src/infra/repository/memory/CustomerRepositoryInMemory'
import { CustomerCreate } from '../src/controller/CustomerCreate'
import { CustomerList } from './controller/CustomerList'
import { CustomerRepositoryDatabase } from './infra/repository/database/CustomerRepositoryDatabase'
import { CustomerById } from './controller/CustomerGetById'
import { CustomerRemoveById } from './controller/CustomerRemoveById'
import { CustomerUpdateById } from './controller/CustomerUpdateByid'

const router = Router()

 // const repository  = new CustomerRepositoryInMemory()
 const repository = new CustomerRepositoryDatabase
 const customerCreate = new CustomerCreate(repository)
 const customerList = new CustomerList(repository)
 const customerById = new CustomerById(repository)
 const customerRemoveById = new CustomerRemoveById(repository)
 const customerUpdateById = new CustomerUpdateById(repository)


router.post('/customer', (request: Request, response: Response) => {
    customerCreate.execute(request, response)
})

router.get('/customer', (request: Request, response: Response) => {
    customerList.execute(request, response)
})

router.get('/customer/:id', (request: Request, response: Response) => {
    customerById.execute(request, response)
})

router.delete('/customer/:id', (request: Request, response: Response) => {
    customerRemoveById.execute(request, response)
})

router.patch('/customer/:id', (request: Request, response: Response) => {
    customerUpdateById.execute(request, response)
})


export { router }