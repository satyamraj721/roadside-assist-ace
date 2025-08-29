import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  MapPin, 
  CreditCard, 
  Star, 
  Shield, 
  Clock,
  Users,
  Wrench
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Smart App Interface",
      description: "Intuitive mobile app that makes booking mechanics as easy as ordering food",
      benefits: ["One-tap booking", "Real-time updates", "Chat with mechanic"]
    },
    {
      icon: MapPin,
      title: "GPS-Based Matching",
      description: "Find the nearest available mechanic with precise location tracking",
      benefits: ["Live location sharing", "ETA tracking", "Route optimization"]
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Transparent pricing with secure, cashless payment processing",
      benefits: ["Upfront pricing", "Multiple payment options", "Digital receipts"]
    },
    {
      icon: Star,
      title: "Rating & Reviews",
      description: "Build trust through verified customer reviews and ratings system",
      benefits: ["Verified reviews", "Photo evidence", "Quality assurance"]
    },
    {
      icon: Shield,
      title: "Background Verification",
      description: "All mechanics undergo thorough background checks and skill verification",
      benefits: ["Identity verification", "Skill assessment", "Insurance coverage"]
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service for emergency roadside assistance",
      benefits: ["Emergency response", "Night service", "Holiday coverage"]
    }
  ];

  const userBenefits = [
    { icon: Users, title: "For Vehicle Owners", description: "Quick, reliable, transparent roadside assistance" },
    { icon: Wrench, title: "For Mechanics", description: "Steady income, digital platform, customer base growth" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-autoaid-gray-900 mb-6">
            Powerful Features for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AutoAid combines cutting-edge technology with human expertise to deliver 
            unmatched roadside assistance experience
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-autoaid-gray-900 mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* User Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {userBenefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-primary border-0 text-white shadow-medium">
              <CardContent className="p-8 text-center">
                <benefit.icon className="h-16 w-16 mx-auto mb-4 text-white/80" />
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-autoaid-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-autoaid-gray-900 mb-4">
            Ready to Build the Future of Roadside Assistance?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            AutoAid is designed to revolutionize how vehicle owners connect with mechanics. 
            A platform built for reliability, transparency, and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Launch AutoAid Now
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};