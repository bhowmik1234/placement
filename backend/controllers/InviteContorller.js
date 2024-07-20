import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import nodemailer from "nodemailer";


export const InviteContorller = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.body;
    console.log(email);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: "rajendracwda@gmail.com",
          pass: "jdhbooxhnmchkbxs",
        },
      });

    const info = await transporter.sendMail({
        from: "rajendracwda@gmail.com",
        to: email, 
        subject: "Registration",
        text: `${process.env.FRONTEND_URL}/register/student`,
    });

    console.log("Message sent: %s", info.messageId);
    return res.status(201).json({
        message: info
    })
    
});

