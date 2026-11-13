"use client";

import { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

function rotatePoint(p: Point3D, rx: number, ry: number, rz: number): Point3D {
  // Rotate X
  const y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
  const z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);
  // Rotate Y
  const x2 = p.x * Math.cos(ry) + z1 * Math.sin(ry);
  const z2 = -p.x * Math.sin(ry) + z1 * Math.cos(ry);
  // Rotate Z
  const x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
  const y3 = x2 * Math.sin(rz) + y1 * Math.cos(rz);
  return { x: x3, y: y3, z: z2 };
}

function makeCube(size: number, offset: Point3D = { x: 0, y: 0, z: 0 }) {
  const s = size / 2;
  const vertices: Point3D[] = [
    { x: -s + offset.x, y: -s + offset.y, z: -s + offset.z },
    { x: s + offset.x, y: -s + offset.y, z: -s + offset.z },
    { x: s + offset.x, y: s + offset.y, z: -s + offset.z },
    { x: -s + offset.x, y: s + offset.y, z: -s + offset.z },
    { x: -s + offset.x, y: -s + offset.y, z: s + offset.z },
    { x: s + offset.x, y: -s + offset.y, z: s + offset.z },
    { x: s + offset.x, y: s + offset.y, z: s + offset.z },
    { x: -s + offset.x, y: s + offset.y, z: s + offset.z },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  return { vertices, edges };
}

function makeOctahedron(radius: number) {
  const vertices: Point3D[] = [
    { x: 0, y: radius, z: 0 },
    { x: 0, y: -radius, z: 0 },
    { x: radius, y: 0, z: 0 },
    { x: -radius, y: 0, z: 0 },
    { x: 0, y: 0, z: radius },
    { x: 0, y: 0, z: -radius },
  ];
  const edges: [number, number][] = [
    [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [1, 3], [1, 4], [1, 5],
    [2, 4], [4, 3], [3, 5], [5, 2],
  ];
  return { vertices, edges };
}

export function HeroWireframeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animId = 0;
    let angleY = 0.6;
    let angleX = 0.4;
    let pointerX = 0;
    let pointerY = 0;

    const outerCube = makeCube(2.1);
    const innerCube = makeCube(1.05);
    const crystal = makeOctahedron(1.55);
    const satA = makeCube(0.42, { x: 1.85, y: -1.1, z: 0.6 });
    const satB = makeCube(0.34, { x: -1.75, y: 1.15, z: -0.5 });

    const drawShape = (
      shape: { vertices: Point3D[]; edges: [number, number][] },
      rx: number,
      ry: number,
      rz: number,
      stroke: string,
      lineWidth: number,
      cx: number,
      cy: number,
      scale: number
    ) => {
      const projected = shape.vertices.map((v) => {
        const r = rotatePoint(v, rx, ry, rz);
        const perspective = 4.5 / (4.5 - r.z);
        return {
          x: cx + r.x * scale * perspective,
          y: cy + r.y * scale * perspective,
        };
      });

      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      for (const [a, b] of shape.edges) {
        ctx.moveTo(projected[a].x, projected[a].y);
        ctx.lineTo(projected[b].x, projected[b].y);
      }
      ctx.stroke();

      // Pixel vertex ticks
      ctx.fillStyle = stroke;
      for (const pt of projected) {
        ctx.fillRect(pt.x - 1.5, pt.y - 1.5, 3, 3);
      }
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h) * 0.21;

      const rx = angleX + pointerY * 0.25;
      const ry = angleY + pointerX * 0.35;

      drawShape(outerCube, rx, ry, 0.1, "rgba(255, 255, 255, 0.85)", 1.1, cx, cy, scale);
      drawShape(crystal, -rx * 0.8, ry * 1.25, 0.25, "rgba(180, 180, 180, 0.7)", 1, cx, cy, scale);
      drawShape(innerCube, rx * 1.3, -ry * 1.1, 0, "rgba(136, 136, 136, 0.75)", 1, cx, cy, scale);
      drawShape(satA, rx * 0.7, ry * 0.9, 0.3, "rgba(255, 255, 255, 0.55)", 0.9, cx, cy, scale);
      drawShape(satB, -rx * 0.9, ry * 0.7, -0.2, "rgba(136, 136, 136, 0.55)", 0.9, cx, cy, scale);

      if (!prefersReducedMotion) {
        angleY += 0.0045;
        angleX += 0.002;
        animId = requestAnimationFrame(render);
      }
    };

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
      pointerY = ((e.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Abstract monochrome 3D geometric wireframe cluster"
      className="w-full h-full block"
    />
  );
}

export function TesseractIllustration() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[300px] h-auto mx-auto"
      aria-hidden="true"
    >
      {/* Outer Cube */}
      <rect x="48" y="48" width="224" height="224" stroke="#444444" strokeWidth="1" strokeDasharray="3 3" />
      <polygon points="80,72 240,72 240,232 80,232" stroke="#FFFFFF" strokeWidth="1.25" />
      <polygon points="104,48 264,48 264,208 104,208" stroke="#888888" strokeWidth="1" />
      {/* Inner Cube */}
      <polygon points="124,116 196,116 196,188 124,188" stroke="#FFFFFF" strokeWidth="1.25" />
      <polygon points="138,102 210,102 210,174 138,174" stroke="#666666" strokeWidth="1" />
      {/* Projection Struts */}
      <line x1="80" y1="72" x2="124" y2="116" stroke="#555555" strokeWidth="1" />
      <line x1="240" y1="72" x2="196" y2="116" stroke="#555555" strokeWidth="1" />
      <line x1="240" y1="232" x2="196" y2="188" stroke="#555555" strokeWidth="1" />
      <line x1="80" y1="232" x2="124" y2="188" stroke="#555555" strokeWidth="1" />
      <line x1="80" y1="72" x2="104" y2="48" stroke="#888888" strokeWidth="1" />
      <line x1="240" y1="72" x2="264" y2="48" stroke="#888888" strokeWidth="1" />
      <line x1="240" y1="232" x2="264" y2="208" stroke="#888888" strokeWidth="1" />
      <line x1="80" y1="232" x2="104" y2="208" stroke="#888888" strokeWidth="1" />
      {/* Center Pixel */}
      <rect x="157" y="149" width="6" height="6" fill="#FFFFFF" />
    </svg>
  );
}

