interface EmailTemplateProps {
  email: string;
}

export function EmailTemplate({ email }: EmailTemplateProps) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ChatGPT Chat Mapper - Bitbuilder Productions</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff; line-height: 1.6; color: #333333;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          
          <!-- Header -->
          <div style="background-color: #1a1a1a; padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 20px; font-weight: 600; margin: 0 0 8px 0; letter-spacing: 1px;">
              BITBUILDER PRODUCTIONS
            </h1>
            <div style="width: 40px; height: 1px; background-color: #666666; margin: 0 auto 30px;"></div>
            
            <h2 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0 0 10px 0;">
              ChatGPT Chat Mapper
            </h2>
            <p style="color: #cccccc; font-size: 16px; margin: 0;">
              Our tool is a small piece of software to help you manage your conversations with ChatGPT.
            </p>
          </div>

          <div style="padding: 40px 30px;">
            <h3 style="color: #1a1a1a; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">
              Welcome to Our Waitlist
            </h3>
            <p style="color: #555555; font-size: 16px; margin: 0 0 20px 0; line-height: 1.6;">
              Thank you for your interest in ChatGPT ChatMapper. We have registered 
              <strong style="color: #1a1a1a;">${email}</strong> and you'll be notified when our extention goes live on the Chrome Web Store.
            </p>
          </div>

          <!-- Core Features -->
          <div style="padding: 0 30px 40px;">
            <h4 style="color: #1a1a1a; font-size: 20px; font-weight: 600; margin: 0 0 30px 0;">
              Core Features
            </h4>
            
            <div style="border: 1px solid #e0e0e0; border-radius: 4px; padding: 30px;">
              
              <!-- Feature 1 -->
              <div style="margin-bottom: 30px; padding-bottom: 25px; border-bottom: 1px solid #f0f0f0;">
                <h5 style="color: #1a1a1a; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">
                  🗺️ Smart Question Mapping
                </h5>
                <p style="color: #666666; font-size: 15px; margin: 0; line-height: 1.5;">
                  Navigate through conversations with numbered question preview and intelligent organization.
                </p>
              </div>

              <!-- Feature 2 -->
              <div style="margin-bottom: 30px; padding-bottom: 25px; border-bottom: 1px solid #f0f0f0;">
                <h5 style="color: #1a1a1a; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">
                  📁 Folder Organization
                </h5>
                <p style="color: #666666; font-size: 15px; margin: 0; line-height: 1.5;">
                  Organize chats into categorized folders with professional tags and custom labeling.
                </p>
              </div>

              <!-- Feature 3 -->
              <div style="margin-bottom: 30px; padding-bottom: 25px; border-bottom: 1px solid #f0f0f0;">
                <h5 style="color: #1a1a1a; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">
                  📄 Professional PDF Export
                </h5>
                <p style="color: #666666; font-size: 15px; margin: 0; line-height: 1.5;">
                  Export conversations with clean formatting and professional branding for documentation. Especially useful
                  for Students, Researchers, and Professionals to create notes.
                </p>
              </div>

            </div>
          </div>

          <!-- Next Steps -->
          <div style="background-color: #f8f8f8; padding: 30px; margin: 0 30px 40px; border-radius: 4px; border-left: 4px solid #1a1a1a;">
            <h4 style="color: #1a1a1a; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
              What's Next
            </h4>
            <p style="color: #555555; font-size: 15px; margin: 0 0 15px 0; line-height: 1.6;">
              We are finalizing development and will notify you immediately when ChatGPT Chat Mapper 
              is ready for launch. Early access members will receive priority installation instructions.
            </p>
            <p style="color: #666666; font-size: 14px; margin: 0; font-style: italic;">
              Estimated launch: 12 Auguest 2025
            </p>
          </div>

          <!-- Company Footer -->
          <div style="padding: 30px; text-align: center; border-top: 1px solid #e0e0e0; background-color: #fafafa;">
            <h5 style="color: #1a1a1a; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">
              BITBUILDER PRODUCTIONS
            </h5>
            <p style="color: #666666; font-size: 14px; margin: 0 0 10px 0;">
              Professional Software Solutions
            </p>
            <a href="https://bitbuilders.tech" style="color: #1a1a1a; font-size: 14px; text-decoration: none; border-bottom: 1px solid #1a1a1a;">
              bitbuilders.tech
            </a>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #1a1a1a; font-size: 14px; font-weight: 500; margin: 0;">
                Best regards,<br>
                The Bitbuilder Productions Team
              </p>
            </div>
          </div>

        </div>
      </body>
    </html>
  `;
}
