
import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('button, a, .hover-panel, [role="button"]') ||
        target.closest('button, a, .hover-panel, [role="button"]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('button, a, .hover-panel, [role="button"]') ||
        target.closest('button, a, .hover-panel, [role="button"]')
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-200 ${
        isHovering ? 'w-8 h-8' : 'w-5 h-5'
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
          isHovering
            ? 'border-accent bg-accent/20 shadow-lg animate-pulse'
            : 'border-primary bg-primary/20'
        }`}
        style={{
          boxShadow: isHovering
            ? '0 0 20px hsl(var(--accent) / 0.6)'
            : '0 0 10px hsl(var(--primary) / 0.4)',
        }}
      />
      {isHovering && (
        <div
          className="absolute inset-0 rounded-full border border-accent/50 animate-ping"
          style={{
            animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          }}
        />
      )}
    </div>
  );
};
