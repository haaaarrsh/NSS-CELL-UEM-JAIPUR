// generate-media.js
const fs = require('fs');
const path = require('path');

// Helper to generate elegant modern SVG member avatars
function generateMemberSvg(name, role, color1, color2, initials) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="100%" height="100%">
  <defs>
    <linearGradient id="grad_${initials}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <filter id="shadow_${initials}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.2"/>
    </filter>
  </defs>
  
  <rect width="400" height="450" fill="#f8f9fa" rx="16"/>
  <rect x="15" y="15" width="370" height="420" rx="12" fill="url(#grad_${initials})" opacity="0.12"/>
  
  <!-- Outer portrait ring -->
  <circle cx="200" cy="170" r="110" fill="none" stroke="url(#grad_${initials})" stroke-width="4" stroke-dasharray="6,4"/>
  <circle cx="200" cy="170" r="100" fill="url(#grad_${initials})" filter="url(#shadow_${initials})"/>
  
  <!-- Silhouette / Monogram -->
  <text x="200" y="195" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="64" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="2">
    ${initials}
  </text>
  
  <!-- Badge Ribbon on Avatar -->
  <rect x="70" y="300" width="260" height="34" rx="17" fill="#0b2545" filter="url(#shadow_${initials})"/>
  <text x="200" y="322" font-family="'Montserrat', sans-serif" font-size="12" font-weight="700" fill="#f1c40f" text-anchor="middle" letter-spacing="1.5">
    NSS CELL UEM JAIPUR
  </text>

  <!-- Member Name & Role Preview in SVG -->
  <text x="200" y="375" font-family="'Poppins', sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">
    ${name}
  </text>
  <text x="200" y="405" font-family="'Inter', sans-serif" font-size="14" font-weight="600" fill="#e63946" text-anchor="middle">
    ${role}
  </text>
</svg>`;
}

// Helper to generate rich realistic event / gallery photo cards
function generateGalleryPhotoSvg(title, category, icon, color1, color2, num) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_${num}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <filter id="f_${num}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="600" height="400" rx="18" fill="url(#bg_${num})"/>

  <!-- Decorative Pattern Overlay -->
  <g opacity="0.1" stroke="#ffffff" stroke-width="2">
    <circle cx="100" cy="100" r="80" fill="none"/>
    <circle cx="500" cy="300" r="120" fill="none"/>
    <circle cx="500" cy="300" r="60" fill="none"/>
    <line x1="0" y1="200" x2="600" y2="200"/>
    <line x1="300" y1="0" x2="300" y2="400"/>
  </g>

  <!-- Top Badge Pill -->
  <rect x="40" y="35" width="160" height="34" rx="17" fill="#ffffff" opacity="0.95" filter="url(#f_${num})"/>
  <text x="120" y="57" font-family="'Montserrat', sans-serif" font-size="12" font-weight="800" fill="#0b2545" text-anchor="middle" letter-spacing="1">
    ${category.toUpperCase()}
  </text>

  <!-- Large Center Graphic Symbol -->
  <g transform="translate(300, 190) scale(1.6)" text-anchor="middle">
    <circle cx="0" cy="0" r="45" fill="#ffffff" opacity="0.2"/>
    <circle cx="0" cy="0" r="35" fill="#ffffff" opacity="0.95" filter="url(#f_${num})"/>
    <text x="0" y="14" font-size="34" text-anchor="middle">${icon}</text>
  </g>

  <!-- Lower Title Card Backdrop with Glassmorphism -->
  <rect x="30" y="280" width="540" height="90" rx="14" fill="#0b1d3a" opacity="0.88" filter="url(#f_${num})"/>
  <text x="50" y="322" font-family="'Poppins', sans-serif" font-size="21" font-weight="800" fill="#ffffff">
    ${title}
  </text>
  <text x="50" y="350" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#f1c40f">
    National Service Scheme • UEM Jaipur Chapter
  </text>
  <text x="540" y="336" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#a8dadc" text-anchor="end">
    2026-27
  </text>
</svg>`;
}

