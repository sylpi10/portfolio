const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();

require('dotenv').config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmail = 
functions.firestore.document('mails/{docId}')
.onCreate((snap, ctx)=>{
    const data = snap.data();
    let authData = nodemailer.createTransport({
        host: 'smtp.live.com',
        ports: 465,
        secure: true,
        auth:{
            user: SENDER_EMAIL,
            pass:SENDER_PASSWORD
        }
    });

    const mailOptions = {
        from:`syl.pillet@hotmail.fr`,
        to: 'syl.pillet@hotmail.fr',
        subject: `new email from ${data.email}, (${data.name})`,
        text: `${data.message}`,
        html: `${data.message}`,
    };

    return authData.sendMail(mailOptions, (error, data) => {
        if (error) {
          console.log("Erreur: " + error);
          return ;
        }
        console.log("Message envoyé");
        return snap;
      });
});

