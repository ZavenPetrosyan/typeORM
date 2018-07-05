import { Connection, createConnection } from "typeorm";
import { Customer } from "../models/customer";

export interface DataBaseConfiguration {
    type: 'postgres';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    ssl?: boolean;
}
export class DataBaseProvider {
    private static connection: Connection;
    private static configuration: DataBaseConfiguration;

    public static configure(config: DataBaseConfiguration): void {
        DataBaseProvider.configuration = config;
    }

    public static async getConnection(): Promise<Connection> {
        if (DataBaseProvider.connection) {
            return DataBaseProvider.connection
        }
        const { type, host, port, username, password, database, ssl } = DataBaseProvider.configuration;
        DataBaseProvider.connection = await createConnection({
            type, host, port, username, password, database,
            extra: { ssl },
            entities: [ Customer ],
            synchronize: true
        });
        return DataBaseProvider.connection;
    }
}