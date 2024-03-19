import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const { mail, subject, message } = req.body

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        },
    })

    try {
        const email = await transporter.sendMail({
            from: "portfolio website",
            to: "luukvandijk2003@gmail.com",
            replyTo: mail,
            subject: subject,
            html: `
            <p>Mail: ${mail}</p>
            <p>Message: ${message}</p>
            `
        });
        return res.status(200).json({ message: "succes" })
    } catch (error) {
        res.status(500).json({ mesasge: "Could not send the email. Your message was not sent." })
    }

    return res.status(200).json({ message: "succes" })
}