import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ScheduleCall } from './components/ScheduleCall';

// Custom ultra-crisp vector icons matching Google Gmail, Phone, and Google Maps Pin
function GmailIcon({ className = "w-7 h-7" }: { className?: string }) {
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

function PhoneGreenIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" fill="#25D366"/>
      <path fill="#FFFFFF" d="M32.5,30.3c-1.3-0.7-2.6-1.3-3.9-0.5c-0.8,0.5-1.5,1.2-2.3,1.7c-0.4,0.3-0.9,0.2-1.3-0.1 c-2.1-1.3-3.9-3-5.2-5.1c-0.3-0.4-0.3-0.9,0.1-1.3c0.5-0.7,1.2-1.4,1.7-2.2c0.8-1.3,0.2-2.6-0.5-3.9c-0.7-1.3-1.4-2.6-2.1-3.9 c-0.7-1.2-2.1-1.5-3.3-0.8c-1.1,0.6-2.1,1.5-2.7,2.6c-1,1.8-0.9,3.7-0.3,5.6c1.3,4.2,3.8,7.8,7.1,10.6c3.4,2.9,7.3,4.8,11.7,5.4 c1.8,0.2,3.6,0,5.2-0.9c1.1-0.6,2-1.6,2.6-2.7C34,32.4,33.7,31,32.5,30.3z"/>
    </svg>
  );
}

function LocationPinIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M128,0 C57.3,0 0,57.3 0,128 C0,154.5 8,179 21.6,199.3 L128,128 Z"/>
      <path fill="#4285F4" d="M128,0 L128,128 L234.4,199.3 C248,179 256,154.5 256,128 C256,57.3 198.7,0 128,0 Z"/>
      <path fill="#FBBC04" d="M21.6,199.3 C44,232.5 83,287.5 128,365.7 L128,128 Z"/>
      <path fill="#34A853" d="M128,365.7 C173,287.5 212,232.5 234.4,199.3 L128,128 Z"/>
      <circle cx="128" cy="128" r="54" fill="#FFFFFF"/>
    </svg>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 transition-colors duration-300">
      <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight text-foreground mb-3"
          >
            Contact our sales & engineering team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[15px] text-foreground/60 leading-relaxed font-normal"
          >
            Have questions about GlamAR.ai integrations, enterprise pricing, or custom AI models? Schedule a direct 1-on-1 call with our specialist below.
          </motion.p>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 — Email (Gmail) */}
          <div className="bg-white dark:bg-card border border-foreground/10 rounded-2xl p-6 shadow-xs flex items-center gap-4 hover:border-primary/40 transition-colors group">
            <div className="shrink-0 group-hover:scale-105 transition-transform">
              <GmailIcon className="w-9 h-9" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground/40 tracking-wider uppercase mb-1">EMAIL US</p>
              <a href="mailto:support@glamar.ai" className="text-base font-bold text-foreground hover:text-primary transition-colors block">
                support@glamar.ai
              </a>
              <p className="text-xs text-foreground/50 mt-1">24/7 Response Time SLA</p>
            </div>
          </div>

          {/* Card 2 — Phone */}
          <div className="bg-white dark:bg-card border border-foreground/10 rounded-2xl p-6 shadow-xs flex items-center gap-4 hover:border-primary/40 transition-colors group">
            <div className="shrink-0 group-hover:scale-105 transition-transform">
              <PhoneGreenIcon className="w-9 h-9" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground/40 tracking-wider uppercase mb-1">DIRECT SALES</p>
              <p className="text-base font-bold text-foreground">+1404.579.2441</p>
              <p className="text-xs text-foreground/50 mt-1">Mon–Fri: 9am–6pm EST</p>
            </div>
          </div>

          {/* Card 3 — Location */}
          <div className="bg-white dark:bg-card border border-foreground/10 rounded-2xl p-6 shadow-xs flex items-center gap-4 hover:border-primary/40 transition-colors group">
            <div className="shrink-0 group-hover:scale-105 transition-transform">
              <LocationPinIcon className="w-8 h-10" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground/40 tracking-wider uppercase mb-1">HEADQUARTERS</p>
              <p className="text-base font-bold text-foreground">San Francisco, CA</p>
              <p className="text-xs text-foreground/50 mt-1">Serving clients globally</p>
            </div>
          </div>
        </div>

        {/* The Main Schedule a Call Component */}
        <div className="my-12">
          <ScheduleCall />
        </div>
      </div>
    </div>
  );
}
