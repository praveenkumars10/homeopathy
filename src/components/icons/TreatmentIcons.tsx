import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function MortarPestleIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M4 10a8 8 0 0 0 16 0v-1H4v1z" />
      <path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2" />
      <path d="m18 3-7 8" />
      <path d="M9 13a3 3 0 0 1 6 0" />
      <path d="M8 9V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

export function DropperBottleIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="7" y="10" width="10" height="11" rx="2" />
      <path d="M9 10V7h6v3" />
      <path d="M10 7V4a2 2 0 0 1 4 0v3" />
      <line x1="12" y1="13" x2="12" y2="17" />
      <circle cx="12" cy="18" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function HairIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Delicate flowing hair follicles and root bulb */}
      <path d="M12 2C8 6 6 12 7 19a5 5 0 0 0 10 0c1-7-1-13-5-17z" />
      <path d="M12 6c-1.5 3-2 6-1.5 10" />
      <path d="M15 11c-.8 2-1 4-.8 6" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SkinIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Protective cellular shield with regenerative droplet */}
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8c-1.5 1.8-2 3.2-2 4.5a2 2 0 1 0 4 0c0-1.3-.5-2.7-2-4.5z" />
    </svg>
  );
}

export function RespiratoryIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Bronchial tree / lungs silhouette */}
      <path d="M12 3v7" />
      <path d="M12 10c-3 0-5 2-6 5s0 5 2 5 4-2 4-6" />
      <path d="M12 10c3 0 5 2 6 5s0 5-2 5-4-2-4-6" />
      <path d="M12 6c-2 0-3 1-4 2" />
      <path d="M12 6c2 0 3 1 4 2" />
    </svg>
  );
}

export function WomenIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Blooming lotus petal / endocrine balance motif */}
      <path d="M12 4c2.5 3 4.5 7 4.5 11a4.5 4.5 0 0 1-9 0C7.5 11 9.5 7 12 4z" />
      <path d="M12 9c-3 3-5 6-5 8a5 5 0 0 0 5 5" />
      <path d="M12 9c3 3 5 6 5 8a5 5 0 0 1-5 5" />
      <path d="M6 14c-1.5 1.5-2 3-2 4a3 3 0 0 0 4 3" />
      <path d="M18 14c1.5 1.5 2 3 2 4a3 3 0 0 1-4 3" />
    </svg>
  );
}

export function ChildIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Gentle sprout / protective hands nurturing growth */}
      <path d="M12 12c-2-2-4-2-6-1-1 1-1 3 1 4 3 1.5 5-1 5-3z" />
      <path d="M12 12c2-2 4-2 6-1 1 1 1 3-1 4-3 1.5-5-1-5-3z" />
      <path d="M12 12v9" />
      <circle cx="12" cy="5" r="2.5" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function JointIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Articulated joint / spinal alignment curve */}
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v6.5" />
      <path d="M12 15.5V22" />
      <path d="M5.5 8.5 9.5 11" />
      <path d="M14.5 13l4 2.5" />
      <path d="M18.5 8.5 14.5 11" />
      <path d="M9.5 13l-4 2.5" />
    </svg>
  );
}

export function BrainIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Calming mind / hemispheric waves */}
      <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5c0 .6.1 1.2.3 1.7A4 4 0 0 0 4 11.5a4 4 0 0 0 2 3.5c-.3.6-.5 1.3-.5 2a4.5 4.5 0 0 0 4.5 4.5c.9 0 1.7-.3 2.5-.7" />
      <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .6-.1 1.2-.3 1.7a4 4 0 0 1 1.3 3.3 4 4 0 0 1-2 3.5c.3.6.5 1.3.5 2a4.5 4.5 0 0 1-4.5 4.5c-.9 0-1.7-.3-2.5-.7" />
      <path d="M12 4v16" />
      <path d="M8.5 8a2.5 2.5 0 0 1 3.5 2" />
      <path d="M15.5 8a2.5 2.5 0 0 0-3.5 2" />
      <path d="M8.5 15a2.5 2.5 0 0 0 3.5-2" />
      <path d="M15.5 15a2.5 2.5 0 0 1-3.5-2" />
    </svg>
  );
}

export function DigestiveIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      {/* Stomach / gut health curve with soothing inner loop */}
      <path d="M9 3v4c0 3 2 5 5 5h1c2 0 4 1.5 4 4 0 3.5-2.5 5-6 5-4.5 0-7-2.5-7-6.5V7a4 4 0 0 1 4-4h1z" />
      <path d="M10 11a2.5 2.5 0 0 1 3 2" />
    </svg>
  );
}

export function BotanicalBranch({ className = "w-full h-8 text-primary/20", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 400 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Symmetrical organic vine with gentle leaves */}
      <line x1="20" y1="16" x2="160" y2="16" strokeDasharray="3 4" />
      <path d="M160 16 Q180 10 200 16 T240 16" />
      <path d="M185 13 Q190 7 197 11" fill="currentColor" fillOpacity="0.25" />
      <path d="M215 13 Q210 7 203 11" fill="currentColor" fillOpacity="0.25" />
      <path d="M175 19 Q180 25 187 21" fill="currentColor" fillOpacity="0.25" />
      <path d="M225 19 Q220 25 213 21" fill="currentColor" fillOpacity="0.25" />
      <circle cx="200" cy="16" r="2.5" fill="currentColor" />
      <line x1="240" y1="16" x2="380" y2="16" strokeDasharray="3 4" />
    </svg>
  );
}

export function ClinicBrandLogo({ className = "w-9 h-9", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="18" cy="18" r="17" fill="#1F4B3F" />
      {/* Elegant botanical leaf merging into medical cross/balance */}
      <path
        d="M18 7C14 12 11 17 11 22C11 26 14.5 28.5 18 28.5C21.5 28.5 25 26 25 22C25 17 22 12 18 7Z"
        fill="#FAF7F0"
        fillOpacity="0.2"
        stroke="#FAF7F0"
        strokeWidth="1.5"
      />
      <path
        d="M18 10V26"
        stroke="#FAF7F0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 14C16 16 14 19 14 21"
        stroke="#C98B3E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 17C20 19 22 21 22 23"
        stroke="#C98B3E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="18" cy="11" r="1.5" fill="#D9663B" />
    </svg>
  );
}
