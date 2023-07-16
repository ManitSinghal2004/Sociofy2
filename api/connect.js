import mysql from "mysql";
// import dotenv from "dotenv";
// dotenv.config() ; 
export const db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6631682",
    password: "yGMBR9eI3i",
    database: "sql6631682"
})

