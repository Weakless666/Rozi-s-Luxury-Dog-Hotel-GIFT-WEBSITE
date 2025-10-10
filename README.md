<<<<<<< HEAD
# Rozi's Luxury Dog Hotel - Gift Website

A beautiful, modern website for Rozi's Luxury Dog Hotel featuring:

## Features
- 🏨 **Services**: Dog boarding, grooming, training information
- 📸 **Gallery**: Photo gallery with different categories
- 📅 **Booking**: Instagram-based booking system
- 🐕 **Adoption**: Dog adoption section
- 📞 **Contact**: Contact information and forms
- 📱 **Responsive**: Mobile-friendly design

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Project Structure
```
├── src/                 # Frontend React code
├── public/              # Static assets
└── README.md            # This file
```

## Booking System
The booking system redirects users to Instagram for reservations:
- Users fill out the booking form
- Upon submission, they're redirected to Instagram
- Instagram handle: `@rozis_luxury_dog_hotel`

## Deployment
The project is configured for Vercel deployment with `vercel.json`.

## License
Private project for Rozi's Luxury Dog Hotel
=======
# Rozi's Luxury Dog Hotel - Website

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory with:
```env
# Database
DATABASE_URL=your_neon_database_url_here

# Email Configuration  
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password

# Server Configuration
PORT=3001
```

### 3. Start Development
```bash
# Start both frontend and API server
npm run dev:full

# Or start separately:
npm run server  # API server on port 3001
npm run dev     # Frontend on port 3000
```

## 🔧 Fixed Issues

### ✅ Booking Modal Issues
- Fixed date calculation bug (was showing 0 days)
- Fixed NaN price calculation
- Improved error handling

### ✅ API Integration
- Created Express server for API endpoints
- Added proper CORS support
- Integrated NeonDB for bookings
- Added email notifications

### ✅ Adoption Section
- Created new Adopt page for dog adoption
- Added dog listing with filters (breed, age, size, gender)
- Implemented dog detail modal with full information
- Added API endpoints for adoption management
- Created database schema for adopt_dogs table

### ✅ TypeScript Errors
- Removed Next.js dependencies
- Added proper type definitions
- Fixed all compilation errors

## 📁 Project Structure
```
├── src/                 # React frontend
├── api/                 # API route files (for Vercel)
├── server.js            # Express API server
├── public/images/       # Gallery images
└── package.json         # Dependencies
```

## 🌐 API Endpoints
- `POST /api/bookings` - Create booking
- `GET /api/gallery` - Get gallery images  
- `POST /api/send-email` - Send email notifications
- `GET /api/adopt` - Get dogs for adoption
- `POST /api/adopt` - Add new dog for adoption
- `POST /api/adopt-upload` - Upload dog with images

## 🎯 Next Steps
1. Set up NeonDB database
2. Configure Gmail app password
3. Test booking functionality
4. Deploy to Vercel
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
