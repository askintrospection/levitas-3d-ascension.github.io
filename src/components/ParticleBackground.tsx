
import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'dust' | 'spark' | 'ember';
      life: number;
      maxLife: number;
    }> = [];

    // Star Wars inspired colors
    const dustColors = ['#888888', '#666666', '#999999'];
    const sparkColors = ['#1e40af', '#3b82f6', '#60a5fa'];
    const emberColors = ['#dc2626', '#ef4444', '#f87171'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (type: 'dust' | 'spark' | 'ember' = 'dust') => {
      const colors = type === 'dust' ? dustColors : type === 'spark' ? sparkColors : emberColors;
      
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        vx: (Math.random() - 0.5) * (type === 'dust' ? 0.5 : 1.5),
        vy: -Math.random() * (type === 'dust' ? 1.5 : 3) - 0.5,
        size: type === 'dust' ? Math.random() * 2 + 0.5 : Math.random() * 3 + 1,
        opacity: type === 'dust' ? Math.random() * 0.4 + 0.2 : Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        life: 0,
        maxLife: type === 'dust' ? 300 + Math.random() * 200 : 150 + Math.random() * 100
      };
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 21, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new particles with different probabilities
      if (Math.random() < 0.15) {
        particles.push(createParticle('dust'));
      }
      if (Math.random() < 0.05) {
        particles.push(createParticle('spark'));
      }
      if (Math.random() < 0.02) {
        particles.push(createParticle('ember'));
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Fade out over lifetime
        const lifeFactor = 1 - (particle.life / particle.maxLife);
        particle.opacity = particle.opacity * lifeFactor;

        // Add some drift for atmosphere
        if (particle.type === 'dust') {
          particle.vx += (Math.random() - 0.5) * 0.01;
          particle.vy += Math.sin(particle.life * 0.01) * 0.02;
        }

        if (particle.life >= particle.maxLife || particle.opacity <= 0 || particle.y < -20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'dust') {
          // Simple dust particles
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Glowing sparks and embers
          ctx.shadowBlur = particle.size * 4;
          ctx.shadowColor = particle.color;
          ctx.fillStyle = particle.color;
          
          if (particle.type === 'spark') {
            // Diamond shape for sparks
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y - particle.size);
            ctx.lineTo(particle.x + particle.size, particle.y);
            ctx.lineTo(particle.x, particle.y + particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y);
            ctx.closePath();
            ctx.fill();
          } else {
            // Circular embers with inner glow
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Inner bright core
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#ffffff';
            ctx.globalAlpha = particle.opacity * 0.5;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        ctx.restore();
      }

      // Add occasional lens flares
      if (Math.random() < 0.001) {
        const flareX = Math.random() * canvas.width;
        const flareY = Math.random() * canvas.height * 0.3;
        
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.shadowBlur = 50;
        ctx.shadowColor = '#1e40af';
        ctx.fillStyle = '#1e40af';
        ctx.beginPath();
        ctx.arc(flareX, flareY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
