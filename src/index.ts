import "reflect-metadata";
import { ApiServer } from "./server/server";
import { DataBaseProvider } from "./database";

const server = new ApiServer();

server.start(8080);