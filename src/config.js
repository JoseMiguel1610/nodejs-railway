// import {config} from 'dotenv';
const {config} = require("dotenv")
config()

console.log(process.env.NICKNAME);

module.exports = {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || '',
}