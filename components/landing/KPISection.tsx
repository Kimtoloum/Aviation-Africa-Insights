"use client";

import { Plane, Clock, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function KPISection() {
  const kpis = [
    {
      title: "Flights Analysed",
      value: "12,450+",
      icon: Plane,
    },
    {
      title: "Average Delay",
      value: "18 min",
      icon: Clock,
    },
    {
      title: "On-Time Performance",
      value: "76%",
      icon: BarChart3,
    },
    {
      title: "Airports Covered",
      value: "42",
      icon: Globe,
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title with animation */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Aviation Performance Overview
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key operational indicators derived from African aviation datasets.
          </p>
        </motion.div>

        {/* KPI Grid with stagger animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="group p-6 border rounded-2xl bg-muted/10 hover:bg-muted/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>

                {/* Value */}
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-500 transition">
                  {kpi.value}
                </h3>

                {/* Title */}
                <p className="text-sm text-muted-foreground mt-1">
                  {kpi.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}