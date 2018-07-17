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
const typeorm_1 = require("typeorm");
const customer_1 = require("../models/customer");
class DataBaseProvider {
    static configure(config) {
        DataBaseProvider.configuration = config;
    }
    static getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (DataBaseProvider.connection) {
                return DataBaseProvider.connection;
            }
            const { type, host, port, username, password, database, ssl } = DataBaseProvider.configuration;
            DataBaseProvider.connection = yield typeorm_1.createConnection({
                type, host, port, username, password, database,
                extra: { ssl },
                entities: [customer_1.Customer],
                synchronize: true
            });
            return DataBaseProvider.connection;
        });
    }
}
exports.DataBaseProvider = DataBaseProvider;
//# sourceMappingURL=index.js.map