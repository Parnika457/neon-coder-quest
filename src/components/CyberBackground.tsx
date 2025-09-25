import React from 'react';
import cyberpunkCityscape from '../assets/cyberpunk-cityscape.jpg';

const CyberBackground = () => {
  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${10 + Math.random() * 10}s`,
      }}
    />
  ));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Cyberpunk Cityscape Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${cyberpunkCityscape})`,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Animated Grid Overlay */}
      <div className="cyber-grid" />
      
      {/* Floating Particles */}
      <div className="cyber-particles">
        {particles}
      </div>
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />
    </div>
  );
};

export default CyberBackground;