# assets/images

Place your images here. Recommended files:

| File | Purpose |
|---|---|
| `c:\Users\MOHIT\Downloads\drdo.jpeg` | Your photo for the About section |
| `og-image.png` | Open Graph preview image (1200×630 px) — shown when the link is shared on LinkedIn/WhatsApp |
| `favicon.ico` | Browser tab icon |
| `icon-192.png` | PWA icon (192×192 px) |
| `icon-512.png` | PWA icon (512×512 px) |

To add your profile photo, reference it in `index.html` inside `.about-img-box`:
```html
<img src="assets/images/profile.jpg" alt="Ria Dhankhar" style="width:100%;height:100%;object-fit:cover;border-radius:20px;">
```
