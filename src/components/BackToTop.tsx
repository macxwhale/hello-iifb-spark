
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute bottom-8 right-8">
      <Button
        onClick={scrollToTop}
        className="bg-primary text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in rounded-full border-2 border-white/20 p-3"
        aria-label="Back to top"
        size="icon"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default BackToTop;
