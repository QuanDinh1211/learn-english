const nodemailer = require("nodemailer");
require("dotenv").config();

class EmailController {
  senEmail = async ({ name, emailClent }) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_APP, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Learn English" <dinhvanquan1211@gmail.com>', // sender address
      to: emailClent, // list of receivers
      subject: "Khóa học tiếng anh miễn phí!", // Subject line
      html: `
      <!DOCTYPE html>
        <html>
        <body>
        <b>Xin chào ${name}</b>
        <p>THÀNH THẠO CHÀO HỎI cách TỰ NHIÊN nhất  bằng Tiếng Anh CHO NGƯỜI LẠ VÀ NGƯỜI QUEN</p>
        <div>
          <a href="https://www.youtube.com/watch?v=Xg-Jhgp3bJE">Click</a>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Xg-Jhgp3bJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


        </body>
        </html>
      `,
    });
  };
}

module.exports = new EmailController();
