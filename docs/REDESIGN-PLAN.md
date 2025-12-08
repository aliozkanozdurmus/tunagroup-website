# Tuna Group Website Redesign Plan

## 🎨 Design Concept: Luxury & Creative Corporate Website

Referans görselden ilham alınarak, kurumsal mavi tonlarıyla luxury ve modern bir tasarım oluşturulacak.

---

## 📋 İçerik Özeti

### Hakkımızda
Tuna Group, 2000 yılından bu yana sağlık teknolojileri ve endüstriyel üretim alanlarında faaliyet gösteren çok sektörlü bir şirkettir.

**Öne Çıkan Özellikler:**
- Dünya markalarının distribütörlüğü
- ISO 13485:2016 standartlarında üretim
- EU MDR kapsamında CE sertifikalı ürünler
- Ambalaj ve çuval üretimi
- Çevre dostu ve dayanıklı ürünler

### Vizyonumuz
Sağlık teknolojileri ve endüstriyel üretim alanlarında, yenilikçi yaklaşımı ve sürdürülebilir üretim gücüyle bölgesel liderliği aşarak küresel ölçekte güven veren ve tercih edilen bir grup şirketi olmak.

### Misyonumuz
Sağlık teknolojileri ve endüstriyel üretim alanlarında, uluslararası kalite standartlarına uygun, güvenilir ve yenilikçi çözümler sunmak.

---

## 🎨 Renk Paleti (Kurumsal Mavi)

```css
/* Primary Colors - Corporate Blue */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;
--primary-600: #2563eb;
--primary-700: #1d4ed8;
--primary-800: #1e40af;
--primary-900: #1e3a8a;
--primary-950: #172554;

/* Accent Colors - Deep Navy/Indigo */
--accent-dark: #0f172a;
--accent-navy: #1e293b;
--accent-indigo: #312e81;

/* Luxury Gold Accent */
--gold-400: #fbbf24;
--gold-500: #f59e0b;

/* Gradients */
--gradient-hero: linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e293b 100%);
--gradient-stats: linear-gradient(180deg, #1e3a8a 0%, #172554 100%);
--gradient-overlay: linear-gradient(to right, rgba(30, 58, 138, 0.9), rgba(49, 46, 129, 0.7));
```

---

## 🏗️ Sayfa Yapısı

