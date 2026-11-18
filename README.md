# Sood Photography

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A modern, responsive photography portfolio and studio website built for **Sood Photography** to showcase visual work, highlight service packages, and make client inquiries effortless across desktop and mobile devices.

> **Live Demo:** *[(Site Link)](https://sood-s-photography.vercel.app/)*

---

## Table of Contents

- [Features](#features)
- [Sections Overview](#sections-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Features

- **Responsive Gallery Layout:** Clean grid-based photo showcase that adapts smoothly from widescreen monitors to mobile viewports.
- **Category Filtering & Lightbox View:** Browse curated photography collections (e.g., Weddings, Portraits, Events, Commercial) with full-resolution preview support.
- **Service & Package Highlights:** Dedicated sections detailing photography offerings, deliverables, and booking workflows.
- **Client Inquiry & Contact Section:** Direct contact form and social/location links for fast booking requests.
- **Performance-Focused Assets:** Optimized layout structure and lazy-loaded media for fast initial page loads.
- **Clean Visual Hierarchy:** Minimalist typography and balanced spacing designed to keep the focus on the photography.

---

## Sections Overview

| Section | Purpose |
| :--- | :--- |
| **Hero** | Full-bleed featured photograph, brand tagline, and primary call-to-action |
| **Portfolio / Gallery** | Curated showcase of recent shoots organized by category |
| **About** | Story behind Sood Photography, creative approach, and gear/experience highlights |
| **Services** | Breakdown of available shoots (weddings, portraits, events, commercial) |
| **Testimonials** | Client feedback and reviews |
| **Contact / Booking** | Inquiry form, email/phone details, and social media links |

---

## Tech Stack

*(Update this table if you are using React, Vite, Next.js, or Tailwind CSS.)*

| Layer | Technology |
| :--- | :--- |
| **Markup** | HTML5 |
| **Styling** | CSS3 / Tailwind CSS |
| **Interactivity** | JavaScript (ES6+) |
| **Hosting** | GitHub Pages / Netlify / Vercel |

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- [Git](https://git-scm.com/)
- *(Optional)* [Node.js](https://nodejs.org/) `v18+` if using a bundler or package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/adityasood386/sood-photography-site.git](https://github.com/adityasood386/sood-photography-site.git)
   cd sood-photography-site
   ```

2. **Run locally**
   - **If static HTML/CSS/JS:** Open `index.html` directly in your browser, or run a local server:
     ```bash
     npx serve .
     ```
   - **If using Node/Vite:**
     ```bash
     npm install
     npm run dev
     ```

---

## Project Structure

```text
sood-photography-site/
├── assets/
│   ├── images/           # Portfolio photos, hero banners, and thumbnails
│   └── icons/            # Brand logos and UI icons
├── css/
│   └── style.css         # Main stylesheet / Tailwind output
├── js/
│   └── main.js           # Gallery filtering, lightbox, and form interactions
├── index.html            # Main entry page
└── README.md
```

---

## Customization

1. **Replace Portfolio Images:** Add your high-resolution photos (WebP or compressed JPEG recommended) into `assets/images/` and update the image paths in `index.html` or your data file.
2. **Update Brand & Contact Details:** Edit the studio name, bio, email address, phone number, and social links in the About and Contact sections.
3. **Configure Contact Form:** Connect the booking form to a form backend such as [Formspree](https://formspree.io/), [Web3Forms](https://web3forms.com/), or Netlify Forms.

---

## Deployment

You can deploy this site for free in minutes:

- **GitHub Pages:** Go to **Settings -> Pages**, select the `main` branch and `/ (root)` folder, then save.
- **Vercel / Netlify:** Import the `adityasood386/sood-photography-site` repository and deploy with default settings.

---

## Contributing

Suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m "Add: your feature description"`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Author

**Aditya Sood**
- GitHub: [@adityasood386](https://github.com/adityasood386)
