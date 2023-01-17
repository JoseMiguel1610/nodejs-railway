import express from 'express';
import config from './config';
import loginRoutes from "./routes/login.routes"
import usersRoutes from "./routes/users.routes"
import rolesRoutes from "./routes/roles.routes"
import verifyToken from './routes/validate-token';

const app = express()

app.set("port", 5001)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', loginRoutes)
app.use('/api/users', verifyToken, usersRoutes)
app.use('/api/roles', rolesRoutes)

export default app