const nodemailer = require('nodemailer')

//sender information
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "acustomer@outlook.it",
        pass: "appleinc1"
    }
});



 function sendmail(userEmail){

    const options = {
        from: "acustomer@outlook.it",
        to: userEmail,
        subject: "sending email using node.js",
        text: " text of the email"
    };
    
    transporter.sendMail(options, (err, info) => {
    if(err){
        console.log(err);
        return
    }
    console.log("sent : " + info.response);
} )
}

module.exports = sendmail
