export interface SendMAilData{
    subject: string;
    body: string;
}

export interface MailAdapter{
    sendMail: (data: SendMAilData) => Promise<void>;
}