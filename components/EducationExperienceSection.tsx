"use client";

import CardSwap, { Card } from "@/components/CardSwap";
import { GraduationCap, BriefcaseBusiness, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationExperienceSection() {
  return (
    
      <motion.section
          className="mx-auto max-w-7xl px-6 py-20 md:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Journey
          </p>
          <h1 className="text-4xl text-white/95 md:text-5xl">
            Education & Experience
          </h1>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">
  <div className="max-w-md pt-6">
    <p className="text-sm uppercase tracking-[0.24em] text-white/35">
      Overview
    </p>

    <p className="mt-8 text-base leading-8 text-white/55">
      A quick look at my academic background, specialization, internship
      experience, and certification path in digital development.
    </p>

    <div className="mt-10 space-y-8">
      <div className="border-l border-white/10 pl-5">
        <p className="text-3xl text-white/95">2</p>
        <p className="mt-1 text-sm text-white/45">
          Academic milestones
        </p>
      </div>

      <div className="border-l border-white/10 pl-5">
        <p className="text-3xl text-white/95">1</p>
        <p className="mt-1 text-sm text-white/45">
          Internship experience
        </p>
      </div>

      <div className="border-l border-white/10 pl-5">
        <p className="text-3xl text-white/95">1</p>
        <p className="mt-1 text-sm text-white/45">
          Certification earned
        </p>
      </div>
    </div>
  </div>

  <div style={{ height: "600px", position: "relative" }}>
    <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover
          >
            <Card className="rounded-[32px] border-white/20 p-0 text-white" style={{ backgroundColor: "#2e3a42" }}>
  <div className="flex h-full flex-col items-center text-center pt-2.5">
    <div className="inline-flex flex-col items-center">
  <div className="flex items-center gap-2">
    <GraduationCap className="h-5 w-5 text-white/80" />
    <h3 className="text-lg font-medium leading-tight text-white/95 md:text-[22px]">
      Formation
    </h3>
  </div>
  <div className="mt-2 h-px w-full bg-white/100" />
</div>
    <div className="mt-12 space-y-6">
      <div>
        <p className="text-sm text-white/45">2023</p>
        <h4 className="mt-2 text-xl text-white/95">
          Baccalaureate in Physical Sciences
        </h4>
        <p className="mt-2 text-sm text-white/60">
          Al Makdisi High School - Casablanca
        </p>
      </div>

      <div>
        <p className="text-sm text-white/45">2024 — 2026</p>
        <h4 className="mt-2 text-xl text-white/95">
          Digital Development Specialist
        </h4>
        <p className="mt-2 text-sm text-white/60">
           Specialized Offshoring Training Institute - Casablanca
        </p>
      </div>
    </div>
  </div>
</Card>

            <Card className="rounded-[32px] border-white/20 p-0 text-white" style={{ backgroundColor: "#2e3a42" }}>
  <div className="flex h-full flex-col items-center text-center pt-2.5">
    <div className="inline-flex flex-col items-center">
  <div className="flex items-center gap-2">
    <BriefcaseBusiness className="h-5 w-5 text-white/80" />
    <h3 className="text-lg font-medium leading-tight text-white/95 md:text-[22px]">
      Internship
    </h3>
  </div>
  <div className="mt-2 h-px w-full bg-white/100" />
</div>

    <div className="mt-12">
      <p className="text-sm text-white/45">2026 · 1 Month</p>
      <h4 className="mt-3 text-2xl text-white/95">
        Web Development Intern
      </h4>
      <p className="mt-2 text-sm text-white/60">Intelcia Intown - Casablanca</p>
      <p className="mx-auto mt-5 max-w-md leading-7 text-white/55">
        Worked on the front-end integration and API liaison,
        connecting user interfaces with backend services to ensure smooth data flow,
        responsive interactions, and a consistent user experience.
      </p>
    </div>
  </div>
</Card>

            <Card className="rounded-[32px] border-white/20 p-0 text-white" style={{ backgroundColor: "#2e3a42" }}>
  <div className="flex h-full flex-col items-center text-center pt-2.5">
    <div className="inline-flex flex-col items-center">
  <div className="flex items-center gap-2">
    <BadgeCheck className="h-5 w-5 text-white/80" />
    <h3 className="text-lg font-medium leading-tight text-white/95 md:text-[22px]">
      Certification
    </h3>
  </div>
  <div className="mt-2 h-px w-full bg-white/100" />
</div>

    <div className="mt-12">
      <p className="text-sm text-white/45">2026</p>
      <h4 className="mt-3 text-2xl text-white/95">
        Certified Fundamental Cybersecurity Partitionner
      </h4>
      <p className="mt-2 text-sm text-white/60">OFPPT</p>
      <p className="mx-auto mt-5 max-w-md leading-7 text-white/55">
        Certified in fundamental cybersecurity principles,
        with knowledge of network security, threat awareness,
        risk management, and secure digital practices.
      </p>
    </div>
  </div>
</Card>
          </CardSwap>
          </div>
        </div>
      </motion.section>
  );
}