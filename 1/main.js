const emailSender=require('nodemailer-email-sender');

emailSender({
    mailService:'gmail', //gmail,sendgrid etc..
    senderUser:'m.goodarzi1993', // for email-id abc@gmail.com, username will be abc
    senderEmail:'m.goodarzi1993@gmail.com', // sender's email-id
    senderPassword:'ayciuvzbawtimjdl', // sender's email password
    receiverEmail:'mgr.1994@yahoo.com', // receiver's email address
    subject:'subject', // email subject
    html:'<h1>Body of email</h1>' // email body
    });
console.log("done"); 