import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpCircle } from 'lucide-react';
import { Link } from 'react-router';

function GmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M120,384 L48,384 C21.5,384 0,362.5 0,336 L0,120 L120,216 L120,384 Z"/>
      <path fill="#34A853" d="M392,384 L464,384 C490.5,384 512,362.5 512,336 L512,120 L392,216 L392,384 Z"/>
      <path fill="#FBBC04" d="M392,48 L392,216 L512,120 L512,96 C512,41.9 460.7,3.6 409.1,20.4 L392,48 Z"/>
      <path fill="#EA4335" d="M120,48 L256,150 L392,48 L392,216 L256,318 L120,216 L120,48 Z"/>
      <path fill="#C5221F" d="M120,48 L102.9,20.4 C51.3,3.6 0,41.9 0,96 L0,120 L120,216 L120,48 Z"/>
    </svg>
  );
}

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = React.useState('overview');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  const sections = React.useMemo(() => [
    {
      id: 'overview',
      number: '1',
      title: 'Information We Collect',
      content:
        'GlamAR.ai ("we", "us", or "our") collects information to provide and improve our virtual try-on services. This includes customer uploaded photos, store garment images, user-agent details, and session telemetry required for AI image rendering.',
    },
    {
      id: 'photo-data',
      number: '2',
      title: 'Customer Photos & Biometric Data',
      content:
        'Customer photos uploaded for virtual try-on are processed transiently in memory to generate body mesh and garment alignment vectors. We do not build facial recognition profiles or sell biometric data to third parties. All processing buffers are automatically purged after generation.',
    },
    {
      id: 'usage-data',
      number: '3',
      title: 'How We Use Your Information',
      content:
        'We use collected data solely to render virtual try-on results, maintain storefront integration APIs, process subscription billing, and prevent fraudulent activity. Aggregated, non-identifiable telemetry may be used to train and optimize model inference latency.',
    },
    {
      id: 'sharing',
      number: '4',
      title: 'Information Sharing & Third Parties',
      content:
        'We do not sell, rent, or trade your personal information. We share data only with trusted cloud infrastructure providers (such as AWS and Cloudflare) under strict data protection agreements to operate our real-time rendering pipelines.',
    },
    {
      id: 'cookies',
      number: '5',
      title: 'Cookies & Analytics',
      content:
        'We use essential cookies and minimal session analytics to maintain dashboard security and track credit consumption. You may disable non-essential cookies in your browser settings.',
    },
    {
      id: 'security',
      number: '6',
      title: 'Data Security & Retention',
      content:
        'We employ SOC2-compliant encryption standards in transit (TLS 1.3) and at rest (AES-256). Customer store assets are retained for the duration of the subscription and deleted within 30 days of account cancellation.',
    },
    {
      id: 'rights',
      number: '7',
      title: 'Your Privacy Rights (GDPR & CCPA)',
      content:
        'Under GDPR and CCPA, you have the right to access, rectify, or delete your personal data at any time. You may request a complete export of your store data or submit a data erasure request.',
    },
    {
      id: 'contact',
      number: '8',
      title: 'Contact Privacy Team',
      content:
        'If you have any questions or requests concerning your privacy, please email our dedicated Data Protection Officer at support@glamar.ai.',
    },
  ], []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 400;
      setShowBackToTop(scrollPosition >= threshold);

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height + 80) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 pt-32 pb-32 transition-colors duration-300 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-10">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Page Header */}
        <header className="mb-14 border-b border-neutral-200 dark:border-neutral-800 pb-10">
          <h1 className="text-[clamp(36px,5vw,54px)] font-medium tracking-tight leading-[1.12] text-neutral-950 dark:text-white mb-3">
            Privacy policy
          </h1>
          <p className="text-[16px] text-neutral-500 dark:text-neutral-400 font-normal">
            Last updated on 29th of July, 2026
          </p>
        </header>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Document Content (Left / Center) */}
          <main className="lg:col-span-8 space-y-10 text-[16px] md:text-[17px] text-neutral-800 dark:text-neutral-200 leading-[1.7]">
            {/* Preamble */}
            <div className="space-y-4 text-[16.5px] text-neutral-700 dark:text-neutral-300">
              <p>
                At GlamAR.ai, we take your privacy and the privacy of your store customers seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our virtual try-on plugins, or interact with our API platform.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using the GlamAR.ai platform, you acknowledge that you have read, understood, and agree to be bound by all terms outlined herein.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 pt-6 border-t border-neutral-100 dark:border-neutral-900"
              >
                <h2 className="text-[20px] md:text-[22px] font-medium tracking-tight leading-snug text-neutral-950 dark:text-white mb-3">
                  {section.number}. {section.title}
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 font-normal">
                  {section.content}
                </p>

                {section.id === 'contact' && (
                  <div className="mt-4 p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                    <GmailIcon className="w-6 h-6 shrink-0" />
                    <a
                      href="mailto:support@glamar.ai"
                      className="text-sm font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-4 decoration-primary"
                    >
                      support@glamar.ai
                    </a>
                  </div>
                )}
              </section>
            ))}
          </main>

          {/* Table of Contents Sidebar (Right Column — Sticky) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800 py-1">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                TABLE OF CONTENTS
              </p>
              <nav className="space-y-3.5 relative">
                {sections.map((s) => {
                  const isSelected = activeSection === s.id;
                  return (
                    <div key={s.id} className="relative">
                      {isSelected && (
                        <motion.div
                          layoutId="active-toc-bar-privacy"
                          className="absolute -left-[18px] top-0 bottom-0 w-[2px] bg-neutral-950 dark:bg-white"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`block text-[14px] text-left w-full transition-colors cursor-pointer leading-snug ${
                          isSelected
                            ? 'text-neutral-950 dark:text-white font-bold'
                            : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 font-medium'
                        }`}
                      >
                        {s.number}. {s.title}
                      </button>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Back to top button */}
            {showBackToTop && (
              <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 transition-all duration-300 pl-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2.5 text-[14px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowUpCircle className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                  <span>Back to top</span>
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
