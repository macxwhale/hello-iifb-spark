const meetingsImage = '/lovable-uploads/meetings-celebration.jpg';

interface SB8J1HeroProps {
  title: string;
  subtitle?: string;
}

const SB8J1Hero = ({ title, subtitle }: SB8J1HeroProps) => {
  return (
    <section className="relative min-h-[60vh] h-auto overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 mx-8 bg-cover bg-center bg-no-repeat h-full rounded-lg"
        style={{ 
          backgroundImage: `url(${meetingsImage})`,
          backgroundColor: '#8B4513'
        }}
      >
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="text-white text-center w-full lg:text-left lg:max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SB8J1Hero;