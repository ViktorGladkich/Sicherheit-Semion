import { clsx } from "clsx"
import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Optimizes image URLs for responsive loading
 * Converts URLs to WebP with appropriate sizing for performance
 */
export function optimizeImageUrl(url: string, width?: number): string {
  if (!url) return '';
  
  // Skip optimization for non-Unsplash images
  if (!url.includes('unsplash.com') && !url.includes('images.unsplash.com')) {
    return url;
  }

  const params = new URLSearchParams();
  params.set('auto', 'format');
  params.set('fit', 'crop');
  params.set('q', '80');
  
  if (width) {
    params.set('w', width.toString());
  }
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(url: string): string {
  if (!url) return '';
  
  const widths = [480, 768, 1024, 1280, 1920];
  return widths
    .map(w => `${optimizeImageUrl(url, w)} ${w}w`)
    .join(', ');
}

/**
 * Preload critical resources for performance
 */
export function preloadResource(href: string, as: 'image' | 'script' | 'style' | 'font'): void {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = href;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Lazy load images with IntersectionObserver
 */
export function lazyLoadImage(img: HTMLImageElement): void {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = image.dataset.src || '';
          image.classList.add('loaded');
          observer.unobserve(image);
        }
      });
    });
    observer.observe(img);
  } else {
    // Fallback for older browsers
    img.src = img.dataset.src || '';
  }
}

/**
 * Generate meta description snippet
 */
export function truncateText(text: string, length: number = 160): string {
  if (text.length <= length) return text;
  return text.substring(0, length).replace(/\s+\S*$/, '') + '...';
}
