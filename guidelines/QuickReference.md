# Washington County Design System - Quick Reference

## 🎨 Color Palette

### Primary
```css
/* Deep Teal - Headers, Navigation */
#002E45

/* Sky Blue - Links, Buttons */
#05547A

/* Orange Accent - CTAs, Alerts */
#DB6024
```

### Secondary
```css
/* Light Teal - Backgrounds */
#E6F1F4

/* Soft Gray - Sections */
#F5F5F5

/* Cool Gray - Borders */
#AEB0B5
```

### Status
```css
/* Success */
#2E8540

/* Warning */
#F0AB00

/* Error */
#C71C22
```

---

## 📝 Typography Scale

```tsx
H1: 48px / Bold / 1.2
H2: 36px / Semibold / 1.3
H3: 28px / Semibold / 1.4
H4: 18px / Semibold / 1.6
Body: 16px / Regular / 1.6
Small: 14px / Regular / 1.6
```

---

## 🔘 Button Examples

```tsx
// Primary (Orange CTA)
<Button className="bg-[#DB6024] hover:bg-[#C4541F]">
  Click Me
</Button>

// Secondary (Sky Blue Outline)
<Button variant="secondary">
  Learn More
</Button>

// Ghost
<Button variant="ghost">
  Cancel
</Button>
```

---

## 🃏 Card Example

```tsx
<Card className="hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] hover:scale-[1.02]">
  <CardContent>
    <h3>Card Title</h3>
    <p>Card description</p>
  </CardContent>
</Card>
```

---

## 📋 Form Example

```tsx
<div>
  <Label htmlFor="email">Email Address</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
    aria-required="true"
  />
</div>
```

---

## 🎭 Hover States

```css
/* Button Hover */
hover:scale-[1.03]
hover:bg-[#C4541F]

/* Card Hover */
hover:scale-[1.02]
hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)]

/* Link Hover */
hover:text-[#DB6024]
hover:underline
```

---

## 🎯 Focus States

```css
/* All Interactive Elements */
focus:outline-none
focus:ring-2
focus:ring-[#05547A]
focus:ring-offset-2
```

---

## ✨ Animations

```tsx
// Fade In
className="animate-fadeIn"
style={{ animationDelay: '100ms' }}

// Slide In Right
className="animate-slideInRight"

// Scale In
className="animate-scaleIn"
```

---

## 🌑 Shadows

```css
/* Level 1 - Subtle */
shadow-[0_1px_2px_rgba(0,0,0,0.05)]

/* Level 2 - Default */
shadow-[0_2px_6px_rgba(0,0,0,0.1)]

/* Level 3 - Hover */
shadow-[0_4px_12px_rgba(0,0,0,0.15)]

/* Level 4 - Elevated */
shadow-[0_8px_16px_rgba(0,0,0,0.12)]
```

---

## ♿ Accessibility Checklist

- [ ] All buttons have aria-labels (if icon-only)
- [ ] Form inputs have visible labels
- [ ] Images have alt text
- [ ] Focus indicators are visible
- [ ] Color contrast meets 4.5:1 minimum
- [ ] Touch targets are 44px minimum
- [ ] Keyboard navigation works
- [ ] ARIA attributes are correct

---

## 🔗 Useful Links

- Full Guidelines: `/guidelines/BrandGuidelines.md`
- Implementation: `/guidelines/ImplementationSummary.md`
- Globals CSS: `/styles/globals.css`

---

## 💡 Common Patterns

### Alert with Icon
```tsx
<Alert variant="success">
  <CheckCircle className="w-5 h-5" aria-hidden="true" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

### Badge
```tsx
<Badge variant="default">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Closed</Badge>
```

### Accordion
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>
      Answer goes here.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

**Need Help?** Reference the full brand guidelines document for detailed specifications.
