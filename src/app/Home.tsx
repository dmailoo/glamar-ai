import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  BarChart3,
  Globe,
  Check,
  Code2,
  Copy,
  CheckCheck,
  Wand2,
  Clock,
  Shirt,
  MonitorSmartphone,
} from 'lucide-react';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Import local images
import imgTryonPerson from "../imports/Screenshot_2026-07-27_143832.png";
import imgTryonDress from "../imports/Screenshot_2026-07-27_143745.png";
import imgTryonResult from "../imports/a8173b17-479b-406d-b280-82d58df2142a.webp";
import imgBeforePerson from "../imports/5e245fe0-c484-4a1c-aeb0-e2fc68a39546.webp";
import imgTraditionalDress from "../imports/traditional_saree_dress.jpg";
import imgTraditionalResult from "../imports/traditional_saree_result.jpg";
import { HeroMockup } from './components/HeroMockup';
import { PowerfulFeatures } from './components/PowerfulFeatures';
import { FAQ } from './components/FAQ';
import { ScheduleCall } from './components/ScheduleCall';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import CodeWindow from '../imports/Window';
import imgShopify from '../imports/shopify-logo.png';
import imgMagento from '../imports/magento-logo.png';
import imgWooCommerce from '../imports/woocommerce-logo.png';
import imgBigCommerce from '../imports/bigcommerce-logo.png';
import { DresonLogo } from './components/DresonLogo';

