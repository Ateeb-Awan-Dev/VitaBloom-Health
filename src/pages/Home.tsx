import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Heart, Shield, Activity, Users, BarChart3,
  Pill, Brain, CheckCircle, Sparkles, Flower2
} from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import TrustBadges from "../components/shared/TrustBadges";
import TestimonialSection from "../components/shared/TestimonialSection";
import CTASection from "../components/shared/CTASection";
import heroImage from "@/assets/hero-home.jpg";

const stats = [
  { value: "165+", label: "Partner Sites" },
  { value: "22,000+", label: "Residents on Platform" },
  { value: "99.9%", label: "Measured Uptime" },
  { value: "41%", label: "Fewer Preventable Events" },
];

const features = [
  { icon: Heart, title: "Resident-Centered Workflows", desc: "Care pathways that follow the person, not the template — assessments, preferences, and goals stay aligned from admission through transitions." },
  { icon: Pill, title: "Medication Intelligence", desc: "Electronic MAR, adherence signals, interaction checks, and pharmacy handoffs in one calm interface so nurses spend less time hunting information." },
  { icon: Brain, title: "Cognitive & Functional Insight", desc: "Longitudinal screening, trend visualization, and gentle prompts for follow-up so teams notice change earlier without adding busywork." },
  { icon: Activity, title: "Vitals & Early Warning", desc: "Streaming vitals with sensible thresholds, escalation paths, and audit-friendly documentation when teams intervene." },
  { icon: Users, title: "Family & Care Circle", desc: "A secure channel for updates, visits, and questions — written for busy families, not technologists." },
  { icon: BarChart3, title: "Operational Analytics", desc: "Dashboards leadership actually uses: occupancy, acuity mix, labor, quality, and risk — exportable and board-ready." },
];

const steps = [
  { num: "01", title: "Discover & Align", desc: "We map your current workflows, integrations, and governance so rollout respects how your teams already work." },
  { num: "02", title: "Configure & Train", desc: "Role-based training, sandbox practice, and go-live checklists designed for clinical leaders and frontline staff alike." },
  { num: "03", title: "Operate with Signal", desc: "Live alerts, structured handoffs, and clear ownership so the right person responds at the right time." },
  { num: "04", title: "Measure & Improve", desc: "Quarterly reviews against your goals — safety, satisfaction, and efficiency — with a roadmap for continuous refinement." },
];

const whyUs = [
  { icon: Shield, text: "HIPAA-ready architecture, SOC 2 Type II audited controls, and disciplined access policies so compliance is built in, not bolted on." },
  { icon: CheckCircle, text: "Across our partner network, organizations report fewer preventable incidents and faster response times within the first two quarters after go-live." },
  { icon: Sparkles, text: "Deep integrations with leading EHRs and pharmacy systems — fewer duplicate entries, fewer phone calls, fewer late nights reconciling data." },
  { icon: Users, text: "Implementation teams who have led hundreds of campus activations; you get playbooks, not promises." },
];

const Home = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative container-main py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8"
          >
            <Flower2 className="w-3.5 h-3.5 text-accent" />
            Senior Living Operations Platform
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance"
          >
            Vitality on every floor.{" "}
            <span className="text-accent">Clarity in every decision.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/60 leading-relaxed mb-10 max-w-xl"
          >
            VitaBloom Health brings medication, documentation, family communication, and analytics into one composed experience — so leaders see the whole picture and bedside teams keep their attention where it belongs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/book" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-gradient-accent text-accent-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300">
              Schedule a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary-foreground/15 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/5 transition-all duration-300">
              View Capabilities
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-6 text-xs text-primary-foreground/40 font-medium tracking-wide"
          >
            <span>HIPAA posture</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>SOC 2 Type II</span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/20" />
            <span>ISO 27001 aligned</span>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="relative -mt-8 z-10">
      <div className="container-main">
        <div className="glass-card p-8 md:p-10 glow-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <SectionHeader badge="Why VitaBloom" title="Built for leaders who carry both spreadsheets and stories" subtitle="We design for administrators, directors of nursing, and frontline staff — because software only matters when it respects the pace of real care." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUs.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-5 p-7 card-elevated group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                <w.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/40">
      <div className="container-main">
        <SectionHeader badge="Platform" title="One operating layer for clinical and operational teams" subtitle="Replace fragmented tools with a single source of truth — documented, traceable, and ready for survey season." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-8 group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <SectionHeader badge="Engagement" title="How we partner with your organization" subtitle="No rip-and-replace theatrics — a disciplined sequence that earns trust from week one." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
              <span className="text-6xl font-bold text-primary/8 font-display">{s.num}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1 mb-3 font-sans">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-border" />}
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

export default Home;
