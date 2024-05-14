import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "arbaz",
    database: "test",
    migrations: ['src/migration/*.ts'],
    entities: ['src/entity/*.ts'],
    logging: true,
    synchronize: true,
})