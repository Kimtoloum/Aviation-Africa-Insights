import PerformanceChart from "@/components/charts/PerformanceChart";
import DelayCausesChart from "@/components/charts/DelayCausesChart";

export default function DataDashboardSection() {
  return (
    <section className="w-full py-24 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Aviation Data Intelligence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time simulation of African aviation performance metrics.
          </p>
        </div>

        {/* Charts grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          <PerformanceChart />
          <DelayCausesChart />

        </div>

      </div>
    </section>
  );
}