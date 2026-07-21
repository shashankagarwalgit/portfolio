import React from 'react';

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#020204]">
      {/* Liquid Organic Morphing Fluid Blob 1 */}
      <div
        className="animate-liquid-1 absolute -top-32 -left-32 w-[750px] h-[750px] blur-[160px] opacity-25"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.45) 0%, rgba(200, 215, 235, 0.18) 50%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {/* Liquid Organic Morphing Fluid Blob 2 */}
      <div
        className="animate-liquid-2 absolute top-1/3 -right-32 w-[800px] h-[800px] blur-[180px] opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(240, 245, 255, 0.35) 0%, rgba(160, 180, 210, 0.12) 50%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {/* Liquid Organic Morphing Fluid Blob 3 */}
      <div
        className="animate-liquid-1 absolute -bottom-32 left-1/3 w-[700px] h-[700px] blur-[170px] opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, rgba(180, 195, 220, 0.1) 50%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {/* Glossy Refractive Glass Radial Lens Flare */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Fine Glass Micro-Dot Grid Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />
    </div>
  );
};

export default LiquidBackground;
