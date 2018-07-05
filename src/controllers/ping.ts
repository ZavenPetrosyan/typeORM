import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";

export class PingControlelr implements Controller {
    public initialie(httpServer: HttpServer): void {
        httpServer.get('ping', ( req, res ) => res.status(200).send("hello"));
    }
}