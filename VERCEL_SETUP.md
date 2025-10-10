# Environment Variables for Vercel Deployment

## Required Environment Variables:

### Database
database_url=postgresql://username:password@hostname:port/database

### Email Configuration
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password

## How to set up in Vercel:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable:
   - Name: database_url
   - Value: Your NeonDB connection string
   - Environment: Production, Preview, Development
4. Click "Save"
5. Repeat for EMAIL_USER and EMAIL_PASS
6. Go to "Deployments" and click "Redeploy"

## NeonDB Connection String Format:
postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/database_name?sslmode=require

## Gmail App Password:
1. Enable 2-factor authentication in Gmail
2. Generate App Password for "Mail"
3. Use the App Password (not your regular password)
