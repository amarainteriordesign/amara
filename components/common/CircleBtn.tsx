"use client";

import React from "react";

type CircleBtnProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
  size?: number; // diameter in px
  disabled?: boolean;
};

export default function CircleBtn({
  label = "open",
  onClick,
  className,
  size = 70,
  disabled = false,
}: CircleBtnProps) {
  return (
    <button
      type="button"
      className={`relative grid place-items-center rounded-full bg-[#F9F8F4] text-[#313131] transition-transform duration-150 ease-in-out hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ""}`}
      onClick={onClick}
      disabled={disabled}
      style={{ width: size, height: size }}
      aria-label={label}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-full border border-[#F9F8F4]"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-full border border-[#F9F8F4]"
      />

      <span className="pointer-events-none" style={{ fontSize: Math.round(size * 0.2) }}>
        {label}
      </span>
    </button>
  );
}
