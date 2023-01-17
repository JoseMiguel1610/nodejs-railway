export const querys =  {
    getAllUsers: 'SELECT * FROM usuarios',
    createUsers: "INSERT INTO usuarios (nombres, apellidoPaterno, apellidoMaterno, password, sexo, celular, correo) VALUES (@nombres, @apellidoPaterno, @apellidoMaterno, @password, @sexo, @celular, @correo)",
    getUserCorreo: 'SELECT * FROM usuarios WHERE correo = @correo'
}