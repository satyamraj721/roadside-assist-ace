import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/autoaid-hero.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,white,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-white text-sm font-medium">Verified Mechanics</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Roadside
              <span className="block bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Hero Awaits
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect with verified mechanics instantly. Transparent pricing, real-time tracking, 
              and reliable service when you need it most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="group">
                Get Started Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-white/70 text-sm">Verified Mechanics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5 min</div>
                <div className="text-white/70 text-sm">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold">4.9</span>
                  <Star className="h-5 w-5 text-accent fill-accent" />
                </div>
                <div className="text-white/70 text-sm">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AutoAid - Roadside Assistance App" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-medium animate-pulse">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Mechanic found!</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent rounded-xl p-4 shadow-medium">
              <div className="text-accent-foreground font-medium">$45 - Oil Change</div>
              <div className="text-accent-foreground/70 text-sm">Transparent pricing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};