function MotionHighlight({ text }: { text: string }) {
  return (
    <span className="relative inline-block align-middle my-1">
      {/* Yellow highlight box that scales out from left to right */}
      <motion.span
        className="absolute inset-0 bg-primary rounded-none"
        style={{ transformOrigin: 'left center' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      />
      {/* Black text sitting on top */}
      <span className="relative z-10 text-black font-medium px-2.5 py-0.5 inline-block">
        {text}
      </span>
    </span>
  );
}

export function Home() {
  const [codeCopied, setCodeCopied] = React.useState(false);
  const [styleCategory, setStyleCategory] = React.useState<'traditional' | 'western'>('western');

  const beforeAfterRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: baProgress } = useScroll({
    target: beforeAfterRef,
    offset: ['start start', 'end end'],
  });
  // Both cards occupy the SAME spot and move toward the center AT THE SAME TIME.
  // Before slides in from the left, After slides in from the right; they meet and
  // the After card fully overlays the Before card by the end of the scroll range.
  // The section only releases to the next one once fully overlaid (progress ~1).
  const beforeCardX = useTransform(baProgress, [0, 1], ['-115%', '0%']);
  const afterCardX = useTransform(baProgress, [0, 1], ['115%', '0%']);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('<script src="https://glamarapi.com/plugin.js" data-glamar-key="YOUR_API_KEY"></script>');
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const features = [
    {
      title: "Real-time AI Precision",
      description: "Our proprietary neural networks track facial movements with sub-millisecond latency for perfect alignment.",
      icon: <Sparkles className="w-5 h-5 text-primary" />,
    },
    {
      title: "Hyper-realistic Textures",
      description: "Physically based rendering (PBR) ensures that every glitter and gloss reflects light exactly like the real product.",
      icon: <Zap className="w-5 h-5 text-primary" />,
    },
    {
      title: "Omnichannel Deployment",
      description: "Embed GlamAR into your website, app, or social media with just a few lines of code.",
      icon: <Smartphone className="w-5 h-5 text-primary" />,
    },
    {
      title: "Advanced Analytics",
      description: "Track conversion rates, session duration, and product popularity with our integrated dashboard.",
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
    },
    {
      title: "Global Infrastructure",
      description: "Serve millions of AR sessions worldwide with our high-availability cloud infrastructure.",
      icon: <Globe className="w-5 h-5 text-primary" />,
    },
    {
      title: "Enterprise Security",
      description: "GDPR compliant and SOC2 Type II certified. Your data and your customers' privacy are our top priority.",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    },
  ];

  const stats = [
    { value: "3.5x", label: "Conversion Lift" },
    { value: "45%", label: "Return Rate Reduction" },
    { value: "12min+", label: "Avg Session Duration" },
    { value: "500+", label: "Global Beauty Brands" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-clip relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Gradients */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="flex flex-col items-center w-full max-w-[900px] mb-6 gap-1">
            <span className="text-[clamp(44px,6.5vw,72px)] font-medium tracking-tight leading-[1.1]">
              #1 Virtual Try-On
            </span>
            <span className="text-[clamp(44px,6.5vw,72px)] font-medium tracking-tight leading-[1.1] text-primary">
              for E-commerce.
            </span>
          </h1>

          <p className="text-base md:text-[17px] text-foreground/55 max-w-[560px] leading-[1.7] mb-8 font-normal text-center">
            GlamAR.ai creates photorealistic virtual try-ons in just 5 seconds, helping shoppers buy with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => navigate('/pricing')}
              className="rounded-full px-10 h-12 text-sm font-medium bg-primary text-black hover:bg-primary/90 transition-all border border-primary shadow-[0_0_40px_rgba(255,229,0,0.2)] group cursor-pointer inline-flex items-center justify-center font-bold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
            </button>
            <button
              onClick={() => document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-10 h-12 text-sm font-bold border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all gap-2 inline-flex items-center justify-center cursor-pointer"
            >
              <Code2 className="w-4 h-4" />
              See Integration
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {[
              "No credit card required",
              "5-minute setup",
              "Try multiple images",
              "Seamless Integration",
              "Works with any platform"
            ].map((trust) => (
              <div key={trust} className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-green-500 shrink-0" strokeWidth={3} />
                <span className="text-[9px] font-medium tracking-[0.15em] uppercase whitespace-nowrap text-foreground/40">{trust}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Mockup with GIF inside screen */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative w-full"
        >
          <div className="absolute -inset-16 bg-primary/8 blur-[120px] rounded-full opacity-30 pointer-events-none" />
          <HeroMockup />
        </motion.div>
      </section>

      {/* Brand Marquee */}
      <section className="py-10 border-y border-foreground/5 overflow-hidden">
        <p className="text-center text-[10px] font-bold tracking-[0.3em] uppercase mb-8" style={{ color: '#7A786E' }}>
          Trusted by the world's best brands
        </p>
        <div className="relative flex overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            className="flex items-center gap-20 animate-marquee whitespace-nowrap"
            style={{ animation: 'marquee 18s linear infinite' }}
          >
            {['Tamiraa', 'Katcloset', 'Dreson', 'Tamiraa', 'Katcloset', 'Dreson', 'Tamiraa', 'Katcloset', 'Dreson'].map((brand, i) => (
              brand === 'Dreson' ? (
                <div key={i} className="flex items-center hover:opacity-90 transition-opacity cursor-default select-none shrink-0">
                  <DresonLogo className="h-7" />
                </div>
              ) : (
                <span
                  key={i}
                  className="text-2xl font-black tracking-[-0.03em] hover:opacity-80 transition-opacity cursor-default select-none"
                  style={{ color: '#9B9890' }}
                >
                  {brand}
                </span>
              )
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* Try On Section */}
      <section id="how-it-works" className="scroll-mt-20 py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-[clamp(36px,5vw,56px)] font-medium tracking-tight leading-[1.25] text-foreground">
            How <MotionHighlight text="GlamAR.ai" /><br />transforms online shopping
          </h2>
          <p className="mt-4 text-base text-foreground/50 font-normal max-w-[420px] mx-auto leading-relaxed">
            AI-powered virtual try-on that shows how every outfit looks on you.
          </p>

          {/* Toggle Switch Button: Traditional vs Western */}
          <div className="mt-6 inline-flex items-center p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm gap-1">
            <button
              type="button"
              onClick={() => setStyleCategory('traditional')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                styleCategory === 'traditional'
                  ? 'bg-black text-white dark:bg-primary dark:text-black shadow-md scale-[1.02]'
                  : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              <span>Traditional</span>
            </button>

            <button
              type="button"
              onClick={() => setStyleCategory('western')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                styleCategory === 'western'
                  ? 'bg-black text-white dark:bg-primary dark:text-black shadow-md scale-[1.02]'
                  : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              <span>Western</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-stretch w-full gap-4 mb-8">

          {/* Card 1 — Choose Dress */}
          <div className="flex flex-col flex-1">
            <p className="text-[12px] font-semibold text-foreground/50 mb-2 pl-1">
              <span className="text-foreground font-bold">1.</span> Choose Dress
            </p>
            <div className="relative rounded-[20px] overflow-hidden w-full h-[320px] bg-white border border-foreground/8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <ImageWithFallback
                src={
                  styleCategory === 'traditional'
                    ? imgTraditionalDress
                    : imgBeforePerson
                }
                alt="Selected Dress"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3">
                <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1 rounded-full border border-white/20 shadow-sm">
                  {styleCategory === 'traditional' ? 'Select Silk Saree' : 'Select any dress you like'}
                </span>
              </div>
            </div>
          </div>

          {/* Connector + */}
          <div className="flex items-center justify-center shrink-0 self-center">
            <div className="w-9 h-9 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_16px_rgba(255,229,0,0.5)] font-black text-base">+</div>
          </div>

          {/* Card 2 — Your Photo */}
          <div className="flex flex-col flex-1">
            <p className="text-[12px] font-semibold text-foreground/50 mb-2 pl-1">
              <span className="text-foreground font-bold">2.</span> Your Photo
            </p>
            <div className="relative rounded-[20px] overflow-hidden w-full h-[320px] border border-foreground/8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <ImageWithFallback
                src={imgTryonPerson}
                alt="Your Photo"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3">
                <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1 rounded-full border border-white/20 shadow-sm">
                  High quality, AI-generated from photos
                </span>
              </div>
            </div>
          </div>

          {/* Connector → */}
          <div className="flex items-center justify-center shrink-0 self-center">
            <div className="w-9 h-9 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_16px_rgba(255,229,0,0.5)]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3 — AI Try-On Result (Before/After Slider) */}
          <div className="flex flex-col flex-1">
            <p className="text-[12px] font-semibold text-foreground/50 mb-2 pl-1">
              <span className="text-foreground font-bold">3.</span> AI Try-On Result
            </p>
            <div className="relative rounded-[20px] overflow-hidden w-full h-[320px] border-2 border-primary shadow-[0_4px_32px_rgba(255,229,0,0.25)] bg-[#F2F2F4]">
              <BeforeAfterSlider
                leftImage={
                  styleCategory === 'traditional'
                    ? imgTraditionalDress
                    : imgBeforePerson
                }
                rightImage={
                  styleCategory === 'traditional'
                    ? imgTraditionalResult
                    : imgTryonResult
                }
                leftObjectPosition="center top"
                rightObjectPosition="center top"
                leftLabel="Before"
                rightLabel="After"
              />
            </div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 pt-8 border-t border-foreground/10 items-start">
          {[
            { icon: <Wand2 className="w-4 h-4 text-black" strokeWidth={2.2} />, label: 'Realistic Results', sub: 'High quality, AI-generated virtual try-on' },
            { icon: <Clock className="w-4 h-4 text-black" strokeWidth={2.2} />, label: 'Instant Try-On', sub: 'Try any dress, fit, or style instantly' },
            { icon: <ShieldCheck className="w-4 h-4 text-black" strokeWidth={2.2} />, label: 'Privacy First', sub: 'Your photos are private and secure' },
            { icon: <Shirt className="w-4 h-4 text-black" strokeWidth={2.2} />, label: 'Any Outfit', sub: 'Try any dress, top, or accessory' },
            { icon: <MonitorSmartphone className="w-4 h-4 text-black" strokeWidth={2.2} />, label: 'Multi-Platform', sub: 'Works on any device, anywhere' },
          ].map((f) => (
            <div key={f.label} className="flex items-start gap-3 group">
              <div className="w-9 h-9 rounded-full bg-primary text-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-primary">
                {f.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-foreground/90 tracking-tight leading-tight">{f.label}</p>
                <p className="text-[11px] text-foreground/50 leading-snug mt-1">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Developers Section */}
      <section id="developers" className="py-20 px-6 md:px-12 max-w-[860px] mx-auto text-center scroll-mt-20">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40 mb-5">
          For Developers
        </p>

        <h2 className="text-[clamp(36px,5vw,56px)] font-medium tracking-tight leading-[1.15] text-foreground mb-4">
          One Line. All Platforms.
        </h2>

        <p className="text-base text-foreground/50 max-w-[460px] mx-auto leading-relaxed mb-10">
          Add photorealistic AI virtual try-on to any e-commerce store with a single script tag. No complex setup required.
        </p>

        {/* Code Block — macOS Window */}
        <div className="relative mb-12" style={{ height: '82px' }}>
          <CodeWindow />
          {/* Copy Code button — overlaid on titlebar right */}
          <div className="absolute top-0 right-4 h-[28px] flex items-center z-10">
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-black/40 hover:text-black/70 transition-colors"
            >
              {codeCopied ? (
                <><CheckCheck className="w-3 h-3 text-green-500" /><span className="text-green-500">Copied!</span></>
              ) : (
                <><Copy className="w-3 h-3" /><span>Copy Code</span></>
              )}
            </button>
          </div>
          {/* Script tag — overlaid in content area below titlebar */}
          <div className="absolute left-0 right-0 z-10 flex items-center px-5 overflow-x-auto" style={{ top: '28px', bottom: 0 }}>
            <code className="text-sm font-mono whitespace-nowrap text-left">
              <span className="text-gray-400">&lt;</span>
              <span className="text-blue-500">script</span>
              <span className="text-orange-400"> src</span>
              <span className="text-gray-400">=</span>
              <span className="text-green-600">"https://glamarapi.com/plugin.js"</span>
              <span className="text-orange-400"> data-glamar-key</span>
              <span className="text-gray-400">=</span>
              <span className="text-green-600">"YOUR_API_KEY"</span>
              <span className="text-gray-400">&gt;&lt;/</span>
              <span className="text-blue-500">script</span>
              <span className="text-gray-400">&gt;</span>
            </code>
          </div>
        </div>

        {/* Platform logos */}
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40 mb-8">
          Works With All Major Platforms
        </p>

        <div className="flex items-center justify-center gap-12 flex-wrap">
          {/* Shopify */}
          <div className="flex flex-col items-center gap-2.5 group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center">
              <ImageWithFallback src={imgShopify} alt="Shopify" className="w-full h-full object-contain" />
            </div>
            <span className="text-[11px] font-semibold text-foreground/80 transition-colors">Shopify</span>
          </div>

          {/* Magento */}
          <div className="flex flex-col items-center gap-2.5 group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center">
              <ImageWithFallback src={imgMagento} alt="Magento" className="w-full h-full object-contain" />
            </div>
            <span className="text-[11px] font-semibold text-foreground/80 transition-colors">Magento</span>
          </div>

          {/* WooCommerce */}
          <div className="flex flex-col items-center gap-2.5 group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center">
              <ImageWithFallback src={imgWooCommerce} alt="WooCommerce" className="w-full h-full object-contain" />
            </div>
            <span className="text-[11px] font-semibold text-foreground/80 transition-colors">WooCommerce</span>
          </div>

          {/* BigCommerce */}
          <div className="flex flex-col items-center gap-2.5 group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center">
              <ImageWithFallback src={imgBigCommerce} alt="BigCommerce" className="w-full h-full object-contain" />
            </div>
            <span className="text-[11px] font-semibold text-foreground/80 transition-colors">BigCommerce</span>
          </div>

          {/* Custom HTML */}
          <div className="flex flex-col items-center gap-2.5 group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white transition-all group-hover:scale-105 shadow-sm">
              <Code2 className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold text-foreground/80 transition-colors">Custom HTML</span>
          </div>
        </div>
      </section>

      {/* Before & After — Sticky Scroll */}
      <div ref={beforeAfterRef} className="relative" style={{ height: '220vh' }}>
        {/* NOTE: do NOT put overflow-x-hidden here — on a sticky element it forces
            overflow-y to compute to `auto`, turning it into a scroll container and
            breaking the sticky animation. Clipping happens on the inner wrapper below. */}
        <div className="sticky top-0 h-screen min-h-[100dvh] bg-background flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-10">

          {/* Heading */}
          <div className="text-center mb-6 sm:mb-10 shrink-0">
            <h2 className="text-[clamp(28px,5vw,56px)] font-medium tracking-tight leading-[1.15] text-foreground mb-2 sm:mb-3">
              Shopping: a before &amp; after
            </h2>
            <p className="text-xs sm:text-base text-foreground/50 font-normal">
              More confidence, fewer returns.
            </p>
          </div>

          {/* Full-width clip wrapper — hides the After card while it's off-screen right.
              With py-8 sm:py-10 padding, drop shadows are never clipped at the bottom. */}
          <div className="w-full overflow-hidden py-8 sm:py-10">
          {/* Cards — both stacked in the SAME position; After slides in to overlay Before */}
          <div className="relative w-full max-w-[500px] mx-auto h-[480px] sm:h-[510px]">

            {/* BEFORE card — slides in from the left to center */}
            <motion.div
              style={{ x: beforeCardX }}
              className="absolute inset-0 z-10 rounded-[32px] sm:rounded-[36px] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-9 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <p className="text-[11px] font-bold tracking-[0.14em] text-neutral-400 mb-3">Before GlamAR.ai:</p>
                <h3 className="text-[clamp(26px,3.2vw,36px)] font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.12] mb-7">
                  All guesswork<br />and no answers
                </h3>
                <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
                  {[
                    'Buying without seeing how it fits.',
                    'Returns from poor size decisions.',
                    'Scrolling endlessly, never deciding.',
                    'Size guides that never quite help.',
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-between py-3">
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-neutral-500 dark:text-neutral-400">{item}</span>
                      <div className="w-5 h-5 rounded-full bg-black dark:bg-white flex items-center justify-center shrink-0 ml-3 shadow-xs">
                        <Check className="w-2.5 h-2.5 text-white dark:text-black" strokeWidth={3} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => navigate('/pricing')} className="w-full h-12 rounded-full bg-black dark:bg-white text-white dark:text-black text-[11px] font-bold tracking-[0.18em] hover:bg-black/90 dark:hover:bg-white/90 transition-all cursor-pointer">
                GET STARTED
              </button>
            </motion.div>

            {/* AFTER card — starts off to the right, slides left to fully overlay Before */}
            <motion.div
              style={{ x: afterCardX }}
              className="absolute inset-0 z-20 rounded-[32px] sm:rounded-[36px] bg-primary border border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-9 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <p className="text-[11px] font-bold tracking-[0.14em] text-black/55 mb-3">After GlamAR.ai:</p>
                <h3 className="text-[clamp(26px,3.2vw,36px)] font-bold tracking-tight text-black leading-[1.12] mb-7">
                  Try it on, buy<br />with confidence
                </h3>
                <div className="flex flex-col divide-y divide-black/12">
                  {[
                    'See exactly how it fits on you.',
                    'Instant try-on, instant decisions.',
                    'Returns drop by up to 45%.',
                    'AI-powered styling for every body.',
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-between py-3">
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-black/75">{item}</span>
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 ml-3 shadow-xs">
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => navigate('/pricing')} className="w-full h-12 rounded-full bg-white text-black text-[11px] font-bold tracking-[0.18em] shadow-sm hover:bg-white/95 transition-all cursor-pointer">
                GET STARTED
              </button>
            </motion.div>

          </div>
          </div>
        </div>
      </div>

      {/* Powerful Features — bento grid */}
      <PowerfulFeatures
        garments={[imgTryonDress, imgTryonPerson, imgBeforePerson]}
        tryOnResult={imgTryonResult}
        logos={{
          shopify: imgShopify,
          woocommerce: imgWooCommerce,
          magento: imgMagento,
          bigcommerce: imgBigCommerce,
        }}
      />

      {/* FAQ */}
      <FAQ />

      {/* Schedule a call */}
      <ScheduleCall />

    </div>
  );
}

