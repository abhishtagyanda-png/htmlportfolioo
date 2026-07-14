import { useEffect, useRef } from 'react';

/**
 * CinematicStarfield
 *
 * A high-performance HTML Canvas starfield inspired by NASA/Apple aesthetics.
 * - Hundreds of tiny stars with subtle blue/white color variation
 * - Asynchronous slow twinkling via opacity animation
 * - Gentle parallax drift across multiple layers
 * - Rare soft blue pulse on 1–2 stars every 8–12 seconds
 * - 60 FPS, lightweight, fully responsive
 */

const LAYERS = [
  { count: 280, speedX: 0.008, speedY: 0.004, minSize: 0.4, maxSize: 1.0, minAlpha: 0.3, maxAlpha: 0.85 },
  { count: 150, speedX: 0.015, speedY: 0.008, minSize: 0.6, maxSize: 1.4, minAlpha: 0.4, maxAlpha: 0.95 },
  { count: 60,  speedX: 0.025, speedY: 0.012, minSize: 1.0, maxSize: 2.0, minAlpha: 0.5, maxAlpha: 1.0  },
];

const STAR_COLORS = [
  'rgba(255,255,255,',   // pure white
  'rgba(220,230,255,',   // icy blue-white
  'rgba(200,215,255,',   // soft blue
  'rgba(240,245,255,',   // near white with hint of blue
  'rgba(180,205,255,',   // deeper blue
];

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function createStars(layer, W, H) {
  return Array.from({ length: layer.count }, () => {
    const colorBase = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    const baseAlpha = rand(layer.minAlpha, layer.maxAlpha);
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      size: rand(layer.minSize, layer.maxSize),
      colorBase,
      baseAlpha,
      alpha: baseAlpha,
      // Twinkling
      twinkleSpeed: rand(0.003, 0.012),
      twinkleOffset: Math.random() * Math.PI * 2,
      // Drift
      speedX: layer.speedX * (Math.random() > 0.5 ? 1 : -1) * rand(0.5, 1.5),
      speedY: layer.speedY * rand(0.5, 1.5),
    };
  });
}

const CinematicStarfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    let stars = [];
    let animId;
    let t = 0;

    // Pulse state: one star per layer 0 gets a rare blue pulse
    let pulseTimer = rand(8000, 12000); // ms until next pulse
    let pulseTarget = null;
    let pulseAlpha = 0;
    let pulsePhase = 'idle'; // idle | in | hold | out

    function init() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      stars = LAYERS.map(layer => createStars(layer, W, H));
    }

    function drawBackground() {
      // Deep space gradient base
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0,   '#060c1a');
      grad.addColorStop(0.4, '#050a16');
      grad.addColorStop(0.7, '#040810');
      grad.addColorStop(1,   '#03060d');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    function drawStars(dt) {
      t += dt;
      // Update pulse timer
      pulseTimer -= dt * 1000;
      if (pulseTimer <= 0 && pulsePhase === 'idle') {
        // Pick a random star from layer 1 (medium layer) to pulse
        const layerStars = stars[1];
        pulseTarget = layerStars[Math.floor(Math.random() * layerStars.length)];
        pulsePhase = 'in';
        pulseAlpha = 0;
        pulseTimer = rand(8000, 12000);
      }

      stars.forEach((layerStars) => {
        layerStars.forEach(s => {
          // Twinkling — smooth sine wave on alpha
          s.alpha = s.baseAlpha * (0.6 + 0.4 * Math.sin(t * s.twinkleSpeed * 60 + s.twinkleOffset));

          // Gentle drift — wrap around edges
          s.x += s.speedX;
          s.y += s.speedY;
          if (s.x > W + 2) s.x = -2;
          if (s.x < -2) s.x = W + 2;
          if (s.y > H + 2) s.y = -2;
          if (s.y < -2) s.y = H + 2;

          // Draw star
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = s.colorBase + s.alpha + ')';
          ctx.fill();
        });
      });

      // Draw rare pulse on target star
      if (pulseTarget && pulsePhase !== 'idle') {
        const ps = pulseTarget;

        if (pulsePhase === 'in') {
          pulseAlpha += dt * 0.4;
          if (pulseAlpha >= 1) { pulseAlpha = 1; pulsePhase = 'hold'; }
        } else if (pulsePhase === 'hold') {
          pulseAlpha = 1;
          // hold for ~0.6s, we'll track with a sub-timer
          if (!ps._holdTimer) ps._holdTimer = 0;
          ps._holdTimer += dt;
          if (ps._holdTimer > 0.6) { pulsePhase = 'out'; ps._holdTimer = 0; }
        } else if (pulsePhase === 'out') {
          pulseAlpha -= dt * 0.25;
          if (pulseAlpha <= 0) { pulseAlpha = 0; pulsePhase = 'idle'; pulseTarget = null; }
        }

        if (pulseAlpha > 0) {
          const glowRadius = ps.size * 6 * pulseAlpha;
          const grd = ctx.createRadialGradient(ps.x, ps.y, 0, ps.x, ps.y, glowRadius);
          grd.addColorStop(0,   `rgba(150,190,255,${0.18 * pulseAlpha})`);
          grd.addColorStop(0.5, `rgba(100,160,255,${0.08 * pulseAlpha})`);
          grd.addColorStop(1,   'rgba(80,140,255,0)');
          ctx.beginPath();
          ctx.arc(ps.x, ps.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      }
    }

    let lastTime = 0;
    function loop(ts) {
      const dt = Math.min((ts - lastTime) / 1000, 0.05); // cap at 50ms
      lastTime = ts;
      drawBackground();
      drawStars(dt);
      animId = requestAnimationFrame(loop);
    }

    init();
    animId = requestAnimationFrame(loop);

    const onResize = () => {
      init();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
};

export default CinematicStarfield;
