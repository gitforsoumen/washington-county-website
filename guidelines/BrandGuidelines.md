# Washington County Government Design System
**Version 2.0** | Inspired by Reform Design Philosophy | WCAG 2.1 AA Compliant

---

## 🎨 Color System

### Primary Colors
Our primary palette establishes trust, authority, and professionalism for government services.

| Color Name | Hex Code | Usage | Contrast Ratio |
|------------|----------|-------|----------------|
| **Deep Teal** | `#002E45` | Headers, footers, primary text, navigation backgrounds | 14.5:1 (AAA) |
| **Sky Blue** | `#05547A` | Links, buttons, interactive elements, accents | 7.2:1 (AA) |
| **Orange Accent** | `#DB6024` | CTAs, alerts, important notifications, hover states | 4.6:1 (AA) |

**Accessibility Notes:**
- Deep Teal on white backgrounds: **14.5:1** (exceeds AAA standard)
- Sky Blue on white backgrounds: **7.2:1** (exceeds AA standard)
- Orange Accent on white backgrounds: **4.6:1** (meets AA standard for large text)
- Orange Accent includes icon/text pairing for non-color indicators

### Secondary Colors
Supporting colors for backgrounds, cards, and subtle UI elements.

| Color Name | Hex Code | Usage | Application |
|------------|----------|-------|-------------|
| **Light Teal** | `#E6F1F4` | Card backgrounds, section dividers, hover states | Subtle emphasis areas |
| **Soft Gray** | `#F5F5F5` | Page backgrounds, alternating rows, disabled states | Neutral foundation |
| **Cool Gray** | `#AEB0B5` | Borders, muted text, placeholders | Supporting elements |

### Tertiary Colors (Status Indicators)
Semantic colors with both visual and textual indicators for accessibility.

| Color Name | Hex Code | Usage | Contrast | Icon Required |
|------------|----------|-------|----------|---------------|
| **Success Green** | `#2E8540` | Success messages, confirmations, positive status | 5.8:1 | ✓ Checkmark |
| **Warning Gold** | `#F0AB00` | Warnings, important notices, caution states | 3.2:1* | ⚠ Warning triangle |
| **Error Red** | `#C71C22` | Errors, destructive actions, critical alerts | 5.9:1 | ✕ Error icon |

*Warning Gold must be paired with icons/text and not used for body text on white backgrounds.

### Dark Mode Palette

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | `#FFFFFF` | `#0A1929` |
| Foreground | `#002E45` | `#E6F1F4` |
| Card | `#FFFFFF` | `#132F4C` |
| Muted | `#F5F5F5` | `#1E3A52` |
| Border | `rgba(174,176,181,0.3)` | `rgba(174,176,181,0.2)` |

---

## 📝 Typography System

