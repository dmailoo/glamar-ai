import React from 'react';
import { Link } from 'react-router';
import { BadgeCheck, ChevronDown, Code2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgShopify from '../../imports/shopify-logo.png';
import imgMagento from '../../imports/magento-logo.png';
import imgWooCommerce from '../../imports/woocommerce-logo.png';
import imgBigCommerce from '../../imports/bigcommerce-logo.png';
import { DresonLogo } from './DresonLogo';

const PINK_BG =
  'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const solutions = [
  'AI Virtual Try-On',
  'API Integration',
  'Shopify Integration',
  'WooCommerce Integration',
  'Enterprise / White-label',
  'Custom AI Solution',
];

const countryCodes = [
  { flag: '🇮🇳', code: '+91', label: 'IN', digits: 10, placeholder: '9876543210' },
  { flag: '🇺🇸', code: '+1', label: 'US', digits: 10, placeholder: '5550001234' },
  { flag: '🇬🇧', code: '+44', label: 'UK', digits: 10, placeholder: '7123456789' },
  { flag: '🇦🇺', code: '+61', label: 'AU', digits: 9, placeholder: '412345678' },
  { flag: '🇩🇪', code: '+49', label: 'DE', digits: 10, placeholder: '1512345678' },
  { flag: '🇫🇷', code: '+33', label: 'FR', digits: 9, placeholder: '612345678' },
  { flag: '🇦🇪', code: '+971', label: 'AE', digits: 9, placeholder: '501234567' },
  { flag: '🇸🇬', code: '+65', label: 'SG', digits: 8, placeholder: '81234567' },
];

