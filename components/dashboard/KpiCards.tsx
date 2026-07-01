"use client";

import useSWR from "swr";
import { useFilters } from "@/store/useFilters";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function KpiCards() {
  const { airline, airport } = useFilters();

  const { data, isLoading } = useSWR(
    `/api/kpis?airline=${airline}&airport=${airport}`,
    fetcher
  );

  if (isLoading || !data) {
    return (
      <div className="grid md:grid-cols-4 gap-4">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="p-4 border rounded-xl animate-pulse">
            Loading...
          </div>
        ))}
      </div>
    );
  }

  const kpis = data.data;

  return (
    <div className="grid md:grid-cols-4 gap-4">

      <div className="p-4 border rounded-xl bg-background">
        <p className="text-sm text-muted-foreground">Flights</p>
        <p className="text-xl font-bold">{kpis.flights}</p>
      </div>

      <div className="p-4 border rounded-xl bg-background">
        <p className="text-sm text-muted-foreground">Avg Delay</p>
        <p className="text-xl font-bold">{kpis.avgDelay} min</p>
      </div>

      <div className="p-4 border rounded-xl bg-background">
        <p className="text-sm text-muted-foreground">On-Time</p>
        <p className="text-xl font-bold">{kpis.onTime}%</p>
      </div>

      <div className="p-4 border rounded-xl bg-background">
        <p className="text-sm text-muted-foreground">Airports</p>
        <p className="text-xl font-bold">{kpis.airports}</p>
      </div>

    </div>
  );
}