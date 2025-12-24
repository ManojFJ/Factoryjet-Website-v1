# Adding Canonical Tags to All Pages

## ✅ Status

**Pages with Canonical Tags**:
- ✅ Homepage (index.html)
- ✅ ServiceLocation pages (40 pages via Helmet)
- ✅ About page
- ✅ Contact page
- ✅ Blog page

**Pages Missing Canonical Tags** (need to be updated):
- ⚠️ Pricing
- ⚠️ Case Studies
- ⚠️ Web Design
- ⚠️ E-Commerce
- ⚠️ Terms
- ⚠️ Privacy
- ⚠️ Sitemap
- ⚠️ City pages (Mumbai, Pune, Bangalore, Ahmedabad, Surat)

---

## 🔧 Solution: SEOHead Component

A reusable `SEOHead` component has been created at:
**File**: `src/components/SEOHead.tsx`

This component adds:
- ✅ Canonical URL
- ✅ Meta robots tags
- ✅ Title and description
- ✅ Open Graph tags
- ✅ Twitter Card tags

---

## 📝 How to Add to Remaining Pages

### Step 1: Import the Component

Add to the top of each page's index.tsx:
```typescript
import SEOHead from '../../components/SEOHead';
```

### Step 2: Add SEOHead Component

Add inside the component's return, before other content:
```tsx
<SEOHead
  title="Page Title Here"
  description="Page description here (under 160 characters)"
  canonical="/page-url"
/>
```

---

## 📋 Pages to Update

### 1. Pricing Page (`src/pages/Pricing/App.tsx`)

```tsx
import SEOHead from '../../components/SEOHead';

// Add before return:
<SEOHead
  title="Pricing - Affordable Web & E-Commerce Development Packages"
  description="Transparent pricing for web development and e-commerce solutions. Flexible packages starting from ₹25,000. No hidden costs. Get a custom quote today!"
  canonical="/pricing"
/>
```

---

### 2. Case Studies (`src/pages/Case/index.tsx`)

```tsx
import SEOHead from '../../components/SEOHead';

<SEOHead
  title="Case Studies - Successful Web Development Projects"
  description="Explore FactoryJet's portfolio of 150+ successful web and e-commerce projects. Real results, real clients, real ROI. View our case studies."
  canonical="/case"
/>
```

---

### 3. Web Design Page (`src/pages/WebDesign/App.tsx`)

```tsx
import SEOHead from '../../components/SEOHead';

<SEOHead
  title="Professional Web Design Services - Custom UI/UX Design"
  description="Expert web design services for businesses. Custom UI/UX, mobile-responsive, conversion-focused designs. Fast delivery, affordable pricing. Get started today!"
  canonical="/web-design"
/>
```

---

### 4. E-Commerce Page (`src/pages/Ecomm/index.tsx`)

```tsx
import SEOHead from '../../components/SEOHead';

<SEOHead
  title="E-Commerce Development - Shopify & WooCommerce Experts"
  description="Build your online store with FactoryJet. Expert Shopify and WooCommerce development. Payment integration, inventory management, fast delivery. Start selling today!"
  canonical="/ecommerce"
/>
```

---

### 5. Terms Page (`src/pages/Terms/index.tsx`)

```tsx
import SEOHead from '../../components/SEOHead';

<SEOHead
  title="Terms of Service"
  description="FactoryJet Terms of Service. Read our terms and conditions for using our web development and e-commerce services."
  canonical="/terms"
  noindex={true}  // Legal pages should not be indexed
/>
```

---

### 6. Privacy Page (`src/pages/Privacy/index.tsx`)

```tsx
import SEOHead from '../../components/SEOHead';

<SEOHead
  title="Privacy Policy"
  description="FactoryJet Privacy Policy. Learn how we collect, use, and protect your personal information."
  canonical="/privacy"
  noindex={true}  // Legal pages should not be indexed
/>
```

---

