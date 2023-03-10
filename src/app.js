const express = require('express')
const loginRoutes = require("./routes/login.routes");
const usersRoutes = require("./routes/users.routes");
const rolesRoutes = require("./routes/roles.routes");
const notificationRoutes = require("./routes/notification.routes");
const verifyToken = require('./routes/validate-token')
const notification = require("./notifications")
// import config from './config';
// import loginRoutes from "./routes/login.routes"
// import usersRoutes from "./routes/users.routes"
// import rolesRoutes from "./routes/roles.routes"
// import verifyToken from './routes/validate-token';

const app = express()
const PORT = process.env.PORT || 3000;
app.set("port", PORT)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', loginRoutes)
app.use('/api/users', verifyToken, usersRoutes)
app.use('/api/roles', rolesRoutes)
app.use('/api/notification', notificationRoutes)

module.exports = app