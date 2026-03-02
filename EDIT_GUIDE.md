# D'Aisha Voice Portfolio - Edit Guide

## 📝 Quick Reference for Common Edits

This guide shows you exactly where to find and edit different parts of your website.

---

## 🎯 Contact Information

### Email Address
**Current:** hello@daishavoice.com

**Where to edit:**
- `/app/frontend/src/components/Header.jsx` - Line ~70
- `/app/frontend/src/components/Footer.jsx` - Line ~40
- `/app/frontend/src/pages/Home.jsx` - Line ~80
- `/app/frontend/src/pages/Contact.jsx` - Line ~95
- `/app/frontend/src/pages/BookMe.jsx` - Line ~240

**Find & Replace:** Search for "hello@daishavoice.com" and replace all instances

### Phone Number
**Current:** 313.338.7235

**Where to edit:**
- `/app/frontend/src/components/PhoneReveal.jsx` - Lines 6-7

```javascript
const phoneNumber = '313.338.7235';
const maskedNumber = '313.***.*****';
```

---

## 🔗 Social Media Links

**Where to edit:**
- `/app/frontend/src/components/Footer.jsx` - Lines ~50-90
- `/app/frontend/src/pages/Home.jsx` - Lines ~95-130
- `/app/frontend/src/pages/Contact.jsx` - Lines ~85-140

**Current links:**
- X (Twitter): https://x.com/DAishaVoice
- LinkedIn: https://www.linkedin.com/in/daishasvoice
- Instagram: https://www.instagram.com/daishasvoice/
- TikTok: https://www.tiktok.com/@daishas_voices

---

## 📸 Photos & Images

### Professional Headshot
**Where to edit:** `/app/frontend/src/pages/Home.jsx` - Line ~105

```javascript
<img
  src="https://customer-assets.emergentagent.com/job_daisha-books/artifacts/71nlfpkt_20260223_103607.jpg"
  alt="D'Aisha Voice - Professional Voice Actor"
/>
```

**To change:** Replace the `src` URL with your new image URL

---

## 🎙️ Audio Demos

### Commercial Demo
**Where to edit:** `/app/frontend/src/pages/Home.jsx` - Line ~122

```javascript
<source src="https://customer-assets.emergentagent.com/job_daisha-books/artifacts/p40qrhvj_D%27Aisha%20Tolbert%20C3.mp3" type="audio/mpeg" />
```

**Also appears in:** `/app/frontend/src/pages/Demos.jsx` - Line ~32

**To change:** Replace the `src` URL with your new audio file URL

### Animation Demo (Coming Soon)
**Where to edit:** `/app/frontend/src/pages/Demos.jsx` - Lines ~47-75

When you have the animation demo ready, replace the "Coming Soon" section with an actual audio player (copy the structure from the Commercial Demo section above it).

---

## ✏️ Text Content

### Homepage Headline
**Current:** "Voice Actor | Commercial • Animation • Narration"

**Where to edit:** `/app/frontend/src/pages/Home.jsx` - Line ~77

```javascript
<p className="text-lg md:text-xl text-[#d4af37] font-semibold">
  Voice Actor | Commercial • Animation • Narration
</p>
```

### Taglines
**Current:** 
- "Authentic. Expressive. Memorable."
- "Bringing scripts to life with heart and range."

**Where to edit:** `/app/frontend/src/pages/Home.jsx` - Lines ~79-85

### About Page Bio
**Where to edit:** `/app/frontend/src/pages/About.jsx` - Lines ~30-48

This is your full bio with three paragraphs. Edit directly in this file.

---

## 🎨 Colors & Styling

### Main Brand Colors
**Where defined:** `/app/frontend/src/App.css`

**Current colors:**
- Gold accent: `#d4af37` (used for highlights, buttons, links)
- Dark background: `#1a1a1d` to `#2d2d30`
- Light text: `#f4f1ea`
- Muted text: `#c9c9c9` and `#999`

**To change:** Search for these hex codes and replace with your new colors

### Fonts
**Current fonts:**
- Headings: `Playfair Display` (serif)
- Body text: `Open Sans` (sans-serif)