// 1. GENERATE MEMBERS
const members = [
  { file: 'program-officer.svg', name: 'Dr. Anurag Verma', role: 'NSS Program Officer', c1: '#0b2545', c2: '#134074', in: 'AV' },
  { file: 'faculty-coordinator.svg', name: 'Prof. Meenakshi Sharma', role: 'NSS Faculty Coordinator', c1: '#8338ec', c2: '#3a86ff', in: 'MS' },
  { file: 'president.svg', name: 'Aryan Sharma', role: 'President', c1: '#e63946', c2: '#d62828', in: 'AS' },
  { file: 'vice-president.svg', name: 'Sneha Rathore', role: 'Vice-President', c1: '#f77f00', c2: '#e85d04', in: 'SR' },
  { file: 'secretary-1.svg', name: 'Rohan Gupta', role: 'Secretary (Operations)', c1: '#2a9d8f', c2: '#264653', in: 'RG' },
  { file: 'secretary-2.svg', name: 'Priya Choudhary', role: 'Secretary (Admin & Records)', c1: '#4361ee', c2: '#3f37c9', in: 'PC' },
  
  // 10 Department Heads
  { file: 'head-photography.svg', name: 'Aditya Shekhawat', role: 'Photography Head', c1: '#457b9d', c2: '#1d3557', in: 'AS' },
  { file: 'head-sponsor-outreach.svg', name: 'Tanmay Agarwal', role: 'Sponsor & Outreach Head', c1: '#e76f51', c2: '#f4a261', in: 'TA' },
  { file: 'head-volunteer-coordinator.svg', name: 'Harshita Joshi', role: 'Volunteer Coordinator', c1: '#588157', c2: '#3a5a40', in: 'HJ' },
  { file: 'head-pr.svg', name: 'Vikramaditya Singh', role: 'PR Head', c1: '#6a040f', c2: '#9d0208', in: 'VS' },
  { file: 'head-social-media.svg', name: 'Ananya Mathur', role: 'Social Media Head', c1: '#d00000', c2: '#dc2f02', in: 'AM' },
  { file: 'head-video-editor.svg', name: 'Kunal Sharma', role: 'Video Editor Head', c1: '#7209b7', c2: '#560bad', in: 'KS' },
  { file: 'head-documentation.svg', name: 'Riya Pareek', role: 'Documentation Head', c1: '#023e8a', c2: '#0077b6', in: 'RP' },
  { file: 'head-creativity.svg', name: 'Divyanshu Meena', role: 'Creativity Head', c1: '#e09f3e', c2: '#9e2a2b', in: 'DM' },
  { file: 'head-graphic.svg', name: 'Neha Soni', role: 'Graphic Head', c1: '#007f5f', c2: '#2b9348', in: 'NS' },
  { file: 'head-logistics.svg', name: 'Mohit Kumawat', role: 'Logistics Head', c1: '#3d5a80', c2: '#293241', in: 'MK' },

  // General department members sample
  { file: 'member-1.svg', name: 'Kavita Rawat', role: 'Department Member (PR)', c1: '#4a4e69', c2: '#22223b', in: 'KR' },
  { file: 'member-2.svg', name: 'Rahul Bhati', role: 'Department Member (Logistics)', c1: '#0077b6', c2: '#03045e', in: 'RB' },
  { file: 'member-3.svg', name: 'Pooja Tiwari', role: 'Department Member (Social Media)', c1: '#b5179e', c2: '#7209b7', in: 'PT' },
  { file: 'member-4.svg', name: 'Siddharth Jain', role: 'Department Member (Documentation)', c1: '#2d6a4f', c2: '#1b4332', in: 'SJ' }
];

const membersDir = path.join(__dirname, 'assets', 'images', 'members');
members.forEach(m => {
  fs.writeFileSync(path.join(membersDir, m.file), generateMemberSvg(m.name, m.role, m.c1, m.c2, m.in));
});

