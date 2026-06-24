'use client';

import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  accentColor?: string;
}

export default function AnimatedBorder({
  children,
  delay = 0,
  className = '',
  accentColor,
}: AnimatedBorderProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const borderColor = accentColor
    ? `${accentColor}30`
    : 'rgba(255,255,255,0.1)';

  // Clockwise line-drawing: Top → Right → Bottom → Left
  const topLine = useSpring({
    width: visible ? '100%' : '0%',
    config: { tension: 120, friction: 30 },
    delay: delay,
  });

  const rightLine = useSpring({
    height: visible ? '100%' : '0%',
    config: { tension: 120, friction: 30 },
    delay: delay + 250,
  });

  const bottomLine = useSpring({
    width: visible ? '100%' : '0%',
    config: { tension: 120, friction: 30 },
    delay: delay + 500,
  });

  const leftLine = useSpring({
    height: visible ? '100%' : '0%',
    config: { tension: 120, friction: 30 },
    delay: delay + 750,
  });

  return (
    <div className={`relative ${className}`}>
      {/* Top edge — draws left to right */}
      <animated.div
        style={{ width: topLine.width, backgroundColor: borderColor }}
        className="absolute top-0 left-0 h-px"
      />
      {/* Right edge — draws top to bottom */}
      <animated.div
        style={{ height: rightLine.height, backgroundColor: borderColor }}
        className="absolute top-0 right-0 w-px"
      />
      {/* Bottom edge — draws right to left */}
      <animated.div
        style={{ width: bottomLine.width, backgroundColor: borderColor }}
        className="absolute bottom-0 right-0 h-px"
      />
      {/* Left edge — draws bottom to top */}
      <animated.div
        style={{ height: leftLine.height, backgroundColor: borderColor }}
        className="absolute bottom-0 left-0 w-px"
      />
      {children}
    </div>
  );
}
