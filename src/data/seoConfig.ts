/**
 * SEO Configuration for FactoryJet
 * Comprehensive keyword strategy for service + location pages
 */

export interface ServiceSEO {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  primaryKeyword: (city: string) => string;
  secondaryKeywords: (city: string) => string[];
  semanticKeywords: (city: string) => string[];
  metaDescription: (city: string) => string;
  h1: (city: string) => string;
  h2Intro: (city: string) => string;
}

export interface CitySEO {
  slug: string;
  name: string;
  state: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  localKeywords: string[];
}

// Cities Configuration with SEO keywords
export const cities: Record<string, CitySEO> = {
  mumbai: {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    primaryKeyword: 'Web Development Company in Mumbai',
    secondaryKeywords: [
      'Website Design Services in Mumbai',
      'E-commerce Development Mumbai',
      'Web Design Agency Mumbai',
      'Digital Solutions Mumbai'
    ],
    localKeywords: [
      'Andheri', 'BKC', 'Powai', 'Navi Mumbai', 'Thane'
    ]
  },
  pune: {
    slug: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    primaryKeyword: 'Website Design Company in Pune',
    secondaryKeywords: [
      'Web Development Services in Pune',
      'E-commerce Website Pune',
      'Web Design Agency Pune',
      'Digital Marketing Pune'
    ],
    localKeywords: [
      'Hinjewadi', 'Kharadi', 'Wakad', 'Baner', 'Viman Nagar'
    ]
  },
  bangalore: {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    primaryKeyword: 'Web Development Services in Bangalore',
    secondaryKeywords: [
      'Website Design Company Bangalore',
      'E-commerce Development Bangalore',
      'Web Design Agency Bangalore',
      'Software Development Bangalore'
    ],
    localKeywords: [
      'Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Electronic City'
    ]
  },
  ahmedabad: {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    primaryKeyword: 'Web Design Company in Ahmedabad',
    secondaryKeywords: [
      'Website Development Services Ahmedabad',
      'E-commerce Website Ahmedabad',
      'Web Development Agency Ahmedabad',
      'Digital Solutions Ahmedabad'
    ],
    localKeywords: [
      'SG Highway', 'Prahlad Nagar', 'Satellite', 'Vastrapur', 'Bodakdev'
    ]
  },
  surat: {
    slug: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    primaryKeyword: 'Web Design Company in Surat',
    secondaryKeywords: [
      'Website Development Services Surat',
      'E-commerce Development Surat',
      'Web Design Agency Surat',
      'Digital Marketing Surat'
    ],
    localKeywords: [
      'Adajan', 'Vesu', 'Pal', 'Althan', 'City Light'
    ]
  }
};

