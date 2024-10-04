import { createTransport } from "nodemailer";

const sendMail = async (data) => {
    
};

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

const sendMails = asyncHandler(async (req, res) => {
    const { email, name, msg } = req.body
    const data = { email, name, msg }
    const transport = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    await transport.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject:"portfolio",
        html: `
    Name: ${data.name}
    Message: ${data.msg}
    `,
    });
    console.log(transport);
    
    return res.status(200).json("email send successfully")
})

export {
    sendMails
}
