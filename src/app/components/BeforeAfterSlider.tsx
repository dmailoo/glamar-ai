import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Props {
  leftImage: string;
  rightImage: string;
  leftLabel?: string;
  rightLabel?: string;
  objectPosition?: string;
  leftObjectPosition?: string;
  rightObjectPosition?: string;
}

export function BeforeAfterSlider({
  leftImage,
  rightImage,
  leftLabel = 'Before',
  rightLabel = 'After',
  objectPosition,
  leftObjectPosition,
  rightObjectPosition,
}: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const clamp = (v: number) => Math.min(100, Math.max(0, v));

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPos(clamp(((clientX - left) / width) * 100));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePos(e.clientX); };
    const onUp = () => { dragging.current = false; };
    const onTouch = (e: TouchEvent) => { if (dragging.current) updatePos(e.touches[0].clientX); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onUp);
    };
  }, [updatePos]);

  const finalRightPosition = rightObjectPosition || objectPosition || 'center top';
  const finalLeftPosition = leftObjectPosition || objectPosition || 'center top';

  const leftOpacity = Math.min(1, Math.max(0, (pos - 15) / 20));
  const rightOpacity = Math.min(1, Math.max(0, (85 - pos) / 20));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden bg-[#F2F2F4] dark:bg-[#18181B] cursor-ew-resize"
      style={{ WebkitUserSelect: 'none' }}
    >
      {/* Right image — AI Try-On result */}
      <img
        src={rightImage}
        alt="AI Try-On Result"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover block"
        style={{
          objectPosition: finalRightPosition,
          WebkitUserDrag: 'none',
        }}
      />

      {/* Left image — Selected Dress (Clipped using native CSS clipPath for 100% Safari WebKit compatibility) */}
      <img
        src={leftImage}
        alt="Selected Dress"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover block z-10"
        style={{
          objectPosition: finalLeftPosition,
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - pos}% 0 0)`,
          WebkitUserDrag: 'none',
        }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none z-20"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 touch-none"
        style={{ left: `${pos}%` }}
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); e.preventDefault(); }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.3)] flex items-center justify-center gap-0 cursor-ew-resize hover:scale-110 transition-transform border border-white/80 shrink-0">
          <ChevronLeft className="w-3.5 h-3.5 text-black/60 shrink-0" strokeWidth={2.5} />
          <ChevronRight className="w-3.5 h-3.5 text-black/60 shrink-0" strokeWidth={2.5} />
        </div>
      </div>

      {/* Left label (Before) */}
      {leftLabel && leftOpacity > 0 && (
        <div
          className="absolute bottom-3 left-3 pointer-events-none z-20 transition-opacity duration-200"
          style={{ opacity: leftOpacity }}
        >
          <span className="bg-black/75 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm border border-white/20 backdrop-blur-md" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
            {leftLabel}
          </span>
        </div>
      )}

      {/* Right AI Generated badge */}
      {rightOpacity > 0 && (
        <div
          className="absolute top-3 right-3 pointer-events-none z-20 transition-opacity duration-200"
          style={{ opacity: rightOpacity }}
        >
          <div className="flex items-center gap-1 bg-primary text-black rounded-full px-2.5 py-1 shadow-md">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span className="text-[10px] font-bold">AI Generated</span>
          </div>
        </div>
      )}

      {/* Right label (After) */}
      {rightLabel && rightOpacity > 0 && (
        <div
          className="absolute bottom-3 right-3 pointer-events-none z-20 transition-opacity duration-200"
          style={{ opacity: rightOpacity }}
        >
          <span className="bg-black/75 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm border border-white/20 backdrop-blur-md" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
            {rightLabel}
          </span>
        </div>
      )}
    </div>
  );
}
