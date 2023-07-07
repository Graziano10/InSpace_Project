const nodemailer = require('nodemailer')
const path = require('path');


//sender information
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "customerExp11@outlook.it",
        pass: "appleinc1"
    }
});

 function regUser(first_name, last_name, userEmail){

    const options = {
        from: "customerExp11@outlook.it",
        to: userEmail,
        subject: `Registration successful`,
        html: `<img src='cid:inspaceLogo' alt='logo image' width='25'><h1>inSpace agency</h1> <h2>Thank you ${first_name} ${last_name}, your registration for ${userEmail} has been received</h2> <p>click<a href='http://localhost:3000/Home'> inSpace </a>to login</p>`,
    };
    
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
            return
        }
    console.log("email sent : " + info.response);
} )
}

module.exports = regUser