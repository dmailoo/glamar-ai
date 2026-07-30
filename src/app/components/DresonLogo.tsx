import React from 'react';
import imgDresonLight from '../../imports/dreson-logo-light.png';
import imgDresonDark from '../../imports/dreson-logo-dark.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DresonLogoProps {
  className?: string;
  textColor?: string;
  forceMode?: 'light' | 'dark';
}

export function DresonLogo({ className = "h-7", forceMode }: DresonLogoProps) {
  if (forceMode === 'light') {
    return (
      <ImageWithFallback
        src={imgDresonLight}
        alt="Dreson"
        className={`w-auto object-contain shrink-0 ${className}`}
      />
    );
  }

  if (forceMode === 'dark') {
    return (
      <ImageWithFallback
        src={imgDresonDark}
        alt="Dreson"
        className={`w-auto object-contain shrink-0 ${className}`}
      />
    );
  }

  return (
    <div className="inline-flex items-center shrink-0">
      <ImageWithFallback
        src={imgDresonLight}
        alt="Dreson"
        className={`w-auto object-contain shrink-0 dark:hidden block ${className}`}
      />
      <ImageWithFallback
        src={imgDresonDark}
        alt="Dreson"
        className={`w-auto object-contain shrink-0 dark:block hidden ${className}`}
      />
    </div>
  );
}
