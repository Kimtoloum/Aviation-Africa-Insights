import { create } from "zustand";

type FiltersState = {
  airline: string;
  airport: string;
  setAirline: (value: string) => void;
  setAirport: (value: string) => void;
  reset: () => void;
};

export const useFilters = create<FiltersState>((set) => ({
  airline: "all",
  airport: "all",

  setAirline: (value) => set({ airline: value }),
  setAirport: (value) => set({ airport: value }),

  reset: () => set({ airline: "all", airport: "all" }),
}));