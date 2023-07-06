const nodemailer = require('nodemailer')

//sender information
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "acustomer@outlook.it",
        pass: "appleinc1"
    }
});

//setting up the email options
const options = {
    from: "acustomer@outlook.it",
    to: "s.macinaleone@gmail.com",
    subject: "sending email using node.js",
    text: " text of the email"
};

 function sendmail(){
    transporter.sendMail(options, (err, info) => {
    if(err){
        console.log(err);
        return
    }
    console.log("sent : " + info.response);
} )
}

module.exports = sendmail
