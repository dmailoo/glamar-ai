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

export function TermsOfService() {
  const [activeSection, setActiveSection] = React.useState('definitions');
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  const sections = React.useMemo(() => [
    {
      id: 'definitions',
      number: '1',
      title: 'Definitions',
      content:
        'This Agreement defines the rights and obligations between GlamAR.ai ("GlamAR") and the customer ("Customer" or "you"). "Services" refers to our virtual try-on API, storefront plugins, dashboard, and related AI image generation services. "Customer Data" means all photographs, garment images, and store metadata uploaded by Customer or its end users.',
    },
    {
      id: 'services',
      number: '2',
      title: 'The Services',
      content:
        'GlamAR grants Customer a non-exclusive, non-transferable, worldwide right to access and use the Services during the Term. GlamAR continuously updates and enhances the Services and reserves the right to modify features, provided such modifications do not materially degrade core functionality.',
    },
    {
      id: 'customer-data',
      number: '3',
      title: 'Customer Data',
      content:
        'Customer retains all ownership rights in Customer Data. Customer grants GlamAR a limited license to process, host, and render Customer Data solely to provide and improve the virtual try-on experience. GlamAR encrypts all customer photos and automatically purges transient processing buffers.',
    },
    {
      id: 'restrictions',
      number: '4',
      title: 'Restrictions, Responsibilities and Rights',
      content:
        'Customer shall not reverse engineer, decompile, or attempt to extract source code or underlying AI model weights from GlamAR. Customer agrees not to upload illicit, infringing, or harmful content. GlamAR reserves the right to suspend access for violations of acceptable use.',
    },
    {
      id: 'fees',
      number: '5',
      title: 'Fees; Payment Terms',
      content:
        'Services are billed on a subscription and usage basis according to the selected plan. All fees are non-refundable except as expressly set forth herein. Subscriptions auto-renew monthly or annually unless cancelled 30 days prior to the renewal date.',
    },
    {
      id: 'credits',
      number: '6',
      title: 'Credits System',
      content:
        'GlamAR operates on a credit system where 5 credits equal 1 photorealistic AI-generated try-on image. Credits reset monthly based on your subscription tier. Unused credits do not roll over to subsequent billing cycles.',
    },
    {
      id: 'warranties',
      number: '7',
      title: 'Warranties',
      content:
        'GlamAR warrants that the Services will perform materially in accordance with published documentation and SLA commitments. Except as explicitly stated, the Services are provided "AS IS" without warranties of any kind.',
    },
    {
      id: 'confidentiality',
      number: '8',
      title: 'Confidential Information',
      content:
        'Each party agrees to protect the other party\'s Confidential Information with the same degree of care it uses for its own confidential assets. Confidential Information excludes public knowledge or independently developed data.',
    },
    {
      id: 'termination',
      number: '9',
      title: 'Term and Termination',
      content:
        'Either party may terminate this Agreement for material breach if such breach remains uncured after 30 days written notice. Upon termination, Customer access to the API and dashboard will be disabled.',
    },
    {
      id: 'indemnity',
      number: '10',
      title: 'Indemnity',
      content:
        'GlamAR will defend and indemnify Customer against third-party claims alleging that the Services infringe any patent or trademark. Customer will indemnify GlamAR against claims arising from Customer Data uploaded in violation of law.',
    },
    {
      id: 'liability',
      number: '11',
      title: 'Limitation of Liability',
      content:
        'Except for gross negligence or willful misconduct, neither party\'s aggregate liability under this Agreement shall exceed the total amounts paid by Customer to GlamAR in the twelve (12) months preceding the claim.',
    },
    {
      id: 'general',
      number: '12',
      title: 'General Provisions',
      content:
        'This Agreement is governed by the laws of Delaware, without regard to conflict of law principles. Entire Agreement: This document supersedes all prior agreements, oral or written.',
    },
    {
      id: 'contact',
      number: '13',
      title: 'Contact Us',
      content:
        'For legal inquiries or notices regarding these Terms, please contact our legal team at support@glamar.ai.',
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
            Terms of service
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
                This Customer Terms of Service is entered into by and between GlamAR.ai, Inc. ("GlamAR") and the entity or person placing an order for or accessing any Services ("Customer" or "you"). If you are accessing or using the Services on behalf of your company, you represent that you are authorized to accept this Agreement on behalf of your company, and all references to "you" or "Customer" reference your company. Please note that if you sign up for the Services using an email address from your employer or another entity, then (1) you will be deemed to represent such party, (2) your acceptance will bind your employer or that entity to these terms, and (3) the words "Customer", "you" or "your" in this Agreement will refer to your employer or that entity.
              </p>
              <p>
                This Agreement permits Customer to purchase subscriptions to online software-as-a-service products and other services from GlamAR pursuant to any GlamAR ordering documents, online registration, order descriptions or order confirmations referencing this Agreement ("Order Form(s)") and sets forth the basic terms and conditions under which those products and services will be delivered.
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
                          layoutId="active-toc-bar-terms"
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
