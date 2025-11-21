# Booking System Setup Guide - с Nodemailer

## Prerequisites

1. Neon Database account (https://neon.tech)
2. Email provider (Gmail, Outlook, custom SMTP)

## Step 1: Database Setup

1. Go to https://neon.tech and create a free account
2. Create a new project
3. Copy the connection string (it looks like: `postgresql://username:password@hostname/database?sslmode=require`)
4. Run the SQL schema from `lib/db-schema.sql` in your Neon dashboard

## Step 2: Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Database Connection
DATABASE_URL="postgresql://username:password@hostname/database?sslmode=require"

# SMTP Email Configuration
SMTP_HOST="smtp.gmail.com"  # or your SMTP host
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"  # Use app password for Gmail
SMTP_FROM="Rozi's Luxury Dog Hotel <your-email@gmail.com>"

# Admin Email (where bookings will be sent)
ADMIN_EMAIL="your-email@gmail.com"

# Site URL
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

## Gmail Setup (Example)

1. Go to your Google Account
2. Enable 2-Factor Authentication
3. Go to "App Passwords" section
4. Generate an app password for "Mail"
5. Use this password in `SMTP_PASSWORD`

## Other Email Providers

### Outlook/Hotmail
```bash
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT="587"
SMTP_USER="your-email@outlook.com"
SMTP_PASSWORD="your-password"
```

### Custom SMTP
```bash
SMTP_HOST="mail.yourdomain.com"
SMTP_PORT="587"
SMTP_USER="noreply@yourdomain.com"
SMTP_PASSWORD="your-password"
SMTP_FROM="Rozi's Luxury Dog Hotel <noreply@yourdomain.com>"
```

## Step 3: Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Step 4: Access Admin Panel

Visit: `https://your-domain.com/admin`

You can see all bookings and inquiries there.

## Features

### Booking System
- Full booking form with validation
- Sends confirmation email to customer via Nodemailer
- Sends notification email to admin
- Stores all bookings in NeonDB

### Admin Panel
- View all bookings
- View all contact form inquiries
- Update booking status
- See booking details

### Email Notifications (via Nodemailer)
- Customer receives confirmation email
- Admin receives notification for each booking/inquiry
- Detailed information in emails

## Email Testing

To test email functionality locally:

```bash
# Make sure your .env.local has correct SMTP settings
npm run dev

# The booking form will send test emails
```

## Troubleshooting

### Emails not sending?
- Check SMTP credentials
- For Gmail, make sure to use App Password, not regular password
- Check firewall/port blocking
- Verify `ADMIN_EMAIL` is correct

### Database connection issues?
- Verify `DATABASE_URL` is correct
- Check if database is accessible
- Make sure SSL is enabled (`sslmode=require`)