### Font Family
**Primary:** Inter (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- Features: -webkit-font-smoothing, -moz-osx-font-smoothing
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif

### Type Scale & Hierarchy

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **H1** | 48px | 700 (Bold) | 1.2 (57.6px) | -0.02em | Page titles, hero headings |
| **H2** | 36px | 600 (Semi-bold) | 1.3 (46.8px) | -0.01em | Section headings, major divisions |
| **H3** | 28px | 600 (Semi-bold) | 1.4 (39.2px) | 0 | Subsection headings, card titles |
| **H4** | 18px | 600 (Semi-bold) | 1.6 (28.8px) | 0 | Minor headings, list headers |
| **Body Large** | 18px | 400 (Regular) | 1.6 (28.8px) | 0 | Introductory paragraphs, emphasis |
| **Body** | 16px | 400 (Regular) | 1.6 (25.6px) | 0 | Standard body text, descriptions |
| **Body Small** | 14px | 400 (Regular) | 1.6 (22.4px) | 0 | Captions, helper text, metadata |
| **Button** | 16px | 600 (Semi-bold) | 1.5 (24px) | 0 | All button labels |
| **Label** | 16px | 500 (Medium) | 1.6 (25.6px) | 0 | Form labels, input labels |

### Responsive Typography

```css
/* Mobile (< 640px) */
H1: 32px
H2: 28px
H3: 24px

/* Tablet (640px - 1024px) */
H1: 40px
H2: 32px
H3: 26px

/* Desktop (> 1024px) */
H1: 48px
H2: 36px
H3: 28px
```

---

## 🎭 Component Styles

### Buttons

#### Primary Button (Orange CTA)
```css
Background: #DB6024
Text: #FFFFFF (White)
Border Radius: 6px
Padding: 10px 24px (height: 44px)
Font: 16px Semi-bold

Hover State:
- Background: #C4541F (10% darker)
- Transform: scale(1.03)
- Shadow: 0 4px 12px rgba(219, 96, 36, 0.3)
- Transition: all 200ms ease

Active State:
- Transform: scale(0.98)
- Background: #AD4A1B

Focus State:
- Outline: 2px solid #DB6024
- Outline Offset: 2px
- Border: none (outline only)
```

#### Secondary Button (Sky Blue Outline)
```css
Background: transparent
Border: 2px solid #05547A
Text: #05547A
Border Radius: 6px
Padding: 8px 22px (height: 44px - accounts for border)

Hover State:
- Background: #05547A
- Text: #FFFFFF
- Transform: scale(1.03)
- Shadow: 0 4px 12px rgba(5, 84, 122, 0.2)

Focus State:
- Outline: 2px solid #05547A
- Outline Offset: 2px
```

#### Ghost Button
```css
Background: transparent
Border: none
Text: #002E45

Hover State:
- Background: #E6F1F4
- Text: #002E45

Focus State:
- Outline: 2px solid #05547A
- Outline Offset: 2px
- Border Radius: 6px
```

### Cards

```css
Background: #FFFFFF
Border: 1px solid rgba(174, 176, 181, 0.3)
Border Radius: 8px
Padding: 24px
Shadow: 0 2px 6px rgba(0, 0, 0, 0.1)

Hover State:
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
- Transform: scale(1.02)
- Transition: all 200ms ease

Focus-Within State:
- Ring: 2px solid #05547A
- Ring Offset: 2px
```

### Form Elements

#### Input Fields
```css
Background: #FFFFFF
Border: 2px solid #AEB0B5
Border Radius: 8px
Height: 44px
Padding: 10px 16px
Font: 16px Regular
Text: #002E45
Placeholder: #AEB0B5

Hover State:
- Border: 2px solid #05547A
- Shadow: 0 2px 4px rgba(5, 84, 122, 0.1)

Focus State:
- Border: 2px solid #05547A
- Ring: 2px solid #05547A
- Ring Offset: 0
- Outline: none

Error State:
- Border: 2px solid #C71C22
- Ring: 2px solid rgba(199, 28, 34, 0.3)
- Background: rgba(199, 28, 34, 0.05)

Disabled State:
- Background: #F5F5F5
- Border: 2px solid #AEB0B5
- Opacity: 0.5
- Cursor: not-allowed
```

#### Labels
```css
Font: 16px Medium
Color: #002E45
Margin Bottom: 8px
Display: block

Required Indicator:
- Color: #C71C22
- Content: "*"
- Font: inherit
```

---

## ✨ Microanimations

### Timing Functions
```css
/* Standard easing for most interactions */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);

/* Emphasized easing for important actions */
--ease-emphasized: cubic-bezier(0.0, 0.0, 0.2, 1);

/* Deceleration for exit animations */
--ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);

/* Acceleration for entrance animations */
--ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
```

### Duration Standards
```css
--duration-instant: 100ms;  /* Immediate feedback */
--duration-fast: 200ms;     /* Standard interactions */
--duration-normal: 300ms;   /* Complex state changes */
--duration-slow: 500ms;     /* Page transitions */
```

### Common Animations

#### Button Hover
```css
transition: all 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
transform: scale(1.03);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
```

#### Card Hover
```css
transition: all 200ms ease;
transform: translateY(-2px) scale(1.01);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
```

#### Accordion Expand
```css
animation: accordion-down 300ms cubic-bezier(0.4, 0.0, 0.2, 1);

@keyframes accordion-down {
  from { height: 0; opacity: 0; }
  to { height: var(--radix-accordion-content-height); opacity: 1; }
}
```

#### Fade In
```css
animation: fadeIn 300ms ease-in-out;

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### Pulse (for notifications)
```css
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
```

### Focus Animations
```css
/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🌑 Shadow System

### Elevation Levels

| Level | CSS | Use Case |
|-------|-----|----------|
| **0** | `none` | Flush elements, disabled states |
| **1** | `0 1px 2px rgba(0, 0, 0, 0.05)` | Subtle lift, input fields |
| **2** | `0 2px 6px rgba(0, 0, 0, 0.1)` | Cards at rest, default elevation |
| **3** | `0 4px 12px rgba(0, 0, 0, 0.15)` | Hovered cards, focused elements |
| **4** | `0 8px 16px rgba(0, 0, 0, 0.12)` | Dropdowns, popovers |
| **5** | `0 12px 24px rgba(0, 0, 0, 0.15)` | Modals, dialogs |
| **6** | `0 16px 32px rgba(0, 0, 0, 0.18)` | Maximum elevation, overlays |

### Dark Mode Shadows
```css
/* Enhance shadows in dark mode */
.dark {
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-2: 0 2px 6px rgba(0, 0, 0, 0.4);
  --shadow-3: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-4: 0 8px 16px rgba(0, 0, 0, 0.6);
}
```

---

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal text (< 18px):** Minimum 4.5:1
- **Large text (≥ 18px or 14px bold):** Minimum 3:1
- **UI components:** Minimum 3:1
- **Our standards:** All exceed AA, many reach AAA (7:1+)

#### Focus Indicators
```css
*:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
  border-radius: 2px;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  *:focus-visible {
    outline-width: 3px;
  }
}
```

#### Skip Links
```css
.skip-to-main {
  position: absolute;
  top: -100px;
  left: 0;
  background: #DB6024;
  color: white;
  padding: 12px 24px;
  font-weight: 600;
  z-index: 9999;
}

.skip-to-main:focus {
  top: 0;
  outline: 2px solid white;
  outline-offset: -4px;
}
```

### Keyboard Navigation
- **Tab order:** Logical, left-to-right, top-to-bottom
- **Focus trapping:** Modals and dialogs trap focus
- **Escape key:** Closes all overlays and dropdowns
- **Arrow keys:** Navigate within menus and accordions
- **Enter/Space:** Activate buttons and toggles

### Screen Reader Support
- All images have descriptive `alt` text
- Icons include `aria-label` or `aria-hidden="true"` when decorative
- Form inputs have visible labels (never placeholder-only)
- Error messages use `aria-invalid` and `aria-describedby`
- Live regions use `aria-live` for dynamic content
- Landmark regions: `header`, `nav`, `main`, `footer`, `aside`

### ARIA Patterns
```html
<!-- Accordion -->
<button aria-expanded="false" aria-controls="panel-1">
  Section Title
</button>
<div id="panel-1" role="region" aria-labelledby="button-1">
  Content
</div>

<!-- Dropdown Menu -->
<button aria-haspopup="true" aria-expanded="false">
  Menu
</button>

<!-- Form Error -->
<input 
  aria-invalid="true" 
  aria-describedby="error-msg"
/>
<p id="error-msg" role="alert">
  This field is required
</p>
```

---

## 📐 Spacing System

### Base Unit: 4px

| Token | Value | rem | Usage |
|-------|-------|-----|-------|
| `xs` | 4px | 0.25rem | Tight spacing, borders |
| `sm` | 8px | 0.5rem | Compact elements, gaps |
| `md` | 16px | 1rem | Default spacing, padding |
| `lg` | 24px | 1.5rem | Section padding, margins |
| `xl` | 32px | 2rem | Large separations |
| `2xl` | 48px | 3rem | Section dividers |
| `3xl` | 64px | 4rem | Page sections |
| `4xl` | 96px | 6rem | Hero spacing |

---

## 🔄 Interactive States

### State Progression
```
Default → Hover → Active → Focus → Disabled
```

### State Specifications

#### Hover
- **Duration:** 200ms
- **Properties:** background, color, transform, shadow
- **Transform:** scale(1.03) for buttons, translateY(-2px) for cards

#### Active (Click/Touch)
- **Duration:** 100ms
- **Transform:** scale(0.98)
- **Shadow:** Reduced elevation

#### Focus
- **Outline:** 2px solid ring color
- **Offset:** 2px
- **Visible on keyboard, hidden on mouse

#### Disabled
- **Opacity:** 0.5
- **Cursor:** not-allowed
- **Pointer Events:** none

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets, large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small desktops, laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Container Max Widths
```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) { .container { max-width: 640px; } }
@media (min-width: 768px) { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }
```

---

## 🎯 Icon System

### Icon Library
**Lucide React** - Consistent, accessible, open-source icons

### Icon Sizes
| Size | Pixels | Usage |
|------|--------|-------|
| xs | 12px | Dense UI, badges |
| sm | 16px | Inline with text |
| md | 20px | Standard buttons |
| lg | 24px | Prominent features |
| xl | 32px | Hero sections |

### Icon Colors
- **Decorative icons:** `aria-hidden="true"`
- **Functional icons:** Include `aria-label`
- **Status icons:** Use semantic colors with text fallback

---

## 📋 Component Checklist

### Accessibility Requirements
- [ ] Minimum 4.5:1 contrast ratio for text
- [ ] Visible focus indicators on all interactive elements
- [ ] Keyboard navigation support
- [ ] ARIA labels and roles where appropriate
- [ ] Descriptive alt text for images
- [ ] Labels for all form inputs
- [ ] Error states with proper ARIA attributes
- [ ] Skip links for keyboard users
- [ ] Landmark regions properly defined
- [ ] Supports 200% zoom without breaking layout
- [ ] Respects prefers-reduced-motion
- [ ] Supports high contrast mode

---

## 🔍 Testing Requirements

### Automated Testing
- **axe DevTools:** 0 violations
- **WAVE:** 0 errors, 0 contrast errors
- **Lighthouse:** Accessibility score 100

### Manual Testing
- **Keyboard only navigation:** All features accessible
- **Screen reader (NVDA/JAWS/VoiceOver):** Logical reading order
- **200% zoom:** No horizontal scroll, readable content
- **High contrast mode:** All content visible
- **Touch targets:** Minimum 44x44px for interactive elements

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## 📚 Resources

### Design Tools
- **Figma:** Design files and component library
- **Contrast Checker:** WebAIM Contrast Checker
- **Color Blindness Simulator:** Coblis

### Development
- **Tailwind CSS v4.0:** Utility-first framework
- **Radix UI:** Accessible component primitives
- **Lucide React:** Icon system

### Accessibility
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA Authoring Practices:** https://www.w3.org/WAI/ARIA/apg/
- **Section 508:** https://www.section508.gov/

---

**Last Updated:** October 16, 2025  
**Maintained by:** Washington County Digital Services Team  
**Questions?** Contact: webmaster@washco.utah.gov
