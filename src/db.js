//importar conjunto de conexiones
import {createPool} from "mysql2/promise";

//objeto conexion
export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "vyruz_toy_store"
})
