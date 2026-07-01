"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <FadeIn>
          <div className="space-y-6">

            <div className="inline-flex items-center px-3 py-1 rounded-full border text-xs text-muted-foreground bg-muted/20">
              Aviation Intelligence Platform
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Aviation Africa Insights
            </h1>

            <p className="text-xl text-muted-foreground">
              Transforming African aviation data into actionable operational intelligence.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Analyse des performances des compagnies aériennes et des aéroports africains
              à travers des indicateurs clés : ponctualité, retards, causes opérationnelles
              et efficacité des routes aériennes.
            </p>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="group">
                Explorer le Dashboard
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button size="lg" variant="outline">
                Voir l'analyse métier
              </Button>
            </div>

          </div>
        </FadeIn>

        {/* RIGHT */}
        <div className="bg-muted/30 border rounded-xl h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground">
            Dashboard Preview (coming soon)
          </p>
        </div>

      </div>
    </section>
  );
}