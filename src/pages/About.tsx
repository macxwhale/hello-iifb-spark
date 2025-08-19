
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Globe, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About CBD Panama 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A historic gathering that brings together global leaders, scientists, and Indigenous communities to advance biodiversity conservation and Indigenous rights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                CBD Panama 2025 represents a watershed moment in global biodiversity governance. For the first time in history, Indigenous Peoples and local communities will have their own dedicated subsidiary body within the Convention on Biological Diversity framework.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-12">
                This unprecedented gathering will host two critical meetings: SBSTTA-27, which provides scientific guidance for implementing the Global Biodiversity Framework, and SB8J-1, marking the inaugural meeting of the Subsidiary Body on Article 8(j) and Related Provisions.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Target className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To facilitate meaningful dialogue between Indigenous Peoples, local communities, scientists, and policymakers in advancing the Kunming-Montreal Global Biodiversity Framework and ensuring nature-positive outcomes by 2030.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Heart className="h-6 w-6 text-secondary" />
                    <CardTitle className="text-xl">Our Values</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Respect for Indigenous rights, traditional knowledge systems, scientific excellence, inclusive participation, and the recognition that biodiversity conservation requires both ancient wisdom and modern science.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">What Makes This Historic</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-foreground">First permanent subsidiary body for Indigenous Peoples in CBD history</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-foreground">Integration of traditional knowledge with scientific assessments</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-foreground">Focus on Indigenous women and youth leadership</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-foreground">Territorial rights recognition in biodiversity planning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-foreground">Enhanced participation mechanisms for local communities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-foreground">Strengthened implementation of Article 8(j) provisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
