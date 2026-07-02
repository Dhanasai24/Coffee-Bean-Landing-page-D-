import { SVGProps } from "react";

export function FeatureIcon({ name, className = "" }: { name: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    farm: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    bean: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    leaf: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-2.4 0-4.5 1.8-4.5 4.5 0 2.3 6 11 6 11s6-8.7 6-11c0-2.7-2.1-4.5-4.5-4.5z" />
      </svg>
    ),
    shield: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    truck: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    heart: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    sun: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    sparkles: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...{ className }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m10-14v4m-2-2h4m-10 10v4m0-2h4m10 0v4m0-2h4" />
      </svg>
    ),
  };

  return icons[name] || icons.bean;
}