"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
    name: string,
    email: string,
    message: string
}
export const sendEmail = async ({ name, email, message }: EmailPayload) => {

    await resend.emails.send({
        to: "rashmichoudhary019@gmail.com",
        from: "Contact Form  <onboarding@resend.dev>",
        subject: "(Portfolio) Got a message from portfolio",
        html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #334155;">
            <div style="max-width: 520px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <span style="display: inline-block; font-size: 11px; font-weight: 600; color: #4f46e5; background-color: #e0e7ff; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">Portfolio Inbound</span>
                <h1 style="font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 4px 0; line-height: 1.2;">New Project Inquiry</h1>
                <p style="font-size: 14px; color: #64748b; margin: 0 0 24px 0;">A visitor submitted a message via your portfolio website.</p>
                
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                
                <div style="margin-bottom: 20px;">
                    <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 4px;">From Name</div>
                    <div style="font-size: 15px; font-weight: 600; color: #1e293b;">${name}</div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 4px;">Email Address</div>
                    <div style="font-size: 15px; color: #1e293b;">
                        <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-weight: 500;">${email}</a>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 4px;">Message</div>
                    <div style="background-color: #f8fafc; border: 1px solid #f1f5f9; border-radius: 8px; padding: 16px; margin-top: 4px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
                </div>
                
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                
                <div style="text-align: center; font-size: 12px; color: #94a3b8;">
                    Automated system email • Sent from your portfolio site
                </div>
            </div>
        </div>
        `
    })
}