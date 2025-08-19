
import { useState, useEffect } from 'react';
import { getImageForPage, fallbackImages, imageQueries } from '@/utils/pexelsImages';

export const usePexelsImage = (pageKey: keyof typeof imageQueries) => {
  const [imageUrl, setImageUrl] = useState<string>(fallbackImages[pageKey] || '/assets/hero-banner.jpg');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const pexelsImage = await getImageForPage(pageKey);
        
        if (pexelsImage) {
          setImageUrl(pexelsImage);
        } else {
          // Use fallback image if no Pexels image found or API key missing
          const fallbackUrl = fallbackImages[pageKey] || '/assets/hero-banner.jpg';
          setImageUrl(fallbackUrl);
        }
      } catch (err) {
        console.error('Error loading image:', err);
        setError('Failed to load image');
        // Use fallback image on error
        const fallbackUrl = fallbackImages[pageKey] || '/assets/hero-banner.jpg';
        setImageUrl(fallbackUrl);
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [pageKey]);

  return { imageUrl, isLoading, error };
};
