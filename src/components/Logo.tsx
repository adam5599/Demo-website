import React from 'react';

interface LogoProps {
  isDarkMode?: boolean;
  isArabic?: boolean;
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

export default function Logo({ isDarkMode = false, isArabic = true, className = '', layout = 'horizontal' }: LogoProps) {
  // Brand colors matching the uploaded logo exactly
  const orangeColor = '#D77035'; // Accurate earthy orange
  const tealColor = '#174A4B';   // Accurate deep teal
  const grayColor = '#B5BCBF';   // Soft gray

  // Subtle glow filter to preserve exact native brand colors on dark backgrounds
  const darkGlowStyle = isDarkMode 
    ? { filter: 'drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.9))' } 
    : {};

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        {/* House Icon SVG */}
        <svg viewBox="0 0 140 60" className="h-11 md:h-12 w-auto flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orange Chimney Tab */}
          <rect x="91" y="8" width="10.5" height="7" rx="1" fill={orangeColor} />
          
          {/* Dark Teal Roof (slanted parallelogram) */}
          <polygon 
            points="55,15 130,15 110,45 35,45" 
            fill="none" 
            stroke={tealColor} 
            strokeWidth="4.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={darkGlowStyle}
          />
          
          {/* Light Grey Side Gable Triangle */}
          <polygon 
            points="12,45 33,15 35,45" 
            fill="none" 
            stroke={grayColor} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Small 2x2 Square Windows */}
          <g style={darkGlowStyle}>
            <rect x="22" y="30" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
            <rect x="28.5" y="30" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
            <rect x="22" y="36.5" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
            <rect x="28.5" y="36.5" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
          </g>
        </svg>

        {/* Text Stack */}
        <div className="flex flex-col items-start gap-0.5">
          <span 
            className="text-xl md:text-2xl font-black tracking-wide leading-none font-sans" 
            style={{ color: orangeColor }}
          >
            الزاوية
          </span>
          {/* Custom geometric ALZAWIA lettering */}
          <svg viewBox="0 0 125 18" className="h-3 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" style={darkGlowStyle}>
            <g stroke={tealColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              {/* A */}
              <path d="M 5,16 L 11,1 L 17,16 Z" />
              {/* L */}
              <path d="M 23,1 L 23,16 L 33,16" />
              {/* Z */}
              <path d="M 39,1 L 49,1 L 39,16 L 49,16" />
              {/* A */}
              <path d="M 55,16 L 61,1 L 67,16 Z" />
              {/* W */}
              <path d="M 73,1 L 76.5,16 L 80.5,5 L 84.5,16 L 88,1" />
              {/* I */}
              <path d="M 94,1 L 94,16" />
              {/* A */}
              <path d="M 100,16 L 106,1 L 112,16 Z" />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // Vertical layout - Exact unified brand asset block from the uploaded image
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      <svg viewBox="0 0 150 135" className="w-28 md:w-32 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House Icon */}
        <g transform="translate(5, 5)">
          {/* Orange Chimney Tab */}
          <rect x="91" y="8" width="10.5" height="7" rx="1" fill={orangeColor} />
          
          {/* Dark Teal Roof (slanted parallelogram) */}
          <polygon 
            points="55,15 130,15 110,45 35,45" 
            fill="none" 
            stroke={tealColor} 
            strokeWidth="4.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={darkGlowStyle}
          />
          
          {/* Light Grey Side Gable Triangle */}
          <polygon 
            points="12,45 33,15 35,45" 
            fill="none" 
            stroke={grayColor} 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Small 2x2 Square Windows */}
          <g style={darkGlowStyle}>
            <rect x="22" y="30" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
            <rect x="28.5" y="30" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
            <rect x="22" y="36.5" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
            <rect x="28.5" y="36.5" width="4.5" height="4.5" rx="0.5" stroke={tealColor} strokeWidth="1" fill="none" />
          </g>
        </g>

        {/* Arabic text styled inside SVG with Cairo font fallback */}
        <text 
          x="75" 
          y="88" 
          textAnchor="middle" 
          fill={orangeColor} 
          fontFamily="'Cairo', 'Tajawal', system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="24"
        >
          الزاوية
        </text>

        {/* English geometric letters with exact style */}
        <g stroke={tealColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" transform="translate(19, 102)" style={darkGlowStyle}>
          {/* A */}
          <path d="M 5,15 L 11,0 L 17,15 Z" />
          {/* L */}
          <path d="M 23,0 L 23,15 L 33,15" />
          {/* Z */}
          <path d="M 39,0 L 49,0 L 39,15 L 49,15" />
          {/* A */}
          <path d="M 55,15 L 61,0 L 67,15 Z" />
          {/* W */}
          <path d="M 73,0 L 76.5,15 L 80.5,5 L 84.5,15 L 88,0" />
          {/* I */}
          <path d="M 94,0 L 94,15" />
          {/* A */}
          <path d="M 100,15 L 106,0 L 112,15 Z" />
        </g>
      </svg>
    </div>
  );
}
