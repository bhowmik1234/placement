import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import nodemailer from "nodemailer";


export const InviteContorller = catchAsyncErrors(async (req, res, next) => {
    const { email, passCode } = req.body;
    const user = req.user;
    console.log(email);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: user.email,
          pass: passCode,
        },
      });
      // jdhbooxhnmchkbxs
    const info = await transporter.sendMail({
        from: user.email,
        to: email, 
        subject: "Registration",
        text: `Click here for registration in placemnet portal. ${process.env.FRONTEND_URL}/register/student`,
    });

    console.log("Message sent: %s", info.messageId);
    return res.status(201).json({
        message: info
    })
    
});

