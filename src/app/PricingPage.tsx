import React from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown } from 'lucide-react';
import { ScheduleCall } from './components/ScheduleCall';

type Billing = 'monthly' | 'annually';
type Currency = 'USD' | 'INR';

interface Tier {
  name: string;
  monthlyUSD: number | string;
  annuallyUSD: number | string;
  monthlyINR: number | string;
  annuallyINR: number | string;
  annualBilledNoteUSD?: string;
  annualBilledNoteINR?: string;
  subtitle?: string;
  discount?: string;
  audience: string;
  features: string[];
  cta: string;
  dark?: boolean;
  badge?: string;
  action: 'start' | 'contact';
}

const tiers: Tier[] = [
  {
    name: 'Free',
    monthlyUSD: 0,
    annuallyUSD: 0,
    monthlyINR: 0,
    annuallyINR: 0,
    subtitle: 'Forever Free',
    audience: 'For Evaluation & Testing',
    features: [
      '25 AI Try-Ons / Month',
      'Standard AI Quality',
      'API Sandbox Access',
      'Watermarked Results',
      'Community Support',
    ],
    cta: 'Get Started',
    action: 'start',
  },
  {
    name: '🚀 Starter',
    monthlyUSD: 19,
    annuallyUSD: 15,
    monthlyINR: 1799,
    annuallyINR: 1439,
    annualBilledNoteUSD: 'billed $180/year',
    annualBilledNoteINR: 'billed ₹17,268/year',
    discount: 'Save 20%',
    audience: 'For Small Fashion Stores',
    features: [
      '250 AI Try-Ons / Month',
      'Photorealistic AI Results',
      'REST API Access',
      'Shopify Integration',
      'Email Support',
      'Commercial License',
    ],
    cta: 'Get Started',
    action: 'start',
  },
  {
    name: 'Growth',
    monthlyUSD: 39,
    annuallyUSD: 31,
    monthlyINR: 3499,
    annuallyINR: 2799,
    annualBilledNoteUSD: 'billed $372/year',
    annualBilledNoteINR: 'billed ₹33,588/year',
    discount: 'Save 20%',
    audience: 'For Growing Fashion Brands',
    features: [
      '1,000 AI Try-Ons / Month',
      'Everything in Starter',
      'WooCommerce Integration',
      'HD Image Export',
      'Analytics Dashboard',
      'Bulk Processing',
      'Priority Email Support',
    ],
    cta: 'Get Started',
    action: 'start',
  },
  {
    name: 'Scale ⭐',
    badge: 'Most Popular',
    monthlyUSD: 79,
    annuallyUSD: 63,
    monthlyINR: 6999,
    annuallyINR: 5599,
    annualBilledNoteUSD: 'billed $756/year',
    annualBilledNoteINR: 'billed ₹67,188/year',
    discount: 'Save 20%',
    audience: 'For Scaling E-commerce Businesses',
    dark: true,
    features: [
      '3,000 AI Try-Ons / Month',
      'Everything in Growth',
      'Priority AI Processing',
      'Webhooks',
      'Magento Integration',
      'BigCommerce Integration',
      'Team Collaboration',
      'Advanced Analytics',
      'Priority Support',
    ],
    cta: 'Get Started',
    action: 'start',
  },
  {
    name: 'Enterprise',
    monthlyUSD: 'Custom',
    annuallyUSD: 'Custom',
    monthlyINR: 'Custom',
    annuallyINR: 'Custom',
    subtitle: 'For Large Retailers & Marketplaces',
    audience: 'For Large Retailers & Marketplaces',
    features: [
      'Unlimited AI Try-Ons',
      'Dedicated GPU Infrastructure',
      'White-label Solution',
      'Custom AI Models',
      'Dedicated Account Manager',
      'SAML/SSO',
      'Custom API Limits',
      'SLA & 99.9% Uptime',
      'Volume Discounts',
      'Custom Integrations',
      '24/7 Premium Support',
    ],
    cta: 'Contact Our Sales',
    action: 'contact',
  },
];

