import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="orb-1 aurora-orb" />
      <div className="orb-2 aurora-orb" />
      <div className="orb-3 aurora-orb" />
      <div className="grid-overlay" />
    </div>
  );
}
