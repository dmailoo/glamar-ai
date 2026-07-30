import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Users, Plus, Sparkles, Wallet, Share2, Award, Zap } from 'lucide-react';
import { ScheduleCall } from './components/ScheduleCall';

type Currency = 'INR' | 'USD';
type PlanTier = 'starter' | 'growth' | 'scale';
type BillingType = 'monthly' | 'annually';

interface PlanDetail {
  id: PlanTier;
  name: string;
  monthlyINR: number;
  monthlyUSD: number;
  annuallyINR: number;
  annuallyUSD: number;
  commMonthlyINR: number;
  commMonthlyUSD: number;
  commAnnuallyINR: number;
  commAnnuallyUSD: number;
}

const plans: Record<PlanTier, PlanDetail> = {
  starter: {
    id: 'starter',
    name: 'Starter',
    monthlyINR: 1799,
    monthlyUSD: 19,
    annuallyINR: 17268,
    annuallyUSD: 180,
    commMonthlyINR: 180,
    commMonthlyUSD: 1.9,
    commAnnuallyINR: 1727,
    commAnnuallyUSD: 18,
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    monthlyINR: 3499,
    monthlyUSD: 39,
    annuallyINR: 33588,
    annuallyUSD: 372,
    commMonthlyINR: 350,
    commMonthlyUSD: 3.9,
    commAnnuallyINR: 3359,
    commAnnuallyUSD: 37.2,
  },
  scale: {
    id: 'scale',
    name: 'Scale ⭐',
    monthlyINR: 6999,
    monthlyUSD: 79,
    annuallyINR: 67188,
    annuallyUSD: 756,
    commMonthlyINR: 700,
    commMonthlyUSD: 7.9,
    commAnnuallyINR: 6719,
    commAnnuallyUSD: 75.6,
  },
};

const affiliateFaqs = [
  {
    q: 'How much can I earn as a GlamAR affiliate?',
    a: 'You earn a 10% one-time commission on every merchant who installs GlamAR using your link and starts a paid plan (Starter, Growth, or Scale).',
  },
  {
    q: 'When and how do I get paid?',
    a: 'Payouts are processed on the 1st of every month via direct bank transfer (NEFT/UPI) or PayPal/Stripe once your referred merchant starts a plan.',
  },
  {
    q: 'How does referral tracking work?',
    a: 'We use a 60-day cookie tracking window. When a merchant clicks your unique referral link, installs GlamAR, and starts a plan within 60 days, your 10% commission is credited.',
  },
  {
    q: 'Is it free to join the affiliate program?',
    a: 'Yes, joining the GlamAR Affiliate & Referral Program is 100% free with no hidden fees or credit card required.',
  },
];