### 7. Sitemap Page (`src/pages/Sitemap/index.tsx`)

```tsx
import SEOHead from '../../components/SEOHead';

<SEOHead
  title="Sitemap"
  description="FactoryJet website sitemap. Find all pages and services we offer."
  canonical="/sitemap"
  noindex={true}  // Sitemap page should not be indexed
/>
```

---

### 8. City Pages (Mumbai, Pune, Bangalore, Ahmedabad, Surat)

These pages already have dynamic SEO via `useEffect`, but should be updated to use SEOHead instead.

**Example for Mumbai** (`src/pages/Mumbai/index.tsx`):

**Before** (remove the useEffect):
```tsx
useEffect(() => {
  document.title = "Best Website Design Company in Mumbai | FactoryJet";
  // ... meta description update
}, []);
```

**After** (use SEOHead):
```tsx
import SEOHead from '../../components/SEOHead';

<SEOHead
  title="Best Website Design Company in Mumbai"
  description="Professional website design & e-commerce development in Mumbai. Fast delivery, affordable pricing, 150+ projects. Serving Andheri, BKC, Powai & all Mumbai."
  canonical="/mumbai"
/>
```

Repeat for:
- Pune: `canonical="/pune"`
- Bangalore: `canonical="/bangalore"`
- Ahmedabad: `canonical="/ahmedabad"`
- Surat: `canonical="/surat"`

---

## ✅ Quick Implementation Script

Here's the exact code to add to each file:

### Pricing/App.tsx:
```tsx
// Line 1: Add import
import SEOHead from '../../components/SEOHead';

// Inside component, before return:
return (
  <>
    <SEOHead
      title="Pricing - Affordable Web & E-Commerce Development Packages"
      description="Transparent pricing for web development and e-commerce solutions. Flexible packages starting from ₹25,000. No hidden costs. Get a custom quote today!"
      canonical="/pricing"
    />
    {/* rest of JSX */}
  </>
);
```

### Case/index.tsx:
```tsx
import SEOHead from '../../components/SEOHead';

// In component:
<SEOHead
  title="Case Studies - Successful Web Development Projects"
  description="Explore FactoryJet's portfolio of 150+ successful web and e-commerce projects. Real results, real clients, real ROI. View our case studies."
  canonical="/case"
/>
```

---

## 🧪 Testing

After adding SEOHead to all pages:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```

3. **Test each page**:
   - Visit the page
   - View page source (Ctrl+U)
   - Search for `rel="canonical"`
   - Verify canonical URL is present

4. **Expected output in source**:
   ```html
   <link rel="canonical" href="https://factoryjet.com/pricing">
   <meta name="robots" content="index, follow, max-image-preview:large...">
   <meta property="og:url" content="https://factoryjet.com/pricing">
   ```

---

## 📊 Summary

After implementation, **all pages** will have:
- ✅ Canonical URL
- ✅ Meta robots tags
- ✅ Proper title and description
- ✅ Open Graph tags
- ✅ Twitter Card tags

**Total Pages with Canonical**: 56 (all pages)

---

## ⚡ Priority Order

Update in this order for maximum SEO impact:

1. ✅ **Pricing** - High conversion page
2. ✅ **Case Studies** - Trust building
3. ✅ **Web Design** - Service page
4. ✅ **E-Commerce** - Service page
5. ⚠️ **City pages** - Already indexed, update when convenient
6. ⚠️ **Terms/Privacy** - Low priority, set noindex=true

---

## 🎯 Expected Impact

With canonical tags on all pages:
- ✅ Prevents duplicate content issues
- ✅ Consolidates ranking signals
- ✅ Better crawl budget utilization
- ✅ Improved SERP performance
- ✅ Proper social media sharing

---

**Status**: Component created, 3 pages updated, 12 pages remaining

**Time to Complete**: ~15-20 minutes for all remaining pages

**Files Modified**: Already created `src/components/SEOHead.tsx`
