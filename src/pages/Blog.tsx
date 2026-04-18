import { motion } from "framer-motion";
import { Clock, User, Bookmark, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/shared/CTASection";
import heroImage from "@/assets/hero-blog.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const posts = [
  { slug: "reducing-fall-incidents", title: "Safer floors: pairing human rounding with intelligent signals", excerpt: "How operators reduced preventable falls by combining environmental cues, staffing patterns, and lightweight analytics.", category: "Clinical", author: "Dr. Priya Sharma", date: "Jan 12, 2026", readTime: "8 min", image: blog1 },
  { slug: "future-of-memory-care", title: "Memory care without mystery: longitudinal signals families understand", excerpt: "Translating complex clinical change into clear, respectful updates — without overwhelming busy siblings.", category: "Technology", author: "Catherine Brooks", date: "Jan 4, 2026", readTime: "11 min", image: blog2 },
  { slug: "hipaa-compliance-connected-care", title: "Connected devices and HIPAA: a practical checklist for operators", excerpt: "Encryption, access reviews, BAAs, and the questions your security officer should ask before plug-in season.", category: "Compliance", author: "Legal Advisory Team", date: "Dec 18, 2025", readTime: "10 min", image: blog3 },
  { slug: "person-centered-care-planning", title: "Care plans residents recognize as their own", excerpt: "Moving from boilerplate goals to narratives that travel with the resident across wings, shifts, and providers.", category: "Best practices", author: "Dr. James Whitfield", date: "Dec 2, 2025", readTime: "7 min", image: blog4 },
  { slug: "staff-retention-senior-care", title: "Retention is a design problem — not only a pay problem", excerpt: "Scheduling fairness, documentation burden, and recognition loops that actually land with night-shift teams.", category: "Operations", author: "HR Advisory", date: "Nov 20, 2025", readTime: "9 min", image: blog5 },
  { slug: "family-engagement-portals", title: "Family portals that feel like a conversation, not a bulletin board", excerpt: "Tone, timing, and transparency: what high-satisfaction communities do differently in digital family communication.", category: "Engagement", author: "Product Team", date: "Nov 6, 2025", readTime: "6 min", image: blog6 },
];

const Blog = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative container-main py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8">Insights</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
            The VitaBloom <span className="text-accent">field notes</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/60 leading-relaxed text-lg mb-10">
            Practical writing for executives, DONs, and IT leads — less hype, more nuance. We publish when we have something worth your attention.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-6 text-sm text-primary-foreground/40 font-medium">
            <span className="flex items-center gap-2"><Bookmark className="w-4 h-4" />Curated library</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" />Quarterly deep dives</span>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <Link to={`/blog/${p.slug}`} key={p.slug}>
              <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated overflow-hidden group cursor-pointer h-full">
                <div className="h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/8 text-xs font-medium text-primary">{p.category}</span>
                  <h3 className="text-base font-semibold text-foreground mt-3 mb-3 font-sans leading-snug group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-5 border-t border-border/50">
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{p.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{p.readTime}</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default Blog;
