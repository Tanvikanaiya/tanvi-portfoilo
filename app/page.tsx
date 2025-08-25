"use client";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import Section from "@/components/Section";
import { PROFILE, SKILLS, PROJECTS, CERTS, EDUCATION } from "@/lib/data";

export default function Page() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section id="home" className="min-h-[88vh] flex items-center">
        <div className="container grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Hi, I'm <span className="text-brand-600">{PROFILE.name}</span>
            </motion.h1>
            <p className="text-lg text-gray-600 mt-4 max-w-xl">{PROFILE.role}</p>
            <div className="flex items-center gap-3 mt-6">
              <a href={PROFILE.github} target="_blank" className="badge border-gray-200 hover:border-brand-400">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" className="badge border-gray-200 hover:border-brand-400">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} className="badge border-gray-200 hover:border-brand-400">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </div>
          </div>

          <div className="justify-self-center">
            <div className="relative size-40 md:size-56 rounded-full overflow-hidden shadow-soft ring-4 ring-white">
              {/* Replace with your photo at /public/avatar.jpg */}
              <Image
                src="/avatar.jpg"
                alt="Tanvi"
                fill
                priority
                sizes="(max-width: 768px) 10rem, 14rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title="About" subtitle="A curious, detail-oriented analyst who loves turning data into decisions.">
        <p className="text-gray-700 max-w-3xl">
          I'm a Computer Science graduate specializing in data analysis & visualization with Python, SQL, and Power BI.
          I’ve completed hands-on projects like Big Mart Sales Prediction, a Movie Recommender, and Churn Analysis.
          I’m growing toward a Data Scientist role.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SKILLS.map((s) => (
            <div key={s} className="card text-center py-3">{s}</div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div key={p.title} className="card">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="badge border-gray-200">{t}</span>
                ))}
              </div>
              {p.link && p.link !== "#" && (
                <a className="inline-block mt-4 text-brand-700 hover:underline" href={p.link} target="_blank">
                  View project
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <ul className="grid gap-3">
          {CERTS.map((c) => (
            <li key={c} className="card">{c}</li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education">
        <div className="grid gap-4">
          {EDUCATION.map((e) => (
            <div key={e.school} className="card">
              <div className="font-semibold">{e.school}</div>
              <div className="text-gray-600">{e.degree}</div>
              <div className="text-gray-500 text-sm">{e.years}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="I’m open to internships and full-time roles in data analytics and data science.">
        <div className="card flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div>
            <div className="font-semibold">Email</div>
            <a href={`mailto:${PROFILE.email}`} className="text-brand-700 hover:underline">{PROFILE.email}</a>
          </div>
          <div className="flex gap-3">
            <a href={PROFILE.github} target="_blank" className="badge border-gray-200">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" className="badge border-gray-200">LinkedIn</a>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-gray-500">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </footer>
    </main>
  );
}
