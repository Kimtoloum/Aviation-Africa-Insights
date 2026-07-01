"use client";

import { useFilters } from "@/store/useFilters";

export default function FiltersBar() {
  const { airline, airport, setAirline, setAirport, reset } = useFilters();

  return (
    <div className="flex flex-wrap gap-4 items-center p-4 border rounded-xl bg-background">

      {/* AIRLINE FILTER */}
      <select
        value={airline}
        onChange={(e) => setAirline(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm"
      >
        <option value="all">All Airlines</option>
        <option value="ethiopian">Ethiopian Airlines</option>
        <option value="ram">Royal Air Maroc</option>
        <option value="aircotedivoire">Air Côte d'Ivoire</option>
        <option value="kenya">Kenya Airways</option>
      </select>

      {/* AIRPORT FILTER */}
      <select
        value={airport}
        onChange={(e) => setAirport(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm"
      >
        <option value="all">All Airports</option>
        <option value="los">Lagos (LOS)</option>
        <option value="add">Addis Ababa (ADD)</option>
        <option value="cmn">Casablanca (CMN)</option>
      </select>

      {/* RESET */}
      <button
        onClick={reset}
        className="text-sm px-3 py-2 border rounded-md hover:bg-muted"
      >
        Reset
      </button>

    </div>
  );
}