export function AIGeometricIllustration() {
  return (
    <svg
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[240px] h-auto"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="238" height="118" stroke="#252525" strokeDasharray="2 3" />
      <polygon points="120,16 172,60 120,104 68,60" stroke="#FFFFFF" strokeWidth="1.2" />
      <polygon points="120,30 154,60 120,90 86,60" stroke="#666666" strokeWidth="1" />
      <line x1="24" y1="60" x2="68" y2="60" stroke="#444444" strokeWidth="1" />
      <line x1="172" y1="60" x2="216" y2="60" stroke="#444444" strokeWidth="1" />
      <rect x="20" y="56" width="8" height="8" stroke="#888888" />
      <rect x="212" y="56" width="8" height="8" stroke="#888888" />
      <rect x="116" y="56" width="8" height="8" fill="#FFFFFF" />
    </svg>
  );
}

export function FinalCtaVisual() {
  return (
    <svg
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[240px] h-auto mx-auto"
      aria-hidden="true"
    >
      <circle cx="140" cy="140" r="110" stroke="#252525" strokeDasharray="3 4" />
      <circle cx="140" cy="140" r="76" stroke="#444444" />
      <polygon points="140,22 258,140 140,258 22,140" stroke="#FFFFFF" strokeWidth="1.25" />
      <polygon points="140,58 222,140 140,222 58,140" stroke="#888888" strokeWidth="1" />
      <rect x="112" y="112" width="56" height="56" stroke="#FFFFFF" strokeWidth="1" />
      <rect x="136" y="136" width="8" height="8" fill="#FFFFFF" />
    </svg>
  );
}
