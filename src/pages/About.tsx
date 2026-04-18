import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Award, Clock } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import TrustBadges from "../components/shared/TrustBadges";
import TestimonialSection from "../components/shared/TestimonialSection";
import CTASection from "../components/shared/CTASection";
import heroImage from "@/assets/hero-about.jpg";

const values = [
  { icon: Heart, title: "Dignity in the details", desc: "Small interface choices matter: readable typography, predictable navigation, and language that sounds like a colleague — not a vendor." },
  { icon: Target, title: "Evidence where it counts", desc: "We instrument the workflows that regulators and families ask about, so you can show your work without building shadow systems in spreadsheets." },
  { icon: Eye, title: "Transparency by design", desc: "Families see what they need; staff see what they are accountable for; leadership sees variance — each view intentional." },
  { icon: Users, title: "Interdisciplinary by default", desc: "Nursing, therapy, dietary, activities, and physicians share one timeline — fewer dropped threads between shifts." },
  { icon: Award, title: "Quiet innovation", desc: "We ship capabilities that reduce cognitive load: smart defaults, guardrails, and automation that never surprises a nurse at 2 a.m." },
  { icon: Clock, title: "Operational discipline", desc: "Change control, audit trails, and release practices modeled on regulated industries — because your residents deserve that rigor." },
];

const milestones = [
  { year: "2016", event: "VitaBloom Health founded in Chicago with a focus on unifying fragmented point solutions in post-acute and senior living." },
  { year: "2018", event: "First enterprise deployments across multi-state operators; launched integrated family communication and structured care planning." },
  { year: "2020", event: "Expanded predictive safety modules and pharmacy interoperability; completed SOC 2 Type II examination." },
  { year: "2023", event: "Surpassed 140 partner sites; introduced advanced analytics workspace for regional and corporate leadership teams." },
  { year: "2026", event: "Serving 165+ sites with a single operating layer spanning clinical, engagement, and revenue operations — ISO 27001 aligned." },
];

const leaders = [
  { name: "Dr. James Whitfield", role: "Chief Medical Officer", bio: "Geriatrician and former academic division chief; focuses on medication safety, fall prevention, and responsible use of predictive models in LTC." },
  { name: "Catherine Brooks", role: "CEO & Co-Founder", bio: "Healthcare operations executive; previously scaled clinical SaaS nationally; advocates for tools that respect bedside time." },
  { name: "Dr. Priya Sharma", role: "VP of Clinical Strategy", bio: "Neurologist with deep memory-care experience; leads protocol design and clinician advisory programs." },
  { name: "Michael Torres", role: "CTO", bio: "Engineering leader from health data platforms; champions privacy-preserving architecture and humane automation." },
];

const About = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative container-main py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8">About VitaBloom Health</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
            Technology that stays in the background — until you need it to be{" "}
            <span className="text-accent">brilliantly visible.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/60 leading-relaxed text-lg mb-10">
            VitaBloom began when operators told us the same story: brilliant caregivers drowning in systems that did not speak to each other. We set out to build one composed layer — secure, accountable, and humane.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-3 gap-8">
            {[{ val: "165+", label: "Partner sites" }, { val: "22+", label: "States" }, { val: "22K+", label: "Residents" }].map((s) => (
              <div key={s.label}><p className="text-3xl font-bold text-accent">{s.val}</p><p className="text-xs text-primary-foreground/40 mt-1 font-medium">{s.label}</p></div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-wider uppercase mb-6">Our mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">Help every senior living organization run with the clarity of a great hospital — and the warmth of a great home.</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">We build software that shortens the distance between insight and action. When teams spend less time reconciling, they spend more time noticing — a change in gait, a missed meal, a worried daughter on the phone.</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <SectionHeader badge="Our journey" title="Steady growth, stubborn quality bar" />
        <div className="max-w-3xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8 items-start">
              <span className="text-2xl font-bold text-primary font-display shrink-0 w-16 pt-1">{m.year}</span>
              <div className="flex-1 pb-10 border-l-2 border-primary/20 pl-8 relative">
                <div className="absolute -left-[5px] top-2.5 w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground leading-relaxed">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <SectionHeader badge="Values" title="What we protect when we ship" subtitle="These principles shape product reviews, support escalations, and how we show up on difficult implementation weeks." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <SectionHeader badge="Leadership" title="People who have carried the pager" subtitle="Executives who have led at scale — and still care about the small screen a nurse squints at during handoff." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((l, i) => (
            <motion.div key={l.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-elevated p-8 text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 mx-auto mb-5 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <span className="text-2xl font-bold text-primary">{l.name.split(" ").map(n=>n[0]).join("")}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground font-sans">{l.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{l.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{l.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <TrustBadges />
    <TestimonialSection />
    <CTASection />
  </>
);

export default About;