export function ScheduleCall() {
  const [submitted, setSubmitted] = React.useState(false);
  const [country, setCountry] = React.useState(countryCodes[0].code);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [solution, setSolution] = React.useState(solutions[0]);
  const [message, setMessage] = React.useState('');

  const currentCountryObj = countryCodes.find((c) => c.code === country) || countryCodes[0];
  const requiredDigits = currentCountryObj.digits;

  const handleCountryChange = (newCode: string) => {
    setCountry(newCode);
    const targetObj = countryCodes.find((c) => c.code === newCode) || countryCodes[0];
    setPhone((prev) => prev.slice(0, targetObj.digits));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Schedule Call Request: ${firstName} ${lastName} (${company})`);
    const body = encodeURIComponent(
      `Schedule Call Request Details:\n\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Work Email: ${email}\n` +
      `Mobile: ${country} ${phone}\n` +
      `Company: ${company}\n` +
      `Solution Interested: ${solution}\n\n` +
      `Message:\n${message || 'N/A'}\n`
    );

    // Open user's default email composer with mailto link to support@glamar.ai
    window.location.href = `mailto:support@glamar.ai?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-background text-foreground py-12 md:py-16 px-6 md:px-10 transition-colors duration-300">
      <div className="max-w-[1140px] mx-auto grid lg:grid-cols-2 rounded-[24px] border border-foreground/10 overflow-hidden bg-white dark:bg-card shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        {/* Left — Pink visual panel with floating white card */}
        <div className="relative min-h-[440px] lg:min-h-full overflow-hidden flex items-center justify-center p-6 md:p-8">
          <img src={PINK_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-pink-500/10 backdrop-blur-[1px]" />
          
          {/* Inner Floating White Card matching reference */}
          <div className="relative z-10 w-full max-w-[420px] bg-white rounded-[20px] p-7 md:p-8 text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-neutral-100 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-[clamp(24px,2.8vw,34px)] font-semibold tracking-tight leading-[1.2] text-neutral-900 mb-6">
                Discover how  GlamAR.ai can drive revenue growth in 2026
              </h2>
              
              <div className="pt-4 border-t border-neutral-100">
                <p className="text-[11px] font-normal text-neutral-400 mb-3">
                  Trusted by global brands
                </p>
                <div className="relative flex overflow-hidden py-1 rounded-lg bg-neutral-50/60 p-2 border border-neutral-100">
                  {/* Fade edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

                  <div
                    className="flex items-center gap-6 whitespace-nowrap"
                    style={{ animation: 'schedule-marquee 12s linear infinite' }}
                  >
                    {['Tamiraa', 'Katcloset', 'Dreson', 'Tamiraa', 'Katcloset', 'Dreson', 'Tamiraa', 'Katcloset', 'Dreson'].map((brand, i) => (
                      brand === 'Dreson' ? (
                        <div key={i} className="flex items-center hover:opacity-90 transition-opacity cursor-default select-none shrink-0">
                          <DresonLogo className="h-6" forceMode="light" />
                        </div>
                      ) : (
                        <span
                          key={i}
                          className="text-sm font-black tracking-[-0.02em] text-neutral-800 cursor-default select-none shrink-0"
                        >
                          {brand}
                        </span>
                      )
                    ))}
                  </div>
                </div>

                <style>{`
                  @keyframes schedule-marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                  }
                `}</style>
              </div>

              {/* Works With All Major Platforms */}
              <div className="mt-5 pt-5 border-t border-neutral-100">
                <p className="text-[9.5px] font-bold tracking-[0.18em] text-neutral-400 uppercase text-center mb-4">
                  WORKS WITH ALL MAJOR PLATFORMS
                </p>
                <div className="grid grid-cols-5 gap-1.5 items-start text-center">
                  {/* Shopify */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="h-8 flex items-center justify-center">
                      <ImageWithFallback src={imgShopify} alt="Shopify" className="h-7 w-auto object-contain transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[9.5px] font-semibold text-neutral-700 leading-tight">Shopify</span>
                  </div>

                  {/* Magento */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="h-8 flex items-center justify-center">
                      <ImageWithFallback src={imgMagento} alt="Magento" className="h-7 w-auto object-contain transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[9.5px] font-semibold text-neutral-700 leading-tight">Magento</span>
                  </div>

                  {/* WooCommerce */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="h-8 flex items-center justify-center">
                      <ImageWithFallback src={imgWooCommerce} alt="WooCommerce" className="h-6 w-auto object-contain transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[9.5px] font-semibold text-neutral-700 leading-tight">WooCommerce</span>
                  </div>

                  {/* BigCommerce */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="h-8 flex items-center justify-center">
                      <ImageWithFallback src={imgBigCommerce} alt="BigCommerce" className="h-7 w-auto object-contain transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[9.5px] font-semibold text-neutral-700 leading-tight">BigCommerce</span>
                  </div>

                  {/* Custom HTML */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="h-8 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                        <Code2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <span className="text-[9.5px] font-semibold text-neutral-700 leading-tight">Custom HTML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Pure Solid White Form matching reference */}
        <div className="p-8 md:p-10 bg-white dark:bg-card flex flex-col justify-center">
          <h3 className="text-[22px] md:text-[25px] font-semibold tracking-tight text-neutral-900 dark:text-foreground mb-6">
            Schedule a call with our team
          </h3>

          {submitted ? (
            <div className="rounded-2xl border border-primary/40 bg-primary/[0.12] p-8 text-center">
              <BadgeCheck className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-foreground font-semibold text-base mb-1">Thanks — Email request launched!</p>
              <p className="text-foreground/60 text-xs">
                Your request details have been sent to <strong className="text-foreground font-bold">support@glamar.ai</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 — Names */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="absolute -top-2.5 left-3 bg-white dark:bg-card px-1.5 text-[11px] font-medium text-neutral-500 dark:text-foreground/60 z-10">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-xl bg-white dark:bg-card border border-neutral-300 dark:border-foreground/20 px-3.5 py-3 text-xs text-neutral-900 dark:text-foreground outline-none focus:border-neutral-900 dark:focus:border-primary transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-2.5 left-3 bg-white dark:bg-card px-1.5 text-[11px] font-medium text-neutral-500 dark:text-foreground/60 z-10">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-xl bg-white dark:bg-card border border-neutral-300 dark:border-foreground/20 px-3.5 py-3 text-xs text-neutral-900 dark:text-foreground outline-none focus:border-neutral-900 dark:focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Row 2 — Work Email */}
              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-white dark:bg-card px-1.5 text-[11px] font-medium text-neutral-500 dark:text-foreground/60 z-10">
                  Work Email Id<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
                  title="Please enter a valid email address only (e.g. name@domain.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  className="w-full rounded-xl bg-white dark:bg-card border border-neutral-300 dark:border-foreground/20 px-3.5 py-3 text-xs text-neutral-900 dark:text-foreground outline-none focus:border-neutral-900 dark:focus:border-primary transition-colors"
                  placeholder="jane@company.com"
                />
              </div>

              {/* Row 3 — Mobile Number (Dynamic Per Country Digit Constraint) */}
              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-white dark:bg-card px-1.5 text-[11px] font-medium text-neutral-500 dark:text-foreground/60 z-10">
                  Mobile Number ({requiredDigits} Digits)<span className="text-red-500">*</span>
                </label>
                <div className="w-full rounded-xl bg-white dark:bg-card border border-neutral-300 dark:border-foreground/20 px-3 py-2.5 flex items-center gap-2 focus-within:border-neutral-900 dark:focus-within:border-primary transition-colors">
                  <div className="flex items-center gap-1 shrink-0">
                    <select
                      value={country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="bg-transparent text-xs font-medium text-neutral-900 dark:text-foreground outline-none cursor-pointer appearance-none"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code + c.label} value={c.code} className="bg-white text-black dark:bg-popover dark:text-popover-foreground">
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <span className="text-[9px] text-neutral-500 dark:text-foreground/50 pointer-events-none">▾</span>
                  </div>
                  <div className="h-4 w-[1px] bg-neutral-300 dark:bg-foreground/20 shrink-0" />
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    pattern={`[0-9]{${requiredDigits}}`}
                    minLength={requiredDigits}
                    maxLength={requiredDigits}
                    title={`Please enter exact ${requiredDigits} digits for ${currentCountryObj.label} (${currentCountryObj.code})`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, requiredDigits))}
                    className="w-full bg-transparent text-xs text-neutral-900 dark:text-foreground outline-none placeholder:text-neutral-400"
                    placeholder={currentCountryObj.placeholder}
                  />
                  <span className="text-[10px] font-bold text-neutral-400 shrink-0 select-none">
                    {phone.length}/{requiredDigits}
                  </span>
                </div>
              </div>

              {/* Row 4 — Company Name */}
              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-white dark:bg-card px-1.5 text-[11px] font-medium text-neutral-500 dark:text-foreground/60 z-10">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-xl bg-white dark:bg-card border border-neutral-300 dark:border-foreground/20 px-3.5 py-3 text-xs text-neutral-900 dark:text-foreground outline-none focus:border-neutral-900 dark:focus:border-primary transition-colors"
                  placeholder="Acme Inc."
                />
              </div>

              {/* Row 5 — Solution Dropdown */}
              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-white dark:bg-card px-1.5 text-[11px] font-medium text-neutral-500 dark:text-foreground/60 z-10">
                  Solution you are interested in<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    className="w-full rounded-xl bg-white dark:bg-card border border-neutral-300 dark:border-foreground/20 px-3.5 py-3 text-xs text-neutral-900 dark:text-foreground outline-none appearance-none cursor-pointer pr-10 focus:border-neutral-900 dark:focus:border-primary transition-colors"
                  >
                    {solutions.map((s) => (
                      <option key={s} value={s} className="bg-white text-black dark:bg-popover dark:text-popover-foreground">
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-600 dark:text-foreground/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 6 — Message */}
              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-white dark:bg-card px-1.5 text-[11px] font-medium text-neutral-500 dark:text-foreground/60 z-10">
                  Message
                </label>
                <textarea
                  rows={2.5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-white dark:bg-card border border-neutral-300 dark:border-foreground/20 px-3.5 py-3 text-xs text-neutral-900 dark:text-foreground outline-none resize-none focus:border-neutral-900 dark:focus:border-primary transition-colors"
                  placeholder="Tell us about your goals…"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-full bg-[#0c1017] dark:bg-primary text-white dark:text-black font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer mt-3 shadow-md"
              >
                Submit
              </button>

              <p className="text-[11px] leading-relaxed text-neutral-400 dark:text-foreground/50 text-center pt-2">
                By providing us with your information you are consenting to the collection and use of information in accordance with our{' '}
                <Link to="/terms" className="text-primary font-bold underline hover:opacity-80">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary font-bold underline hover:opacity-80">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