function MotionHighlight({ text }: { text: string }) {
  return (
    <span className="relative inline-block align-middle my-1">
      <motion.span
        className="absolute inset-0 bg-primary rounded-none"
        style={{ transformOrigin: 'left center' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      />
      <span className="relative z-10 text-black font-medium px-2.5 py-0.5 inline-block">
        {text}
      </span>
    </span>
  );
}

export function ReferralPage() {
  const [referrals, setReferrals] = React.useState<number>(10);
  const [currency, setCurrency] = React.useState<Currency>('INR');
  const [selectedPlan, setSelectedPlan] = React.useState<PlanTier>('growth');
  const [billingType, setBillingType] = React.useState<BillingType>('monthly');
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const plan = plans[selectedPlan];
  const isUSD = currency === 'USD';
  const isAnnual = billingType === 'annually';

  // 10% One-time commission calculation based on billing (monthly vs annual)
  const commPerReferral = isAnnual
    ? (isUSD ? plan.commAnnuallyUSD : plan.commAnnuallyINR)
    : (isUSD ? plan.commMonthlyUSD : plan.commMonthlyINR);

  const totalEarnings = Math.round(commPerReferral * referrals);

  const formattedTotal = isUSD
    ? `$${totalEarnings.toLocaleString('en-US')}`
    : `₹${totalEarnings.toLocaleString('en-IN')}`;

  const formattedPerReferral = isUSD ? `$${commPerReferral}` : `₹${commPerReferral.toLocaleString('en-IN')}`;

  const currentPlanPrice = isAnnual
    ? (isUSD ? `$${plan.annuallyUSD}/yr` : `₹${plan.annuallyINR.toLocaleString('en-IN')}/yr`)
    : (isUSD ? `$${plan.monthlyUSD}/mo` : `₹${plan.monthlyINR.toLocaleString('en-IN')}/mo`);

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-24 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center gap-4">
        <h1 className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight text-foreground mb-1">
          Earn <MotionHighlight text="10% Commission" />
        </h1>
        
        <p className="text-[15px] text-foreground/60 max-w-[620px] leading-relaxed">
          Share your referral link with merchants. When they install GlamAR and subscribe to any plan, you get a 10% commission.
        </p>

        {/* Hero CTA & Trust Badges */}
        <div className="mt-2 flex flex-col items-center gap-6">
          <button
            onClick={() => {
              const calcElem = document.getElementById('calculator');
              calcElem?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-primary/90 text-black text-[15px] font-medium px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 transition-all flex items-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98] border border-primary"
          >
            <span>Calculate Your Earnings</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 text-[14px] font-medium text-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 text-black dark:text-primary flex items-center justify-center">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 text-black dark:text-primary flex items-center justify-center">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Instant Payouts</span>
            </div>
          </div>

          {/* Stacked Controls UNDER trust badges (increased spacing) */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Top Row — Segmented Currency Switcher Pill */}
            <div className="bg-[#f4f4f5] dark:bg-neutral-800 p-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-700 shadow-2xs flex items-center gap-2">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  currency === 'INR'
                    ? 'bg-white text-black dark:bg-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <span className={`text-[10px] font-extrabold tracking-tight ${currency === 'INR' ? 'opacity-90' : 'opacity-40'}`}>IN</span>
                <span className="font-extrabold text-xs tracking-tight">INR</span>
              </button>

              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  currency === 'USD'
                    ? 'bg-white text-black dark:bg-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <span className={`text-[10px] lowercase font-semibold tracking-tight ${currency === 'USD' ? 'opacity-90' : 'opacity-40'}`}>us</span>
                <span className="font-extrabold text-xs tracking-tight">USD</span>
              </button>
            </div>

            {/* Bottom Row — Monthly / Annually Hardware Toggle Switch */}
            <div className="flex items-center gap-3">
              <span
                onClick={() => setBillingType('monthly')}
                className={`text-sm font-semibold cursor-pointer transition-colors ${
                  !isAnnual ? 'text-foreground font-bold' : 'text-neutral-400 hover:text-foreground'
                }`}
              >
                Monthly
              </span>

              <button
                onClick={() => setBillingType(isAnnual ? 'monthly' : 'annually')}
                className={`w-13 h-7 rounded-full p-1 cursor-pointer relative transition-colors duration-300 focus:outline-none flex items-center shadow-inner ${
                  isAnnual ? 'bg-black dark:bg-white' : 'bg-[#e5e7eb] dark:bg-neutral-800'
                }`}
                aria-label="Toggle Billing Frequency"
              >
                <motion.div
                  className={`w-5 h-5 rounded-full shadow-md border border-black/5 ${
                    isAnnual ? 'bg-white dark:bg-black' : 'bg-white'
                  }`}
                  animate={{ x: isAnnual ? 24 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>

              <span
                onClick={() => setBillingType('annually')}
                className={`text-sm font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                  isAnnual ? 'text-foreground font-bold' : 'text-neutral-400 hover:text-foreground'
                }`}
              >
                <span>Annually</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary text-black">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Industry-Standard Calculator Card */}
      <section id="calculator" className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8 mt-6 text-center flex flex-col items-center">
        <div className="w-full max-w-[540px] bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-[24px] p-6 md:p-8 shadow-xl flex flex-col items-center gap-5">
          
          {/* Card Top Row: Header Badge */}
          <div className="w-full flex items-center justify-center pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <div className="bg-primary/20 text-black dark:text-primary text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-primary/30">
              <Wallet className="w-3.5 h-3.5" />
              <span>ESTIMATED EARNINGS</span>
            </div>
          </div>

          {/* Big Earnings Display */}
          <div className="flex flex-col items-center py-1">
            <span className="text-[48px] md:text-[56px] font-medium text-foreground dark:text-white tracking-tight leading-none">
              {formattedTotal}
            </span>
            <span className="text-[13px] md:text-[14px] font-normal text-foreground/60 mt-2.5 text-center">
              You earn <strong className="text-foreground font-medium">{formattedPerReferral}</strong> per referral (10% of {plan.name} {currentPlanPrice})
            </span>
          </div>

          {/* Plan Selector Segmented Tabs */}
          <div className="w-full flex flex-col gap-2">
            <div className="flex items-center justify-between text-[13px] font-medium text-foreground/70 px-1">
              <span>Select Plan:</span>
              <span className="text-primary font-bold">10% Commission</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
              {(Object.keys(plans) as PlanTier[]).map((key) => {
                const p = plans[key];
                const active = selectedPlan === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm'
                        : 'text-neutral-500 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Screenshot-Matching Custom Tooltip Slider */}
          <div className="w-full mt-2 flex flex-col gap-1">
            <div className="flex items-center justify-between text-[13px] font-medium text-foreground/80 px-1">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-foreground/60" />
                <span>Referrals:</span>
              </span>
              <span className="text-[13px] font-bold text-black dark:text-white bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-lg border border-neutral-200/80 dark:border-neutral-700">
                {referrals} Referrals
              </span>
            </div>

            {/* Slider Container with Floating Arrow Tooltip & Custom Knob */}
            <div className="relative w-full pt-12 pb-2 select-none">
              {/* Tooltip Bubble with Downward Arrow Pointer */}
              {(() => {
                const percent = (referrals - 1) / 499; // 0 to 1 for max 500
                // 20px thumb width compensation
                const leftPos = `calc(${percent * 100}% + ${(0.5 - percent) * 20}px)`;
                return (
                  <div
                    className="absolute top-1 -translate-x-1/2 transition-all duration-75 pointer-events-none z-20"
                    style={{ left: leftPos }}
                  >
                    <div className="relative bg-[#111827] dark:bg-neutral-800 text-white dark:text-primary text-[11px] font-extrabold px-2.5 py-0.5 rounded-md shadow-md flex items-center justify-center">
                      {referrals}
                      {/* Downward Arrow Tip */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#111827] dark:border-t-neutral-800" />
                    </div>
                  </div>
                );
              })()}

              {/* Slider Track Container */}
              <div className="relative w-full h-2.5 flex items-center">
                {/* Unfilled Background Track */}
                <div className="absolute inset-0 rounded-full bg-neutral-200/90 dark:bg-neutral-800" />

                {/* Filled Active Yellow/Primary Track */}
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-full bg-primary"
                  style={{ width: `${((referrals - 1) / 499) * 100}%` }}
                />

                {/* Native Range Input (Transparent Overlay for Interaction) */}
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={referrals}
                  onChange={(e) => setReferrals(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                />

                {/* Custom Styled Thumb / Knob (Clean White Ring with Yellow Dot) */}
                {(() => {
                  const percent = (referrals - 1) / 499;
                  const leftPos = `calc(${percent * 100}% + ${(0.5 - percent) * 20}px)`;
                  return (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-md flex items-center justify-center pointer-events-none z-10"
                      style={{ left: leftPos }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  );
                })()}
              </div>

              {/* Min & Max Labels */}
              <div className="flex items-center justify-between w-full text-[12px] font-medium text-foreground/40 mt-3 px-0.5">
                <span>1</span>
                <span>500+</span>
              </div>
            </div>
          </div>

          {/* High-Contrast CTA Button */}
          <button
            onClick={() => alert('Affiliate registration link coming soon! Contact support@glamar.ai to get early access.')}
            className="w-full bg-primary text-black hover:bg-primary/90 text-[15px] font-medium py-3.5 rounded-xl shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] mt-2 flex items-center justify-center gap-2"
          >
            <span>Start Earning Today</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <span className="text-[12px] text-foreground/40 font-medium">
            10% one-time commission credited when a referred merchant starts a plan.
          </span>
        </div>
      </section>

      {/* 3-Step Program Workflow */}
      <section className="max-w-[1040px] mx-auto px-4 sm:px-6 md:px-8 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-medium tracking-tight text-foreground mb-2">
            How It Works
          </h2>
          <p className="text-[15px] text-foreground/60">
            Start earning referral income in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Get Referral Link',
              desc: 'Sign up for free and generate your unique GlamAR affiliate link.',
            },
            {
              step: '02',
              title: 'Share with Brands',
              desc: 'Recommend GlamAR to Shopify stores and fashion e-commerce brands.',
            },
            {
              step: '03',
              title: 'Earn 10% Cash',
              desc: 'Receive your 10% commission payout direct to bank or PayPal.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl p-7 flex flex-col gap-3 shadow-2xs hover:shadow-md transition-all"
            >
              <span className="text-[24px] font-medium text-black dark:text-primary leading-none px-3 py-1 bg-primary/20 rounded-lg w-fit">{item.step}</span>
              <h3 className="text-[18px] font-medium text-foreground">{item.title}</h3>
              <p className="text-[14px] text-foreground/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate FAQ Section */}
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 mt-24">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-[36px] font-medium tracking-tight text-foreground mb-2">
            Referral FAQ
          </h2>
          <p className="text-[15px] text-foreground/60">
            Everything you need to know about referral payouts and tracking.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {affiliateFaqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={item.q}
                className="rounded-[12px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-foreground overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-medium cursor-pointer"
                >
                  <span className="text-[15px] text-foreground font-medium">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="shrink-0 w-7 h-7 rounded-full border border-foreground/20 flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-foreground stroke-[2]" />
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
      </section>

      {/* Schedule Call Section */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mt-24">
        <ScheduleCall />
      </div>
    </div>
  );
}
