
import heroImage from '@/assets/hero-banner.jpg';
import indigenousImage from '@/assets/hero-banner-indigenous.jpg';
import documentsImage from '@/assets/indigenous-documents.jpg';
import governanceImage from '@/assets/indigenous-governance.jpg';
import natureImage from '@/assets/indigenous-nature-conservation.jpg';
import communityImage from '@/assets/indigenous-community-gathering.jpg';
import knowledgeImage from '@/assets/indigenous-traditional-knowledge.jpg';
import mediaImage from '@/assets/indigenous-media.jpg';
import videoImage from '@/assets/indigenous-video-storytelling.jpg';
import galleryImage from '@/assets/indigenous-voices.jpg';

// Pexels API configuration
const PEXELS_API_KEY = '563492ad6f91700001000001ffffffffffffffffffffffffffffffffffffffff';
const PEXELS_BASE_URL = 'https://api.pexels.com/v1';

export const imageQueries = {
  'home': 'biodiversity nature conservation',
  'about': 'environmental meeting conference',
  'statements': 'official documents government',
  'documents': 'research papers scientific documents',
  'news': 'breaking news media',
  'side-events': 'conference workshop meeting',
  'sb8j-statements': 'official meeting statements',
  'sb8j-documents': 'legal documents biodiversity',
  'sb8j-news': 'biodiversity news conference',
  'sb8j-side-events': 'workshop meeting discussion',
  'sb8j-about': 'international biodiversity meeting',
  'sb8j-articles': 'scientific articles research',
  'sb8j-media-coverage': 'media press conference',
  'sb8j-press-conferences': 'press conference speakers',
  'sb8j-social-toolkit': 'social media communication',
  'sb8j-statements': 'official government statements',
  'sb8j-videos': 'conference video recording',
  'sb8j-gallery': 'conference photo gallery',
  'sbstta-27-about': 'scientific advisory meeting biodiversity',
  'sbstta-27-documents': 'scientific research documents',
  'sbstta-27-side-events': 'scientific workshop meeting',
  'sbstta-27-statements': 'scientific advisory statements',
  'sbstta-27-gallery': 'scientific conference photo gallery',
  'sbstta-27-videos': 'scientific meeting video recording'
} as const;

export const fallbackImages = {
  'home': heroImage,
  'about': indigenousImage,
  'statements': governanceImage,
  'documents': documentsImage,
  'news': mediaImage,
  'side-events': communityImage,
  'sb8j-statements': governanceImage,
  'sb8j-documents': documentsImage,
  'sb8j-news': mediaImage,
  'sb8j-side-events': communityImage,
  'sb8j-about': indigenousImage,
  'sb8j-articles': knowledgeImage,
  'sb8j-media-coverage': mediaImage,
  'sb8j-press-conferences': mediaImage,
  'sb8j-social-toolkit': mediaImage,
  'sb8j-videos': videoImage,
  'sb8j-gallery': galleryImage,
  'sbstta-27-about': indigenousImage,
  'sbstta-27-documents': documentsImage,
  'sbstta-27-side-events': communityImage,
  'sbstta-27-statements': governanceImage,
  'sbstta-27-gallery': galleryImage,
  'sbstta-27-videos': videoImage
};

export const getImageForPage = async (pageKey: keyof typeof imageQueries): Promise<string | null> => {
  try {
    console.log('Fetching image for page:', pageKey);
    const query = imageQueries[pageKey];
    const response = await fetch(
      `${PEXELS_BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      console.error('Pexels API error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    console.log('Pexels API response:', data);
    
    if (data.photos && data.photos.length > 0) {
      const imageUrl = data.photos[0].src.large;
      console.log('Found image URL:', imageUrl);
      return imageUrl;
    } else {
      console.log('No images found for query:', query);
      return null;
    }
  } catch (error) {
    console.error('Error fetching image from Pexels:', error);
    return null;
  }
};
