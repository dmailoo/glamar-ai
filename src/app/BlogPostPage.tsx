import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Clock, Share2, ChevronDown, ArrowRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router';

const faqsDefault = [
  {
    q: 'What is AI Virtual Try-On?',
    a: "AI Virtual Try-On uses artificial intelligence to generate realistic previews of clothing on a customer's photo before purchase.",
  },
  {
    q: 'Does AI Virtual Try-On help reduce returns?',
    a: 'Yes. When customers can visualize clothing before buying, they make more informed purchasing decisions, which can reduce unnecessary returns.',
  },
  {
    q: 'Can small fashion brands use AI Virtual Try-On?',
    a: 'Absolutely. AI Virtual Try-On is valuable for businesses of all sizes, from independent boutiques to large e-commerce retailers.',
  },
  {
    q: 'Is AI Virtual Try-On only for clothing?',
    a: 'No. Depending on the platform, AI virtual try-on technology can also support accessories, footwear, eyewear, cosmetics, and other fashion products.',
  },
];

const articlesData: Record<string, {
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  heroImage: string;
  secondaryImage?: string;
  tocItems: { id: string; label: string }[];
}> = {
  'online-clothes-shopping-gamble': {
    title: 'Why Online Clothes Shopping Still Feels Like a Gamble',
    subtitle: 'How photorealistic AI virtual try-on is bridging the gap between digital shopping and real-world fitting rooms to eliminate purchase anxiety.',
    category: 'AI & E-Commerce',
    tags: ['Guides', 'AI & E-Commerce'],
    date: 'June 9, 2026',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1400',
    secondaryImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200',
    tocItems: [
      { id: 'section-1', label: '1. Why Is It So Difficult to Buy Clothes Online?' },
      { id: 'section-2', label: '2. The Hidden Cost of Fashion Returns' },
      { id: 'section-3', label: '3. How AI Virtual Try-On Changes Online Shopping' },
      { id: 'section-4', label: '4. Benefits of AI Virtual Try-On' },
      { id: 'section-5', label: '5. Why Fashion Brands Are Investing in AI' },
      { id: 'section-6', label: '6. Meet GlamAR.ai' },
      { id: 'section-7', label: '7. Frequently Asked Questions' },
    ],
  },
  'why-fashion-brands-are-adopting-ai-virtual-try-on': {
    title: 'Why Fashion Brands Are Adopting AI Virtual Try-On',
    subtitle: 'How modern fashion retailers are boosting checkout confidence, driving customer engagement, and eliminating size ambiguity with AI.',
    category: 'AI & E-Commerce',
    tags: ['E-Commerce Strategy', 'AI Innovation'],
    date: 'May 28, 2026',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1400',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200',
    tocItems: [
      { id: 'section-1', label: '1. The Challenge of Online Fitting' },
      { id: 'section-2', label: '2. Solving Fitting Uncertainty' },
      { id: 'section-3', label: '3. Business Benefits for Fashion Brands' },
      { id: 'section-4', label: '4. E-Commerce Expectations' },
      { id: 'section-5', label: '5. Integration with GlamAR.ai' },
      { id: 'section-6', label: '6. Frequently Asked Questions' },
    ],
  },
  'why-customers-return-clothes-bought-online': {
    title: 'Why Customers Return Clothes Bought Online',
    subtitle: 'Understanding the root causes of e-commerce fashion returns and how AI fitting room technology creates a smarter, more confident shopping experience.',
    category: 'Consumer Insights',
    tags: ['Returns & Operations', 'Customer Experience'],
    date: 'May 14, 2026',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1400',
    secondaryImage: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=1200',
    tocItems: [
      { id: 'section-1', label: '1. Why Do Customers Return Clothes?' },
      { id: 'section-2', label: '2. The Impact on Fashion Brands' },
      { id: 'section-3', label: '3. A Smarter Way to Shop' },
      { id: 'section-4', label: '4. The Future of Online Fashion' },
      { id: 'section-5', label: '5. Frequently Asked Questions' },
    ],
  },
  'how-ai-virtual-try-on-delivers-real-roi-for-fashion-brands': {
    title: 'How AI Virtual Try-On Delivers Real ROI for Fashion Brands',
    subtitle: 'Data-backed analysis showing how removing customer purchase anxiety directly boosts average order value, conversion rates, and profit margins.',
    category: 'Growth & Analytics',
    tags: ['Growth & Analytics', 'ROI Strategy'],
    date: 'April 30, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1400',
    secondaryImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200',
    tocItems: [
      { id: 'section-1', label: '1. Higher Purchase Confidence' },
      { id: 'section-2', label: '2. Fewer Returns, Lower Costs' },
      { id: 'section-3', label: '3. Better Conversion Rates' },
      { id: 'section-4', label: '4. A Better Customer Experience' },
      { id: 'section-5', label: '5. Why ROI Matters' },
      { id: 'section-6', label: '6. Frequently Asked Questions' },
    ],
  },
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slug && articlesData[slug] ? slug : 'online-clothes-shopping-gamble';
  const article = articlesData[activeSlug];

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [copied, setCopied] = React.useState(false);
  const [activeToc, setActiveToc] = React.useState('section-1');

  React.useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of article.tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height + 100) {
            setActiveToc(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          url: window.location.href,
        });
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return;
      } catch (e) {
        // User cancelled or share failed, fallback to copy
      }
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    setActiveToc(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <article className="min-h-screen bg-white dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 pt-32 pb-32 transition-colors duration-300 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>

        {/* Article Meta Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {article.tags.map((tag) => (
            <span key={tag} className="px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/20 text-neutral-900 dark:text-primary border border-primary/30">
              {tag}
            </span>
          ))}
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium ml-2">
            {article.date}
          </span>
          <span className="text-xs text-neutral-400">•</span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium flex items-center gap-1">
            <Clock size={12} /> {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(32px,4.5vw,52px)] font-medium tracking-tight leading-[1.12] text-neutral-950 dark:text-white mb-6">
          {article.title}
        </h1>

        <p className="text-[18px] md:text-[20px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-10 max-w-3xl">
          {article.subtitle}
        </p>

        {/* Author Header Row */}
        <div className="flex items-center justify-between border-y border-neutral-200 dark:border-neutral-800 py-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm shadow-xs">
              G
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">GlamAR.ai Team</p>
              <p className="text-xs text-neutral-500">Fashion Tech Insights</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-xs font-semibold text-neutral-900 dark:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all cursor-pointer shadow-2xs active:scale-95"
          >
            {copied ? <Check size={13} className="text-emerald-500" /> : <Share2 size={13} />}
            <span>{copied ? 'Shared!' : 'Share'}</span>
          </button>
        </div>

        {/* Hero Image */}
        <div className="rounded-[28px] overflow-hidden mb-14 shadow-xl border border-neutral-200 dark:border-neutral-800">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full max-h-[460px] object-cover"
          />
        </div>

        {/* 2-Column Grid Layout matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Body Column (Left 8 cols) */}
          <main className="lg:col-span-8 space-y-10 text-[17px] md:text-[18px] text-neutral-800 dark:text-neutral-200 leading-[1.8] font-normal">
            
            {/* ARTICLE 4 CONTENT */}
            {activeSlug === 'how-ai-virtual-try-on-delivers-real-roi-for-fashion-brands' ? (
              <>
                <div className="space-y-6">
                  <p>
                    Every fashion brand wants to increase sales while reducing costs. But in e-commerce, one challenge continues to impact profitability: product returns.
                  </p>
                  <p>
                    When customers can't confidently judge how an outfit will look on them, they're more likely to abandon their purchase—or return it after delivery.
                  </p>
                  <p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white border-l-4 border-primary pl-5 py-2 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-2xl my-6">
                    This is where AI Virtual Try-On creates measurable business value.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="section-1" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    1. Higher Purchase Confidence
                  </h2>
                  <p className="mb-4">
                    AI Virtual Try-On allows shoppers to visualize clothing on themselves before buying. By reducing uncertainty around style and appearance, customers can make more confident purchasing decisions.
                  </p>
                  <p>
                    According to <a href="https://www.shopify.com/ca/enterprise/blog/virtual-fitting-rooms?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-neutral-950 dark:text-white font-semibold underline underline-offset-4 decoration-primary hover:text-primary transition-colors">Shopify</a>, virtual fitting rooms help improve conversion rates and reduce returns by giving shoppers a better understanding of how products may look before checkout.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="section-2" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    2. Fewer Returns, Lower Costs
                  </h2>
                  <p className="mb-4">
                    Returns are one of the biggest expenses in online fashion. The <a href="https://www.shopify.com/ca/enterprise/blog/virtual-fitting-rooms?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-neutral-950 dark:text-white font-semibold underline underline-offset-4 decoration-primary hover:text-primary transition-colors">National Retail Federation</a> estimates that online purchases had a return rate of more than 19% in 2025, making returns a major operational cost for retailers.
                  </p>
                  <p className="mb-6">
                    Retailers adopting virtual try-on are already reporting measurable improvements. During a pilot, <a href="https://www.emarketer.com/content/retailers-rely-virtual-try-on-curb-returns-boost-conversions?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-neutral-950 dark:text-white font-semibold underline underline-offset-4 decoration-primary hover:text-primary transition-colors">Zalando</a> reduced returns by 40%, demonstrating how visualization can help shoppers make better buying decisions.
                  </p>

                  {/* Body Inset Image */}
                  <div className="my-8 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md">
                    <img
                      src={article.secondaryImage}
                      alt="Fashion retail analytics and collection"
                      className="w-full max-h-[380px] object-cover"
                    />
                    <p className="p-3 text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-900 text-center font-medium">
                      Data shows virtual fitting rooms cut return rates while lifting average cart values.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="section-3" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    3. Better Conversion Rates
                  </h2>
                  <p className="mb-4">
                    Virtual try-on doesn't just reduce returns—it also encourages more purchases.
                  </p>
                  <p className="mb-4">
                    <a href="https://tryonvirtual.com/blog/shopify-ar-conversion-rate?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-neutral-950 dark:text-white font-semibold underline underline-offset-4 decoration-primary hover:text-primary transition-colors">Industry benchmarks</a> show that customers who interact with AR or virtual try-on experiences are significantly more likely to complete a purchase than those who only view standard product images.
                  </p>
                  <p>
                    This means brands can increase revenue without increasing advertising spend.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="section-4" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    4. A Better Customer Experience
                  </h2>
                  <p className="mb-4">
                    Today's shoppers expect more than static product photos. They want personalized, interactive experiences that help them shop with confidence.
                  </p>
                  <p>
                    AI Virtual Try-On creates a smoother shopping journey by allowing customers to explore products before making a purchase, increasing engagement and satisfaction.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="section-5" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    5. Why ROI Matters
                  </h2>
                  <p className="mb-4">
                    The return on investment of AI Virtual Try-On isn't just about technology—it's about improving every stage of the customer journey.
                  </p>
                  <p className="mb-3">Brands can benefit from:</p>
                  <ul className="space-y-2.5 pl-6 list-disc text-neutral-700 dark:text-neutral-300 mb-6">
                    <li>Higher conversion rates</li>
                    <li>Lower return rates</li>
                    <li>Increased customer confidence</li>
                    <li>Better engagement</li>
                    <li>Improved shopping experiences</li>
                  </ul>
                  <p className="mb-4">
                    As AI continues to reshape fashion e-commerce, virtual try-on is becoming a strategic investment rather than just another feature.
                  </p>
                  <p className="font-semibold text-neutral-950 dark:text-white">
                    At GlamAR.ai, we help fashion brands deliver photorealistic AI virtual try-ons that create more confident shoppers and more profitable online stores.
                  </p>
                </section>

                {/* Section 6 — FAQ */}
                <section id="section-6" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-6">
                    6. Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-3">
                    {faqsDefault.map((item, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div
                          key={item.q}
                          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium cursor-pointer"
                          >
                            <span className="text-[15px] md:text-[16px] font-semibold text-neutral-950 dark:text-white">
                              {item.q}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="shrink-0 text-neutral-500 dark:text-neutral-400"
                            >
                              <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </>
            ) : activeSlug === 'why-customers-return-clothes-bought-online' ? (
              /* ARTICLE 3 CONTENT */
              <>
                <div className="space-y-6">
                  <p>
                    Ordering clothes online is convenient. You can browse hundreds of styles, compare prices, and shop anytime, anywhere. But there's one problem that continues to affect both shoppers and fashion brands—product returns.
                  </p>
                  <p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white border-l-4 border-primary pl-5 py-2 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-2xl my-6">
                    Have you ever ordered a shirt that looked perfect online but didn't look the same when you tried it on? You're not alone.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="section-1" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    1. Why Do Customers Return Clothes?
                  </h2>
                  <p className="mb-4">
                    Most clothing returns happen because customers can't confidently answer one simple question:
                  </p>
                  <p className="font-semibold text-neutral-900 dark:text-white text-lg mb-4">
                    "Will this look good on me?"
                  </p>
                  <p className="mb-4">
                    Even with high-quality product photos, size charts, and customer reviews, it's difficult to imagine how an outfit will look on your own body.
                  </p>
                  <p className="mb-3">As a result, customers often:</p>
                  <ul className="space-y-2.5 pl-6 list-disc text-neutral-700 dark:text-neutral-300">
                    <li>Order multiple sizes to test fit.</li>
                    <li>Buy without true purchase confidence.</li>
                    <li>Return products that don't meet their expectations.</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="section-2" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    2. The Impact on Fashion Brands
                  </h2>
                  <p className="mb-4">
                    Returns don't just affect customers—they also increase costs for fashion businesses.
                  </p>
                  <p className="mb-4">
                    Processing returns requires additional shipping, inventory management, and customer support. Over time, these expenses can significantly impact profitability.
                  </p>
                  <p>
                    More importantly, frequent returns may reduce customer trust and long-term brand satisfaction.
                  </p>

                  {/* Body Image Inset */}
                  <div className="my-8 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md">
                    <img
                      src={article.secondaryImage}
                      alt="Fashion shipping and logistics"
                      className="w-full max-h-[380px] object-cover"
                    />
                    <p className="p-3 text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-900 text-center font-medium">
                      Eliminating size uncertainty drastically reduces return shipping costs and logistics overhead.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="section-3" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    3. A Smarter Way to Shop
                  </h2>
                  <p className="mb-4">
                    AI Virtual Try-On is changing the online shopping experience by helping customers visualize clothing before making a purchase.
                  </p>
                  <p className="mb-4">
                    Instead of relying only on product images, shoppers can see how an outfit looks on them in seconds.
                  </p>
                  <p>
                    This creates more confident buying decisions and a significantly better shopping experience.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="section-4" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    4. The Future of Online Fashion
                  </h2>
                  <p className="mb-4">
                    As online shopping continues to grow, customers expect more than static product photos.
                  </p>
                  <p className="mb-4">
                    Interactive experiences like AI Virtual Try-On are helping fashion brands build confidence, improve customer satisfaction, and create a more engaging shopping journey.
                  </p>
                  <p className="font-semibold text-neutral-950 dark:text-white">
                    At GlamAR.ai, we're helping brands bring this experience to every customer—making online fashion shopping smarter, more personal, and more enjoyable.
                  </p>
                </section>

                {/* Section 5 — FAQ */}
                <section id="section-5" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-6">
                    5. Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-3">
                    {faqsDefault.map((item, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div
                          key={item.q}
                          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium cursor-pointer"
                          >
                            <span className="text-[15px] md:text-[16px] font-semibold text-neutral-950 dark:text-white">
                              {item.q}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="shrink-0 text-neutral-500 dark:text-neutral-400"
                            >
                              <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </>
            ) : activeSlug === 'why-fashion-brands-are-adopting-ai-virtual-try-on' ? (
              /* ARTICLE 2 CONTENT */
              <>
                <div className="space-y-6">
                  <p>
                    Online shopping has changed the way people buy clothes, but one challenge remains—customers still can't see how an outfit will look on them before making a purchase.
                  </p>
                  <p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white border-l-4 border-primary pl-5 py-2 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-2xl my-6">
                    This uncertainty often leads to abandoned carts, lower purchase confidence, and unnecessary product returns.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="section-1" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    1. The Challenge of Online Fitting
                  </h2>
                  <p className="mb-4">
                    Despite advances in high-resolution photography and 360-degree videos, static images fail to answer the shopper's most fundamental question: <em>"How will this look on my body?"</em>
                  </p>
                  <p>
                    When buyers cannot evaluate fit and drape, cart abandonment spikes, and buyers frequently order multiple sizes only to send back the ones that don't fit.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="section-2" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    2. Solving Fitting Uncertainty
                  </h2>
                  <p className="mb-6">
                    AI Virtual Try-On solves this by allowing shoppers to visualize clothing on themselves in seconds. Instead of relying only on product photos or size charts, customers can make more informed purchasing decisions with realistic previews.
                  </p>

                  {/* Secondary Image Inset */}
                  <div className="my-8 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md">
                    <img
                      src={article.secondaryImage}
                      alt="AI Virtual Try-On in action"
                      className="w-full max-h-[380px] object-cover"
                    />
                    <p className="p-3 text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-900 text-center font-medium">
                      Photorealistic AI previews give shoppers immediate confidence before hitting buy.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="section-3" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    3. Business Benefits for Fashion Brands
                  </h2>
                  <p className="mb-4">
                    For fashion brands, the benefits go beyond a better shopping experience. AI Virtual Try-On helps increase customer engagement, improve purchase confidence, and create a more interactive online store.
                  </p>
                  <ul className="space-y-3 pl-6 list-disc text-neutral-700 dark:text-neutral-300">
                    <li><strong className="text-neutral-950 dark:text-white">Boosted Conversion Rates:</strong> Shoppers who try on items virtually convert at up to 3.2x higher rates.</li>
                    <li><strong className="text-neutral-950 dark:text-white">Reduced Return Rates:</strong> Visualizing fit beforehand cuts costly return logistics by up to 35%.</li>
                    <li><strong className="text-neutral-950 dark:text-white">Higher Time on Site:</strong> Interactive try-on features keep users engaged longer on product pages.</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="section-4" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    4. E-Commerce Expectations
                  </h2>
                  <p>
                    As customer expectations continue to evolve, virtual try-on is becoming an important feature for modern fashion e-commerce. Buyers expect the digital store experience to feel as seamless and personal as a physical boutique.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="section-5" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    5. Integration with GlamAR.ai
                  </h2>
                  <p className="mb-4">
                    With GlamAR.ai, brands can integrate photorealistic AI virtual try-ons and offer shoppers a faster, smarter, and more engaging way to shop online.
                  </p>
                  <p>
                    Our platform integrates seamlessly into Shopify, Magento, WooCommerce, or custom tech stacks with zero complex coding required.
                  </p>
                </section>

                {/* Section 6 — FAQ */}
                <section id="section-6" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-6">
                    6. Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-3">
                    {faqsDefault.map((item, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div
                          key={item.q}
                          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium cursor-pointer"
                          >
                            <span className="text-[15px] md:text-[16px] font-semibold text-neutral-950 dark:text-white">
                              {item.q}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="shrink-0 text-neutral-500 dark:text-neutral-400"
                            >
                              <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </>
            ) : (
              /* ARTICLE 1 CONTENT */
              <>
                <div className="space-y-6">
                  <p>
                    Online shopping has changed the way we buy clothes. Instead of visiting multiple stores, you can browse thousands of products from your phone and have them delivered to your doorstep.
                  </p>
                  <p>
                    But despite all this convenience, one major problem remains.
                  </p>
                  <p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-950 dark:text-white border-l-4 border-primary pl-5 py-2 bg-neutral-50 dark:bg-neutral-900/50 rounded-r-2xl my-6">
                    Buying clothes online still feels like a gamble.
                  </p>
                  <p>
                    You see a beautiful dress on a model, check the size chart, read a few reviews, and place your order. Days later, the package arrives—but the outfit doesn't look the way you imagined.
                  </p>
                  <ul className="space-y-2 pl-6 list-disc text-neutral-700 dark:text-neutral-300">
                    <li>Maybe the fit feels different.</li>
                    <li>Maybe the color isn't what you expected.</li>
                    <li>Or maybe it simply doesn't suit you.</li>
                  </ul>
                  <p>
                    This is exactly why millions of clothing items are returned every year.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="section-1" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    1. Why Is It So Difficult to Buy Clothes Online?
                  </h2>
                  <p className="mb-4">
                    Unlike shopping in a physical store, online shopping doesn't let you answer one important question:
                  </p>
                  <p className="font-semibold text-neutral-900 dark:text-white text-lg mb-4">
                    "How will this look on me?"
                  </p>
                  <p className="mb-4">
                    Fashion brands usually provide:
                  </p>

                  <ul className="space-y-2 pl-6 list-disc text-neutral-700 dark:text-neutral-300 my-4">
                    <li>Professional product photos</li>
                    <li>Videos</li>
                    <li>Size charts</li>
                    <li>Customer reviews</li>
                    <li>Model images</li>
                  </ul>

                  <p>
                    While these are helpful, they still require customers to imagine the final result. And imagination isn't always accurate.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="section-2" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    2. The Hidden Cost of Fashion Returns
                  </h2>
                  <p className="mb-4">
                    When customers aren't confident, they either:
                  </p>
                  <ul className="space-y-2 pl-6 list-disc text-neutral-700 dark:text-neutral-300 mb-6">
                    <li>Leave without buying.</li>
                    <li>Buy multiple sizes.</li>
                    <li>Return products after delivery.</li>
                  </ul>
                  <p className="mb-4">
                    For fashion businesses, returns are expensive. Returns increase shipping costs, create inventory challenges, and reduce profits. They also require additional packaging and transportation, which contributes to environmental waste.
                  </p>
                  <p>
                    Improving customer confidence before checkout benefits both shoppers and retailers.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="section-3" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    3. How AI Virtual Try-On Changes Online Shopping
                  </h2>
                  <p className="mb-4">
                    Imagine uploading your photo and instantly seeing how a shirt, dress, jacket, or pair of jeans looks on you before making a purchase.
                  </p>
                  <p className="font-semibold text-neutral-900 dark:text-white mb-4">
                    That's exactly what AI Virtual Try-On makes possible.
                  </p>
                  <p>
                    Instead of guessing, customers can visualize clothing on themselves within seconds. This creates a shopping experience that's more interactive, engaging, and personalized.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="section-4" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    4. Benefits of AI Virtual Try-On
                  </h2>

                  <ul className="space-y-4 text-neutral-700 dark:text-neutral-300">
                    <li>
                      <strong className="text-neutral-950 dark:text-white font-semibold">Shop with More Confidence:</strong> Customers can see how clothes look before purchasing instead of relying only on product photos.
                    </li>
                    <li>
                      <strong className="text-neutral-950 dark:text-white font-semibold">Better Shopping Experience:</strong> Interactive shopping increases engagement and makes choosing outfits easier.
                    </li>
                    <li>
                      <strong className="text-neutral-950 dark:text-white font-semibold">Fewer Returns:</strong> When customers know what they're buying, they're less likely to return products.
                    </li>
                    <li>
                      <strong className="text-neutral-950 dark:text-white font-semibold">Faster Purchase Decisions:</strong> Visual confidence helps customers complete purchases without hesitation.
                    </li>
                    <li>
                      <strong className="text-neutral-950 dark:text-white font-semibold">Higher Customer Satisfaction:</strong> Happy customers are more likely to return to brands they trust.
                    </li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section id="section-5" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    5. Why Fashion Brands Are Investing in AI
                  </h2>
                  <p className="mb-4">
                    Modern shoppers expect more than static product images. Leading fashion brands are introducing AI-powered shopping experiences that allow customers to interact with products before purchasing.
                  </p>
                  <p className="mb-3">Virtual try-on helps brands:</p>
                  <ul className="space-y-2 pl-6 list-disc text-neutral-700 dark:text-neutral-300 mb-6">
                    <li>Improve customer engagement</li>
                    <li>Increase purchase confidence</li>
                    <li>Reduce unnecessary returns</li>
                    <li>Deliver a premium online shopping experience</li>
                    <li>Differentiate themselves from competitors</li>
                  </ul>
                  <p>
                    As AI continues to evolve, virtual try-on is becoming an essential feature for fashion e-commerce.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="section-6" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    6. Meet GlamAR.ai
                  </h2>
                  <p className="mb-4">
                    GlamAR.ai is an AI-powered virtual try-on platform designed for fashion brands, e-commerce stores, and marketplaces.
                  </p>
                  <p className="mb-3">With GlamAR.ai, businesses can:</p>
                  <ul className="space-y-2 pl-6 list-disc text-neutral-700 dark:text-neutral-300 mb-6">
                    <li>Generate photorealistic virtual try-ons in seconds</li>
                    <li>Integrate with Shopify and custom websites</li>
                    <li>Offer customers a more interactive shopping experience</li>
                    <li>Improve buying confidence before checkout</li>
                    <li>Enhance the overall online shopping journey</li>
                  </ul>
                  <p>
                    Whether you're a growing fashion startup or an established retailer, AI virtual try-on helps bring the fitting room online.
                  </p>
                </section>

                {/* Section 7 — FAQ */}
                <section id="section-7" className="scroll-mt-28 pt-8 border-t border-neutral-100 dark:border-neutral-900">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-6">
                    7. Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-3">
                    {faqsDefault.map((item, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div
                          key={item.q}
                          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium cursor-pointer"
                          >
                            <span className="text-[15px] md:text-[16px] font-semibold text-neutral-950 dark:text-white">
                              {item.q}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="shrink-0 text-neutral-500 dark:text-neutral-400"
                            >
                              <ChevronDown className="w-5 h-5 stroke-[2.2]" />
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Final Thoughts */}
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
                  <h2 className="text-[22px] md:text-[25px] font-medium tracking-tight text-neutral-950 dark:text-white mb-4">
                    Final Thoughts
                  </h2>
                  <p className="mb-4">
                    Online shopping should feel as confident as trying on clothes in a store.
                  </p>
                  <p className="mb-4">
                    AI Virtual Try-On bridges the gap between digital shopping and real-world fitting rooms, helping customers make informed decisions while giving fashion brands a smarter way to sell online.
                  </p>
                  <p className="font-semibold text-neutral-950 dark:text-white">
                    With GlamAR.ai, the future of fashion shopping is just a click away.
                  </p>
                </div>
              </>
            )}
          </main>

          {/* Right Column Sidebar (4 cols — Sticky matching screenshot) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-8">
            {/* Top Black CTA Box — Exact replica of screenshot */}
            <div className="bg-black text-white p-7 rounded-3xl shadow-2xl border border-neutral-800 space-y-6">
              <h3 className="text-2xl font-bold tracking-tight leading-[1.2] text-white">
                Experience AI Virtual Try-On for Free
              </h3>
              <Link
                to="/pricing"
                className="w-full py-3.5 px-6 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all cursor-pointer shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Table of Contents List — Pixel-perfect replica of screenshot */}
            <div className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800 py-1">
              <p className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
                Table of contents
              </p>
              <nav className="space-y-3.5 relative">
                {article.tocItems.map((item) => {
                  const isActive = activeToc === item.id;
                  return (
                    <div key={item.id} className="relative">
                      {isActive && (
                        <motion.div
                          layoutId="active-toc-bar"
                          className="absolute -left-[18px] top-0 bottom-0 w-[2px] bg-neutral-950 dark:bg-white"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`block text-[14px] text-left w-full transition-colors cursor-pointer leading-snug ${
                          isActive
                            ? 'text-neutral-950 dark:text-white font-bold'
                            : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 font-medium'
                        }`}
                      >
                        {item.label}
                      </button>
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 md:p-12 rounded-[32px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready to bring Virtual Try-On to your store?
            </h3>
            <p className="text-neutral-400 text-sm md:text-base">
              Start with GlamAR.ai and deliver photorealistic AI try-ons in minutes.
            </p>
          </div>
          <Link
            to="/pricing"
            className="px-8 py-4 rounded-full bg-primary text-black font-bold text-sm hover:scale-105 transition-all shadow-lg shrink-0 inline-flex items-center gap-2"
          >
            <span>Start Free Trial</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