const pricingFaqs = [
  {
    q: 'How does the credit system work?',
    a: 'Each virtual try-on uses 5 credits. Credits refresh at the start of each billing cycle and do not roll over.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    q: 'What happens if I exceed my monthly try-on limit?',
    a: "We'll notify you when you're approaching your limit. You can either upgrade or purchase additional try-ons as needed.",
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes, we offer a 14-day money-back guarantee for all paid plans. No questions asked.',
  },
  {
    q: 'Is there a setup fee?',
    a: "No setup fees. Just add one line of code and you're ready to go.",
  },
];

function ControlsToggle({
  billing,
  setBilling,
  currency,
  setCurrency,
}: {
  billing: Billing;
  setBilling: (b: Billing) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
}) {
  const isINR = currency === 'INR';
  const isYearly = billing === 'annually';

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 py-2" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Currency Switcher Toggle Switch */}
      <div className="flex items-center gap-3 bg-white dark:bg-neutral-900 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-2xs">
        <span
          onClick={() => setCurrency('USD')}
          className={`text-sm font-semibold cursor-pointer transition-colors ${
            !isINR ? 'text-foreground font-bold' : 'text-foreground/50 hover:text-foreground'
          }`}
        >
          🇺🇸 USD ($)
        </span>

        <button
          onClick={() => setCurrency(isINR ? 'USD' : 'INR')}
          className={`w-13 h-7 rounded-full p-1 cursor-pointer relative transition-colors duration-300 focus:outline-none flex items-center shadow-inner ${
            isINR ? 'bg-black dark:bg-white' : 'bg-[#e5e7eb] dark:bg-neutral-800'
          }`}
          aria-label="Toggle Currency"
        >
          <motion.div
            className={`w-5 h-5 rounded-full shadow-md border border-black/5 ${
              isINR ? 'bg-white dark:bg-black' : 'bg-white'
            }`}
            animate={{ x: isINR ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>

        <span
          onClick={() => setCurrency('INR')}
          className={`text-sm font-semibold cursor-pointer transition-colors ${
            isINR ? 'text-foreground font-bold' : 'text-foreground/50 hover:text-foreground'
          }`}
        >
          🇮🇳 INR (₹)
        </span>
      </div>

      {/* Monthly / Yearly Switcher Toggle Switch */}
      <div className="flex items-center gap-3 bg-white dark:bg-neutral-900 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-2xs">
        <span
          onClick={() => setBilling('monthly')}
          className={`text-sm font-semibold cursor-pointer transition-colors ${
            !isYearly ? 'text-foreground font-bold' : 'text-foreground/50 hover:text-foreground'
          }`}
        >
          Monthly
        </span>

        <button
          onClick={() => setBilling(isYearly ? 'monthly' : 'annually')}
          className={`w-13 h-7 rounded-full p-1 cursor-pointer relative transition-colors duration-300 focus:outline-none flex items-center shadow-inner ${
            isYearly ? 'bg-black dark:bg-white' : 'bg-[#e5e7eb] dark:bg-neutral-800'
          }`}
          aria-label="Toggle Billing Frequency"
        >
          <motion.div
            className={`w-5 h-5 rounded-full shadow-md border border-black/5 ${
              isYearly ? 'bg-white dark:bg-black' : 'bg-white'
            }`}
            animate={{ x: isYearly ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>

        <span
          onClick={() => setBilling('annually')}
          className={`text-sm font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
            isYearly ? 'text-foreground font-bold' : 'text-foreground/50 hover:text-foreground'
          }`}
        >
          <span>Yearly</span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary text-black">
            Save 20%
          </span>
        </span>
      </div>
    </div>
  );
}

function CheckIcon({ light, isFeaturedDark }: { light?: boolean; isFeaturedDark?: boolean }) {
  return (
    <div
      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${
        isFeaturedDark
          ? 'bg-[#4b4b4b] dark:bg-[#e4e4e4]'
          : light
          ? 'bg-[#4b4b4b]'
          : 'bg-white border border-neutral-200 shadow-2xs dark:bg-neutral-800 dark:border-neutral-700'
      }`}
    >
      <Check
        className={`w-3.5 h-3.5 ${
          isFeaturedDark
            ? 'text-white dark:text-black'
            : light
            ? 'text-white'
            : 'text-neutral-700 dark:text-foreground'
        }`}
        strokeWidth={2.5}
      />
    </div>
  );
}

function PricingCardItem({
  tier,
  billing,
  currency,
  onSelect,
}: {
  tier: Tier;
  billing: Billing;
  currency: Currency;
  onSelect: (t: Tier) => void;
}) {
  const isUSD = currency === 'USD';
  const priceVal = billing === 'monthly'
    ? (isUSD ? tier.monthlyUSD : tier.monthlyINR)
    : (isUSD ? tier.annuallyUSD : tier.annuallyINR);

  const billedNote = isUSD ? tier.annualBilledNoteUSD : tier.annualBilledNoteINR;
  const dark = tier.dark;
  const isCustom = typeof priceVal === 'string';

  const displayPrice = typeof priceVal === 'number'
    ? (isUSD ? `$${priceVal}` : `₹${priceVal.toLocaleString('en-IN')}`)
    : priceVal;

  return (
    <div
      className={`flex-1 min-w-[200px] rounded-[12px] border p-[24px] flex flex-col gap-[20px] transition-all hover:shadow-lg relative ${
        dark
          ? 'bg-neutral-950 text-white border-neutral-800 dark:bg-neutral-950 dark:text-white dark:border-neutral-700 shadow-xl scale-[1.02] z-10'
          : 'bg-white text-foreground border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 shadow-xs'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Title */}
      <div className="flex flex-col gap-[4px] items-center text-center w-full">
        <div className="flex items-center justify-between w-full mb-1">
          <p className={`leading-[1.2] text-[22px] font-bold text-left ${dark ? 'text-white' : 'text-foreground'}`}>
            {tier.name}
          </p>
          {tier.badge && (
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-primary text-black shrink-0">
              {tier.badge}
            </span>
          )}
        </div>
        <div className="flex gap-[8px] items-baseline w-full">
          <p className={`leading-[1.2] ${isCustom ? 'text-[28px]' : 'text-[32px]'} font-extrabold whitespace-nowrap ${dark ? 'text-white' : 'text-foreground'}`}>
            {displayPrice}
          </p>
          {tier.discount && billing === 'annually' && !isCustom && (
            <span
              className={`flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px] text-[12px] font-bold ${
                dark ? 'bg-white/15 text-white' : 'bg-foreground/10 text-foreground'
              }`}
            >
              {tier.discount}
            </span>
          )}
        </div>
        <p className={`leading-[1.4] text-[12px] font-medium w-full text-left ${dark ? 'text-neutral-400' : 'text-foreground/60'}`}>
          {isCustom
            ? tier.subtitle
            : priceVal === 0
            ? tier.subtitle || 'Forever Free'
            : billing === 'annually' && billedNote
            ? `per month (${billedNote})`
            : 'per month, billed monthly'}
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-[10px] items-start w-full">
        <p className={`text-[13px] font-bold ${dark ? 'text-neutral-300' : 'text-foreground/80'}`}>{tier.audience}</p>
        {tier.features.map((f, i) => (
          <div key={i} className="flex gap-[10px] items-start">
            <CheckIcon isFeaturedDark={dark} />
            <p className={`text-[13px] leading-snug font-medium ${dark ? 'text-white' : 'text-foreground'}`}>{f}</p>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <button
        onClick={() => onSelect(tier)}
        className={`mt-auto h-[42px] rounded-[6px] w-full flex items-center justify-center px-[18px] py-[8px] text-[15px] font-bold cursor-pointer transition-all ${
          dark
            ? 'bg-primary text-black hover:bg-primary/90 border border-primary shadow-sm'
            : 'bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-2xs'
        }`}
      >
        {tier.cta}
      </button>
    </div>
  );
}

function PricingControls({
  billing,
  setBilling,
  currency,
  setCurrency,
}: {
  billing: Billing;
  setBilling: (b: Billing) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
}) {
  const isYearly = billing === 'annually';

  return (
    <div className="flex flex-col items-center gap-4 my-1" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Top Row — Segmented Currency Switcher Pill (matches screenshot) */}
      <div className="bg-[#f4f4f5] dark:bg-neutral-900 p-1 rounded-full border border-neutral-200/80 dark:border-neutral-800 shadow-2xs flex items-center gap-1">
        <button
          onClick={() => setCurrency('INR')}
          className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            currency === 'INR'
              ? 'bg-white text-black dark:bg-neutral-800 dark:text-white shadow-xs'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <span className={`text-[11px] font-extrabold tracking-tight ${currency === 'INR' ? 'opacity-90' : 'opacity-40'}`}>IN</span>
          <span className="font-extrabold text-sm tracking-tight">INR</span>
        </button>

        <button
          onClick={() => setCurrency('USD')}
          className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            currency === 'USD'
              ? 'bg-white text-black dark:bg-neutral-800 dark:text-white shadow-xs'
              : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <span className={`text-[11px] lowercase font-semibold tracking-tight ${currency === 'USD' ? 'opacity-90' : 'opacity-40'}`}>us</span>
          <span className="font-extrabold text-sm tracking-tight">USD</span>
        </button>
      </div>

      {/* Bottom Row — Monthly / Annually Hardware Toggle Switch */}
      <div className="flex items-center gap-3">
        <span
          onClick={() => setBilling('monthly')}
          className={`text-sm font-semibold cursor-pointer transition-colors ${
            !isYearly ? 'text-foreground font-bold' : 'text-foreground/50 hover:text-foreground'
          }`}
        >
          Monthly
        </span>

        <button
          onClick={() => setBilling(isYearly ? 'monthly' : 'annually')}
          className={`w-13 h-7 rounded-full p-1 cursor-pointer relative transition-colors duration-300 focus:outline-none flex items-center shadow-inner ${
            isYearly ? 'bg-black dark:bg-white' : 'bg-[#e5e7eb] dark:bg-neutral-800'
          }`}
          aria-label="Toggle Billing Frequency"
        >
          <motion.div
            className={`w-5 h-5 rounded-full shadow-md border border-black/5 ${
              isYearly ? 'bg-white dark:bg-black' : 'bg-white'
            }`}
            animate={{ x: isYearly ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>

        <span
          onClick={() => setBilling('annually')}
          className={`text-sm font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
            isYearly ? 'text-foreground font-bold' : 'text-foreground/50 hover:text-foreground'
          }`}
        >
          <span>Annually</span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary text-black">
            Save 20%
          </span>
        </span>
      </div>

    </div>
  );
}

function PricingFAQ() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className="w-full max-w-[820px] mx-auto mt-12">
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[36px] font-medium tracking-tight text-foreground mb-2">
          Frequently asked questions
        </h2>
        <p className="text-[15px] text-foreground/60">
          Everything you need to know about our plans, billing, and credit system.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {pricingFaqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="rounded-2xl border border-foreground/10 bg-white dark:bg-card text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all hover:border-foreground/20"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-medium cursor-pointer"
              >
                <span className="text-[15px] md:text-[16px] text-foreground font-semibold">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="shrink-0 text-foreground/60"
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
                    <p className="px-6 pb-5 text-[14px] leading-relaxed text-foreground/65">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PricingPage() {
  const [billing, setBilling] = React.useState<Billing>('annually');
  const [currency, setCurrency] = React.useState<Currency>('USD');
  const [selected, setSelected] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelect = (tier: Tier) => {
    if (tier.action === 'contact') {
      navigate('/#schedule');
      return;
    }
    setSelected(tier.name);
    setTimeout(() => setSelected(null), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-24 transition-colors duration-300 relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-[36px] items-center relative">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight text-foreground mb-3">
            Simple, transparent pricing
          </h1>
          <p className="text-[15px] text-foreground/60">
            Choose the plan that scales with your virtual try-on needs.
          </p>
        </div>

        {/* Stacked Pricing Controls (Top: USD/INR, Bottom: Monthly/Annually) */}
        <PricingControls
          billing={billing}
          setBilling={setBilling}
          currency={currency}
          setCurrency={setCurrency}
        />

        {/* Confirmation */}
        {selected && (
          <div className="rounded-lg bg-black text-white text-sm px-5 py-3">
            🎉 {selected} plan selected — redirecting to checkout…
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px] lg:gap-[20px] items-stretch w-full">
          {tiers.map((t) => (
            <PricingCardItem key={t.name} tier={t} billing={billing} currency={currency} onSelect={handleSelect} />
          ))}
        </div>

        {/* Pricing FAQ */}
        <PricingFAQ />

        {/* Schedule Call Section */}
        <div className="w-full mt-8">
          <ScheduleCall />
        </div>
      </div>
    </div>
  );
}
