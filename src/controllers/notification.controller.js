// import { getConnection, sql, querys } from "../database";
const { sendPushToOneUser } = require('../notifications')
const User = require('../schemas/user')
// import Rol from '../schemas/roles';

const notificationController = {
    sendNotification: async (req, res) => {
        const { correo } = req.params
        let user = await User.aggregate(
            [
                {
                    $lookup:
                    {
                        from: "roles",
                        localField: "rol",
                        foreignField: "_id",
                        as: "usuarioRol"
                    }
                },
                { $unwind: "$usuarioRol" },
                { $match: { correo: correo } }
            ]
        )
        user = user[0]
        let token = user.token;
        console.log(token);
        let response = await sendPushToOneUser(req.body.notification, token)
        res.json(response)
    }
}

module.exports = notificationController