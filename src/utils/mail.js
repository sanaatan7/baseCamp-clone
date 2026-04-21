import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://examplelink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailGenContent);
  const emailHtml = mailGenerator.generate(options.mailGenContent);
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASSWORD,
    },
  });

  const email = {
    from: "email.basecamp@gmail.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(email);
  } catch (error) {
    console.error(
      "mail service disrupted! please check your mailtrap credentials",
    );
    console.error("error: ", error);
  }
};

const emailVerificicationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we are excited to have you on board",
      action: {
        instructions: "To verify Your Email please click the following button",
        button: {
          color: "#1aae5aff",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have any question fell free ro reply to this email!",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a forgot password request from You",
      action: {
        instructions: "To forget password please click the following button",
        button: {
          color: "#1aae5aff",
          text: "Reset Your password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have any question fell free ro reply to this email!",
    },
  };
};

export {
  emailVerificicationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
