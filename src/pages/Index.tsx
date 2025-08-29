import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { MarketPotential } from "@/components/MarketPotential";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <MarketPotential />
    </div>
  );
};

export default Index;
