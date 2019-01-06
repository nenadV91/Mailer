const nodemailer = require('nodemailer');

class Mail {
  constructor({user, pass, host, port}) {
    this.user = user;
    this.pass = pass;
    this.host = host;
    this.port = port;
  }

  transporter() {
    return nodemailer.createTransport({
      host: this.host,
      port: this.port,
      auth: {
        user: this.user, 
        pass: this.pass 
      },
      secure: true, 
      tls: { 
        rejectUnauthorized: false 
      }
    });
  }

  sendMail(opts) {
    let transporter = this.transporter();
    
    return new Promise((resolve, reject) => {
      transporter.sendMail(opts, (error, info) => {
        if (error) return reject(error)
        else return resolve(info)
      });
    })
  }
}

module.exports = Mail;