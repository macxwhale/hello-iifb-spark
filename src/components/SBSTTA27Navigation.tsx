
import { Link } from 'react-router-dom';

interface SBSTTA27NavigationProps {
  currentPage: 'home' | 'about' | 'statements' | 'documents' | 'side-events' | 'articles' | 'videos' | 'gallery';
}

const SBSTTA27Navigation = ({ currentPage }: SBSTTA27NavigationProps) => {
  const navItems = [
    { key: 'about', label: 'About', path: '/sbstta-27/about' },
    { key: 'statements', label: 'Statements', path: '/sbstta-27/statements' },
    { key: 'documents', label: 'Documents', path: '/sbstta-27/documents' },
    { key: 'side-events', label: 'Side Events', path: '/sbstta-27/side-events' },
    { key: 'articles', label: 'Articles', path: '/sbstta-27/articles' },
    { key: 'videos', label: 'Videos', path: '/sbstta-27/videos' },
    { key: 'gallery', label: 'Gallery', path: '/sbstta-27/gallery' },
  ];

  return (
    <nav className="mt-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              currentPage === item.key
                ? 'bg-white text-foreground shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SBSTTA27Navigation;
