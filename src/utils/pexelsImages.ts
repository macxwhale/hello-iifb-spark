
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

// Simple cache to avoid hitting the API too often
const cache: { [key: string]: string } = {};

export const fallbackImages: { [key: string]: string } = {
  'home': '/assets/hero-banner.jpg',
  'about': '/assets/indigenous-traditional-knowledge.jpg',
  'statements': '/assets/indigenous-governance.jpg',
  'documents': '/assets/indigenous-documents.jpg',
  'news': '/assets/indigenous-voices.jpg',
  'side-events': '/assets/indigenous-community-gathering.jpg',
  'sb8j-statements': '/assets/indigenous-governance.jpg',
  'sb8j-documents': '/assets/indigenous-documents.jpg',
  'sb8j-news': '/assets/indigenous-voices.jpg',
  'sb8j-side-events': '/assets/indigenous-community-gathering.jpg',
  'sb8j-about': '/assets/indigenous-traditional-knowledge.jpg',
  'sb8j-articles': '/assets/indigenous-voices.jpg',
  'sb8j-media-coverage': '/assets/indigenous-media.jpg',
  'sb8j-press-conferences': '/assets/indigenous-press.jpg',
  'sb8j-social-toolkit': '/assets/indigenous-social-media.jpg',
  'sb8j-videos': '/assets/indigenous-video-storytelling.jpg',
  'sb8j-gallery': '/assets/indigenous-community-gathering.jpg'
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
  if (!PEXELS_API_KEY) {
    console.warn('Pexels API key is missing. Using fallback image.');
    return null;
  }

  if (cache[pageKey]) {
    return cache[pageKey];
  }

  const query = imageQueries[pageKey];
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`;

  try {
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
