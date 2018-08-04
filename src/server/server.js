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
const express = require("express");
const bodyParser = require("body-parser");
const controllers_1 = require("../controllers");
class ApiServer {
    constructor() { this.app = express(); }
    ;
    get(url, requestHandler) {
        this.addRoute('get', url, requestHandler);
    }
    post(url, requestHandler) {
        this.addRoute('post', url, requestHandler);
    }
    put(url, requestHandler) {
        this.addRoute('put', url, requestHandler);
    }
    delete(url, requestHandler) {
        this.addRoute('delete', url, requestHandler);
    }
    addRoute(method, url, requestHandler) {
        this.app[method](url, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield requestHandler(req, res, next);
            }
            catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        }));
        console.log(`Added route ${method.toUpperCase()}; ${url}`);
    }
    start(port) {
        this.app = express();
        controllers_1.CONTROLLERS.forEach(controller => controller.initialize(this));
        this.app.use(bodyParser());
        this.app.listen(8080, () => __awaiter(this, void 0, void 0, function* () { return console.log(`Application started at port ${port}`); }));
    }
}
exports.ApiServer = ApiServer;
//# sourceMappingURL=server.js.map