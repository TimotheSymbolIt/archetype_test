import pkg from "pg";
const { Pool } = pkg;

var pool = new Pool({
	host: "localhost",
	database: "api_halloween",
	user: "postgres",
	password: "admin",
	port: 5432,
});

export { pool };
