# NSS CELL UEM JAIPUR - Official Website

Official website for the **National Service Scheme (NSS) Cell, University of Engineering & Management, Jaipur** (*short form: NSS CELL UEM JAIPUR*).

---

## 🌟 Key Highlights & Included Sections

1. **Home Section (`#home`)**:
   - **Background**: Iconic UEMJ Academic Building photo (`assets/images/hero/uemj-building.svg`).
   - **Logos at Top**:
     - **Left**: Official **NSS Logo**
     - **Center**: Official **UEM Logo**
     - **Right**: Official **Unnat Bharat Abhiyan (UBA) Logo**
   - **Headline**: Prominent **`NSS CELL UEM JAIPUR`**
   - **Subtitle**: **`University of Engineering & Management, Jaipur`**
   - Motto badge: *"NOT ME BUT YOU • न मे स्वयं, परन्तु भवान्"*, join buttons, and volunteer impact counters.

2. **NSS Section (`#nss`)**:
   - Comprehensive background on the National Service Scheme (launched 1969, Ministry of Youth Affairs and Sports, GoI).
   - Core objectives, values, Konark Sun Temple chariot wheel emblem significance.
   - **Official Government Portals & Redirect Links**:
     - **NSS Website**: [https://nss.gov.in/](https://nss.gov.in/)
     - **MyGov Website**: [https://www.mygov.in/](https://www.mygov.in/)
     - **MYBharat Website**: [https://mybharat.gov.in/](https://mybharat.gov.in/)

3. **UEMJ Section (`#uemj`)**:
   - Detailed background of **University of Engineering & Management, Jaipur**.
   - Overview of the 32-acre green "Gurukul" campus, NAAC accreditation, AICTE approvals, rural village adoption, and social responsibility initiatives.
   - **Official University Redirect Link**:
     - **UEMJ Website**: [https://uem.edu.in/uem-jaipur/](https://uem.edu.in/uem-jaipur/)

4. **Cell Members Section (`#members`)**:
   - Complete hierarchical structure with dedicated photo cards for every role:
     - **Top Level**:
       - NSS Program Officer
       - NSS Faculty Coordinator
     - **Executive Student Leadership**:
       - President
       - Vice-President
     - **Secretariat**:
       - Secretary (Two secretaries: Operations and Administration)
     - **Department Heads (10 Divisions)**:
       1. Photography Head
       2. Sponsor & Outreach Head
       3. Volunteer Coordinator
       4. PR Head
       5. Social Media Head
       6. Video Editor Head
       7. Documentation Head
       8. Creativity Head
       9. Graphic Head
       10. Logistics Head
     - **Department Members**:
       - Dedicated volunteer cards with department wings and student profiles.

5. **Events Section (`#events`)**:
   - Interactive filtering between **All Events**, **Upcoming Events**, and **Past Events**.
   - **Past Events**: Mega Blood Donation Camp (285 units collected), Ek Ped Maa Ke Naam Mega Tree Plantation, Swachhata Pakhwada Cleanliness Mission, etc.
   - **Upcoming Events**: Annual 7-Day Special Residential Rural Camp, Free Multi-Speciality Health Camp, Cyber Safety & Digital Literacy Workshop.

6. **NSS Calendar Section (`#calendar`)**:
   - **Whole year month-by-month events** covering all 12 months (January to December).
   - Quick month filter buttons (Jan - Dec) to view statutory national observation days (National Youth Day, Republic Day, International Yoga Day, Independence Day, NSS Foundation Day Sept 24, Gandhi Jayanti Oct 2, National Unity Day, etc.).

7. **Photo Gallery Section (`#gallery`)**:
   - **3 continuous sliding rows of photographs**:
     - **Top Row (Row 1)**: Slides **LEFT** at normal, seamless speed.
     - **Center Row (Row 2)**: Slides **RIGHT** at normal, seamless speed.
     - **Bottom Row (Row 3)**: Slides **LEFT** at normal, seamless speed.
   - Hover-to-pause effect.
   - Built-in full-screen **Lightbox Modal** to enlarge and view photo details on click.

8. **About Section (`#about`)**:
   - Brief of NSS CELL UEM JAIPUR, its mission, history, and rural impact.
   - College Name: **University of Engineering & Management, Jaipur**
   - **College Location on Google Map**: Embedded interactive map displaying the UEM Jaipur "Gurukul" campus coordinates.
   - **Social Media Redirect Links**:
     - **X (Twitter)**: [https://x.com/uem_jaipur](https://x.com/uem_jaipur)
     - **LinkedIn**: [https://www.linkedin.com/school/university-of-engineering-&-management-jaipur/](https://www.linkedin.com/school/university-of-engineering-&-management-jaipur/)
     - **Facebook**: [https://www.facebook.com/uemjaipur/](https://www.facebook.com/uemjaipur/)
     - **Instagram**: [https://www.instagram.com/uemjaipur/](https://www.instagram.com/uemjaipur/)
   - **Email IDs**: `nss@uem.edu.in` / `uemj.nsscell@gmail.com`
   - **Phone Numbers**: `+91 1423 294200` / `+91 98873 13330`
   - **Contact Us Form**:
     - Prominent **Google Form Link**: `https://forms.gle/uemj-nss-cell-contact`
     - Quick on-page message form for inquiries.

---

## 📁 Directory Structure

```text
NSS Website/
├── index.html                   # Main portal with all 8 sections
├── css/
│   └── styles.css               # Responsive design, color themes, marquee animations
├── js/
│   └── main.js                  # Navigation, filter controls, marquee cloning, lightbox
├── assets/
│   └── images/
│       ├── logos/               # NSS, UEM, UBA, MyGov, MYBharat logos (SVG)
│       ├── hero/                # UEMJ Academic building background
│       ├── members/             # Photos for PO, Coordinator, President, VP, Secretaries, 10 Heads, Members
│       ├── events/              # Event posters and photos
│       └── gallery/             # 18 curated photos for the 3-row sliding marquee
├── package.json                 # npm scripts
├── serve.js                     # Zero-dependency local development server
├── verify-site.js               # Asset and requirement verification script
└── README.md                    # Project documentation
```

---

## 🚀 How to Run Locally

### Method 1: Direct Double Click
Simply double-click `index.html` in your file explorer to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Method 2: Node.js (Recommended)
Open your terminal in `d:\NSS Website` and run:
```bash
npm start
```
or:
```bash
node serve.js
```
Then visit **`http://localhost:3000`** in your browser.

---

## 🎨 How to Customize

- **Updating Real Member Photos**: Replace any file in `assets/images/members/` with real `.jpg` or `.png` photographs (e.g., `program-officer.jpg`, `president.jpg`) and update the `src` attribute in `index.html`.
- **Google Form URL**: In `index.html`, search for `https://forms.gle/uemj-nss-cell-contact` and replace it with your exact Google Form URL.
- **Academic Building Photo**: Replace `assets/images/hero/uemj-building.svg` with your high-res campus photograph `uemj-building.jpg`.

---

## 🌐 Deployment

This website is pure static HTML5, CSS3, and JavaScript with **zero external server dependencies**. You can instantly deploy it on:
- **GitHub Pages**: Push this folder to a GitHub repository and enable GitHub Pages in Settings.
- **University Web Server / Apache / Nginx**: Drop all files directly into `/var/www/html/` or `htdocs/`.
- **Vercel / Netlify / Cloudflare Pages**: Connect the repo or run `npx netlify deploy` / `npx vercel`.
