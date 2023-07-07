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
        html: "<img src='./assets/inspace_logo.png' alt='logo image' width='25'><h1>The reservation has been received and we will contact you for further information.</h1> <p>click<a href='http://localhost:3000/'> here </a>to go to homepage</p>"
    };
    
    transporter.sendMail(options, (err, info) => {
    if(err){
        console.log(err);
        return
    }
    console.log("email sent : " + info.response);
} )
}

module.exports = sendmail
