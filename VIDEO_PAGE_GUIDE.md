# How to Add Videos to Your Website

## Quick Start Guide

---

## 📍 Your Videos Page Location

**File:** `/app/frontend/src/pages/Videos.jsx`

**URL:** `yourwebsite.com/videos`

**Already Added To:**
- ✅ Navigation menu (Videos link)
- ✅ Footer quick links
- ✅ Routing system

---

## 🎬 Step 1: Prepare Your Videos

### Option A: YouTube Videos (Recommended - Free & Easy)

1. **Upload your video to YouTube**
   - Go to youtube.com
   - Click "Create" → "Upload video"
   - Upload your video

2. **Get the YouTube video ID**
   - Your video URL looks like: `https://www.youtube.com/watch?v=ABC123XYZ`
   - The video ID is: `ABC123XYZ` (the part after `v=`)

3. **Create embed URL**
   - Format: `https://www.youtube.com/embed/ABC123XYZ`

### Option B: Vimeo Videos

1. Upload to Vimeo
2. Get video ID from URL
3. Embed URL format: `https://player.vimeo.com/video/YOUR_VIDEO_ID`

### Option C: Self-Hosted Videos

Upload your MP4 file to a hosting service and use direct URL.

---

## ✏️ Step 2: Edit the Videos Page

### Open the File

Navigate to: `/app/frontend/src/pages/Videos.jsx`

### Find the Videos Array (Lines 9-32)

```javascript
const videos = [
  {
    id: 1,
    title: 'Commercial Reel Showcase',
    description: 'A compilation of my best commercial voice work',
    thumbnail: 'https://via.placeholder.com/400x225/2d2d30/d4af37?text=Commercial+Reel',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1',
    category: 'Commercial'
  },
  // Add more videos here
];
```

### Replace with Your Videos

```javascript
const videos = [
  {
    id: 1,
    title: 'My 2025 Commercial Reel',
    description: 'Latest commercial voice work featuring national brands',
    thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    category: 'Commercial'
  },
  {
    id: 2,
    title: 'Animation Character Voices',
    description: 'Character voice samples from recent animation projects',
    thumbnail: 'https://img.youtube.com/vi/ANOTHER_VIDEO_ID/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ANOTHER_VIDEO_ID',
    category: 'Animation'
  },
  {
    id: 3,
    title: 'Studio Behind the Scenes',
    description: 'A peek into my recording setup and process',
    thumbnail: 'https://img.youtube.com/vi/THIRD_VIDEO_ID/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/THIRD_VIDEO_ID',
    category: 'Behind the Scenes'
  }
];
```

---

## 🖼️ Step 3: Video Thumbnails

### Auto-Generate from YouTube

YouTube provides automatic thumbnails. Use this format:

```
https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg
```

Replace `YOUR_VIDEO_ID` with your actual video ID.

### Or Use Custom Thumbnails

Upload your custom thumbnail image to any hosting service and use that URL.

**Recommended thumbnail size:** 1280x720 pixels (16:9 aspect ratio)

---

## 🏷️ Step 4: Video Categories

### Available Categories (You Can Customize)

- `'Commercial'` - Yellow/gold tag
- `'Animation'` - Yellow/gold tag  
- `'Behind the Scenes'` - Yellow/gold tag
- `'Narration'` - Add if needed
- `'E-Learning'` - Add if needed
- `'Video Game'` - Add if needed

### To Add New Categories

Just type any category name you want in the `category` field!

---

## 💾 Step 5: Save and Test

1. **Save the file** (`Ctrl+S` or `Cmd+S`)

2. **View your website** - Changes should appear automatically

3. **Click on a video** - Should open in new tab or play inline

---

## 📝 Example: Complete Video Entry

```javascript
{
  id: 1,
  title: 'Nike Commercial 2024',
  description: 'Energetic voice work for national Nike campaign',
  thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  category: 'Commercial'
}
```

### What Each Field Means:

- **id**: Unique number for each video (1, 2, 3, etc.)
- **title**: Video title shown on the card
- **description**: Brief description under the title
- **thumbnail**: Image shown before clicking play
- **videoUrl**: Where the video plays from (YouTube/Vimeo embed URL)
- **category**: Tag shown on the video card

---

## 🎨 Customization Options

### Change Grid Layout

**Current:** 3 columns on large screens

**To change to 2 columns:**
Find line ~67: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
Change to: `grid-cols-1 md:grid-cols-2 lg:grid-cols-2`

**To change to 4 columns:**
Change to: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

### Update Page Title

Find line ~32:
```javascript
<h1 className="text-4xl md:text-5xl font-bold text-[#f4f1ea]">
  Video Portfolio
</h1>
```

Change "Video Portfolio" to your preferred title.

### Update Description

Find line ~33:
```javascript
<p className="text-lg text-[#c9c9c9] max-w-2xl mx-auto">
  Watch my voice acting work come to life...
</p>
```

---

## 🚀 Advanced: Embed Video Directly on Page

### Instead of Opening in New Tab

Replace the button section (around line 85) with:

```javascript
<div className="aspect-video">
  <iframe
    src={video.videoUrl}
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

This will embed the video player directly in the card instead of opening a new tab.

---

## ❓ Troubleshooting

### Video Won't Play
- ✅ Check YouTube embed URL format is correct
- ✅ Make sure video is not private on YouTube
- ✅ Try the video ID in browser first

### Thumbnail Not Showing
- ✅ Check image URL is accessible
- ✅ YouTube thumbnails: ensure video is public
- ✅ Try alternative: `/hqdefault.jpg` instead of `/maxresdefault.jpg`

### Video Opens Weird
- ✅ Make sure you're using `/embed/` in YouTube URL
- ✅ Check for `https://` at start of URL

---

## 📋 Quick Checklist

Before publishing your videos page:

- [ ] All video titles are correct
- [ ] Descriptions are clear and professional
- [ ] Thumbnails load properly
- [ ] Video links work (test each one)
- [ ] Categories are accurate
- [ ] No placeholder text remains
- [ ] Page looks good on mobile (test it!)

---

## 🎯 Best Practices

1. **Keep titles concise** (under 50 characters)
2. **Write engaging descriptions** (1-2 sentences)
3. **Use high-quality thumbnails** (clear, professional)
4. **Organize by category** (makes browsing easier)
5. **Update regularly** (keep adding new work)
6. **Feature your best work first** (id: 1 appears first)

---

## 📞 Need Help?

If you get stuck:
1. Check that you saved the file
2. Refresh your browser
3. Check browser console for errors (F12)
4. Verify video IDs are correct on YouTube
5. Ask for help with screenshots!

---

**Remember:** You can always add more videos later by copying the video object structure and adding new entries to the array!

---

**Created:** March 2, 2025  
**For:** D'Aisha Voice Portfolio  
**File Location:** `/app/frontend/src/pages/Videos.jsx`
