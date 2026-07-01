import { Plane, Clock, TrendingUp, MapPin } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="w-full py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Executive Dashboard Preview
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A real-time overview of aviation performance metrics across Africa.
          </p>
        </div>

        {/* Dashboard mock */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left KPI stack */}
          <div className="space-y-4">
            <div className="p-5 border rounded-xl bg-muted/20">
              <div className="flex items-center gap-3">
                <Plane className="text-blue-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Flights</p>
                  <h3 className="text-xl font-bold">12,450</h3>
                </div>
              </div>
            </div>

            <div className="p-5 border rounded-xl bg-muted/20">
              <div className="flex items-center gap-3">
                <Clock className="text-orange-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Avg Delay</p>
                  <h3 className="text-xl font-bold">18 min</h3>
                </div>
              </div>
            </div>

            <div className="p-5 border rounded-xl bg-muted/20">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">On-Time Rate</p>
                  <h3 className="text-xl font-bold">76%</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Center chart placeholder */}
          <div className="lg:col-span-2 border rounded-xl bg-muted/10 p-6 space-y-4">
            <h3 className="font-semibold">Flight Performance Trends</h3>

            <div className="h-[250px] flex items-end gap-2">
              <div className="w-6 h-20 bg-blue-500/40 rounded"></div>
              <div className="w-6 h-32 bg-blue-500/50 rounded"></div>
              <div className="w-6 h-24 bg-blue-500/60 rounded"></div>
              <div className="w-6 h-40 bg-blue-500/70 rounded"></div>
              <div className="w-6 h-28 bg-blue-500/50 rounded"></div>
              <div className="w-6 h-36 bg-blue-500/60 rounded"></div>
            </div>

            <p className="text-sm text-muted-foreground">
              Simulated flight delay trends over time
            </p>
          </div>

        </div>

        {/* Bottom map preview */}
        <div className="border rounded-xl p-8 bg-muted/10 text-center">
          <MapPin className="mx-auto mb-3 text-blue-500" />
          <h3 className="font-semibold">Africa Coverage Map</h3>
          <p className="text-sm text-muted-foreground">
            Visualization of airports and flight routes across Africa
          </p>
        </div>

      </div>
    </section>
  );
}