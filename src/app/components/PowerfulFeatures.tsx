import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  Smartphone,
  Monitor,
  Headset,
  Check,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import devicesMockup from '../../imports/devices-mockup.png';
import heroGif from '../../imports/IMG_8893.webp';
import imgTraditionalDress from '../../imports/traditional_saree_dress.jpg';
import imgTraditionalResult from '../../imports/traditional_saree_result.jpg';

type Img = string;

interface PowerfulFeaturesProps {
  garments: Img[];
  tryOnResult: Img;
  logos: { shopify: Img; woocommerce: Img; magento: Img; bigcommerce: Img };
}

// Real dashboard mockup from the web
const DASHBOARD_IMG =
  'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const cardBase =
  'group relative rounded-[24px] bg-white dark:bg-card border border-foreground/10 text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]';

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
};

export function PowerfulFeatures({ garments, tryOnResult, logos }: PowerfulFeaturesProps) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const results = React.useMemo(() => [tryOnResult, imgTraditionalResult], [tryOnResult]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % results.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [results.length]);

  return (
    <section id="features" className="scroll-mt-20 bg-background text-foreground transition-colors duration-300">
      <div className="py-28 px-6 md:px-10 max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[clamp(36px,5vw,56px)] font-medium tracking-tight leading-[1.15] text-foreground mb-3">
            Powerful features, superior experience
          </h2>
          <p className="text-[15px] text-foreground/60 font-normal max-w-lg mx-auto">
            The features that make GlamAR.ai the fastest way to bring virtual try-on to your store.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {/* ── Row 1 — wide hero ───────────────────────────── */}
          <motion.div {...cardMotion} className={`${cardBase} p-8 md:p-11`}>
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
              <div>
                <h3 className="text-[clamp(20px,2.1vw,28px)] font-medium tracking-tight leading-[1.2] text-foreground mb-3">
                  End-to-end 5-second<br />try-on lifecycle
                </h3>
                <p className="text-[14px] text-foreground/60 leading-relaxed max-w-sm">
                 Upload a garment and a customer photo once. GlamAR.ai generates photorealistic virtual try-ons in under 5 seconds across every device.
                </p>
              </div>

              {/* Visual: garments (Dress + Saree) flowing into a phone AR try-on */}
              <div className="relative flex items-center justify-center md:justify-end gap-5">
                <div className="hidden sm:flex items-center gap-3">
                  {/* Thumbnail 1 — Western Dress */}
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className={`w-20 h-28 rounded-[18px] bg-white overflow-hidden shrink-0 transition-all duration-300 ${
                      activeSlide === 0
                        ? 'border-2 border-primary shadow-[0_4px_16px_rgba(255,229,0,0.4)] scale-105'
                        : 'border border-neutral-200 dark:border-foreground/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback src={garments[0]} alt="Western Garment" className="w-full h-full object-cover object-center" />
                  </motion.div>

                  {/* Thumbnail 2 — Traditional Saree */}
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`w-20 h-28 rounded-[18px] bg-white overflow-hidden shrink-0 transition-all duration-300 ${
                      activeSlide === 1
                        ? 'border-2 border-primary shadow-[0_4px_16px_rgba(255,229,0,0.4)] scale-105'
                        : 'border border-neutral-200 dark:border-foreground/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback src={imgTraditionalDress} alt="Traditional Saree" className="w-full h-full object-cover object-center" />
                  </motion.div>

                  <span className="text-neutral-400 dark:text-foreground/30 text-xl font-light shrink-0">→</span>
                </div>

                {/* Phone Mockup with 3-Second Crossfade Auto-Loop */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.55 }}
                  className="relative w-[168px] h-[228px] rounded-[28px] bg-black border-[5px] border-neutral-900 overflow-hidden shrink-0 shadow-2xl"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <ImageWithFallback src={results[activeSlide]} alt="AR try-on" className="w-full h-full object-cover object-top" />
                    </motion.div>
                  </AnimatePresence>

                  <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl z-10 pointer-events-none" />
                  <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr z-10 pointer-events-none" />
                  <span className="absolute bottom-14 left-3 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl z-10 pointer-events-none" />
                  <span className="absolute bottom-14 right-3 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br z-10 pointer-events-none" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 whitespace-nowrap shadow-sm z-10 pointer-events-none">
                    <Sparkles className="w-3 h-3 text-black" />
                    <span className="text-[11px] font-bold text-black">Try in GlamAR</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── Row 2 — dashboard + integrations ────────────── */}
          <div className="grid md:grid-cols-[1fr_1fr] gap-3">
            {/* Dashboard */}
            <motion.div {...cardMotion} className={`${cardBase} p-8 pb-0 flex flex-col justify-between`}>
              <div>
                <h3 className="text-[19px] font-medium tracking-tight text-foreground mb-1.5">
                  Virtual Try-On Dashboard
                </h3>
                <p className="text-[13.5px] text-foreground/60 leading-relaxed mb-6">
                  Everything you need to upload garments, monitor AI generations, and manage your virtual fitting experience.
                </p>
              </div>
              <div className="rounded-t-2xl border border-b-0 border-foreground/10 overflow-hidden shadow-[0_-1px_20px_rgba(0,0,0,0.04)] mt-auto">
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-900/90 border-b border-foreground/10">
                  <span className="w-3 h-3 rounded-full bg-[#EC6A5E] border border-black/10 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-[#F5BF4F] border border-black/10 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-[#61C554] border border-black/10 shrink-0" />
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  poster={heroGif}
                  className="w-full h-[230px] sm:h-[250px] md:h-[270px] object-cover object-top block"
                  style={{ transform: 'translateZ(0)' }}
                >
                  <source src={heroGif.replace('.webp', '.mp4')} type="video/mp4" />
                  <img src={heroGif} alt="GlamAR.ai Virtual Try-On Dashboard" className="w-full h-full object-cover object-top" />
                </video>
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div {...cardMotion} className={`${cardBase} p-8 flex flex-col justify-between`}>
              <div>
                <h3 className="text-[19px] font-medium tracking-tight text-foreground mb-1.5">
                  Integrates into any workflow
                </h3>
                <p className="text-[13.5px] text-foreground/60 leading-relaxed mb-4">
                  Drop it into any storefront, app, or ad — no rebuild required.
                </p>
              </div>

              {/* Brand List Grid Container */}
              <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 my-auto py-6">
                {[
                  { name: 'Shopify', logo: logos.shopify },
                  { name: 'WooCommerce', logo: logos.woocommerce },
                  { name: 'Magento', logo: logos.magento },
                  { name: 'BigCommerce', logo: logos.bigcommerce },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-3.5 transition-transform hover:scale-105 group"
                  >
                    <ImageWithFallback src={p.logo} alt={p.name} className="w-10 h-10 md:w-11 md:h-11 object-contain shrink-0" />
                    <span className="text-[15px] md:text-[16px] font-bold text-foreground">{p.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Row 3 — Cross-device ──────────────────── */}
          <motion.div {...cardMotion} className={`${cardBase} p-8 md:p-12`}>
            <h3 className="text-[22px] md:text-[26px] font-medium tracking-tight text-foreground text-center mb-3">
              Consistent across every device
            </h3>
            <p className="text-[14px] text-foreground/60 leading-relaxed max-w-[640px] text-center mx-auto mb-10">
              One flawless, lightning-fast virtual try-on experience across mobile phones, desktop computers, and every web browser.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[680px] mx-auto">
              {/* Card 1: Any Device */}
              <div className="flex flex-col items-center justify-between rounded-[22px] bg-white dark:bg-card border border-foreground/15 p-8 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md group/card min-h-[220px]">
                <div className="flex-1 flex items-center justify-center py-4">
                  <img
                    src={devicesMockup}
                    alt="Any Device"
                    className="h-24 md:h-28 w-auto object-contain dark:invert transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground/80 tracking-wide mt-3">
                  Any Device
                </span>
              </div>

              {/* Card 2: Any Browser */}
              <div className="flex flex-col items-center justify-between rounded-[22px] bg-white dark:bg-card border border-foreground/15 p-8 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-md group/card min-h-[220px]">
                <div className="flex-1 flex items-center justify-center py-4">
                  <div className="grid grid-cols-2 gap-3.5 p-1">
                    {[
                      { name: 'Chrome', src: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/74.0.0/chrome/chrome_48x48.png' },
                      { name: 'Edge', src: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/74.0.0/edge/edge_48x48.png' },
                      { name: 'Firefox', src: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/74.0.0/firefox/firefox_48x48.png' },
                      { name: 'Safari', src: 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/74.0.0/safari/safari_48x48.png' },
                    ].map((b) => (
                      <div
                        key={b.name}
                        className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center p-1.5 transition-transform group-hover/card:scale-105"
                      >
                        <ImageWithFallback
                          src={b.src}
                          alt={b.name}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground/80 tracking-wide mt-3">
                  Any Browser
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
