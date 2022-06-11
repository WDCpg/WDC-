var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'wdc.pg2022@gmail.com',
        pass: 'ochhjyjlfkmhzvhn'
    }
});


// // need a activate like notification
// router.post('/sendEmail', function(req, res, next) {
//     if (!'user' in req.session) {
//         res.sendStatus(403);
//         return;
//     }
// }

var mailOptions = {
    // sender address (who sends), do not need modified
    from: '"Fest Group" <wdc.pg2022@gmail.com>',

    // SELECT email FROM user (or friend?)
    to: 'chenghui_liu@hotmail.com', // list of receivers (who receives)

    // Subject line
    subject: 'You have a new event invitation!!!',

    text: 'Hello world ', // plaintext body
    // SELECT * FROM EVENT by event_id?
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});

module.exports = router;