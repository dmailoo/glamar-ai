import React from 'react';
import Group from '../../imports/Group1/index';
import videoHero from '../../imports/IMG_8893.mp4';
import webpHero from '../../imports/IMG_8893.webp';

export function HeroMockup() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / 1280);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const W = 1280;
  const H = 840;

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1100px] mx-auto overflow-hidden rounded-[24px] border border-foreground/10 shadow-2xl relative"
      style={{ height: H * scale }}
    >
      {/* macOS frame at native size, scaled down */}
      <div
        style={{
          width: W,
          height: H,
          WebkitTransform: `scale(${scale}) translateZ(0)`,
          transform: `scale(${scale}) translateZ(0)`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: 0,
          left: 0,
          willChange: 'transform',
        }}
      >
        {/* macOS Ventura Wallpaper & Dock with App Icons */}
        <Group />

        {/* Floating macOS Browser Window over Ventura Desktop */}
        <div
          style={{
            position: 'absolute',
            top: '3.5%',
            left: '9%',
            width: '82%',
            height: '79%',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 32px 90px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.12)',
            backgroundColor: '#0A0A0C',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* macOS Chrome Titlebar */}
          <div
            style={{
              height: 38,
              backgroundColor: '#18181C',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 14,
              paddingRight: 14,
              justify: 'space-between',
              gap: 12,
              flexShrink: 0,
            }}
          >
            {/* macOS Red Yellow Green Window Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FF5F56', border: '1px solid rgba(0,0,0,0.2)' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FFBD2E', border: '1px solid rgba(0,0,0,0.2)' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#27C93F', border: '1px solid rgba(0,0,0,0.2)' }} />
            </div>

            {/* Address Bar */}
            <div
              style={{
                flex: 1,
                maxWidth: 420,
                height: 24,
                margin: '0 auto',
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                fontSize: 11,
                fontWeight: 500,
                fontFamily: 'sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              🔒 glamar.ai/try-on-demo
            </div>
          </div>

          {/* Hardware-accelerated 60fps Video Demo Viewport */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative', backgroundColor: '#000000' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              disablePictureInPicture
              poster={webpHero}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                transform: 'translateZ(0)',
                willChange: 'transform',
              }}
            >
              <source src={videoHero} type="video/mp4" />
              <img src={webpHero} alt="GlamAR Virtual Try-On Demo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
