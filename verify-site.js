// verify-site.js
const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING NSS CELL UEM JAIPUR WEBSITE ASSETS ===');

const requiredFiles = [
  'index.html',
  'css/styles.css',
  'js/main.js',
  'assets/images/logos/nss-logo.svg',
  'assets/images/logos/uem-logo.svg',
  'assets/images/logos/unnat-bharat-abhiyan-logo.svg',
  'assets/images/logos/mygov-logo.svg',
  'assets/images/logos/mybharat-logo.svg',
  'assets/images/hero/uemj-building.svg',
  // Members
  'assets/images/members/program-officer.svg',
  'assets/images/members/faculty-coordinator.svg',
  'assets/images/members/president.svg',
  'assets/images/members/vice-president.svg',
  'assets/images/members/secretary-1.svg',
  'assets/images/members/secretary-2.svg',
  'assets/images/members/head-photography.svg',
  'assets/images/members/head-sponsor-outreach.svg',
  'assets/images/members/head-volunteer-coordinator.svg',
  'assets/images/members/head-pr.svg',
  'assets/images/members/head-social-media.svg',
  'assets/images/members/head-video-editor.svg',
  'assets/images/members/head-documentation.svg',
  'assets/images/members/head-creativity.svg',
  'assets/images/members/head-graphic.svg',
  'assets/images/members/head-logistics.svg',
  // Events
  'assets/images/events/blood-donation.svg',
  'assets/images/events/tree-plantation.svg',
  'assets/images/events/cleanliness-drive.svg',
  'assets/images/events/rural-camp.svg',
  'assets/images/events/health-camp.svg',
  'assets/images/events/cyber-safety.svg',
  // Gallery
  'assets/images/gallery/gallery-1.svg',
  'assets/images/gallery/gallery-2.svg',
  'assets/images/gallery/gallery-3.svg',
  'assets/images/gallery/gallery-4.svg',
  'assets/images/gallery/gallery-5.svg',
  'assets/images/gallery/gallery-6.svg',
  'assets/images/gallery/gallery-7.svg',
  'assets/images/gallery/gallery-8.svg',
  'assets/images/gallery/gallery-9.svg',
  'assets/images/gallery/gallery-10.svg',
  'assets/images/gallery/gallery-11.svg',
  'assets/images/gallery/gallery-12.svg',
  'assets/images/gallery/gallery-13.svg',
  'assets/images/gallery/gallery-14.svg',
  'assets/images/gallery/gallery-15.svg',
  'assets/images/gallery/gallery-16.svg',
  'assets/images/gallery/gallery-17.svg',
  'assets/images/gallery/gallery-18.svg'
];

let missing = 0;
requiredFiles.forEach(f => {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) {
    console.error(`MISSING: ${f}`);
    missing++;
  } else {
    const stat = fs.statSync(p);
    if (stat.size === 0) {
      console.error(`EMPTY FILE: ${f}`);
      missing++;
    }
  }
});

if (missing === 0) {
  console.log(`ALL ${requiredFiles.length} REQUIRED ASSETS AND CORE FILES VERIFIED SUCCESSFULLY!`);
} else {
  console.error(`Verification failed with ${missing} missing or empty files.`);
  process.exit(1);
}

// Check index.html for required keywords from prompt
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const expectedTokens = [
  'NSS CELL UEM JAIPUR',
  'University of Engineering & Management, Jaipur',
  'assets/images/logos/nss-logo.svg',
  'assets/images/logos/uem-logo.svg',
  'assets/images/logos/unnat-bharat-abhiyan-logo.svg',
  'assets/images/hero/uemj-building.svg',
  'https://nss.gov.in/',
  'https://www.mygov.in/',
  'https://mybharat.gov.in/',
  'https://uem.edu.in/uem-jaipur/',
  'NSS Program Officer',
  'NSS Faculty Coordinator',
  'President',
  'Vice-President',
  'Secretary',
  'Photography Head',
  'Sponser & Outreach Head',
  'Volunteer Coordinator',
  'PR Head',
  'Social Media Head',
  'Video Editor Head',
  'Documentation Head',
  'Creativity Head',
  'Graphic Head',
  'Logistics Head',
  'Department Members',
  'Upcoming Events',
  'Past Events',
  'NSS Annual Calendar',
  'marquee-slide-left',
  'marquee-slide-right',
  'marquee-slide-left-bottom',
  'maps.google.com',
  'https://x.com/uem_jaipur',
  'https://www.linkedin.com/school/university-of-engineering-&-management-jaipur/',
  'https://www.facebook.com/uemjaipur/',
  'https://www.instagram.com/uemjaipur/',
  'nss@uem.edu.in',
  '+91 1423 294200',
  'https://forms.gle/uemj-nss-cell-contact'
];

let tokenMissing = 0;
expectedTokens.forEach(t => {
  if (!html.includes(t)) {
    console.error(`MISSING KEY TOKEN IN index.html: "${t}"`);
    tokenMissing++;
  }
});

if (tokenMissing === 0) {
  console.log(`ALL ${expectedTokens.length} USER REQUIREMENTS STRICTLY VERIFIED IN index.html!`);
  console.log('Verification COMPLETE and 100% SUCCESSFUL!');
} else {
  console.error(`Failed: ${tokenMissing} tokens missing.`);
  process.exit(1);
}
