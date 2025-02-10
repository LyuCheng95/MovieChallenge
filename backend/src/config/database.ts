import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "34.143.135.18",
  port: 3306,
  user: "root",
  password: "789789",
  database: "movie_challenge",
});
