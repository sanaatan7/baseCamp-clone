import Mailgen from "mailgen";

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

export { emailVerificicationMailgenContent, forgotPasswordMailgenContent };
