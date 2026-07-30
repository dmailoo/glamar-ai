import { Sparkles, ArrowUp, Phone, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router';

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

export function SiteFooter() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background text-foreground border-t border-foreground/10 pt-16 pb-10 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
          {/* Column 1 — Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
                <div className="w-9 h-9 rounded-full bg-primary text-black flex items-center justify-center border border-primary shadow-sm">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground font-display">
                  GlamAR<span className="text-primary">.ai</span>
                </span>
              </Link>

              <p className="text-[13px] text-foreground/60 leading-relaxed max-w-[320px] mb-6">
                First-ever e-commerce virtual try-on plugin. Transform your online shopping experience with AI.
              </p>
            </div>
          </div>

          {/* Column 2 — NAVIGATE */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-foreground/50 mb-6">
              NAVIGATE
            </p>
            <ul className="space-y-3.5">
              {[
                { label: 'Features', href: '/#features' },
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Blogs', href: '/blogs' },
                { label: 'Demo', href: '/#demo' },
                { label: 'Manifesto', href: '/manifesto' },
                { label: 'Pricing', href: '/pricing' },
              ].map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.label}>
                    {item.href.startsWith('/#') ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (location.pathname === '/') {
                            e.preventDefault();
                            const id = item.href.replace('/#', '');
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-[13px] text-foreground/75 hover:text-foreground font-medium transition-colors hover:underline underline-offset-4 decoration-primary"
                      >
                        {item.label}
                      </a>
                    ) : item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className={`text-[13px] font-medium transition-colors hover:underline underline-offset-4 decoration-primary ${
                          isActive
                            ? 'underline underline-offset-4 decoration-primary text-foreground font-bold'
                            : 'text-foreground/75 hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          const id = item.href.replace('#', '');
                          const el = document.getElementById(id);
                          if (el) {
                            e.preventDefault();
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-[13px] text-foreground/75 hover:text-foreground font-medium transition-colors hover:underline underline-offset-4 decoration-primary"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 — SUPPORT */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-foreground/50 mb-6">
              SUPPORT
            </p>
            <ul className="space-y-3.5">
              {[
                { label: 'FAQ', href: '/#faq' },
                { label: 'Schedule a Call', href: '/contact' },
                { label: 'Affiliate & Referral Program', href: '/referral' },
                { label: 'Refunds & Cancellation', href: '/refund' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms and Conditions', href: '/terms' },
              ].map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.label}>
                    {item.href.startsWith('/#') ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (location.pathname === '/') {
                            e.preventDefault();
                            const id = item.href.replace('/#', '');
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-[13px] text-foreground/75 hover:text-foreground font-medium transition-colors hover:underline underline-offset-4 decoration-primary"
                      >
                        {item.label}
                      </a>
                    ) : item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className={`text-[13px] font-medium transition-colors hover:underline underline-offset-4 decoration-primary ${
                          isActive
                            ? 'underline underline-offset-4 decoration-primary text-foreground font-bold'
                            : 'text-foreground/75 hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-[13px] text-foreground/75 hover:text-foreground font-medium transition-colors hover:underline underline-offset-4 decoration-primary"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4 — GET IN TOUCH */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-foreground/50 mb-6">
              GET IN TOUCH
            </p>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:support@glamar.ai"
                className="flex items-center gap-3 group/email w-fit transition-all cursor-pointer"
              >
                <div className="shrink-0 transition-transform group-hover/email:scale-105">
                  <GmailIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-foreground/40 tracking-wider">EMAIL</p>
                  <span className="text-[13px] font-semibold text-foreground group-hover/email:underline underline-offset-4 decoration-primary">
                    support@glamar.ai
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/glamar.ai_?igsh=bmt1bzA2YW5nYzNy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group/insta w-fit transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center shrink-0 transition-transform group-hover/insta:scale-105 shadow-2xs">
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-foreground/40 tracking-wider">INSTAGRAM</p>
                  <span className="text-[13px] font-semibold text-foreground group-hover/insta:underline underline-offset-4 decoration-primary">
                    @glamar.ai_
                  </span>
                </div>
              </a>

              {/* Direct Sales Phone */}
              <a
                href="tel:+14045792441"
                className="flex items-center gap-3 group/phone w-fit transition-all cursor-pointer pt-1"
              >
                <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0 transition-transform group-hover/phone:scale-105 shadow-2xs">
                  <Phone className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-foreground/40 tracking-wider">DIRECT SALES</p>
                  <span className="text-[13.5px] font-bold text-foreground group-hover/phone:underline underline-offset-4 decoration-primary block leading-snug">
                    +1404.579.2441
                  </span>
                  <p className="text-[11px] text-foreground/50 font-normal">
                    Mon–Fri: 9am–6pm PST
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-foreground/50 font-medium">
            © 2026 GlamAR.ai. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className={`text-[12px] font-medium transition-colors hover:underline underline-offset-4 decoration-primary ${
                location.pathname === '/privacy'
                  ? 'underline underline-offset-4 decoration-primary text-foreground font-bold'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className={`text-[12px] font-medium transition-colors hover:underline underline-offset-4 decoration-primary ${
                location.pathname === '/terms'
                  ? 'underline underline-offset-4 decoration-primary text-foreground font-bold'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              Terms and Conditions
            </Link>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-foreground/20 dark:border-neutral-700 flex items-center justify-center text-foreground dark:text-white hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all cursor-pointer ml-2 shadow-sm"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
