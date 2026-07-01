import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FiltersBar from "@/components/dashboard/FiltersBar";
import KpiCards from "@/components/dashboard/KpiCards";
import PerformanceChart from "@/components/charts/PerformanceChart";
import DelayCausesChart from "@/components/charts/DelayCausesChart";

export default function DashboardPage() {
  return (
    <main className="space-y-8">

      <DashboardHeader />

      <FiltersBar />

      <KpiCards />

      <div className="grid lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <DelayCausesChart />
      </div>

    </main>
  );
}