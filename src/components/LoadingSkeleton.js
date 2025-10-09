import React from "react";

export default function LoadingSkeleton({ width = '100%', height = '2rem' }) {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius: '8px', background: 'linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%)', animation: 'skeleton-loading 1.2s infinite' }}
      aria-busy="true"
      aria-label="Loading..."
    />
  );
}
