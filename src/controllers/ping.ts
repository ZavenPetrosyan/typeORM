import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";

export class PingControlelr implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('ping', ( req, res ) => res.status(200).send("hello"));
    }
}