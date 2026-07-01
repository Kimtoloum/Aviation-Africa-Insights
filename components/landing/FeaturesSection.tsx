"use client";

import {
  Plane,
  Building2,
  BarChart3,
  AlertCircle,
  Brain,
  Map,
} from "lucide-react";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Flight Analytics",
      description:
        "Analyse détaillée des performances des vols et des retards.",
      icon: Plane,
    },
    {
      title: "Airline Comparison",
      description:
        "Comparaison des compagnies aériennes selon leurs KPIs.",
      icon: BarChart3,
    },
    {
      title: "Airport Performance",
      description:
        "Évaluation des performances opérationnelles des aéroports.",
      icon: Building2,
    },
    {
      title: "Delay Root Cause Analysis",
      description:
        "Identification des causes principales des retards.",
      icon: AlertCircle,
    },
    {
      title: "AI Insights",
      description:
        "Suggestions intelligentes basées sur les données (future feature).",
      icon: Brain,
    },
    {
      title: "Africa Map View",
      description:
        "Visualisation géographique des performances aériennes.",
      icon: Map,
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Aviation Intelligence Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete suite of tools designed for aviation performance analysis
            and operational decision-making.
          </p>
        </motion.div>

        {/* Grid with stagger */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group p-6 border rounded-2xl bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4"
              >
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg group-hover:text-blue-500 transition">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}