import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to integrate GlamAR?',
    a: "Just minutes. Add a single line of code to your website and you're ready to go. Most retailers go live within 15 minutes.",
  },
  {
    q: 'What platforms do you support?',
    a: "GlamAR works with Shopify, WooCommerce, Magento, BigCommerce, PrestaShop, and custom e-commerce sites. We're constantly adding more platforms.",
  },
  {
    q: 'How much does it cost?',
    a: 'We offer flexible pricing starting from free, with usage-based and subscription plans. Check our pricing page for details or contact us for enterprise quotes.',
  },
  {
    q: 'Is my customer data secure?',
    a: 'Yes. We use enterprise-grade security, data encryption, and comply with GDPR, CCPA, and other global standards.',
  },
  {
    q: 'Do you provide support?',
    a: 'Absolutely. We offer 24/7 technical support, comprehensive documentation, and dedicated account managers for enterprise customers.',
  },
  {
    q: 'Can I white-label GlamAR?',
    a: 'Yes. We offer white-label solutions where the experience can be fully branded with your logo, colors, and messaging.',
  },
];

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-background text-foreground py-28 px-6 md:px-10 transition-colors duration-300">
      <div className="max-w-[820px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-[clamp(36px,5vw,56px)] font-medium tracking-tight leading-[1.15] text-foreground mb-3">
          Frequently asked questions
        </h2>
        <p className="text-[15px] text-foreground/60 font-normal">
          Everything you need to know about getting started with GlamAR.ai.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => {
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
                <span className="text-[15px] md:text-[16px] font-semibold text-foreground">
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
                    <p className="px-6 pb-5 text-[14px] leading-relaxed text-foreground/65 max-w-[92%]">
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
    </section>
  );
}