**Where to edit:** `/app/frontend/src/App.css` - Line 1

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');
```

---

## 🧭 Navigation Menu

**Where to edit:** `/app/frontend/src/components/Header.jsx` - Lines ~10-16

```javascript
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/demos', label: 'Demos' },
  { path: '/about', label: 'About' },
  { path: '/book-me', label: 'Book Me' },
  { path: '/contact', label: 'Contact Me' }
];
```

**To add a new page (like Videos):**
1. Add to this array: `{ path: '/videos', label: 'Videos' }`
2. Create the page file: `/app/frontend/src/pages/Videos.jsx`
3. Add route in `/app/frontend/src/App.js`

---

## 🎬 Services Listed

### Homepage Services Section
**Where to edit:** `/app/frontend/src/pages/Home.jsx` - Lines ~145-155

```javascript
{ title: 'Commercials', desc: 'TV, radio, and digital advertising' },
{ title: 'Animation', desc: 'Character voices and storytelling' },
{ title: 'Social Media', desc: 'Instagram, TikTok, YouTube content' },
// ... add more services here
```

### Book Me Page - Project Types
**Where to edit:** `/app/frontend/src/pages/BookMe.jsx` - Lines ~35-48

---

## 📋 Forms

### Booking Form Fields
**Where to edit:** `/app/frontend/src/pages/BookMe.jsx`
- Form fields: Lines ~60-220
- Dropdown options: Lines ~130-145 (project types), ~155-165 (budget ranges)

### Contact Form Fields
**Where to edit:** `/app/frontend/src/pages/Contact.jsx`
- Form fields: Lines ~90-180

---

## 🔧 Advanced: Adding Features

### Adding a New Page

**Example: Adding a Videos Page**

1. **Create the page file:**
   `/app/frontend/src/pages/Videos.jsx`

2. **Add route to App.js:**
   ```javascript
   import Videos from './pages/Videos';
   
   <Route path="/videos" element={<Videos />} />
   ```

3. **Add to navigation:**
   Update `navLinks` in `/app/frontend/src/components/Header.jsx`

4. **Add to footer:**
   Add link in `/app/frontend/src/components/Footer.jsx`

---

## 🚀 After Making Edits

### Local Testing (if editing locally):
```bash
cd /app/frontend
yarn start
```

### Deployment:
After making changes, you'll need to:
1. Commit changes to GitHub
2. Redeploy your application

---

## 💾 File Structure Reference

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          # Top navigation & contact info
│   │   │   ├── Footer.jsx          # Footer with links & social
│   │   │   ├── PhoneReveal.jsx     # Phone number component
│   │   │   └── ui/                 # Pre-built UI components
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Homepage
│   │   │   ├── Demos.jsx           # Demo reels page
│   │   │   ├── About.jsx           # About/bio page
│   │   │   ├── BookMe.jsx          # Booking form page
│   │   │   └── Contact.jsx         # Contact form page
│   │   ├── utils/
│   │   │   └── api.js              # Backend API functions
│   │   ├── App.js                  # Main app & routing
│   │   ├── App.css                 # Global styles
│   │   └── index.css               # Base styles & colors
│   └── package.json                # Dependencies
└── backend/
    ├── server.py                   # API endpoints
    ├── models.py                   # Database models
    └── requirements.txt            # Python dependencies
```

---

## ⚠️ Important Notes

### DO NOT Edit:
- `/app/frontend/.env` - Contains backend URL (critical for production)
- `/app/backend/.env` - Contains database connection (critical for production)
- `/app/frontend/src/components/ui/*` - Pre-built components (unless you know what you're doing)

### Safe to Edit:
- All page files in `/app/frontend/src/pages/`
- Header and Footer components
- `App.css` and styling
- Text content anywhere

### Need Help?
- For text/image changes: Safe to do yourself
- For layout/design changes: Test carefully
- For new features: Consider getting developer help

---

## 📞 Quick Edit Checklist

When you need to update something, ask yourself:

✅ **Is it text?** → Find the file above and edit directly  
✅ **Is it an image?** → Replace the URL  
✅ **Is it a link?** → Find and replace the URL  
✅ **Is it a color?** → Search for the hex code and replace  
✅ **Is it a new page?** → Follow the "Adding a New Page" steps  
❓ **Is it complex?** → Reach out for developer help

---

**Last Updated:** March 2, 2025  
**Version:** 1.0
