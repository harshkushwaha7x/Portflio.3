import React from "react";

const SectionDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full py-8`} aria-hidden="true">
    <div className={`h-px w-full bg-gradient-to-r from-transparent via-border to-transparent ${className}`} />
  </div>
);

export default SectionDivider;
