import React from 'react';

interface Html5LogoProps {
  className?: string;
}

export function Html5Logo({ className = "w-6 h-6" }: Html5LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.9.001.687 8.054h8.991l-.356 3.926-3.003.81-3.011-.812-.194-2.18h-2.64l.36 4.47 5.485 1.515 5.474-1.515.758-8.931H8.531z"
        fill="currentColor"
      />
    </svg>
  );
}
