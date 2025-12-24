# How to Create Your OG Image

## Quick Overview
You need to create a social media sharing image (Open Graph image) for beautiful link previews on Facebook, LinkedIn, WhatsApp, and Twitter.

---

## Image Specifications

**File Name**: `og-image.jpg`
**Location**: `public/og-image.jpg`
**Dimensions**: **1200 × 630 pixels** (required for all platforms)
**Format**: JPG or PNG
**File Size**: Under 1MB (recommended under 500KB)

---

## Design Recommendations

### Option 1: Use Canva (Easiest)

1. **Go to Canva**: [canva.com](https://canva.com)

2. **Create Custom Size**:
   - Click "Create a design"
   - Choose "Custom size"
   - Enter: 1200 × 630 pixels

3. **Design Elements to Include**:
   ```
   ┌─────────────────────────────────────┐
   │  [FactoryJet Logo]                  │
   │                                     │
   │  World-Class Web & E-Commerce       │
   │  Development Company                │
   │                                     │
   │  ✓ Fast Delivery                   │
   │  ✓ 150+ Projects                   │
   │  ✓ Affordable Pricing              │
   │                                     │
   │  factoryjet.com                    │
   └─────────────────────────────────────┘
   ```

4. **Color Scheme**:
   - Primary: `#0052CC` (Jet Blue)
   - Accent: `#FF6B35` (Jet Orange)
   - Background: White or light gradient
   - Text: Dark (#0F172A) or White (on blue background)

5. **Typography**:
   - Headline: Poppins Bold (48-60px)
   - Subtext: Inter Regular (24-32px)

6. **Download**:
   - File type: JPG (smaller file size)
   - Quality: High
   - Save as: `og-image.jpg`

---

### Option 2: Use Figma

1. Create new frame: 1200 × 630px
2. Add FactoryJet logo (from `public/FinalLogo.svg`)
3. Add headline and benefits
4. Export as JPG (2x quality)

---

### Option 3: Use Adobe Photoshop/Illustrator

1. New document: 1200 × 630px, 72 DPI
2. Design with brand colors and logo
3. Export as JPG, quality: 80-90%

---

### Option 4: Use Online OG Image Generator

**Free Tools**:
- [Social Sizes](https://socialsizes.io/) - Templates for social media
- [OG Image Generator](https://ogimage.vercel.app/) - Quick generation
- [Bannerbear](https://www.bannerbear.com/) - API-based generation

---

## Design Template (Copy-Paste Text)

**Headline**:
```
World-Class Web & E-Commerce
Development Company
```

**Subheadline/Benefits**:
```
✓ Fast 7-Day Delivery
✓ 150+ Successful Projects
✓ Affordable Transparent Pricing
```

**Footer**:
```
factoryjet.com
```

---

## What to Include

### Must Have:
- ✅ FactoryJet logo
- ✅ Company name or value proposition
- ✅ Website URL (factoryjet.com)
- ✅ Brand colors (#0052CC, #FF6B35)

### Nice to Have:
- ✓ Key benefits (Fast delivery, 150+ projects)
- ✓ Icons or visual elements
- ✓ Gradient background
- ✓ Subtle patterns or shapes

### Avoid:
- ❌ Too much text (keep it simple)
- ❌ Small fonts (minimum 24px)
- ❌ Cluttered design
- ❌ Low-resolution images

---

## After Creating the Image

1. **Save as**: `og-image.jpg`

2. **Place in**: `s:\FactoryJet\1Final\public\og-image.jpg`

3. **Verify**:
   - File size: Under 1MB
   - Dimensions: Exactly 1200 × 630 pixels
   - Format: JPG or PNG

4. **Test** (after deployment):
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## Quick & Dirty Option (Temporary)

If you need something NOW, you can:

1. Take a screenshot of your homepage hero section
2. Crop to 1200 × 630 pixels
3. Add your logo overlay
4. Save as `og-image.jpg`

This works temporarily, but create a proper one when you have time!

---

## Example OG Images (Inspiration)

Good examples to reference:
- Shopify's OG images (clean, branded)
- Stripe's OG images (simple, effective)
- Vercel's OG images (modern, minimal)

---

## Testing Your OG Image

After creating and deploying:

1. **Facebook Debugger**:
   ```
   https://developers.facebook.com/tools/debug/
   ```
   - Enter: https://factoryjet.com
   - Click "Fetch new information"
   - Should show your OG image

2. **Twitter Card Validator**:
   ```
   https://cards-dev.twitter.com/validator
   ```
   - Enter: https://factoryjet.com
   - Preview will show your OG image

3. **WhatsApp**:
   - Send link to yourself
   - Link preview should show OG image

---

## File Location Reminder

```
s:\FactoryJet\1Final\public\og-image.jpg
```

Once you place the file here and rebuild, it will be automatically included in your deployment!

---

**Need help?** Use Canva's free plan - it's the easiest option and takes just 10-15 minutes!
