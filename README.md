# Wedding Website - Karan & Nisha Clone

A beautiful, responsive wedding invitation website built with React, featuring elegant design, countdown timer, photo gallery, and interactive sections.

## 🌟 Features

- **Hero Section** - Full-screen background with elegant typography and music player
- **Live Countdown Timer** - Real-time countdown to the wedding day
- **Wedding Ceremony Details** - Comprehensive ceremony information
- **Event Timeline** - 6 wedding events (Haldi, Mehandi, Sangeet, Ring, Mangal Phere, Reception)
- **Know Us Section** - Bride & Groom profiles with circular images
- **Photo Gallery** - Interactive carousel with navigation and thumbnails
- **Venue Section** - Embedded Google Maps with directions
- **RSVP & Contact** - Family details and contact information
- **Responsive Design** - Works perfectly on all devices
- **Smooth Scrolling** - Enhanced user experience with smooth transitions

## 🎨 Design Features

- Golden theme (#B8956A) for elegant Indian wedding aesthetic
- Serif and italic fonts for traditional elegance
- Shadcn UI components for modern, accessible design
- Custom animations and hover effects
- Smooth section transitions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Yarn** package manager - [Install here](https://yarnpkg.com/)

## 🚀 Installation & Setup

### Step 1: Extract the Files
```bash
# Extract the wedding-website.tar.gz file
tar -xzf wedding-website.tar.gz

# Navigate to the project directory
cd wedding-website
```

### Step 2: Install Dependencies
```bash
# Install all required packages
yarn install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory:
```bash
# For local development (no backend)
REACT_APP_BACKEND_URL=http://localhost:3000
```

### Step 4: Start Development Server
```bash
# Start the React development server
yarn start
```

The website will automatically open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
wedding-website/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx          # Hero with background image
│   │   ├── CountdownSection.jsx     # Live countdown timer
│   │   ├── CeremonySection.jsx      # Wedding ceremony details
│   │   ├── EventsSection.jsx        # Wedding events grid
│   │   ├── KnowUsSection.jsx        # Bride & Groom profiles
│   │   ├── GallerySection.jsx       # Photo gallery carousel
│   │   ├── VenueSection.jsx         # Venue with Google Maps
│   │   ├── RSVPSection.jsx          # RSVP details
│   │   ├── ContactSection.jsx       # Contact information
│   │   ├── Footer.jsx               # Footer section
│   │   ├── Divider.jsx              # Decorative divider
│   │   └── ui/                      # Shadcn UI components
│   ├── data/
│   │   └── mock.js                  # Wedding data (customize this!)
│   ├── hooks/
│   │   └── use-toast.js             # Toast notification hook
│   ├── lib/
│   │   └── utils.js                 # Utility functions
│   ├── App.js                       # Main app component
│   ├── App.css                      # Custom animations
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles with Tailwind
├── public/                          # Static files
├── package.json                     # Dependencies
├── tailwind.config.js               # Tailwind configuration
├── craco.config.js                  # CRACO configuration
└── jsconfig.json                    # JavaScript configuration
```

## ✏️ Customization Guide

### 1. Update Wedding Information
Edit `src/data/mock.js` to customize:
- Couple names
- Wedding date and time
- Venue details
- Event schedule
- Family information
- Contact details

```javascript
export const weddingData = {
  couple: {
    groom: "Your Name",
    bride: "Partner Name",
    // ... more details
  },
  weddingDate: {
    targetDate: "2025-10-22T19:00:00+05:30"
  },
  // ... customize all sections
};
```

### 2. Change Colors
Edit `src/index.css` to modify the color scheme:
```css
/* Change the golden color theme */
/* Current: #B8956A */
/* Replace with your preferred color */
```

### 3. Update Images
Replace image URLs in `src/data/mock.js`:
- Gallery images
- Bride & Groom profile pictures
- Hero background image in `HeroSection.jsx`

### 4. Modify Google Maps
Update the venue section in `src/components/VenueSection.jsx`:
- Replace the iframe `src` with your venue's embed link
- Get embed link from [Google Maps](https://www.google.com/maps)

## 🎵 Adding Background Music

To add actual background music functionality:

1. Add your audio file to the `public` folder
2. Update `HeroSection.jsx`:

```javascript
const [audio] = useState(new Audio('/path-to-your-audio.mp3'));

const toggleMusic = () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  setIsPlaying(!isPlaying);
};
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🛠️ Build for Production

Create an optimized production build:

```bash
yarn build
```

This creates a `build` folder with optimized files ready for deployment.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)
1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop the `build` folder
3. Your site is live!

### Option 2: Vercel
1. Sign up at [Vercel](https://vercel.com/)
2. Import your project
3. Deploy with one click

### Option 3: GitHub Pages
```bash
yarn add gh-pages
# Add to package.json:
"homepage": "https://yourusername.github.io/wedding-website"
"predeploy": "yarn build"
"deploy": "gh-pages -d build"
# Then deploy:
yarn deploy
```

## 🎨 Technologies Used

- **React 19** - UI framework
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Beautiful component library
- **Lucide React** - Icon library
- **React Router** - Navigation
- **CRACO** - Create React App Configuration Override

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 yarn start
```

### Issue: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

### Issue: Countdown showing all zeros
- Check the `targetDate` format in `mock.js`
- Ensure it's a future date
- Format: `YYYY-MM-DDTHH:mm:ss+05:30`

## 📝 License

This is a custom wedding website template. Feel free to use and customize for personal use.

## 💝 Credits

- Design inspired by traditional Indian wedding aesthetics
- Images from Unsplash (replace with your own photos)
- Built with modern React and Tailwind CSS

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the customization guide
3. Ensure all dependencies are properly installed

---

**Made with ❤️ for your special day!**

Enjoy your beautiful wedding website! 🎉💍
