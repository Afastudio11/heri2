# Design Guidelines: Skyled Pro Indonesia

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern B2B portfolio websites like Stripe (clean sophistication), Linear (bold typography), and Notion (approachable professionalism). This approach suits the multi-division holding company structure requiring both credibility and visual appeal.

## Core Design Principles
1. **Professional Authority**: Establish trust through clean layouts and structured information hierarchy
2. **Division Clarity**: Each business unit maintains distinct visual identity while feeling cohesive
3. **Seamless Navigation**: Smooth scroll behavior and intuitive section transitions

## Typography System

**Font Family**: Plus Jakarta Sans (via Google Fonts)
- Display/Headings: 700-800 weight
- Subheadings: 600-700 weight  
- Body: 400-500 weight
- Labels/Meta: 600 weight, uppercase, tracking-widest

**Hierarchy**:
- Hero: text-5xl to text-8xl (responsive), font-extrabold
- Section Headings: text-4xl to text-5xl, font-bold
- Card Titles: text-2xl to text-3xl, font-bold
- Body Text: text-base to text-lg, leading-relaxed
- Small Text: text-sm to text-xs

## Layout & Spacing

**Spacing Units**: Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 to py-24
- Card padding: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8, gap-12, gap-16
- Container: max-w-7xl mx-auto with px-4 sm:px-6 lg:px-8

**Grid Layouts**:
- Business Units: 3-column grid (md:grid-cols-3)
- About Section: 2-column split (md:grid-cols-2)
- Contact Cards: 2-column (md:grid-cols-2)

## Component Library

**Navbar**:
- Fixed position with scroll-based background transition
- Transparent on hero, white backdrop-blur on scroll
- Logo with custom SVG icon + text lockup
- Desktop: horizontal links, mobile: hamburger menu
- CTA button: rounded-full with shadow-lg

**Hero Section**:
- Full viewport height (min-h-screen)
- Dark navy background (#0B2447) with gradient blur orbs
- Noise texture overlay (opacity-20)
- Dot grid pattern (radial-gradient)
- Centered content with badge, large title, description, dual CTAs
- Scroll indicator at bottom

**Cards** (Business Units, Values):
- Rounded corners: rounded-[32px] to rounded-[40px]
- Border: border border-gray-100
- Shadow: shadow-lg, hover:shadow-2xl
- Hover states: hover:-translate-y-2 transition-all
- Icon containers: rounded-2xl with bg-{color}-50
- Color-coded top bar for division cards (h-2)

**Buttons**:
- Primary: bg-skyled-navy text-white rounded-full px-8 py-4 shadow-xl
- Secondary: border border-white/30 text-white rounded-full backdrop-blur
- Icon buttons: flex items-center gap-2 or gap-3

**Sections**:
- Alternating backgrounds: white, slate-50, slate-900
- About: white background with gradient decorative element
- Business: slate-50 background  
- Featured Projects: dark (slate-900) with testimonial overlay
- Contact: white background, centered layout

## Visual Elements

**Color Applications**:
- Navy (#0B2447): Primary brand, headers, dark backgrounds
- Blue (#19376D): Secondary accents, links
- Accent (#576CBC): Highlights, decorative elements
- Light (#A5D7E8): Gradient stops, text accents
- Gold (#EAB308): Mission statements, premium touches
- Teal (#14b8a6): Production division, checkmarks
- Amber (#f97316): Consulting division

**Gradients & Effects**:
- Blur orbs: bg-{color}/20 blur-[120px] for atmospheric effects
- Text gradients: bg-gradient-to-r from-skyled-light via-white to-skyled-light
- Backdrop blur: backdrop-blur-md on glassmorphic elements
- Noise texture: grainy-gradients.vercel.app/noise.svg

**Icons**: 
- Lucide React library throughout
- Sizes: 16-20px (inline), 32-40px (feature cards)
- Colored to match section theme

## Animations

**Scroll Animation** (Client Logos):
- Infinite horizontal scroll: animate-scroll (40s linear)
- Gradient fade masks on edges (w-32)
- Triple duplication for seamless loop

**Entrance Effects**:
- Fade-in: opacity and translateY(10px) on load
- Bounce: scroll indicator
- Pulse: hero background blur orbs

**Interaction States**:
- Cards: hover:-translate-y-2 scale transitions
- Buttons: hover:scale-105 transform
- Links: hover:opacity-75

## Images

**Hero Section**: NO large hero image - uses gradient blur orbs and abstract background instead

**Featured Projects Section**:
- Large image: rounded-[40px] overflow-hidden, h-[500px]
- Gradient overlay: from-black/80 to-transparent
- Testimonial content overlaid at bottom
- Image: Event/conference scene (unsplash placeholder)

**About Section**: No images - uses gradient decorative element instead

## Accessibility & Responsiveness

- Smooth scroll behavior enabled
- Mobile-first responsive breakpoints (sm, md, lg)
- Hamburger menu on mobile
- High contrast text ratios
- Focus states on interactive elements
- Semantic HTML structure maintained

## Special Features

**Client Showcase**: Infinite scroll animation with pill-shaped client badges
**Business Unit Cards**: Color-coded system with dedicated icons, feature lists, CTA footer
**Vision/Mission Box**: Bordered card with quotation styling for vision
**Contact Grid**: Icon-led communication method cards