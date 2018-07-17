import { HttpServer } from "./httpServer";
import { RequestHandler, Application } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CONTROLLERS } from "../controllers";

export class ApiServer implements HttpServer {
        private app: express.Application;
        constructor() { this.app = express() };

    get(url: string, requestHandler: RequestHandler): void {
        this.addRoute('get', url, requestHandler)
    }
    post(url: string, requestHandler: RequestHandler): void {
        this.addRoute('post', url, requestHandler);
    }
    put(url: string, requestHandler: RequestHandler): void {
        this.addRoute('put', url, requestHandler);
    }
    delete(url: string, requestHandler: RequestHandler): void {
        this.addRoute('delete', url, requestHandler);
    }
    private addRoute(method: 'get' | 'post' | 'put' | 'delete', url: string, 
                        requestHandler: RequestHandler): void {
        this.app[method](url, async ( req, res, next ) => {
            try {
                await requestHandler(req, res, next);
            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        });
        console.log(`Added route ${method.toUpperCase()}; ${url}`);
    }
    public start(port: number): void {
        this.app = express();

        CONTROLLERS.forEach(controller => controller.initialize(this));
        
        this.app.use(bodyParser());
        this.app.listen(8080, async () => console.log(`Application started at port ${port}`));
    }
}