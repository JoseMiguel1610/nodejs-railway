const admin = require("firebase-admin");

function initFirebase() {
    console.log(__dirname);
    var serviceAccount = require(__dirname + "/keys/nikoletta-3ad28-firebase-adminsdk-3vku9-2e3f068635.json")

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

initFirebase()

async function sendPushToOneUser(notification, token) {
    const message = {
        token: token,
        notification: {
            title: notification.title,
            body: notification.body
        }
    }
    let response = await sendMessage(message);
    return response
}

async function sendPushToTopic(notification) {
    const message = {
        topic: notification.topic,
        data: {
            titulo: notification.titulo,
            mensaje: notification.mensaje
        }
    }

}

async function sendMessage(message) {
    try {
        let response = await admin.messaging().send(message)
        return {
            ok: true,
            status: 200,
            message
        }
    } catch (error) {
        return {
            ok: false,
            status: 403,
            message: null
        }
    }

}

module.exports = { sendPushToOneUser, sendPushToTopic }


