import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { customerService } from "../services/customer";
import { Request, Response } from 'express';


export class CustomerController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('customers', this.list.bind(this));
        httpServer.get('customers/:id', this.getById.bind(this));
        httpServer.post('customers', this.create.bind(this));
        httpServer.put('customers', this.update.bind(this));
        httpServer.delete('customers', this.remove.bind(this));
    }
    private  list = ( req: Request, res: Response ) =>  {
        res.send(customerService.list);
    } 
    private  getById = ( req: Request, res: Response ) =>  {
        const customer =  customerService.getById(req.params.id);
        if (customer) {
            res.send(customer);
        } else {
            res.status(404).json({ message: `Customer not found` });
        }
    }
    private create = ( req: Request, res: Response ) => {
        res.send(customerService.create(req.body));
    }
    private update = ( req: Request, res: Response ) => {
        //:TODO 
    }
    private remove = ( req: Request, res: Response ) => {
        //:TODO
    }
}