```
┌─────────────────────────────────────────────────────────┐
│                      PRELOADER                          │
│              (Logo + Loading Animation)                 │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                     NAVIGATION                          │
│  [☰ Menu]  [Logo: TUNA GROUP]              [TR | EN]    │
│            Transparent → Solid on scroll                │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                     HERO SLIDER                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │         Full-screen background image            │   │
│  │         with gradient overlay                   │   │
│  │                                                 │   │
│  │    "SAĞLIK TEKNOLOJİLERİNDE                    │   │
│  │          İLERİ TEKNOLOJİ"                      │   │
│  │                                                 │   │
│  │    ○ ●   01|02          [↓ aşağı kaydır]      │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   ABOUT SECTION                         │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │                     │  │     Hakkımızda          │  │
│  │    TEXT CONTENT     │  │     ___________         │  │
│  │                     │  │                         │  │
│  │  Tuna Group, 2000   │  │    [Corporate Image]    │  │
│  │  yılından bu yana   │  │                         │  │
│  │  sağlık...          │  │                         │  │
│  │                     │  │                         │  │
│  │  [DETAYLI BİLGİ]    │  │                         │  │
│  └─────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│               STATS SECTION (Dark Blue BG)              │
│                                                         │
│     "RAKAMLARLA TUNA GROUP"                            │
│                                                         │
│   ┌───────┐    ┌───────────┐    ┌───────┐             │
│   │  24+  │    │   [IMG]   │    │ 500+  │             │
│   │ YILLIK│    │           │    │ÇALIŞAN│             │
│   │TECRÜBE│    └───────────┘    │       │             │
│   └───────┘                      └───────┘             │
│                                                         │
│   ┌───────────┐        4        ┌───────────┐         │
│   │   [IMG]   │      GRUP       │   [IMG]   │         │
│   │           │    ŞİRKETİ      │           │         │
│   └───────────┘                  └───────────┘         │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│              VISION & MISSION SECTION                   │
│  ┌─────────────────────────────────────────────────┐   │
│  │              VİZYONUMUZ                         │   │
│  │   Sağlık teknolojileri ve endüstriyel...       │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │              MİSYONUMUZ                         │   │
│  │   Sağlık teknolojileri ve endüstriyel...       │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   VALUES SECTION                        │
│                   Güçlü Yanlarımız                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ ISO 13485│ │ CE Cert  │ │  Uzman   │ │Sürdürüle-│  │
│  │  Kalite  │ │ EU MDR   │ │   Ekip   │ │  bilir   │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  CONTACT SECTION                        │
│                 İletişime Geçin                         │
│  ┌────────┐ ┌────────┐ ┌────────┐                     │
│  │  Adres │ │ Telefon│ │ E-posta│                     │
│  └────────┘ └────────┘ └────────┘                     │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Contact Form                       │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                      FOOTER                             │
│  TUNA GROUP    │  Grup Şirketleri  │  İletişim         │
│  2000'den beri │  - Tuna Sentetik  │  Başpınar OSB     │
│                │  - Tuna Medical   │  +90 342 360 98 55│
│                │  - Efe Tıp        │  info@tunagroup...│
│                │  - Wellmed        │                   │
│─────────────────────────────────────────────────────────│
│         © 2024 Tuna Group. Tüm hakları saklıdır.       │
└─────────────────────────────────────────────────────────┘
```

---

## 🧩 Component Details

### 1. Navigation Component
**File:** `components/luxury-navigation.tsx`

```
Features:
- Fixed position, transparent background initially
- Solid background on scroll (backdrop-blur)
- Left: Hamburger menu icon (opens full-screen menu)
- Center: Tuna Group Logo
- Right: Language toggle (TR | EN) - placeholder for future
- Smooth scroll to sections
- Mobile responsive
```

### 2. Hero Slider Component
**File:** `components/luxury-hero.tsx`

```
Features:
- Full viewport height (100vh)
- Background images with gradient overlay
- Animated text entrance
- Slide pagination (01|02 format)
- Dot indicators on left
- Scroll down indicator with animation
- Auto-slide with 5 second interval
- Smooth transitions

Slides Content:
1. "SAĞLIK TEKNOLOJİLERİNDE İLERİ TEKNOLOJİ"
2. "ENDÜSTRİYEL ÜRETİMDE YENİLİKÇİ ÇÖZÜMLER"
```

### 3. About Section Component
**File:** `components/luxury-about.tsx`

```
Features:
- White background
- Two-column layout (text left, image right)
- Elegant typography with serif accents
- "DETAYLI BİLGİ" button
- Smooth scroll animations
- Corporate image placeholder

Content:
- Full "Hakkımızda" text from provided content
```

### 4. Stats Section Component
**File:** `components/luxury-stats.tsx`

```
Features:
- Dark blue gradient background
- "RAKAMLARLA TUNA GROUP" title
- Asymmetric grid layout with images
- Large animated numbers
- Elegant typography

Stats:
- 24+ Yıllık Tecrübe (2000'den beri)
- 500+ Çalışan
- 4 Grup Şirketi
- 50+ Ülke (ihracat)
```

### 5. Vision & Mission Section Component
**File:** `components/luxury-vision-mission.tsx`

```
Features:
- Clean white/light gray background
- Two elegant cards or sections
- Icon accents
- Smooth animations
- Premium typography

Content:
- Vizyonumuz (full text)
- Misyonumuz (full text)
```

