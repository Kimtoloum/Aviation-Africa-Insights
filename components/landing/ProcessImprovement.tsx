"use client";

import {
  GitBranch,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ProcessImprovement() {
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
            Process Improvement Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From fragmented operations to data-driven aviation decision making.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
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

          {/* AS-IS */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="p-6 border rounded-2xl bg-background space-y-4 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-red-500 w-5 h-5" />
              <h3 className="font-semibold">Current State (As-Is)</h3>
            </div>

            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Fragmented flight data sources</li>
              <li>• Manual delay analysis</li>
              <li>• No unified KPI system</li>
              <li>• Reactive decision-making</li>
            </ul>
          </motion.div>

          {/* GAP */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="p-6 border rounded-2xl bg-background space-y-4 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-2">
              <GitBranch className="text-orange-500 w-5 h-5" />
              <h3 className="font-semibold">Key Gaps</h3>
            </div>

            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Lack of data integration</li>
              <li>• No real-time insights</li>
              <li>• Poor visibility on delays</li>
              <li>• Limited performance tracking</li>
            </ul>
          </motion.div>

          {/* TO-BE */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="p-6 border rounded-2xl bg-background space-y-4 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <h3 className="font-semibold">Future State (To-Be)</h3>
            </div>

            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Centralized aviation dashboard</li>
              <li>• Automated delay analysis</li>
              <li>• Standardized KPIs</li>
              <li>• Data-driven decisions</li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Impact */}
        <motion.div
          className="border rounded-2xl p-10 bg-background text-center space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold">
            Expected Business Impact
          </h3>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Improved on-time performance, reduced operational costs,
            and enhanced decision-making through centralized aviation intelligence.
          </p>

          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-blue-500 font-medium">
              <span>Transforming Aviation Operations</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}