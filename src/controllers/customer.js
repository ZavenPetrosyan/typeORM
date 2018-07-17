"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("../services/customer");
class CustomerController {
    constructor() {
        this.list = (req, res) => {
            res.send(customer_1.customerService.list);
        };
        this.getById = (req, res) => {
            const customer = customer_1.customerService.getById(req.params.id);
            if (customer) {
                res.send(customer);
            }
            else {
                res.status(404).json({ message: `Customer not found` });
            }
        };
        this.create = (req, res) => {
            res.send(customer_1.customerService.create(req.body));
        };
        this.update = (req, res) => {
            //:TODO 
        };
        this.remove = (req, res) => {
            //:TODO
        };
    }
    initialie(httpServer) {
        httpServer.get('customers', this.list.bind(this));
        httpServer.get('customers/:id', this.getById.bind(this));
        httpServer.post('customers', this.create.bind(this));
        httpServer.put('customers', this.update.bind(this));
        httpServer.delete('customers', this.remove.bind(this));
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.js.map