import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';
import { Button } from './ui/button';
import { preloadMap } from '../routes';

const navItems = [
  { name: 'HOME', to: '/', preloadKey: null },
  { name: 'BLOGS', to: '/blogs', preloadKey: 'blogs' as const },
  { name: 'PRICING', to: '/pricing', preloadKey: 'pricing' as const },
  { name: 'REFERRAL', to: '/referral', preloadKey: 'referral' as const },
  { name: 'CONTACT', to: '/contact', preloadKey: 'contact' as const },
];

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handlePreload = (key: keyof typeof preloadMap | null) => {
    if (key && preloadMap[key]) {
      preloadMap[key]();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-foreground/8 transform-gpu touch-manipulation">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between relative">
        {/* Left — Logo */}
        <Link to="/" className="shrink-0 flex items-center touch-manipulation">
          <span className="text-base font-black tracking-tighter font-display italic">GLAMAR.AI</span>
        </Link>

        {/* Center — Nav Links (absolute centered) */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item, i) => {
            const isActive = item.to ? location.pathname === item.to : false;
            return item.to ? (
              <Link
                key={item.name + i}
                to={item.to}
                onMouseEnter={() => handlePreload(item.preloadKey)}
                onTouchStart={() => handlePreload(item.preloadKey)}
                className={`text-[11px] font-bold tracking-[0.18em] text-foreground transition-all hover:underline underline-offset-[6px] decoration-primary touch-manipulation cursor-pointer ${
                  isActive
                    ? 'underline underline-offset-[6px] decoration-primary font-black'
                    : 'text-foreground/75 hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ) : null;
          })}
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hidden sm:flex w-8 h-8 rounded-full border border-foreground/30 items-center justify-center hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all text-foreground cursor-pointer touch-manipulation"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button
            onClick={() => navigate('/pricing')}
            className="hidden sm:inline-flex items-center text-[11px] font-bold tracking-[0.12em] px-4 h-8 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all touch-manipulation cursor-pointer"
          >
            SIGN IN
          </button>

          <button
            onClick={() => navigate('/pricing')}
            onMouseEnter={() => handlePreload('pricing')}
            onTouchStart={() => handlePreload('pricing')}
            className="rounded-full px-5 h-8 text-[11px] font-bold tracking-[0.1em] bg-primary text-black hover:bg-primary/90 transition-all shadow-sm border border-primary cursor-pointer touch-manipulation"
          >
            GET STARTED
          </button>

          <button className="lg:hidden text-foreground ml-1 touch-manipulation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-foreground/8 bg-background/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5"
        >
          {navItems.map((item, i) => (
            <Link
              key={item.name + i}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              onTouchStart={() => handlePreload(item.preloadKey)}
              className="text-[11px] font-bold tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors touch-manipulation"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-foreground/8 flex flex-col gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full h-9 rounded-full border border-foreground/20 flex items-center justify-center gap-2 text-xs font-bold text-foreground hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors touch-manipulation"
            >
              {isDarkMode ? <><Sun size={14} /> Switch to Light Mode</> : <><Moon size={14} /> Switch to Dark Mode</>}
            </button>
            <Button variant="outline" className="w-full rounded-full border-foreground/15 text-sm font-bold touch-manipulation">SIGN IN</Button>
            <Button onClick={() => { setIsMenuOpen(false); navigate('/pricing'); }} className="w-full rounded-full bg-primary text-black text-sm font-bold touch-manipulation">GET STARTED</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
