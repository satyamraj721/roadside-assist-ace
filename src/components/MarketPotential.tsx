import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Globe, Users, DollarSign, Zap } from "lucide-react";

export const MarketPotential = () => {
  const marketStats = [
    {
      icon: Globe,
      value: "Massive",
      label: "Global Auto Service Market",
      growth: "Growing rapidly"
    },
    {
      icon: Users,
      value: "Millions",
      label: "Vehicle Owners Need Help",
      growth: "Daily breakdowns"
    },
    {
      icon: DollarSign,
      value: "High",
      label: "Current Service Costs",
      growth: "Due to inefficiency"
    },
    {
      icon: Zap,
      value: "Frequent",
      label: "Roadside Emergencies",
      growth: "Underserved market"
    }
  ];

  const opportunities = [
    {
      title: "Underserved Market",
      description: "85% of mechanics still operate without digital platforms"
    },
    {
      title: "Growing Demand",
      description: "Vehicle complexity increasing, requiring more frequent professional service"
    },
    {
      title: "Trust Gap",
      description: "73% of consumers don't trust random mechanics without verification"
    },
    {
      title: "Mobile-First Generation", 
      description: "90% prefer app-based solutions for service bookings"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-autoaid-gray-900 mb-6">
            Market Potential & Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The automotive service industry is ripe for digital transformation with massive untapped potential
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-primary border-0 text-white shadow-medium hover:shadow-strong transition-shadow">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white/80" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90 font-medium mb-1">{stat.label}</div>
                <div className="text-white/70 text-sm">{stat.growth}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-autoaid-gray-900 mb-8">Key Market Opportunities</h3>
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-accent rounded-full p-2 mt-1">
                    <Target className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-autoaid-gray-900 mb-1">{opportunity.title}</h4>
                    <p className="text-muted-foreground text-sm">{opportunity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Model */}
          <Card className="bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-autoaid-gray-900">Business Model Strategy</h3>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-autoaid-gray-50 rounded-lg">
                  <h4 className="font-semibold text-autoaid-gray-900 mb-2">Commission-Based Revenue</h4>
                  <p className="text-muted-foreground text-sm">Small percentage from each completed service</p>
                </div>
                <div className="p-4 bg-autoaid-gray-50 rounded-lg">
                  <h4 className="font-semibold text-autoaid-gray-900 mb-2">Premium Subscriptions</h4>
                  <p className="text-muted-foreground text-sm">Enhanced features for mechanics and users</p>
                </div>
                <div className="p-4 bg-autoaid-gray-50 rounded-lg">
                  <h4 className="font-semibold text-autoaid-gray-900 mb-2">Partnership Revenue</h4>
                  <p className="text-muted-foreground text-sm">Integrations with insurance companies and fleet services</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="text-sm text-primary font-medium mb-1">Revenue Streams</div>
                <div className="text-sm text-muted-foreground">Multiple monetization paths for sustainable growth</div>
              </div>

              <Button className="w-full mt-6" variant="cta">
                Explore Business Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};