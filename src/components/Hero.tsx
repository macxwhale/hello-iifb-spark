
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "IIFB hello test";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-slide-up font-mono">
            Interactive Interface for Beautiful Testing
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-2xl font-mono font-bold text-white">IF</span>
                </div>
                <h3 className="text-xl font-semibold">Interactive Flow</h3>
                <p className="text-muted-foreground">
                  Dynamic interface that responds to your interactions with smooth animations and real-time feedback.
                </p>
              </div>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl font-mono font-bold text-accent-foreground">BT</span>
                </div>
                <h3 className="text-xl font-semibold">Beautiful Testing</h3>
                <p className="text-muted-foreground">
                  Elegant testing environment with modern design principles and intuitive user experience.
                </p>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg" 
              className="gradient-primary shadow-glow animate-glow font-semibold px-8"
            >
              Start Testing
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold px-8 hover:shadow-card transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
