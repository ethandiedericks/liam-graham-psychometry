// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define the schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().optional(),
  recaptchaToken: z.string().min(1, { message: "reCAPTCHA token is required" }),
});

// Create a service map for better readability in emails
const serviceMap: Record<string, string> = {
  cognitive: "Cognitive Assessment",
  neuropsychological: "Neuropsychological Testing",
  learning: "Learning Disability Assessment",
  emotional: "Emotional Intelligence Evaluation",
  career: "Career Aptitude Testing",
  psychological: "Psychological Assessment"
};

// Setup Mailtrap transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST || "sandbox.smtp.mailtrap.io",
  port: parseInt(process.env.MAILTRAP_PORT || "2525"),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("reCAPTCHA secret key not found in environment variables");
    throw new Error("Server configuration error");
  }

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();
  
  // Consider setting a threshold for score (0.0 - 1.0)
  // 1.0 is very likely a good interaction, 0.0 is very likely a bot
  const threshold = 0.5;

  if (!data.success || data.score < threshold) {
    console.error("reCAPTCHA verification failed:", data);
    throw new Error("reCAPTCHA verification failed. Please try again.");
  }

  return data;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const validatedData = contactFormSchema.parse(body);
    
    // Verify reCAPTCHA token
    try {
      await verifyRecaptcha(validatedData.recaptchaToken);
    } catch (error) {
      console.error("reCAPTCHA verification failed:", error);
      return NextResponse.json(
        { success: false, message: error instanceof Error ? error.message : "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
    
    // Get full service name
    const serviceName = serviceMap[validatedData.service] || validatedData.service;
    
    // Create email content
    const mailOptions = {
      from: `"Liam Graham Psychometry" <noreply@liamgrahampsychometry.co.za>`,
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
      replyTo: validatedData.email,
      subject: `New Assessment Request: ${serviceName}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone || 'Not provided'}
        Service: ${serviceName}
        Message: ${validatedData.message || 'No additional information provided'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e4; border-radius: 5px;">
          <h2 style="color: #1a365d; border-bottom: 1px solid #e4e4e4; padding-bottom: 10px;">New Assessment Request</h2>
          
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>Service Requested:</strong> ${serviceName}</p>
          </div>
          
          <h3 style="color: #2c5282; margin-top: 20px;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e4e4e4;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e4e4e4;">${validatedData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e4e4e4;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e4e4e4;"><a href="mailto:${validatedData.email}" style="color: #3182ce;">${validatedData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e4e4e4;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e4e4e4;">${validatedData.phone || 'Not provided'}</td>
            </tr>
          </table>
          
          <h3 style="color: #2c5282; margin-top: 20px;">Additional Information</h3>
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p>${validatedData.message || 'No additional information provided'}</p>
          </div>
          
          <p style="font-size: 12px; color: #718096; margin-top: 30px; text-align: center;">
            This is an automated notification from your Psychology Assessment website.
          </p>
        </div>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! We\'ll contact you within 24 hours to schedule your appointment.' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      // Return validation errors
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }
    
    // Return general error
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}