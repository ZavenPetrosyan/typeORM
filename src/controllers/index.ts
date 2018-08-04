import { CustomerController } from "./customer";
import { PingControlelr } from "./ping";

export const CONTROLLERS = [
    new CustomerController(),
    new PingControlelr()
]

