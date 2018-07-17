"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("../models/customer");
const database_1 = require("../database");
class CustomerService {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.DataBaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).findOneById(id);
        });
    }
    create(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.DataBaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).save(customer);
        });
    }
    list(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.DataBaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).find();
        });
    }
    update(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.DataBaseProvider.getConnection();
            const repo = connection.getRepository(customer_1.Customer);
            const entity = yield repo.findOneById(customer.id);
            entity.firstName = customer.firstName;
            entity.lastName = customer.lastName;
            return yield repo.save(entity);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.DataBaseProvider.getConnection();
            return yield connection.getRepository(customer_1.Customer).deleteByid(id);
        });
    }
}
exports.CustomerService = CustomerService;
exports.customerService = new CustomerService();
//# sourceMappingURL=customer.js.map