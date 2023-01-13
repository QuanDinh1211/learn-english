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
      from: `"Learn English" <${process.env.EMAIL_APP}>`, // sender address
      to: emailClent, // list of receivers
      subject: "Nói tiếng anh trong vòng 3 tháng cùng TELESA!", // Subject line
      html: `
      <!DOCTYPE html>
        <html>
        <body>
        <b>Xin chào ${name} !</b>

        <h4>Bạn đã đăng ký tham gia học thử thành công!</h4>

        <h4>Dưới đây là video học thử của bạn.</h4>
        <a href="https://www.youtube.com/watch?v=zU1rvVlRr1w">https://www.youtube.com/watch?v=zU1rvVlRr1w</a>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zU1rvVlRr1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        </body>
        </html>
      `,
    });
  };
}

module.exports = new EmailController();
