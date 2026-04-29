/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { 
  FileText, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Bug, 
  Code, 
  Search, 
  Database, 
  Layout, 
  Brain, 
  ChevronRight,
  Sun,
  Moon,
  Download,
  Award,
  BookOpen,
  User,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Nav = ({ toggleTheme, isDark }: { toggleTheme: () => void, isDark: boolean }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 no-print ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-end items-center">
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {['About', 'Skills', 'Experience', 'Education'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform cursor-pointer relative z-[101]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => window.print()}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 cursor-pointer relative z-[101]"
          >
            <Download size={16} />
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, label }: { children: ReactNode, label?: string }) => (
  <div className="mb-12">
    {label && (
      <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
      {children}
    </h2>
  </div>
);

const SkillCard = ({ icon: Icon, title, description, tags, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass p-6 rounded-2xl border border-border"
  >
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-opacity-10 ${color}`}>
      <Icon className={color.replace('bg-', 'text-')} size={22} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag: string) => (
        <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md bg-secondary text-foreground/60 uppercase tracking-wider">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-primary/30 selection:text-primary ${isDark ? 'dark' : ''}`}>
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40"></div>
      
      <Nav toggleTheme={toggleTheme} isDark={isDark} />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
              QA Engineer
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8 tracking-tight">
              Yuvarajan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Murali</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed">
              A passionate professional with a blend of technical skills and a drive to learn and grow in the software testing industry.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              {[
                { icon: Mail, label: 'yuvarajan471@gmail.com', href: 'mailto:yuvarajan471@gmail.com' },
                { icon: Phone, label: '+91 7010719828', href: 'tel:+917010719828' },
                { icon: MapPin, label: 'Chennai, Tamil Nadu', href: '#' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ scale: 1.02 }}
                  className="px-4 py-3 rounded-xl glass flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-all"
                >
                  <item.icon size={16} />
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Summary</h3>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  "Detail-oriented QA Engineer with strong expertise in Manual Testing, SEO Testing, Python automation, and Web Scraping. 
                  Experienced in validating SEO elements including meta tags, heading structures, canonical tags, and page indexing. 
                  Proficient in SDLC, STLC, and defect management using Jira. Skilled in keyword research, on-page optimization, and local SEO strategies. 
                  Seeking roles in Software Testing or QA to apply technical skills and grow professionally."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={Bug}
              title="Manual Testing"
              description="Meticulous verification of application functionality, user experience, and bug reporting."
              tags={['SDLC', 'STLC', 'Test Scenarios', 'Regression']}
              color="bg-blue-500"
            />
            <SkillCard 
              icon={Layout}
              title="Management Tools"
              description="Efficiently tracking bugs and managing software development life cycles."
              tags={['Jira', 'MS Excel', 'PowerPoint', 'Tally']}
              color="bg-purple-500"
            />
            <SkillCard 
              icon={Code}
              title="Programming"
              description="Developing robust scripts and automation sequences for simple data tasks."
              tags={['Python Basics', 'Logic Design', 'Syntax']}
              color="bg-emerald-500"
            />
            <SkillCard 
              icon={Database}
              title="Web Scraping"
              description="Automating data collection from websites using advanced Python libraries."
              tags={['Requests', 'BeautifulSoup', 'Data Structuring']}
              color="bg-amber-500"
            />
            <SkillCard 
              icon={Search}
              title="SEO Optimization"
              description="Optimizing technical structures and content for search engine dominance."
              tags={['Keyword Analysis', 'On-Page SEO', 'Optimization']}
              color="bg-rose-500"
            />
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6">
          <SectionHeading label="Professional Journey">Work Experience</SectionHeading>
          <p className="text-foreground/60 mb-10 max-w-2xl">
            Professional experience that has shaped my career and skill development.
          </p>
          
          <div className="relative pl-8 border-l border-primary/30">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"></div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl max-w-3xl"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                  <h3 className="text-xl font-bold text-foreground">Project-based (CloseBi)</h3>
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">SEO Testing & Activities</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                Worked on SEO activities for an AI-powered hyperlocal marketing platform. 
                Performed keyword research, optimized content for search visibility, 
                supported local SEO strategies, and conducted comprehensive SEO testing including meta tag validation,
                heading structure compliance, URL and canonical tag verification, and sitemap accuracy checks.
                Additionally executed website data scraping using Python basics to gather hyperlocal business data for enhanced content optimization.
</p>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <SectionHeading label="Academic Foundation">Education</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: '2020', qualification: 'B.Com (Corporate Secretaryship)', school: 'Patrician College of Arts and Science', score: '65%' },
              { year: '2017', qualification: 'Higher Secondary (12th)', school: 'State Board', score: '61%' },
              { year: '2015', qualification: 'SSLC (10th)', school: 'State Board', score: '81.2%' }
            ].map((edu, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl border-t-4 border-primary"
              >
                <div className="text-3xl font-black text-primary mb-2 opacity-50">{edu.score}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{edu.qualification}</h4>
                <p className="text-foreground/60 text-sm mb-4">{edu.school}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-widest">
                  <BookOpen size={14} />
                  Batch {edu.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths & Personal Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Strengths */}
            <div>
              <SectionHeading>Core Strengths</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Brain, label: 'Quick Learner' },
                  { icon: Search, label: 'Detail-Oriented' },
                  { icon: User, label: 'Adaptable & Flexible' },
                  { icon: Award, label: 'Positive Attitude' },
                  { icon: Briefcase, label: 'Under Pressure Performance' }
                ].map((strength) => (
                  <div key={strength.label} className="p-4 glass rounded-xl flex items-center gap-3">
                    <strength.icon className="text-primary" size={20} />
                    <span className="text-sm font-semibold text-foreground/80">{strength.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card no-print">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-bold mb-2 text-foreground uppercase">Yuvarajan Murali</div>
            <p className="text-foreground/50 text-sm">© 2026 Yuvarajan Murali. QA Engineer Portfolio.</p>
          </div>
          
          <div className="flex items-center gap-6 text-foreground">
            <a href="https://www.linkedin.com/in/yuva-rajan-201a52342" className="p-3 rounded-full glass hover:text-primary transition-colors cursor-pointer">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/yuvarajan471-code" className="p-3 rounded-full glass hover:text-primary transition-colors cursor-pointer">
              <Github size={20} />
            </a>
            <a href="mailto:yuvarajan471@gmail.com" className="p-3 rounded-full glass hover:text-primary transition-colors cursor-pointer">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
