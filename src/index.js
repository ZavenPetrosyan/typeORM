"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("./server/server");
const server = new server_1.ApiServer();
server.start(8080);
//# sourceMappingURL=index.js.map