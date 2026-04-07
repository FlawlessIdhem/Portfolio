"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaReact,FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiNextjsFill } from "react-icons/ri";
import AnimatedButton from "@/components/AnimatedButton";
import LightRays from "@/components/LightRays";
import HeroRevealPortrait from "@/components/HeroRevealPortrait";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import EducationExperienceSection from "@/components/EducationExperienceSection";

type Project = {
  title: string;
  category: string;
  description: string;
  logo: string;
  slug: string;
  background?: string;
};

type Skill = {
  name: string;
  icon: ReactNode;
  code: ReactNode;
};

 const projects: Project[] = [
  {
    title: "LOST",
    category: "Video game",
    description: "A project with a bold visual identity and immersive direction.",
    logo: "/projects/Lost.png",
    slug: "lost",
    background: "/projects/LostHome.png",
  },
  {
    title: "Coming Soon",
    category: "Project Concept",
    description: "A new project currently in development and not yet revealed.",
    logo: "/projects/Coming.png",
    slug: "coming-soon",
    background: "",
  },
  {
    title: "AC Casablanca",
    category: "Football Club",
    description: "A branded project with a strong identity and recognizable presence.",
    logo: "/projects/AC_Casablanca.png",
    slug: "ac-casablanca",
    background: "",
  },
];
const skills: Skill[] = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    code: (
      <>
        <div>
          <span className="text-[#c97b6c]">&lt;section</span>{" "}
          <span className="text-[#90a9ba]">class</span>=
          <span className="text-[#cdd8df]">"hero"</span>
          <span className="text-[#c97b6c]">&gt;</span>
        </div>
        <div className="pl-6">
          <span className="text-[#c97b6c]">&lt;h1&gt;</span>
          <span className="text-white/80">El Mehdi Faris</span>
          <span className="text-[#c97b6c]">&lt;/h1&gt;</span>
        </div>
        <div className="pl-6">
          <span className="text-[#c97b6c]">&lt;p&gt;</span>
          <span className="text-white/70">
            Modern frontend developer portfolio
          </span>
          <span className="text-[#c97b6c]">&lt;/p&gt;</span>
        </div>
        <div className="pl-6">
          <span className="text-[#c97b6c]">&lt;a</span>{" "}
          <span className="text-[#90a9ba]">href</span>=
          <span className="text-[#cdd8df]">"#projects"</span>
          <span className="text-[#c97b6c]">&gt;</span>
          <span className="text-white/80">View Projects</span>
          <span className="text-[#c97b6c]">&lt;/a&gt;</span>
        </div>
        <div>
          <span className="text-[#c97b6c]">&lt;/section&gt;</span>
        </div>
      </>
    ),
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    code: (
      <>
        <div>
          <span className="text-[#90a9ba]">.hero</span>{" "}
          <span className="text-white/70">{"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-[#90a9ba]">background</span>:{" "}
          <span className="text-[#cdd8df]">
            linear-gradient(180deg, #33424d, #25313a)
          </span>
          ;
        </div>
        <div className="pl-6">
          <span className="text-[#90a9ba]">color</span>:{" "}
          <span className="text-white/70">#f2f5f7</span>;
        </div>
        <div className="pl-6">
          <span className="text-[#90a9ba]">padding</span>:{" "}
          <span className="text-[#cdd8df]">6rem 2rem</span>;
        </div>
        <div>
          <span className="text-white/70">{"}"}</span>
        </div>
      </>
    ),
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    code: (
      <>
        <div>
          <span className="text-[#c97b6c]">const</span>{" "}
          <span className="text-white/75">cards</span>{" "}
          <span className="text-[#c97b6c]">=</span>{" "}
          <span className="text-white/75">document</span>.
          <span className="text-[#b2c2cf]">querySelectorAll</span>
          <span className="text-white/75">(</span>
          <span className="text-[#cdd8df]">".project-card"</span>
          <span className="text-white/75">);</span>
        </div>
        <div className="mt-4">
          <span className="text-white/75">cards</span>.
          <span className="text-[#b2c2cf]">forEach</span>
          <span className="text-white/75">((card) =&gt; {"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-white/75">card</span>.
          <span className="text-[#b2c2cf]">addEventListener</span>
          <span className="text-white/75">(</span>
          <span className="text-[#cdd8df]">"mouseenter"</span>
          <span className="text-white/75">, () =&gt; {"{"}</span>
        </div>
        <div className="pl-12">
          <span className="text-white/75">card</span>.
          <span className="text-[#90a9ba]">style</span>.
          <span className="text-[#90a9ba]">transform</span>{" "}
          <span className="text-[#c97b6c]">=</span>{" "}
          <span className="text-[#cdd8df]">
            "translateY(-8px) scale(1.02)"
          </span>
          ;
        </div>
        <div className="pl-6">
          <span className="text-white/75">{"}"});</span>
        </div>
        <div>
          <span className="text-white/75">{"}"});</span>
        </div>
      </>
    ),
  },
  {
    name: "React",
    icon: <FaReact />,
    code: (
      <>
        <div>
          <span className="text-[#c97b6c]">export default function</span>{" "}
          <span className="text-[#b2c2cf]">Hero</span>
          <span className="text-white/75">() {"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-[#c97b6c]">return</span>{" "}
          <span className="text-white/75">(</span>
        </div>
        <div className="pl-12">
          <span className="text-[#c97b6c]">&lt;section</span>{" "}
          <span className="text-[#90a9ba]">className</span>=
          <span className="text-[#cdd8df]">"hero"</span>
          <span className="text-[#c97b6c]">&gt;</span>
        </div>
        <div className="pl-16">
          <span className="text-[#c97b6c]">&lt;h1&gt;</span>
          <span className="text-white/80">
            I design and build modern web experiences.
          </span>
          <span className="text-[#c97b6c]">&lt;/h1&gt;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#c97b6c]">&lt;/section&gt;</span>
        </div>
        <div className="pl-6">
          <span className="text-white/75">);</span>
        </div>
        <div>
          <span className="text-white/75">{"}"}</span>
        </div>
      </>
    ),
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    code: (
      <>
        <div>
          <span className="text-[#c97b6c]">export default function</span>{" "}
          <span className="text-[#b2c2cf]">HomePage</span>
          <span className="text-white/75">() {"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-[#c97b6c]">return</span>{" "}
          <span className="text-white/75">(</span>
        </div>
        <div className="pl-12">
          <span className="text-[#c97b6c]">&lt;main&gt;</span>
        </div>
        <div className="pl-16">
          <span className="text-[#c97b6c]">&lt;ProjectsCarousel /&gt;</span>
        </div>
        <div className="pl-16">
          <span className="text-[#c97b6c]">&lt;SkillsCarousel /&gt;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#c97b6c]">&lt;/main&gt;</span>
        </div>
        <div className="pl-6">
          <span className="text-white/75">);</span>
        </div>
        <div>
          <span className="text-white/75">{"}"}</span>
        </div>
      </>
    ),
  },
  {
    name: "Laravel",
    icon: <FaLaravel />,
    code: (
      <>
        <div>
          <span className="text-[#b2c2cf]">Route</span>::
          <span className="text-[#90a9ba]">get</span>
          <span className="text-white/75">(</span>
          <span className="text-[#cdd8df]">'/projects'</span>
          <span className="text-white/75">, function () {"{"}</span>
        </div>
        <div className="pl-6">
          <span className="text-[#c97b6c]">return</span>{" "}
          <span className="text-[#b2c2cf]">view</span>
          <span className="text-white/75">(</span>
          <span className="text-[#cdd8df]">'projects.index'</span>
          <span className="text-white/75">, [</span>
        </div>
        <div className="pl-12">
          <span className="text-[#cdd8df]">'featured'</span>{" "}
          <span className="text-[#c97b6c]">=&gt;</span>{" "}
          <span className="text-[#b2c2cf]">Project</span>::
          <span className="text-[#90a9ba]">latest</span>
          <span className="text-white/75">()-&gt;</span>
          <span className="text-[#90a9ba]">take</span>
          <span className="text-white/75">(3)-&gt;</span>
          <span className="text-[#90a9ba]">get</span>
          <span className="text-white/75">()</span>
        </div>
        <div className="pl-6">
          <span className="text-white/75">]);</span>
        </div>
        <div>
          <span className="text-white/75">{"}"});</span>
        </div>
      </>
    ),
  },
];

function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  

  return (
    <motion.section
  id="projects"
  className="relative w-full py-24"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1, ease: "easeOut" }}
>

  <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
          Work Collection
        </p>
        <h2 className="text-4xl text-white/95 md:text-5xl">Selected Projects</h2>
      </div>

      <div className="relative mx-auto flex h-[560px] items-center justify-center overflow-hidden">
        {projects.map((project, index) => {
          let offset = activeIndex === null ? index : index - activeIndex;

          if (offset > projects.length / 2) offset -= projects.length;
          if (offset < -projects.length / 2) offset += projects.length;

          const isActive = offset === 0;

          let x = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;

          if (offset === 0) {
            x = 0;
            scale = 1;
            opacity = 1;
            zIndex = 30;
          } else if (offset === -1) {
            x = -390;
            scale = 0.84;
            opacity = 0.58;
            zIndex = 20;
          } else if (offset === 1) {
            x = 390;
            scale = 0.84;
            opacity = 0.58;
            zIndex = 20;
          } else {
            opacity = 0;
            scale = 0.7;
            zIndex = 0;
          }

          return (
            <motion.div
              key={project.title}
              animate={{ x, scale, opacity }}
              whileHover={{ y: -8, scale: isActive ? 1.02 : 0.87 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(index)}
              className="absolute w-[300px] cursor-pointer md:w-[390px]"
              style={{ zIndex }}
            >
              <div
                className={`overflow-hidden rounded-[28px] border transition-all duration-500 ${
                  isActive
                    ? "border-white/12 bg-white/[0.05] shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
                    : "border-white/6 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                }`}
              >
                <div className="h-60 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-0">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-white/40">
                    {project.category}
                  </p>

                  <h3 className="mb-3 text-2xl text-white/95">{project.title}</h3>

                  <p className="mb-6 leading-7 text-white/50">
                    {project.description}
                  </p>

                  <AnimatedButton text="View Case Study" variant="ghost" />
                </div>
              </div>
              
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center gap-3">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-[2px] transition-all ${
              activeIndex === index ? "w-10 bg-white/60" : "w-5 bg-white/15"
            }`}
          />
        ))}
      </div>
      </div>
    </motion.section>
  );
}

function SkillsCarousel() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const wheelRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const startAngleRef = useRef(0);
  const startRotationRef = useRef(0);
  const lastAngleRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const total = skills.length;
  const step = 360 / total;

  const stopMomentum = () => {
  if (frameRef.current !== null) {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
  }
};

const startMomentum = () => {
  stopMomentum();

  const tick = () => {
    velocityRef.current *= 0.98;

    if (Math.abs(velocityRef.current) < 0.05) {
      frameRef.current = null;
      return;
    }

    setRotation((prev) => prev + velocityRef.current);
    frameRef.current = requestAnimationFrame(tick);
  };

  frameRef.current = requestAnimationFrame(tick);
};

  const normalizeAngle = (angle: number) => {
    let a = angle % 360;
    if (a < 0) a += 360;
    return a;
  };

  const getActiveIndex = () => {
    const normalized = normalizeAngle(rotation);
    const rawIndex = Math.round(normalized / step) % total;
    return (total - rawIndex) % total;
  };

  const activeSkillIndex = getActiveIndex();
  const activeSkill = skills[activeSkillIndex];

  const getPointerAngle = (clientX: number, clientY: number) => {
    const rect = wheelRef.current?.getBoundingClientRect();
    if (!rect) return 0;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
  stopMomentum();
  draggingRef.current = true;
  setIsDragging(true);

  const angle = getPointerAngle(e.clientX, e.clientY);

  startAngleRef.current = angle;
  startRotationRef.current = rotation;
  lastAngleRef.current = angle;
  lastTimeRef.current = performance.now();
  velocityRef.current = 0;

  e.currentTarget.setPointerCapture(e.pointerId);
};

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
  if (!draggingRef.current) return;

  const currentAngle = getPointerAngle(e.clientX, e.clientY);
  let deltaAngle = currentAngle - startAngleRef.current;

  if (deltaAngle > 180) deltaAngle -= 360;
  if (deltaAngle < -180) deltaAngle += 360;

  setRotation(startRotationRef.current - deltaAngle);

  const now = performance.now();
  let frameDelta = currentAngle - lastAngleRef.current;

  if (frameDelta > 180) frameDelta -= 360;
  if (frameDelta < -180) frameDelta += 360;

  const dt = now - lastTimeRef.current;

  if (dt > 0) {
    velocityRef.current = -(frameDelta / dt) * 15;
  }

  lastAngleRef.current = currentAngle;
  lastTimeRef.current = now;
};

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
  if (!draggingRef.current) return;

  draggingRef.current = false;
  setIsDragging(false);

  if (e.currentTarget.hasPointerCapture(e.pointerId)) {
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  startMomentum();
};

  return (
    <motion.section
      id="skills"
      className="py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
          Tools & Stack
        </p>
        <h2 className="text-4xl text-white/95 md:text-5xl">Skills</h2>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-white/[0.04] px-6 py-16 md:px-10">
        <motion.div
          key={activeSkill.name}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 0.18, filter: "blur(0px)" }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="h-full w-full overflow-hidden px-8 py-8 md:px-12 md:py-10">
            <div className="grid h-full grid-cols-1 gap-4 text-left font-mono text-[18px] leading-9 md:text-[22px] md:leading-10">
              {activeSkill.code}
              {activeSkill.code}
            </div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(47,62,73,0.26),rgba(47,62,73,0.1),rgba(47,62,73,0.28))]" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 text-center">
            <div className="text-[12px] uppercase tracking-[0.28em] text-white/35">
              Click and drag to rotate
            </div>
          </div>

          <div className="relative flex h-[430px] w-full items-center justify-center overflow-hidden">
            <div
              ref={wheelRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className={`relative h-[340px] w-[340px] select-none md:h-[400px] md:w-[400px] ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ touchAction: "none" }}
            >
              {skills.map((skill, index) => {
                const angleDeg = index * step + rotation;
                const angle = (angleDeg * Math.PI) / 180;

                
                const radius = 145;

                const x = Math.sin(angle) * radius;
                const y = Math.cos(angle) * radius;

                const depth = (Math.cos(angle) + 1) / 2;
                const scale = 1;
                const opacity = 1;
                const isActive = index === activeSkillIndex;

                return (
                  <motion.button
                    key={skill.name}
                    type="button"
                    onClick={() => {
                      if (!draggingRef.current) setRotation(-index * step);
                    }}
                    animate={{ x, y, scale, opacity }}
                    transition={{
                      duration: isDragging ? 0 : 0.18,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center bg-transparent"
                    style={{ zIndex: Math.round(depth * 100) }}
                  >
                    <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[26px] text-white/85 shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 md:h-24 md:w-24 md:text-[30px]">
                      {skill.icon}
                    </div>

                    <p className="text-xs text-white/80 transition-all duration-300 md:text-sm">
  {skill.name}
</p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          

          <div className="relative z-10 mt-8 flex justify-center gap-3">
            {skills.map((skill, index) => {
              const isActive = index === activeSkillIndex;
              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() => setRotation(-index * step)}
                  className={`h-[2px] transition-all ${
                    isActive ? "w-10 bg-white/60" : "w-5 bg-white/15"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function HeroPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: -3 }}
      className="relative z-20 w-full max-w-[560px]"
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
    >
      <div className="absolute -left-8 top-10 h-[86%] w-[92%] rounded-[34px] border border-white/5 bg-white/[0.03] backdrop-blur-sm" />
      <div className="absolute -right-6 top-20 h-[78%] w-[88%] rounded-[30px] border border-white/5 bg-black/10 backdrop-blur-sm" />

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_45px_120px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.28em] text-white/35">
            Featured Preview
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.4fr_0.85fr]">
          <div className="rounded-[24px] border border-white/8 bg-black/10 p-5">
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/35">
              Homepage Concept
            </div>
            <div className="mb-4 h-36 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4">
              <div className="mb-3 h-2.5 w-1/3 bg-white/10" />
              <div className="mb-2 h-2.5 w-3/4 bg-white/10" />
              <div className="mb-2 h-2.5 w-2/3 bg-white/10" />
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-12 rounded-xl bg-white/6" />
                <div className="h-12 rounded-xl bg-white/6" />
                <div className="h-12 rounded-xl bg-white/6" />
              </div>
            </div>
            <div className="h-2.5 w-2/3 bg-white/10" />
          </div>

          <div className="grid gap-4">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/35">
                Status
              </div>
              <div className="text-sm text-white/80">Available for freelance</div>
            </div>

            <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/35">
                Focus
              </div>
              <div className="text-sm text-white/80">
                UI systems, motion, premium frontend
              </div>
            </div>

            <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/35">
                Stack
              </div>
              <div className="text-sm text-white/80">React / Next / Laravel</div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 top-10 hidden rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/65 shadow-[0_15px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm md:block"
      >
        Premium Motion UI
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-12 bottom-16 hidden rounded-[18px] border border-white/10 bg-black/10 px-4 py-3 text-sm text-white/70 shadow-[0_15px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm md:block"
      >
        10+ crafted interfaces
      </motion.div>
    </motion.div>
  );
}


export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
const [sending, setSending] = useState(false);
const [status, setStatus] = useState("");

const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  setSending(true);
  setStatus("");

  try {
    await emailjs.sendForm(
      "service_brpsh23",
      "template_uz6ry8q",
      formRef.current,
      {
        publicKey: "ezE9wtlP82EB7ly07",
      }
    );

    setStatus("Message sent successfully.");
    formRef.current.reset();
  } catch (error) {
    setStatus("Failed to send message.");
    console.error(error);
  } finally {
    setSending(false);
  }
};
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-[var(--text-main)]">
      <section className="relative h-screen overflow-hidden">
        {/* Full first-screen rays */}
        <div className="absolute inset-0 z-[1]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.8}
            lightSpread={1}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.08}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            className="opacity-60"
          />
        </div>

        {/* Left bar */}
        <div className="absolute left-0 top-0 z-20 hidden h-screen w-[72px] border-r border-white/5 bg-white/5 md:block">
          <div className="flex h-16 items-center justify-center border-b border-white/5 text-xl text-white/70">
            ☰
          </div>

          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4">
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://github.com/FlawlessIdhem"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={14} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farismehdi123@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              <HiOutlineMail size={16} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pt-8 md:px-8 md:pl-28">
          <header className="mb-16 flex items-center justify-between">
            <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="El Mehdi Faris logo"
              className="h-12 w-auto"
            />
          </Link>

            <nav className="hidden items-center gap-10 text-[12px] text-white/70 md:flex">
              {[
                { label: "Home", href: "#home", active: true },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative pb-2 transition ${
                    item.active ? "text-white" : "hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-white/50 transition-all duration-300 ${
                      item.active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </nav>

            <a href="/cv.pdf" download>
              <AnimatedButton text="Download CV" variant="ghost" />
            </a>
          </header>

          <section
            id="home"
            className="grid flex-1 items-start gap-12 pt-8 md:grid-cols-2 md:pt-12"
          >
            <motion.div
              className="max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="mb-4 text-[12px] uppercase tracking-[0.28em] text-white/45">
                Full-Stack Developer
              </p>

              <h1 className="text-4xl leading-[1.04] text-white/95 md:text-5xl">
                Hi,I'm Mehdi,a creative developer.
              </h1>

              <p className="mt-5 max-w-[46ch] text-[14px] leading-7 text-white/50">
                I work on both front-end and back-end development, creating
                responsive and functional digital products with a simple modern
                feel.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <AnimatedButton
                  text="View Projects"
                  href="#projects"
                  variant="solid"
                />
                <AnimatedButton
                  text="Contact Me"
                  href="#contact"
                  variant="ghost"
                />
              </div>
            </motion.div>

            <div className="flex h-full items-end justify-center md:justify-end">
            <div className="relative h-[460px] w-full max-w-[360px] md:h-[520px] md:max-w-[390px]">
              <HeroRevealPortrait
                baseImage="/me.png"
                revealImage="/anony.png"
              />

              <div className="absolute bottom-[190px] left-1/3 h-px w-[480px] -translate-x-1/2 bg-white opacity-60" />

              <img
                src="/signature.png"
                alt="Signature"
                className="absolute bottom-[180px] left-1/2 w-[110px] -translate-x-[320px] opacity-50"
              />
            </div>
          </div>
          </section>
        </div>
      </section>

      <ProjectsCarousel />

<section className="relative z-10">
  <div className="mx-auto max-w-7xl px-6 md:px-8 md:pl-28">
    <SkillsCarousel />
    <EducationExperienceSection />
    <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1, ease: "easeOut" }}
    >
  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
    Get In Touch
  </p>
  <h2 className="text-4xl text-white/95 md:text-5xl">Contact Me</h2>
</motion.div>
   <motion.section
  id="contact"
  className="mb-20 grid gap-8 rounded-[32px] border border-white/8 bg-white/[0.04] p-8 md:grid-cols-2"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <div>
    <h3 className="mb-6 text-4xl leading-tight text-white/95">
      Let&apos;s create something great together.
    </h3>
    <p className="max-w-lg text-lg leading-8 text-white/55">
      Available for freelance work, collaborations, and interesting
      opportunities.
    </p>
  </div>

  <form ref={formRef} onSubmit={sendEmail} className="grid gap-4">
    <input
      type="text"
      name="user_name"
      placeholder="Your name"
      required
      className="rounded-none border border-white/10 bg-black/10 px-5 py-4 outline-none placeholder:text-white/35"
    />
    <input
      type="email"
      name="user_email"
      placeholder="Your email"
      required
      className="rounded-none border border-white/10 bg-black/10 px-5 py-4 outline-none placeholder:text-white/35"
    />
    <textarea
      name="message"
      placeholder="Your message"
      rows={5}
      required
      className="rounded-none border border-white/10 bg-black/10 px-5 py-4 outline-none placeholder:text-white/35"
    />
    <AnimatedButton
  text={sending ? "Sending..." : "Send Message"}
  variant="solid"
  type="submit"
/>

    {status && <p className="text-sm text-white/70">{status}</p>}
  </form>
</motion.section>
        </div>
      </section>
    </main>
  );
}