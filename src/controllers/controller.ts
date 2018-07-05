import { HttpServer } from "../server/httpServer";

export interface Controller {
    initialie(httpServer: HttpServer):void
}