
import { useEffect, useState, useCallback } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.matches('button, a, .hover-panel, .sci-fi-button, [role="button"]') ||
      target.closest('button, a, .hover-panel, .sci-fi-button, [role="button"]')
    ) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.matches('button, a, .hover-panel, .sci-fi-button, [role="button"]') ||
      target.closest('button, a, .hover-panel, .sci-fi-button, [role="button"]')
    ) {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [updatePosition, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-150 ease-out ${
        isHovering ? 'w-8 h-8' : 'w-5 h-5'
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
      }}
    >
      <div
        className={`w-full h-full rounded-full border-2 transition-all duration-150 ease-out ${
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
          className="absolute inset-0 rounded-full border border-accent/50"
          style={{
            animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          }}
        />
      )}
    </div>
  );
};
