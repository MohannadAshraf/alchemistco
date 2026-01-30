import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

const services = [
  {
    title: "Web Development",
    features: [
      "Custom Website Design",
      "Responsive & Mobile-First",
      "E-Commerce Solutions",
      "Performance Optimization",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c20.6 6.2 42 6.2 62.6 0l5.4 3.2c6.8 5.6 9.2 15 5.8 23.2l-20 48c-3.8 9.3-14 14.2-23.7 11.6C174.7 325.9 151.3 320 128 320s-46.7 5.9-69.3 17.7c-9.7 2.6-19.9-2.3-23.7-11.6l-20-48c-3.4-8.2-1-17.6 5.8-23.2L18.4 279c-6.8-5.6-9.2-15-5.8-23.2l20-48c3.8-9.3 14-14.2 23.7-11.6C81.3 186.1 104.7 192 128 192s46.7-5.9 69.3-17.7zM448 192c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V192zm0 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V320z"/></svg>`,
  },
  {
    title: "Media Buying",
    features: [
      "Strategic Ad Placement",
      "Multi-Platform Campaigns",
      "ROI Optimization",
      "Real-Time Analytics",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Content Creation",
    features: [
      "Creative Storytelling",
      "Visual Design & Graphics",
      "Video Production",
      "Brand Voice Development",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
  },
  {
    title: "AI Photoshoots",
    features: [
      "AI-Generated Product Photography",
      "Custom Brand Imagery",
      "Multiple Style Variations",
      "Fast Turnaround Times",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM448 416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V224h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H64V160c0-17.7 14.3-32 32-32h64.9l10.4-32.8c2.6-8.2 10.1-13.6 18.7-13.6h122.8c8.6 0 16.1 5.4 18.7 13.6L352.9 128H416c17.7 0 32 14.3 32 32v32H384c-8.8 0-16 7.2-16 16s7.2 16 16 16h64V416z"/></svg>`,
  },
];

const solutions: never[] = [];

const faqs = [
  {
    question: "What services does AlchemistsCo offer?",
    answer:
      "We specialize in three core areas: Web Development (custom websites, e-commerce, responsive design), Media Buying (strategic ad placement, multi-platform campaigns, ROI optimization), and Content Creation (copywriting, visual design, video production, brand voice development).",
  },
  {
    question: "How long does a typical web development project take?",
    answer:
      "Project timelines vary based on scope and complexity. A standard website typically takes 4-8 weeks, while e-commerce solutions may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    question: "What platforms do you use for media buying?",
    answer:
      "We work across all major advertising platforms including Google Ads, Facebook/Instagram, LinkedIn, Twitter, TikTok, and programmatic advertising networks. We choose platforms based on where your target audience is most active and where we can achieve the best ROI.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer maintenance packages for web development, ongoing media buying management, and content creation services. We believe in long-term partnerships and are here to support your business growth continuously.",
  },
  {
    question: "How do you measure success for media buying campaigns?",
    answer:
      "We track comprehensive metrics including click-through rates, conversion rates, cost per acquisition, return on ad spend (ROAS), and overall ROI. We provide detailed monthly reports and real-time dashboards so you always know how your campaigns are performing.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Absolutely! We work within your existing brand guidelines to ensure consistency across all deliverables. If you need help developing or refining your brand identity, our content creation team can assist with that as well.",
  },
  {
    question: "What's included in your content creation services?",
    answer:
      "Our content creation includes strategic copywriting, graphic design, video production, social media content, blog posts, email campaigns, and brand voice development. We create content that aligns with your goals and resonates with your target audience.",
  },
  {
    question: "Do you offer package deals for multiple services?",
    answer:
      "Yes! We offer integrated packages that combine web development, media buying, and content creation for maximum impact. These packages are designed to provide comprehensive digital marketing solutions at competitive rates.",
  },
  {
    question: "How do I get started with AlchemistsCo?",
    answer:
      "Simply reach out through our contact form or schedule a free consultation. We'll discuss your goals, assess your needs, and provide a customized proposal outlining how we can help transform your digital presence.",
  },
  {
    question: "What makes AlchemistsCo different from other agencies?",
    answer:
      "We combine technical expertise with creative excellence and data-driven strategies. Our integrated approach means your web development, media buying, and content work together seamlessly, creating a cohesive digital experience that drives real results for your business.",
  },
];

export { services, solutions, faqs };
