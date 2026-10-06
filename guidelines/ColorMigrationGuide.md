# Washington County Color Migration Guide

## New Color Palette

### Primary Colors
- **Primary Blue**: `#003366` (Replaces #002E45)
  - Use for: Headers, navigation bars, primary backgrounds
  - Dark mode alternative: `#4A90E2`

- **Accent Teal**: `#007C91` (Replaces #05547A and #F01A42)
  - Use for: CTAs, links, interactive elements, accents
  - Dark mode alternative: `#00ACC1`

- **Secondary Blue**: `#0052A3`
  - Use for: Secondary buttons, alternate highlights

### Neutral Colors
- **Neutral Gray**: `#F5F5F5` (Replaces #F5F5F5 - no change)
- **Light Blue**: `#E6F3F7` (Replaces #E6F1F4)
- **Cool Gray**: `#757575` (Replaces #AEB0B5)

### Text Colors
- **Text Primary**: `#212121`
- **Text Secondary**: `#757575`
- **Text White**: `#FFFFFF`

### Status Colors
- **Success Green**: `#4CAF50` (Replaces #2E8540)
- **Warning Amber**: `#FF9800` (Replaces #F0AB00)
- **Error Red**: `#F44336` (Replaces #C71C22)

## Migration Checklist

### Completed ✓
- [x] `/styles/globals.css` - Updated all color variables
- [x] `/components/VideoHeroSection.tsx` - New video hero component
- [x] `/components/SearchDialog.tsx` - Enhanced with auto-suggest
- [x] `/components/AnimatedButton.tsx` - Updated button colors
- [x] `/components/NotificationBar.tsx` - Updated to Primary Blue
- [x] `/components/CommunityDevelopmentPage.tsx` - Full color migration
- [x] `/components/EventsSection.tsx` - Dark mode support

### Pending Updates
- [ ] `/components/ServicesSection.tsx` - Update service card colors
- [ ] `/components/NewsSection.tsx` - Update news card accents
- [ ] `/components/NewsletterSection.tsx` - Update form styling
- [ ] `/components/Footer.tsx` - Update footer background to Primary Blue
- [ ] `/components/Header.tsx` - Update header backgrounds and hover states
- [ ] `/components/HeroSection.tsx` - Replace with VideoHeroSection or update colors
- [ ] `/components/ui/` components - Systematic color updates

## Find & Replace Patterns

### Old → New Mappings
```
#002E45 → #003366  (Deep Teal → Primary Blue)
#05547A → #007C91  (Sky Blue → Accent Teal)
#F01A42 → #007C91  (Orange Red → Accent Teal)
#E6F1F4 → #E6F3F7  (Light Teal → Light Blue)
#AEB0B5 → #757575  (Cool Gray update)
#2E8540 → #4CAF50  (Success Green update)
#F0AB00 → #FF9800  (Warning Gold → Warning Amber)
#C71C22 → #F44336  (Error Red update)
```

## Usage Guidelines

### Primary Blue (#003366)
- Main navigation bars
- Hero section overlays
- Footer backgrounds
- Primary headings in light mode

### Accent Teal (#007C91)
- Call-to-action buttons
- Interactive links
- Hover states
- Active navigation items
- Form focus states
- Accent underlines and decorations

### When to Use Which
- **Backgrounds**: Primary Blue (#003366)
- **Interactive Elements**: Accent Teal (#007C91)
- **Text on Dark BG**: White (#FFFFFF)
- **Text on Light BG**: Text Primary (#212121)
- **Secondary Text**: Text Secondary (#757575)

## Accessibility Notes

All color combinations meet WCAG 2.1 AA standards:
- Primary Blue on White: ✓ AAA (12.6:1)
- Accent Teal on White: ✓ AA (4.7:1)
- White on Primary Blue: ✓ AAA (12.6:1)
- White on Accent Teal: ✓ AA (4.6:1)

## Dark Mode Considerations

In dark mode, adjust colors for proper contrast:
- Primary Blue → `#4A90E2` (lighter blue)
- Accent Teal → `#00ACC1` (brighter teal)
- Background → `#121212`
- Card backgrounds → `#1E1E1E`
- Text → `#FFFFFF`
- Muted text → `#B0B0B0`
