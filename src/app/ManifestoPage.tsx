import React from 'react';
import { motion } from 'motion/react';

export function ManifestoPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-foreground font-semibold text-[0.92em] leading-none align-baseline border border-neutral-300/50 dark:border-neutral-700/60 shadow-2xs">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 pt-32 pb-32 transition-colors duration-300 font-sans">
      <div className="max-w-[720px] mx-auto px-6 md:px-8">
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 text-[17px] md:text-[18px] leading-[1.65] text-neutral-800 dark:text-neutral-200 font-normal tracking-[-0.01em]"
        >
          {/* Main Headline */}
          <header className="mb-10">
            <h1 className="text-[clamp(36px,5vw,60px)] font-bold tracking-[-0.03em] leading-[1.08] text-neutral-950 dark:text-white mb-6">
              We believe nobody should buy clothes blindly.
            </h1>
            <p className="text-[18px] md:text-[20px] text-neutral-500 dark:text-neutral-400 font-medium">
              Shopping for clothes online shouldn't feel like taking a risk.
            </p>
          </header>

          {/* Stanza 1 */}
          <div className="space-y-1">
            <p>Yet every day, millions of people buy fashion products without knowing how they'll actually look on them.</p>
            <p>They rely on product photos.</p>
            <p>Models with different body types.</p>
            <p>And a little bit of hope.</p>
          </div>

          {/* Stanza 2 */}
          <div className="pt-2">
            <p className="text-neutral-950 dark:text-white font-bold text-[19px]">
              That's not good enough.
            </p>
          </div>

          {/* Stanza 3 */}
          <div className="space-y-1 pt-2">
            <p>We believe customers deserve to see themselves before they decide.</p>
            <p>Not on a mannequin.</p>
            <p>Not on a generic model.</p>
            <p className="text-neutral-950 dark:text-white font-semibold">On themselves.</p>
          </div>

          {/* Quote Callout 1 */}
          <div className="my-8 pl-5 border-l-2 border-neutral-900 dark:border-white py-1">
            <p className="text-[19px] md:text-[21px] font-bold italic tracking-tight text-neutral-950 dark:text-white">
              Because seeing yourself changes everything.
            </p>
          </div>

          {/* Stanza 4 */}
          <div className="space-y-1">
            <p>For brands, this isn't just about better shopping.</p>
            <p className="text-neutral-950 dark:text-white font-medium">It's about building trust.</p>
          </div>

          {/* Stanza 5 */}
          <div className="space-y-1 pt-2">
            <p>
              When customers know what to expect, they buy with <Badge>confidence</Badge>.
            </p>
            <p>Confident customers return fewer products, hesitate less, and come back more often.</p>
            <p className="text-neutral-950 dark:text-white font-semibold">Everyone wins.</p>
          </div>

          {/* Stanza 6 */}
          <div className="space-y-1 pt-2">
            <p>
              That's why we built <Badge>GlamAR.ai</Badge>.
            </p>
            <p>
              A simple <Badge>AI platform</Badge> that lets fashion brands add realistic virtual try-ons to their websites with just a few lines of code.
            </p>
            <p>No expensive hardware.</p>
            <p>No complicated setup.</p>
            <p className="text-neutral-950 dark:text-white font-medium">Just fast, photorealistic results.</p>
          </div>

          {/* Stanza 7 */}
          <div className="space-y-1 pt-2">
            <p>We believe virtual try-on shouldn't be a premium feature available only to the world's biggest retailers.</p>
            <p>It should be accessible to every fashion business.</p>
            <p className="text-neutral-950 dark:text-white font-medium">From local boutiques to global brands.</p>
          </div>

          {/* Quote Callout 2 */}
          <div className="my-8 pl-5 border-l-2 border-primary py-1.5 space-y-1">
            <p className="text-[18px] md:text-[20px] font-bold italic tracking-tight text-neutral-950 dark:text-white">
              This isn't about replacing shopping.
            </p>
            <p className="text-[18px] md:text-[20px] font-bold italic tracking-tight text-primary">
              It's about making online shopping feel as natural and confident as trying clothes on in a fitting room.
            </p>
          </div>

          {/* Stanza 8 */}
          <div className="space-y-1 pt-2">
            <p>We're building a future where people don't wonder,</p>
            <p className="text-neutral-500 dark:text-neutral-400 italic text-[18px]">"Will this look good on me?"</p>
            <p className="text-neutral-950 dark:text-white font-bold text-[20px]">They already know.</p>
          </div>

          {/* Final Welcome Card */}
          <div className="pt-8">
            <p className="text-[22px] font-bold text-neutral-950 dark:text-white">
              Welcome to <Badge>GlamAR.ai</Badge>.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
