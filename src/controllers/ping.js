"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PingControlelr {
    initialie(httpServer) {
        httpServer.get('ping', (req, res) => res.status(200).send("hello"));
    }
}
exports.PingControlelr = PingControlelr;
//# sourceMappingURL=ping.js.map