// 2. GENERATE 18 GALLERY IMAGES (6 for Row 1, 6 for Row 2, 6 for Row 3)
const galleryItems = [
  // Row 1 (Slides Left)
  { num: 1, title: 'Mega Blood Donation Camp', cat: 'Health Drive', icon: '🩸', c1: '#9b2226', c2: '#ae2012' },
  { num: 2, title: 'Swachhata Pakhwada Mission', cat: 'Cleanliness', icon: '🧹', c1: '#1d3557', c2: '#457b9d' },
  { num: 3, title: 'Ek Ped Maa Ke Naam Drive', cat: 'Environment', icon: '🌱', c1: '#2d6a4f', c2: '#40916c' },
  { num: 4, title: 'National Youth Day Summit', cat: 'Inspiration', icon: '⭐', c1: '#e85d04', c2: '#dc2f02' },
  { num: 5, title: 'Health & Hygiene Awareness', cat: 'Wellness', icon: '🩺', c1: '#0077b6', c2: '#0096c7' },
  { num: 6, title: 'Village Education Outreach', cat: 'UBA Rural', icon: '📚', c1: '#7209b7', c2: '#560bad' },

  // Row 2 (Slides Right)
  { num: 7, title: 'Winter Blanket Distribution', cat: 'Charity Drive', icon: '🧥', c1: '#3d5a80', c2: '#293241' },
  { num: 8, title: 'International Yoga Day', cat: 'Fitness', icon: '🧘', c1: '#d4a373', c2: '#bc6c25' },
  { num: 9, title: 'Jaipur Road Safety Drive', cat: 'Public Safety', icon: '🚦', c1: '#d00000', c2: '#9d0208' },
  { num: 10, title: 'Adopted Village Socio Survey', cat: 'Field Work', icon: '🏡', c1: '#588157', c2: '#3a5a40' },
  { num: 11, title: 'NSS Foundation Day 24 Sept', cat: 'Celebration', icon: '🎉', c1: '#0b2545', c2: '#134074' },
  { num: 12, title: 'Women Self Defense Training', cat: 'Empowerment', icon: '🛡️', c1: '#b5179e', c2: '#7209b7' },

  // Row 3 (Slides Left)
  { num: 13, title: 'Disaster Relief Support Camp', cat: 'Humanitarian', icon: '🤝', c1: '#c1121f', c2: '#780000' },
  { num: 14, title: 'Rural Cyber Literacy Workshop', cat: 'Digital India', icon: '💻', c1: '#0077b6', c2: '#023e8a' },
  { num: 15, title: 'First Aid & CPR Certification', cat: 'Life Saving', icon: '🩹', c1: '#e63946', c2: '#d90429' },
  { num: 16, title: 'Independence Day Tricolor March', cat: 'Patriotism', icon: '🇮🇳', c1: '#ff7700', c2: '#138808' },
  { num: 17, title: 'Voter Awareness & SVEEP Rally', cat: 'Democracy', icon: '🗳️', c1: '#4361ee', c2: '#3f37c9' },
  { num: 18, title: 'Annual NSS Felicitation Ceremony', cat: 'Awards', icon: '🏆', c1: '#e09f3e', c2: '#b07d1a' },
];

const galleryDir = path.join(__dirname, 'assets', 'images', 'gallery');
galleryItems.forEach(item => {
  fs.writeFileSync(path.join(galleryDir, `gallery-${item.num}.svg`), 
    generateGalleryPhotoSvg(item.title, item.cat, item.icon, item.c1, item.c2, item.num));
});

// Also copy or link key images to events folder
const eventsDir = path.join(__dirname, 'assets', 'images', 'events');
const eventImages = [
  { name: 'blood-donation.svg', src: 'gallery-1.svg' },
  { name: 'cleanliness-drive.svg', src: 'gallery-2.svg' },
  { name: 'tree-plantation.svg', src: 'gallery-3.svg' },
  { name: 'youth-day.svg', src: 'gallery-4.svg' },
  { name: 'winter-drive.svg', src: 'gallery-7.svg' },
  { name: 'yoga-day.svg', src: 'gallery-8.svg' },
  { name: 'rural-camp.svg', src: 'gallery-10.svg' },
  { name: 'health-camp.svg', src: 'gallery-5.svg' },
  { name: 'cyber-safety.svg', src: 'gallery-14.svg' },
  { name: 'green-marathon.svg', src: 'gallery-16.svg' }
];

eventImages.forEach(ev => {
  fs.copyFileSync(path.join(galleryDir, ev.src), path.join(eventsDir, ev.name));
});

console.log('All members, gallery photos (3 rows), and events generated successfully!');
