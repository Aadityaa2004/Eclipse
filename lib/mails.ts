"use server"
// import { redirect } from "next/dist/server/api-utils";
import { SendMail } from "./nodemailer";
import { redirect } from "next/navigation";

var mailOptions = {
    from: 's.aadityaa.rengaraj@gmail.com',
    text: 'A person has visited your profile',
    to: [ "s.aadityaa.rengaraj@gmail.com"],
    html: "",
    subject: ""
};

export async function ContactMail(form: FormData) {
    const data = {
        phone: form.get('phone'),
        message: form.get('message'),
        email: form.get('email'),
        name: form.get('name')
    } 
    var html = `
        <!doctype html>
            <html>
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                </head>
                <body style="font-family: sans-serif;">
                    <div style="display: block; margin: auto; max-width:600px;" class="main">
                        <h1 style="font-size: 20px; color: #45b4d5; margin-top: 20px;" }}> Aadityaa | Enquiry Message </h1>
                        <h1 style="font-size: 10px; font-weight: 400; margin-top:20px;">You have an Enquiry from ${data.name} (email: ${data.email}, Phone: ${data.phone}) </h1>
                        <p style="font-size: 8px; font-weight: 300; margin-top: 10px; color: black;">${data.message}</p>
                        <hr style=" color: black; margin-top: 25px;"/>
                        <p style="marginTop: 25px; color: #686969;">Do not reply to this automated email.</p>

                    </div>
                    <style>
                    .main { background-color: white; }
                    a:hover { border-left-width: 1em; min-height: 2em; }
                    </style>
                </body>
            </html>
        `
    mailOptions.html = html
    mailOptions.subject = "Someone has viwed your account"
    await SendMail(mailOptions)
}