### 6. Values Section Component
**File:** `components/luxury-values.tsx`

```
Features:
- White background
- 4-column grid (responsive)
- Hover effects with blue accent
- Icon animations
- Elegant borders

Values:
- ISO 13485:2016 Kalite
- CE Sertifikası (EU MDR)
- Uzman Ekip
- Sürdürülebilir Üretim
```

### 7. Contact Section Component
**File:** `components/luxury-contact.tsx`

```
Features:
- Light gray background
- Contact info cards (3)
- Elegant form design
- Input focus animations
- Submit button with hover effect
```

### 8. Footer Component
**File:** `components/luxury-footer.tsx`

```
Features:
- Dark blue/navy background
- Three-column layout
- Company info, Group companies, Contact
- Copyright bar
- Subtle animations
```

### 9. Preloader Component
**File:** `components/luxury-preloader.tsx`

```
Features:
- Full screen overlay
- Tuna Group logo/text
- Loading animation (line/bar)
- Smooth fade out
- Corporate blue colors
```

---

## 🎬 Animations & Interactions

### Scroll Animations
```javascript
// Using Framer Motion
- Fade up on scroll into view
- Stagger animations for lists
- Parallax effects on images
- Counter animations for stats
```

### Hover Effects
```css
/* Buttons */
- Scale transform (1.02-1.05)
- Color transitions
- Box shadow elevation

/* Cards */
- Subtle lift effect
- Border color change
- Background gradient shift

/* Navigation Links */
- Underline animation
- Color transition
```

### Transitions
```css
/* Page transitions */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Smooth scrolling */
scroll-behavior: smooth;

/* Hero slide transitions */
transition: opacity 1s ease-in-out;
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

---

## 📁 File Structure

```
app/
├── globals.css          # Updated with luxury styles
├── layout.tsx           # Updated fonts and metadata
└── page.tsx             # Updated component imports

components/
├── luxury-preloader.tsx
├── luxury-navigation.tsx
├── luxury-hero.tsx
├── luxury-about.tsx
├── luxury-stats.tsx
├── luxury-vision-mission.tsx
├── luxury-values.tsx
├── luxury-contact.tsx
└── luxury-footer.tsx

public/
└── images/
    ├── hero-1.jpg       # Hero slide 1
    ├── hero-2.jpg       # Hero slide 2
    ├── about-image.jpg  # About section image
    ├── stats-1.jpg      # Stats section images
    ├── stats-2.jpg
    └── tuna-group-logo.png
```

---

## 🚀 Implementation Order

1. **Design System Setup**
   - Update `tailwind.config.ts` with new colors
   - Update `globals.css` with luxury styles

2. **Core Layout**
   - Update `app/layout.tsx`
   - Create new navigation component

3. **Hero Section**
   - Create luxury hero slider

4. **Content Sections**
   - About section
   - Stats section
   - Vision & Mission section
   - Values section

5. **Contact & Footer**
   - Contact section
   - Footer component

6. **Final Polish**
   - Preloader update
   - Animation refinements
   - Responsive testing

---

## ✅ Technical Requirements

- **Framework:** Next.js 16+ (Latest - App Router)
- **Styling:** Tailwind CSS 3.4+
- **Animations:** Framer Motion (motion/react)
- **Icons:** Lucide React
- **Fonts:** Montserrat (primary), Inter (secondary)
- **Images:** Pexels (placeholder), actual corporate images later
- **React:** React 19
- **TypeScript:** TypeScript 5+

### Next.js 16+ Notları
- App Router (app/) yapısı kullanılacak
- Server Components varsayılan
- "use client" direktifi client components için gerekli
- Turbopack ile hızlı geliştirme

---

## 📝 Notes

- All text content is in Turkish
- Images will use Pexels placeholders initially
- Focus on smooth, luxury feel animations
- Corporate blue color palette throughout
- Mobile-first responsive design
- Accessibility considerations (contrast, focus states)