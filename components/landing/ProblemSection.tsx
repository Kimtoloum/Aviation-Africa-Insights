import { AlertTriangle, BarChart3, Database, Clock } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="w-full py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Challenges in African Aviation Operations
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            The aviation sector in Africa faces critical operational inefficiencies
            that impact performance, cost, and passenger experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="p-6 border rounded-xl bg-background space-y-3">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h3 className="font-semibold">Frequent Delays</h3>
            <p className="text-sm text-muted-foreground">
              Flight delays affect passenger satisfaction and operational reliability.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-background space-y-3">
            <Database className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold">Fragmented Data</h3>
            <p className="text-sm text-muted-foreground">
              Data is scattered across systems with no centralized visibility.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-background space-y-3">
            <BarChart3 className="w-6 h-6 text-orange-500" />
            <h3 className="font-semibold">Lack of KPIs</h3>
            <p className="text-sm text-muted-foreground">
              No standardized metrics to evaluate airline performance effectively.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-background space-y-3">
            <Clock className="w-6 h-6 text-yellow-500" />
            <h3 className="font-semibold">Operational Inefficiency</h3>
            <p className="text-sm text-muted-foreground">
              Poor optimization leads to increased costs and time loss.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}