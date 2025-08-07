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
        <title>Welcome to ChatGPT Chat Mapper - Bitbuilder Productions</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <!-- Header with Company Branding -->
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 40px 30px; text-align: center; position: relative;">
            <div style="margin-bottom: 20px;">
              <h1 style="color: #ffffff; font-size: 24px; font-weight: 300; margin: 0 0 5px 0; letter-spacing: 1px;">
                BITBUILDER PRODUCTIONS
              </h1>
              <div style="width: 60px; height: 2px; background: linear-gradient(90deg, #3b82f6, #06b6d4); margin: 0 auto;"></div>
            </div>
            
            <div style="background-color: rgba(255, 255, 255, 0.1); width: 90px; height: 90px; border-radius: 12px; margin: 0 auto 25px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);">
              <span style="font-size: 40px;">🗺️</span>
            </div>
            
            <h2 style="color: #ffffff; font-size: 32px; font-weight: 700; margin: 0 0 10px 0; letter-spacing: -0.5px;">
              ChatGPT Chat Mapper
            </h2>
            <p style="color: rgba(255, 255, 255, 0.8); font-size: 18px; margin: 0; font-weight: 400;">
              Professional Conversation Management Extension
            </p>
          </div>

          <!-- Welcome Section -->
          <div style="padding: 50px 40px 40px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h3 style="color: #1e293b; font-size: 28px; font-weight: 600; margin: 0 0 15px 0;">
                Welcome to Our Exclusive Waitlist
              </h3>
              <p style="color: #64748b; font-size: 18px; margin: 0 0 25px 0; line-height: 1.6;">
                Thank you for your interest in ChatGPT Chat Mapper. We've successfully registered 
                <strong style="color: #3b82f6;">${email}</strong> for early access to our revolutionary 
                conversation management solution.
              </p>
              <div style="width: 100px; height: 1px; background: linear-gradient(90deg, #3b82f6, #06b6d4); margin: 0 auto;"></div>
            </div>
          </div>

          <!-- Product Overview -->
          <div style="padding: 0 40px 40px;">
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 16px; padding: 40px; border: 1px solid #e2e8f0;">
              <h4 style="color: #1e293b; font-size: 22px; font-weight: 600; margin: 0 0 30px 0; text-align: center;">
                Enterprise-Grade Features
              </h4>
              
              <!-- Features Grid -->
              <div style="display: table; width: 100%; border-spacing: 0;">
                
                <!-- Feature 1 -->
                <div style="display: table-row;">
                  <div style="display: table-cell; width: 60px; vertical-align: top; padding-right: 20px; padding-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                      <span style="font-size: 22px;">🗺️</span>
                    </div>
                  </div>
                  <div style="display: table-cell; vertical-align: top; padding-bottom: 25px;">
                    <h5 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">Smart Question Mapping</h5>
                    <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.5;">Navigate through conversations with intelligent numbered question preview and contextual organization.</p>
                  </div>
                </div>

                <!-- Feature 2 -->
                <div style="display: table-row;">
                  <div style="display: table-cell; width: 60px; vertical-align: top; padding-right: 20px; padding-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, #06b6d4, #0891b2); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);">
                      <span style="font-size: 22px;">📌</span>
                    </div>
                  </div>
                  <div style="display: table-cell; vertical-align: top; padding-bottom: 25px;">
                    <h5 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">Priority Question Management</h5>
                    <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.5;">Pin and organize critical questions with advanced tagging system for instant retrieval.</p>
                  </div>
                </div>

                <!-- Feature 3 -->
                <div style="display: table-row;">
                  <div style="display: table-cell; width: 60px; vertical-align: top; padding-right: 20px; padding-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);">
                      <span style="font-size: 22px;">📁</span>
                    </div>
                  </div>
                  <div style="display: table-cell; vertical-align: top; padding-bottom: 25px;">
                    <h5 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">Advanced Folder Organization</h5>
                    <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.5;">Categorize conversations with professional taxonomy and custom labeling system.</p>
                  </div>
                </div>

                <!-- Feature 4 -->
                <div style="display: table-row;">
                  <div style="display: table-cell; width: 60px; vertical-align: top; padding-right: 20px; padding-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, #10b981, #059669); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                      <span style="font-size: 22px;">📄</span>
                    </div>
                  </div>
                  <div style="display: table-cell; vertical-align: top; padding-bottom: 25px;">
                    <h5 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">Professional PDF Export</h5>
                    <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.5;">Generate publication-ready documents with custom branding and professional formatting.</p>
                  </div>
                </div>

                <!-- Feature 5 -->
                <div style="display: table-row;">
                  <div style="display: table-cell; width: 60px; vertical-align: top; padding-right: 20px;">
                    <div style="background: linear-gradient(135deg, #f59e0b, #d97706); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">
                      <span style="font-size: 22px;">🔍</span>
                    </div>
                  </div>
                  <div style="display: table-cell; vertical-align: top;">
                    <h5 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">Enterprise Search Engine</h5>
                    <p style="color: #64748b; font-size: 15px; margin: 0; line-height: 1.5;">Powerful real-time search with advanced filtering and semantic understanding.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Value Proposition -->
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 40px; margin: 0 40px 40px; border-radius: 16px;">
            <div style="text-align: center;">
              <h4 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">
                Early Access Benefits
              </h4>
              <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 0 0 25px 0; line-height: 1.6;">
                As a waitlist member, you'll receive priority access to our beta program, 
                exclusive onboarding support, and special launch pricing when we go live.
              </p>
              <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 12px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);">
                <p style="color: #ffffff; font-size: 15px; margin: 0; font-weight: 500;">
                  <strong>💼 Professional Tip:</strong> Start organizing your important ChatGPT conversations now. 
                  Our import wizard will seamlessly migrate your existing data when you join.
                </p>
              </div>
            </div>
          </div>

          <!-- Company Footer -->
          <div style="padding: 40px; text-align: center; border-top: 2px solid #f1f5f9; background-color: #fafbfc;">
            <div style="margin-bottom: 25px;">
              <h5 style="color: #1e293b; font-size: 20px; font-weight: 600; margin: 0 0 10px 0; letter-spacing: 0.5px;">
                BITBUILDER PRODUCTIONS
              </h5>
              <p style="color: #64748b; font-size: 16px; margin: 0 0 15px 0;">
                Building Tomorrow's Digital Solutions
              </p>
              <a href="https://bitbuilders.tech" style="color: #3b82f6; font-size: 16px; font-weight: 500; text-decoration: none; border-bottom: 1px solid #3b82f6;">
                bitbuilders.tech
              </a>
            </div>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 25px;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 15px 0; line-height: 1.5;">
                We're committed to delivering exceptional software solutions that enhance productivity 
                and streamline workflows for professionals worldwide.
              </p>
              <p style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0;">
                Best regards,<br>
                <span style="color: #3b82f6;">The Bitbuilder Productions Team</span>
              </p>
            </div>
          </div>

        </div>
      </body>
    </html>
  `;
}
