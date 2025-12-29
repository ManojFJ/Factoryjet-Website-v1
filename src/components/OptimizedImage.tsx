import React, { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
  quality = 70, // Default to 70 for better compression while maintaining visual quality
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const isUnsplash = src.includes("unsplash.com");

  const generateSrcSet = () => {
    if (!isUnsplash) return undefined;

    const widths = [400, 600, 800, 1000, 1200];
    const baseUrl = src.split("?")[0];
    // Use WebP format for better compression, adjust quality based on image size
    return widths
      .map((w) => {
        const q = w <= 400 ? Math.max(quality - 10, 60) : quality;
        return `${baseUrl}?auto=format&fit=crop&w=${w}&q=${q}&fm=webp ${w}w`;
      })
      .join(", ");
  };

  const getOptimizedSrc = (targetWidth: number) => {
    if (!isUnsplash) return src;
    const baseUrl = src.split("?")[0];
    // Use WebP format and adjust quality for smaller images
    const optimizedQuality =
      targetWidth <= 400 ? Math.max(quality - 10, 60) : quality;
    return `${baseUrl}?auto=format&fit=crop&w=${targetWidth}&q=${optimizedQuality}&fm=webp`;
  };

  const aspectRatio = (height / width) * 100;

  return (
    <div
      className="relative overflow-hidden"
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      <img
        ref={imgRef}
        src={isInView ? getOptimizedSrc(width) : undefined}
        srcSet={isInView ? generateSrcSet() : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};

export default OptimizedImage;
