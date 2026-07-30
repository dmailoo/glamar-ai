import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

const FEATURED_POST = {
  id: 'featured-1',
  slug: 'online-clothes-shopping-gamble',
  title: 'Why Online Clothes Shopping Still Feels Like a Gamble',
  tags: ['Guides', 'AI & E-Commerce'],
  date: 'June 9, 2026',
  readTime: '7 min read',
  image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1400',
  excerpt:
    'Online shopping has changed how we buy clothes, but one major problem remains. Here is how AI virtual try-on is eliminating returns and purchase anxiety.',
};

const POSTS = [
  {
    id: 2,
    slug: 'why-fashion-brands-are-adopting-ai-virtual-try-on',
    title: 'Why Fashion Brands Are Adopting AI Virtual Try-On',
    category: 'AI & E-Commerce',
    date: 'May 28, 2026',
    readTime: '5 min read',
    excerpt:
      'How AI Virtual Try-On boosts conversion rates, reduces product returns, and creates interactive shopping experiences for modern e-commerce stores.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    slug: 'why-customers-return-clothes-bought-online',
    title: 'Why Customers Return Clothes Bought Online',
    category: 'Consumer Insights',
    date: 'May 14, 2026',
    readTime: '4 min read',
    excerpt:
      'Understanding the root causes of e-commerce returns and how AI fitting technology helps shoppers buy with confidence.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    slug: 'how-ai-virtual-try-on-delivers-real-roi-for-fashion-brands',
    title: 'How AI Virtual Try-On Delivers Real ROI for Fashion Brands',
    category: 'Growth & Analytics',
    date: 'April 30, 2026',
    readTime: '6 min read',
    excerpt:
      'Data-backed analysis showing how virtual fitting rooms increase conversion rates, reduce 40% return rates, and boost margins.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
  },
];

export function BlogsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 pt-32 pb-32 transition-colors duration-300 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        {/* Header — Exact Cluely reference matching */}
        <header className="text-center max-w-xl mx-auto mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(48px,6vw,72px)] font-semibold tracking-[-0.03em] leading-[1.05] text-neutral-950 dark:text-white mb-4"
          >
            Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-[17px] md:text-[18px] text-neutral-600 dark:text-neutral-400 font-normal leading-[1.6]"
          >
            Learn more about GlamAR.ai, get product updates, and learn about our approach to virtual try-on commerce.
          </motion.p>
        </header>

        {/* Featured Hero Card — Pixel-perfect Cluely replica */}
        <Link to={`/blogs/${FEATURED_POST.slug}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[32px] md:rounded-[36px] overflow-hidden min-h-[460px] md:min-h-[520px] shadow-2xl flex flex-col justify-between p-8 md:p-12 mb-16 cursor-pointer bg-neutral-950 border border-neutral-800"
          >
            {/* Background Image with Dark Vignette & Blur */}
            <div className="absolute inset-0 z-0">
              <img
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            </div>

            {/* Large Watermark Text Background matching screenshot */}
            <div className="absolute bottom-4 right-6 md:right-12 z-0 pointer-events-none select-none text-[clamp(80px,18vw,210px)] font-bold text-white/10 tracking-tighter leading-none font-sans">
              GlamAR
            </div>

            {/* Top Badges & Meta */}
            <div className="relative z-10 flex flex-wrap items-center gap-3">
              {FEATURED_POST.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 rounded-full text-xs font-semibold bg-neutral-800/80 text-white backdrop-blur-md border border-neutral-700/60 shadow-xs"
                >
                  {tag}
                </span>
              ))}

              <span className="text-xs text-neutral-300 font-medium ml-2">
                {FEATURED_POST.date}
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                {FEATURED_POST.readTime}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 max-w-2xl pt-16">
              <h2 className="text-[clamp(26px,3.8vw,42px)] font-bold tracking-[-0.02em] leading-[1.15] text-white mb-8 group-hover:text-primary transition-colors">
                {FEATURED_POST.title}
              </h2>

              {/* White Pill CTA Button — Exact match */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm shadow-xl group-hover:bg-primary group-hover:text-black transition-all">
                <span>Read Full Article</span>
                <ChevronRight size={16} />
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Subsequent Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <Link key={post.id} to={`/blogs/${post.slug}`} className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="group flex-1 flex flex-col justify-between rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-2xs hover:shadow-lg cursor-pointer"
              >
                <div>
                  <div className="rounded-2xl overflow-hidden h-48 mb-5 relative bg-neutral-200 dark:bg-neutral-800">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full text-[11px] font-semibold bg-black/70 text-white backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-primary transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white">
                  <span>Read Story</span>
                  <ArrowUpRight size={14} className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
