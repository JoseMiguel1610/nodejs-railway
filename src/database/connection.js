// const sql = require("mssql")
// import sql from 'mssql';
// import config from '../config';
const mongoose = require("mongoose")
require("dotenv").config()
// import mongoose from 'mongoose';

const uriLocal = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qxdwlco.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

const uri = `mongodb://${process.env.USER}:${process.env.PASSWORD}@containers-us-west-131.railway.app:${process.env.PORT}`

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((e) => {
    console.log('Database error', e)
  })

// const dbSettings = {
//     user: config.dbUser,
//     password: config.dbPassword,
//     server: config.dbServer,
//     database: config.dbDatabase,
//     options: {
//         encrypt: true,
//         trustServerCertificate: true
//     }
// }
// export async function getConnection() {
//     try {
//         const pool = await sql.connect(dbSettings)
//         return pool;
//     } catch (error) {
//         console.log(error);
//     }
// }
// module.exports = {sql}
