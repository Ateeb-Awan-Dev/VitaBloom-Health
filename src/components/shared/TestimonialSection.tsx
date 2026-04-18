import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Dr. Margaret Chen",
    role: "Medical Director, Meridian Senior Communities",
    text: "VitaBloom gave us a shared language across nursing, therapy, and families. Response times improved and our last state survey cited documentation consistency as a strength.",
  },
  {
    name: "Robert Hargrove",
    role: "President, Harborlight Care Network",
    text: "We replaced three overlapping systems. Finance finally sees the same census and acuity picture clinical does — without another late-night spreadsheet.",
  },
  {
    name: "Sarah Mitchell, RN",
    role: "Director of Nursing, Willowcrest Residence",
    text: "The medication module is calm and legible. New hires ramp faster, and our pharmacists trust the audit trail when we collaborate on changes.",
  },
];

const TestimonialSection = () => (
  <section className="section-padding bg-muted/40">
    <div className="container-main">
      <SectionHeader badge="Testimonials" title="Leaders who run tight ships" subtitle="Operators and clinicians who chose VitaBloom Health for a steadier day-to-day — fewer surprises, clearer accountability." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated p-8 relative"
          >
            <Quote className="w-10 h-10 text-primary/10 mb-5" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex gap-1 mb-5">
              {Array(5).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-accent" />)}
            </div>
            <div className="pt-5 border-t border-border/50">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
