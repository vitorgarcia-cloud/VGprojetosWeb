import { useEffect, useRef } from 'react';
import './ParticleCanvas.css';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const ctx = cv.getContext('2d');
    let animationFrameId;
    let pts = [];
    const mouse = { x: null, y: null, active: false };

    const medir = () => {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      
      // Quantidade proporcional à área da tela
      const qtd = Math.min(85, Math.max(35, Math.round((cv.width * cv.height) / 14000)));
      pts = [];
      for (let i = 0; i < qtd; i++) {
        pts.push({
          x: Math.random() * cv.width,
          y: Math.random() * cv.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 1.6 + Math.random() * 0.4
        });
      }
    };

    medir();

    const handleResize = () => {
      medir();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const connectDistance = 110;

    const render = () => {
      ctx.clearRect(0, 0, cv.width, cv.height);

      // Atualizar e desenhar pontos
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > cv.width) p.vx *= -1;
        if (p.y < 0 || p.y > cv.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Conexões entre partículas
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);

          if (d < connectDistance) {
            const alpha = 0.25 * (1 - d / connectDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }

        // Conexão com o cursor do mouse
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dMouse = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
          if (dMouse < connectDistance * 1.2) {
            const alphaMouse = 0.35 * (1 - dMouse / (connectDistance * 1.2));
            ctx.strokeStyle = `rgba(255, 255, 255, ${alphaMouse})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas-overlay" />;
}
