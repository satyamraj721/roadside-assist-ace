import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, DollarSign, Clock, CheckCircle, Shield, MapPin } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Unpredictable Breakdowns",
      description: "Vehicle breakdowns happen at the worst times with no reliable solution nearby"
    },
    {
      icon: Users,
      title: "Unverified Mechanics",
      description: "Local garages lack trust factor and verified credentials"
    },
    {
      icon: DollarSign,
      title: "Hidden Pricing",
      description: "No transparency in pricing leading to overcharging and surprises"
    },
    {
      icon: Clock,
      title: "Long Wait Times",
      description: "Existing solutions are slow and lack real-time availability"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Instant Booking",
      description: "Book verified mechanics in seconds with real-time availability"
    },
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All mechanics are background-checked and skill-verified"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "See exact costs upfront before confirming any service"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your mechanic's location and estimated arrival time"
    }
  ];

  return (
    <section className="py-20 bg-autoaid-gray-50">
      <div className="container mx-auto px-4">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-autoaid-gray-900 mb-6">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vehicle owners face unreliable, unverified mechanics with no pricing transparency 
            when they need help the most
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-destructive/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold text-autoaid-gray-900 mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-autoaid-gray-900 mb-6">
            Our Solution: AutoAid
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A smart platform connecting vehicle owners with verified mechanics in real-time, 
            ensuring trust, transparency, and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-autoaid-gray-900 mb-2">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};