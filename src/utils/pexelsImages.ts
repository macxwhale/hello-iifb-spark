
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

// Simple cache to avoid hitting the API too often
const cache: { [key: string]: string } = {};

export const fallbackImages: { [key: string]: string } = {
  'home': '/assets/hero-banner-indigenous.jpg',
  'about': '/assets/hero-banner-indigenous.jpg',
  'statements': '/assets/hero-banner-indigenous.jpg',
  'documents': '/assets/hero-banner-indigenous.jpg',
  'news': '/assets/hero-banner-indigenous.jpg',
  'side-events': '/assets/hero-banner-indigenous.jpg',
  'sb8j-statements': '/assets/hero-banner-indigenous.jpg',
  'sb8j-documents': '/assets/hero-banner-indigenous.jpg',
  'sb8j-news': '/assets/hero-banner-indigenous.jpg',
  'sb8j-side-events': '/assets/hero-banner-indigenous.jpg',
  'sb8j-about': '/assets/hero-banner-indigenous.jpg',
  'sb8j-articles': '/assets/hero-banner-indigenous.jpg',
  'sb8j-media-coverage': '/assets/hero-banner-indigenous.jpg',
  'sb8j-press-conferences': '/assets/hero-banner-indigenous.jpg',
  'sb8j-social-toolkit': '/assets/hero-banner-indigenous.jpg',
  'sb8j-videos': '/assets/hero-banner-indigenous.jpg',
  'sb8j-gallery': '/assets/hero-banner-indigenous.jpg'
};

export const imageQueries = {
  'home': 'indigenous people biodiversity nature conservation',
  'about': 'indigenous community traditional knowledge',
  'statements': 'indigenous council meeting governance',
  'documents': 'indigenous documents traditional knowledge',
  'news': 'indigenous community news gathering',
  'side-events': 'indigenous community workshop meeting',
  'sb8j-statements': 'indigenous people meeting governance',
  'sb8j-documents': 'indigenous documents meeting',
  'sb8j-news': 'indigenous community news update',
  'sb8j-side-events': 'indigenous workshop community gathering',
  'sb8j-about': 'indigenous community traditional knowledge',
  'sb8j-articles': 'indigenous voices storytelling',
  'sb8j-media-coverage': 'indigenous media coverage news',
  'sb8j-press-conferences': 'indigenous press conference meeting',
  'sb8j-social-toolkit': 'indigenous social media toolkit',
  'sb8j-videos': 'indigenous video storytelling documentary',
  'sb8j-gallery': 'indigenous photography gallery exhibition'
};

export const getImageForPage = async (pageKey: keyof typeof imageQueries): Promise<string | null> => {
  console.log('Getting image for page:', pageKey);
  console.log('Pexels API key present:', !!PEXELS_API_KEY);
  
  if (!PEXELS_API_KEY) {
    console.warn('Pexels API key is missing. Using fallback image.');
    return null;
  }

  if (cache[pageKey]) {
    console.log('Using cached image for:', pageKey);
    return cache[pageKey];
  }

  const query = imageQueries[pageKey];
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`;

  try {
    console.log('Fetching from Pexels API for query:', query);
    const response = await fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      console.error('Pexels API error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();

    if (data.photos && data.photos.length > 0) {
      const imageUrl = data.photos[0].src.large2x || data.photos[0].src.large || data.photos[0].src.original;
      console.log('Successfully fetched Pexels image:', imageUrl);
      cache[pageKey] = imageUrl; // Store in cache
      return imageUrl;
    } else {
      console.warn('No photos found for query:', query);
      return null;
    }
  } catch (error) {
    console.error('Error fetching image from Pexels:', error);
    return null;
  }
};
