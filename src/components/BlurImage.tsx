import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  src?: string;
  alt?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const BlurImage = ({ src, alt, className, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={cn(
        'img-blur-up',
        isLoaded ? 'loaded' : '',
        className
      )}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
