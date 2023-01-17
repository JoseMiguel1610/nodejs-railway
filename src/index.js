import app from "./app";
import "./database/connection"
import cors from 'cors';
// Creamos la variable de configuración
var corsOptions = {
    origin: '*', // Aqui debemos reemplazar el * por el dominio de nuestro front
    optionsSuccessStatus: 200 // Es necesario para navegadores antiguos o algunos SmartTVs
}
app.use(cors(corsOptions));
app.listen(app.get('port'))

console.log("server on port", app.get('port'));