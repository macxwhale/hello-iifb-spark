
import { useState, useEffect } from 'react';
import { getImageForPage, fallbackImages, imageQueries } from '@/utils/pexelsImages';

export const usePexelsImage = (pageKey: keyof typeof imageQueries) => {
  const [imageUrl, setImageUrl] = useState<string>(fallbackImages[pageKey] || fallbackImages['home']);
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
          // Use imported fallback image
          const fallbackUrl = fallbackImages[pageKey] || fallbackImages['home'];
          console.log('Using fallback image:', fallbackUrl);
          setImageUrl(fallbackUrl);
        }
      } catch (err) {
        console.error('Error loading image:', err);
        setError('Failed to load image');
        // Use imported fallback image on error
        const fallbackUrl = fallbackImages[pageKey] || fallbackImages['home'];
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
