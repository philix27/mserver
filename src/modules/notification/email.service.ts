import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { secrets } from '../common';

@Injectable()
export class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(secrets.RESEND_API_KEY); // Add to .env
  }

  async sendEmail({ to, html, subject }: { to: string; subject: string; html: string }) {
    try {
      const data = await this.resend.emails.send({
        from: 'notifications@mobarter.com', // Must be a verified sender domain in Resend
        to,
        subject,
        html,
      });

      return data;
    } catch (error) {
      console.error('Resend Error:', error);
      throw error;
    }
  }
}
