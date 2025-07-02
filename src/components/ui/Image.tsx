import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

/**
 * Optimized Image component with lazy loading, error handling, and optional priority loading
 * 
 * Usage:
 * <Image 
 *   src="/path/to/image.jpg" 
 *   alt="Description of image" 
 *   width={800} 
 *   height={600} 
 *   className="rounded-lg" 
 *   priority={true} 
 * />
 */
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fallbackSrc = '/assets/image-placeholder.jpg', // Update path to your placeholder image
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(priority ? src : '');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Only load image when it's in the viewport (or immediately if priority)
  useEffect(() => {
    if (priority) {
      setImgSrc(src);
      return;
    }

    let isMounted = true;
    
    // Create intersection observer to detect when image is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && isMounted) {
          setImgSrc(src);
          observer.disconnect();
        }
      });
    });

    // Get reference to placeholder element
    const placeholder = document.getElementById(`image-${alt.replace(/\s+/g, '-').toLowerCase()}`);
    
    if (placeholder) {
      observer.observe(placeholder);
    }

    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, [src, alt, priority]);

  return (
    <div 
      id={`image-${alt.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn('relative overflow-hidden', className)}
      style={{ width: width, height: height }}
      {...props}
    >
      {imgSrc ? (
        <img
          src={error ? fallbackSrc : imgSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'object-cover transition-opacity duration-300', 
            isLoaded ? 'opacity-100' : 'opacity-0',
            width && height ? 'w-full h-full' : ''
          )}
        />
      ) : (
        <div 
          className="w-full h-full bg-gray-200 animate-pulse" 
          style={{ 
            width: width || '100%', 
            height: height || '100%' 
          }}
          aria-label={`Loading: ${alt}`}
        />
      )}
      {!isLoaded && imgSrc && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Image; 