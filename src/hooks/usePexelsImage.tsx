
import { useState, useEffect } from 'react';
import { getImageForPage, fallbackImages, imageQueries } from '@/utils/pexelsImages';

export const usePexelsImage = (pageKey: keyof typeof imageQueries) => {
  const [imageUrl, setImageUrl] = useState<string>(fallbackImages[pageKey] || '/assets/hero-banner-indigenous.jpg');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        console.log('Loading image for page key:', pageKey);
        setIsLoading(true);
        setError(null);
        
        const pexelsImage = await getImageForPage(pageKey);
        
        if (pexelsImage) {
          console.log('Setting Pexels image:', pexelsImage);
          setImageUrl(pexelsImage);
        } else {
          // Use fallback image if no Pexels image found or API key missing
          const fallbackUrl = fallbackImages[pageKey] || '/assets/hero-banner-indigenous.jpg';
          console.log('Using fallback image:', fallbackUrl);
          setImageUrl(fallbackUrl);
        }
      } catch (err) {
        console.error('Error loading image:', err);
        setError('Failed to load image');
        // Use fallback image on error
        const fallbackUrl = fallbackImages[pageKey] || '/assets/hero-banner-indigenous.jpg';
        console.log('Error occurred, using fallback:', fallbackUrl);
        setImageUrl(fallbackUrl);
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [pageKey]);

  return { imageUrl, isLoading, error };
};
