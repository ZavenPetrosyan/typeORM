"use strict";
// import { Controller } from "./controller";
// import { HttpServer } from "../server/httpServer";
// export class PingControlelr implements Controller {
//     public initialize(httpServer: HttpServer): void {
//         httpServer.get('ping', ( req, res ) => res.status(200).send("hello"));
//     }
// }
var foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0: // foo is 0 so criteria met here so this block will run
        console.log(0);
    // NOTE: the forgotten break would have been here
    case 1: // no break statement in 'case 0:' so this case will run as well
        console.log(1);
        break; // it encounters this break so will not continue into 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
//# sourceMappingURL=ping.js.map