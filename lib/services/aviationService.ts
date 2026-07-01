import { flights } from "@/lib/data/flights";

export function getFlights(filters?: {
  airline?: string;
  airport?: string;
}) {
  let data = flights;

  if (filters?.airline && filters.airline !== "all") {
    data = data.filter((f) => f.airline === filters.airline);
  }

  if (filters?.airport && filters.airport !== "all") {
    data = data.filter((f) => f.airport === filters.airport);
  }

  return data;
}