// Services Configuration with comprehensive SEO keywords
export const services: Record<string, ServiceSEO> = {
  'web-development': {
    slug: 'web-development',
    name: 'Website Development',
    shortName: 'Web Development',
    icon: 'Monitor',
    primaryKeyword: (city) => `Web Development Company in ${city}`,
    secondaryKeywords: (city) => [
      `Website Development Services in ${city}`,
      `Custom Web Development ${city}`,
      `Professional Web Developers ${city}`,
      `Affordable Web Development ${city}`,
      `Web Development Agency ${city}`,
      `Corporate Website Development ${city}`,
      `Business Website ${city}`
    ],
    semanticKeywords: (city) => [
      `Best web developers ${city}`,
      `Web development cost ${city}`,
      `Web development company near me`,
      `Top web development agency ${city}`,
      `Hire web developers ${city}`,
      `Custom website builder ${city}`,
      `Responsive web design ${city}`,
      `Mobile-friendly website ${city}`,
      `Fast website development ${city}`,
      `Website design and development ${city}`,
      `Professional website services ${city}`,
      `Local web development company ${city}`,
      `Web development experts ${city}`,
      `Trusted web developers ${city}`,
      `Website development packages ${city}`
    ],
    metaDescription: (city) =>
      `Leading Web Development Company in ${city}. Custom, responsive websites built for conversions. Fast delivery, SEO-optimized, mobile-first design. Get a free quote today!`,
    h1: (city) => `Professional Web Development Company in ${city}`,
    h2Intro: (city) => `Custom Website Development Services in ${city} - Built for Growth`
  },

  'web-design': {
    slug: 'web-design',
    name: 'Website Design',
    shortName: 'Web Design',
    icon: 'Palette',
    primaryKeyword: (city) => `Web Design Company in ${city}`,
    secondaryKeywords: (city) => [
      `Website Design Services ${city}`,
      `UI/UX Design ${city}`,
      `Custom Web Design ${city}`,
      `Professional Web Designer ${city}`,
      `Web Design Agency ${city}`,
      `Creative Web Design ${city}`,
      `Modern Website Design ${city}`
    ],
    semanticKeywords: (city) => [
      `Best web designers ${city}`,
      `Web design cost ${city}`,
      `Web design company near me`,
      `Top web design agency ${city}`,
      `Hire web designers ${city}`,
      `Responsive web design ${city}`,
      `Mobile web design ${city}`,
      `Landing page design ${city}`,
      `Website redesign services ${city}`,
      `Beautiful website design ${city}`,
      `User-friendly web design ${city}`,
      `Conversion-focused design ${city}`,
      `Web design portfolio ${city}`,
      `Award-winning web design ${city}`,
      `Website design packages ${city}`
    ],
    metaDescription: (city) =>
      `Award-winning Web Design Company in ${city}. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Free consultation available!`,
    h1: (city) => `Creative Web Design Company in ${city}`,
    h2Intro: (city) => `Beautiful & Conversion-Focused Website Design in ${city}`
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    name: 'E-Commerce Development',
    shortName: 'E-Commerce',
    icon: 'ShoppingBag',
    primaryKeyword: (city) => `E-commerce Development Company in ${city}`,
    secondaryKeywords: (city) => [
      `E-commerce Website Development ${city}`,
      `Shopify Development ${city}`,
      `WooCommerce Development ${city}`,
      `Online Store Development ${city}`,
      `E-commerce Solutions ${city}`,
      `Shopping Website ${city}`,
      `Magento Development ${city}`
    ],
    semanticKeywords: (city) => [
      `Best e-commerce developers ${city}`,
      `E-commerce website cost ${city}`,
      `E-commerce development company near me`,
      `Top e-commerce agency ${city}`,
      `Hire Shopify developers ${city}`,
      `WooCommerce experts ${city}`,
      `Online store builder ${city}`,
      `Multi-vendor marketplace ${city}`,
      `B2B e-commerce platform ${city}`,
      `D2C e-commerce website ${city}`,
      `Payment gateway integration ${city}`,
      `Shopping cart development ${city}`,
      `E-commerce SEO ${city}`,
      `Mobile commerce app ${city}`,
      `Custom e-commerce solution ${city}`
    ],
    metaDescription: (city) =>
      `Expert E-commerce Development Company in ${city}. Shopify, WooCommerce & custom stores. Payment integration, inventory management. Start selling online today!`,
    h1: (city) => `E-commerce Development Company in ${city}`,
    h2Intro: (city) => `Build High-Converting Online Stores in ${city}`
  },

  'wordpress-development': {
    slug: 'wordpress-development',
    name: 'WordPress Development',
    shortName: 'WordPress',
    icon: 'FileCode',
    primaryKeyword: (city) => `WordPress Development Company in ${city}`,
    secondaryKeywords: (city) => [
      `WordPress Developer ${city}`,
      `WordPress Website ${city}`,
      `Custom WordPress Development ${city}`,
      `WordPress Agency ${city}`,
      `WordPress Expert ${city}`,
      `WordPress Theme Development ${city}`,
      `WordPress Plugin Development ${city}`
    ],
    semanticKeywords: (city) => [
      `Best WordPress developers ${city}`,
      `WordPress development cost ${city}`,
      `WordPress company near me`,
      `Hire WordPress expert ${city}`,
      `WordPress website builder ${city}`,
      `Custom WordPress theme ${city}`,
      `WordPress maintenance ${city}`,
      `WordPress migration ${city}`,
      `WordPress security ${city}`,
      `WooCommerce WordPress ${city}`,
      `WordPress SEO optimization ${city}`,
      `WordPress speed optimization ${city}`,
      `Headless WordPress ${city}`,
      `WordPress consulting ${city}`,
      `WordPress support ${city}`
    ],
    metaDescription: (city) =>
      `Professional WordPress Development Company in ${city}. Custom themes, plugins, and maintenance. Fast, secure, SEO-optimized WordPress websites. Get started now!`,
    h1: (city) => `WordPress Development Company in ${city}`,
    h2Intro: (city) => `Expert WordPress Solutions in ${city}`
  },

  'shopify-development': {
    slug: 'shopify-development',
    name: 'Shopify Development',
    shortName: 'Shopify',
    icon: 'Store',
    primaryKeyword: (city) => `Shopify Development Company in ${city}`,
    secondaryKeywords: (city) => [
      `Shopify Developer ${city}`,
      `Shopify Store Development ${city}`,
      `Shopify Expert ${city}`,
      `Shopify Agency ${city}`,
      `Shopify Plus Development ${city}`,
      `Shopify Theme Development ${city}`,
      `Shopify App Development ${city}`
    ],
    semanticKeywords: (city) => [
      `Best Shopify developers ${city}`,
      `Shopify development cost ${city}`,
      `Shopify partner ${city}`,
      `Hire Shopify expert ${city}`,
      `Shopify store builder ${city}`,
      `Custom Shopify theme ${city}`,
      `Shopify migration ${city}`,
      `Shopify SEO ${city}`,
      `Shopify speed optimization ${city}`,
      `Shopify Plus partner ${city}`,
      `Shopify consulting ${city}`,
      `Shopify maintenance ${city}`,
      `Shopify dropshipping ${city}`,
      `Headless Shopify ${city}`,
      `Shopify integration ${city}`
    ],
    metaDescription: (city) =>
      `Certified Shopify Development Company in ${city}. Custom Shopify stores, themes & apps. Shopify Plus expertise. Launch your online store faster. Free consultation!`,
    h1: (city) => `Shopify Development Company in ${city}`,
    h2Intro: (city) => `Build Your Shopify Store with Experts in ${city}`
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    shortName: 'Mobile Apps',
    icon: 'Smartphone',
    primaryKeyword: (city) => `Mobile App Development Company in ${city}`,
    secondaryKeywords: (city) => [
      `App Development Services ${city}`,
      `iOS App Development ${city}`,
      `Android App Development ${city}`,
      `Mobile App Developer ${city}`,
      `App Development Agency ${city}`,
      `React Native Development ${city}`,
      `Flutter Development ${city}`
    ],
    semanticKeywords: (city) => [
      `Best app developers ${city}`,
      `App development cost ${city}`,
      `Mobile app company near me`,
      `Hire app developers ${city}`,
      `Custom mobile app ${city}`,
      `Native app development ${city}`,
      `Cross-platform app ${city}`,
      `iOS and Android app ${city}`,
      `E-commerce app ${city}`,
      `On-demand app ${city}`,
      `Startup app development ${city}`,
      `Enterprise mobile app ${city}`,
      `App UI/UX design ${city}`,
      `App maintenance ${city}`,
      `App publishing ${city}`
    ],
    metaDescription: (city) =>
      `Top Mobile App Development Company in ${city}. iOS, Android, React Native & Flutter apps. Custom app solutions for startups & enterprises. Get a quote today!`,
    h1: (city) => `Mobile App Development Company in ${city}`,
    h2Intro: (city) => `Custom Mobile App Solutions in ${city}`
  },

  'seo-services': {
    slug: 'seo-services',
    name: 'SEO Services',
    shortName: 'SEO',
    icon: 'TrendingUp',
    primaryKeyword: (city) => `SEO Company in ${city}`,
    secondaryKeywords: (city) => [
      `SEO Services ${city}`,
      `SEO Expert ${city}`,
      `Search Engine Optimization ${city}`,
      `Local SEO ${city}`,
      `SEO Agency ${city}`,
      `SEO Consultant ${city}`,
      `Organic SEO ${city}`
    ],
    semanticKeywords: (city) => [
      `Best SEO company ${city}`,
      `SEO services cost ${city}`,
      `SEO company near me`,
      `Top SEO agency ${city}`,
      `Hire SEO expert ${city}`,
      `SEO packages ${city}`,
      `Local SEO services ${city}`,
      `E-commerce SEO ${city}`,
      `Technical SEO ${city}`,
      `On-page SEO ${city}`,
      `Off-page SEO ${city}`,
      `SEO audit ${city}`,
      `Keyword research ${city}`,
      `Link building ${city}`,
      `Google ranking ${city}`
    ],
    metaDescription: (city) =>
      `Professional SEO Company in ${city}. Increase organic traffic & rankings. Local SEO, technical SEO, content optimization. Proven results. Get a free SEO audit!`,
    h1: (city) => `SEO Company in ${city}`,
    h2Intro: (city) => `Drive Organic Traffic with SEO Services in ${city}`
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    shortName: 'Digital Marketing',
    icon: 'Megaphone',
    primaryKeyword: (city) => `Digital Marketing Company in ${city}`,
    secondaryKeywords: (city) => [
      `Digital Marketing Services ${city}`,
      `Online Marketing ${city}`,
      `Social Media Marketing ${city}`,
      `PPC Services ${city}`,
      `Digital Marketing Agency ${city}`,
      `Performance Marketing ${city}`,
      `Content Marketing ${city}`
    ],
    semanticKeywords: (city) => [
      `Best digital marketing company ${city}`,
      `Digital marketing cost ${city}`,
      `Digital marketing agency near me`,
      `Top marketing agency ${city}`,
      `Social media agency ${city}`,
      `Google Ads ${city}`,
      `Facebook Ads ${city}`,
      `Instagram marketing ${city}`,
      `Email marketing ${city}`,
      `Influencer marketing ${city}`,
      `Brand strategy ${city}`,
      `Lead generation ${city}`,
      `Conversion optimization ${city}`,
      `Marketing automation ${city}`,
      `Digital marketing packages ${city}`
    ],
    metaDescription: (city) =>
      `Leading Digital Marketing Company in ${city}. SEO, PPC, Social Media & Content Marketing. Data-driven campaigns for maximum ROI. Start growing your business today!`,
    h1: (city) => `Digital Marketing Company in ${city}`,
    h2Intro: (city) => `Growth-Focused Digital Marketing Services in ${city}`
  }
};

// Helper function to get all service slugs
export const getServiceSlugs = (): string[] => Object.keys(services);

// Helper function to get all city slugs
export const getCitySlugs = (): string[] => Object.keys(cities);

// Generate all service + city combinations
export const getAllServiceLocationCombinations = (): Array<{ service: string; city: string }> => {
  const combinations: Array<{ service: string; city: string }> = [];
  const serviceSlugs = getServiceSlugs();
  const citySlugs = getCitySlugs();

  serviceSlugs.forEach(service => {
    citySlugs.forEach(city => {
      combinations.push({ service, city });
    });
  });

  return combinations;
};

// External authoritative links for trust signals
export const externalLinks = {
  shopify: 'https://www.shopify.com',
  wordpress: 'https://wordpress.org',
  woocommerce: 'https://woocommerce.com',
  googlePartner: 'https://www.google.com/partners',
  razorpay: 'https://razorpay.com',
  magento: 'https://magento.com',
  reactNative: 'https://reactnative.dev',
  flutter: 'https://flutter.dev',
  w3cValidation: 'https://validator.w3.org',
  googlePageSpeed: 'https://pagespeed.web.dev'
};
