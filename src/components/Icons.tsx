import React from 'react';

// Icons for Header (Note: MenuIcon and XIcon are no longer used by the animated burger)
export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Icons for Benefits
export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Icon for Testimonials
export const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <path d="M9.33 8.211C9.33 6.1 11.1 4 13.5 4s4.17 2.1 4.17 4.211c0 2.544-1.28 4.633-3.25 5.522l-1.68 1.411v2.856h4.18v8H9.33V16.85l3.42-3.233c-1.33-.856-2.42-2.2-2.42-4.406zM24.33 8.211C24.33 6.1 26.1 4 28.5 4s4.17 2.1 4.17 4.211c0 2.544-1.28 4.633-3.25 5.522l-1.68 1.411v2.856h4.18v8H24.33V16.85l3.42-3.233c-1.33-.856-2.42-2.2-2.42-4.406z" transform="translate(-8 -4)" />
    </svg>
);

// Icons for Contact
export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
export const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);
export const SpinnerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);
export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"></polyline></svg>
);

// Icon for BackToTopButton
export const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 19V5"></path>
    <path d="M5 12l7-7 7 7"></path>
  </svg>
);

// Icons for About
export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);
export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

// Icons for FAQ
export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);
export const PlusCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
);
export const MinusCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
);

{/* FIX: Add missing icons */}
// Icons for News
export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);
export const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

// Icons for Certifications (as text placeholders)
export const VdsLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="50" y="25" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="currentColor">VdS</text>
    </svg>
);
export const IsoLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="50" y="25" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="currentColor">ISO 9001</text>
    </svg>
);
export const TuvLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="currentColor">TÜV Rheinland</text>
    </svg>
);
export const BdsLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="50" y="25" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="currentColor">BDSW</text>
    </svg>
);

// Icons for Partners (as text placeholders)
export const InnovateAgLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="currentColor">INNOVATE AG</text>
    </svg>
);
export const ConstructGmbhLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="70" y="25" fontFamily="Georgia, serif" fontSize="16" textAnchor="middle" fill="currentColor">Construct GmbH</text>
    </svg>
);
export const EventProLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="60" y="25" fontFamily="Verdana, sans-serif" fontSize="18" fontStyle="italic" textAnchor="middle" fill="currentColor">EventPro</text>
    </svg>
);
export const NextGenCorpLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="75" y="25" fontFamily="monospace" fontSize="16" textAnchor="middle" fill="currentColor">NextGen Corp.</text>
    </svg>
);
export const AlphaRetailLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="65" y="25" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="currentColor">AlphaRetail</text>
    </svg>
);