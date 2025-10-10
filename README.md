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

## 🎯 Next Steps
1. Set up NeonDB database
2. Configure Gmail app password
3. Test booking functionality
4. Deploy to Vercel