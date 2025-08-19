
import { useState, useEffect } from 'react';
import { getImageForPage, fallbackImages, imageQueries } from '@/utils/pexelsImages';

export const usePexelsImage = (pageKey: keyof typeof imageQueries) => {
  const [imageUrl, setImageUrl] = useState<string>(fallbackImages[pageKey]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);
        const pexelsImage = await getImageForPage(pageKey);
        
        if (pexelsImage) {
          setImageUrl(pexelsImage);
        } else {
          // Use fallback image if no Pexels image found
          setImageUrl(fallbackImages[pageKey]);
        }
      } catch (err) {
        setError('Failed to load image');
        setImageUrl(fallbackImages[pageKey]);
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [pageKey]);

  return { imageUrl, isLoading, error };
};
