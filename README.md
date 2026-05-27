# Ria Dhankhar — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-00e5ff?style=for-the-badge&logo=vercel)](https://your-live-link.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive personal portfolio website for **Ria Dhankhar**, ECE student at IGDTUW — showcasing work in Embedded Systems, VLSI, and AI/ML.

---

## 🖥️ Preview

> Dark-themed, blue-cyan gradient design with smooth animations, scroll reveal effects, and a fully responsive layout.

---

## ✨ Features

- **Typing animation** cycling through roles (ECE Student, Embedded Engineer, ML Enthusiast…)
- **Scroll progress bar** at the top of the page
- **Active nav link highlighting** based on current section in view
- **Scroll reveal animations** for cards and sections (fade up, left, right)
- **Mobile-responsive** with a hamburger menu and full-screen overlay nav
- **Contact form** with basic validation and success state
- **Back-to-top button** that appears on scroll
- Zero dependencies — pure HTML, CSS, and vanilla JavaScript

---

## 📁 Project Structure

```
ria-portfolio/
├── index.html          # Main portfolio page (all-in-one)
├── assets/
│   ├── css/
│   │   └── style.css   # Extracted stylesheet (reference copy)
│   ├── js/
│   │   └── main.js     # Extracted scripts (reference copy)
│   └── images/         # Place profile photo or project screenshots here
├── site.webmanifest    # PWA manifest
├── robots.txt          # Search engine crawl rules
├── .gitignore          # Files to exclude from Git
├── package.json        # Project metadata
└── README.md           # You are here
```

---

## 🚀 Getting Started

No build tools required. Just open in a browser:

```bash
git clone https://github.com/your-username/ria-portfolio.git
cd ria-portfolio
# Open index.html in your browser, or use a local server:
npx serve .
```

Or with Python:

```bash
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 🌐 Deployment

This site can be deployed for free on any static hosting platform:

| Platform | Steps |
|---|---|
| **Vercel** | `npx vercel` or drag-and-drop the folder |
| **Netlify** | Drag the folder to [netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Enable Pages in repo Settings → select `main` branch |

---

## 🛠️ Customisation

All content is in `index.html`. Key sections to update:

- **Hero** — name, bio, typing phrases (`phrases` array in `<script>`)
- **About** — description paragraphs and highlight cards
- **Skills** — add/remove `.skill-pill` elements inside each `.skill-category`
- **Projects** — duplicate a `.project-card` block and update content
- **Experience** — add `.tl-item` blocks to the timeline
- **Contact** — update email and social links

Colors and fonts are controlled via CSS custom properties at the top of the `<style>` block:

```css
:root {
  --bg: #04080f;
  --cyan: #00e5ff;
  --blue: #2979ff;
  /* ... */
}
```

---

## 📬 Contact

**Ria Dhankhar**  
ECE @ IGDTUW · CGPA 8.65  
📧 writetoria30@gmail.com  
📞 +91-9958560062  
🔗 [LinkedIn](https://linkedin.com) · [GitHub](https://github.com)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).  
Feel free to fork and adapt for your own portfolio — a credit or star is appreciated!
