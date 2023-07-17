import nodemailer from 'nodemailer';
import { MailAdapter, SendMAilData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "04b0bb146f002b",
      pass: "e307dc4f921a6f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMAilData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Debora Cintra <debora.cintra@dcdev.com>',
            subject,
            html: body,
        });

    };
}