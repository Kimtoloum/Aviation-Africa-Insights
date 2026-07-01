import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import KPISection from "@/components/landing/KPISection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import ProcessImprovement from "@/components/landing/ProcessImprovement";
import DataDashboardSection from "@/components/landing/DataDashboardSection";

export default function Home() {
  return (
    <main className="flex flex-col">

      <Hero />

      <div className="space-y-32">

        <ProblemSection />

        <KPISection />

        <FeaturesSection />

        {/* 🔥 DATA LAYER (très important) */}
        <DataDashboardSection />

        <DashboardPreview />

        <ProcessImprovement />

      </div>
    </main>
  );
}