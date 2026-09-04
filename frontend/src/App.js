import { useState } from "react";
import axios from "axios";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Menu, X, ExternalLink, Send, Sparkles } from "lucide-react";
import { Toaster, toast } from "sonner";
import "@/App.css";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const portrait = "https://customer-assets-m6fa6gv7.emergentagent.net/job_c1555852-f358-419c-bf57-b40548ec335e/artifacts/zccfa9ft_profile1.jpeg";
const resume = "https://customer-assets-m6fa6gv7.emergentagent.net/job_c1555852-f358-419c-bf57-b40548ec335e/artifacts/wgjm7asb_Nishchay_Resume%20%281%29.pdf";

const projects = [
  { title: "Spoiler Blocker", year: "2024", type: "AI / Browser Extension", text: "Context-aware spoiler detection using a fine-tuned BERT model and FastAPI.", tags: ["Python", "BERT", "FastAPI"], url: "https://github.com/Nishchay-Bhardwaj/Spoiler-Blocker", number: "01" },
  { title: "Skill Bridge", year: "2025", type: "AI / Product", text: "Resume intelligence that maps skill gaps to personalized learning roadmaps.", tags: ["NLP", "Graph AI", "React"], url: "https://github.com/Nishchay-Bhardwaj/Skill-Bridge", number: "02" },
  { title: "Meet-Mate", year: "2025", type: "AI / Collaboration", text: "A real-time meeting assistant that turns conversation into momentum.", tags: ["Next.js", "Whisper", "BERT"], url: "https://github.com/Nishchay-Bhardwaj/Meet-Mate", number: "03" },
  { title: "Vibe Check Quiz", year: "2024", type: "Web Experience", text: "An animated personality quiz designed to feel as good as the result.", tags: ["JavaScript", "CSS", "UX"], url: "https://github.com/Nishchay-Bhardwaj/vibe-check-quiz", number: "04" },
  { title: "Reelcoders", year: "2023", type: "Community", text: "A space for makers to share, discover and build in public.", tags: ["HTML", "CSS"], url: "https://github.com/Nishchay-Bhardwaj/Reelcoders", number: "05" },
  { title: "Resource Delivery", year: "2023", type: "Systems", text: "A C++ resource management system built with clarity and control.", tags: ["C++", "Systems"], url: "https://github.com/Nishchay-Bhardwaj/Resource-Delivery-System", number: "06" },
];

const skills = ["C / C++", "Java", "Python", "JavaScript", "React", "Node.js", "FastAPI", "MySQL", "Git / GitHub", "DSA", "Operating Systems", "REST APIs"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — I’ll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.detail || "Couldn’t send that. Please try again.");
    } finally { setSending(false); }
  };
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return <div className="site-shell">
    <Toaster position="bottom-right" theme="dark" richColors />
    <nav className="nav" data-testid="site-navigation">
      <button className="wordmark" data-testid="home-navigation-button" onClick={() => go("top")}>NB<span>.</span></button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["Work", "About", "Contact"].map((item) => <button key={item} data-testid={`${item.toLowerCase()}-navigation-button`} onClick={() => go(item.toLowerCase())}>{item}</button>)}
        <a className="nav-availability" data-testid="availability-link" href="mailto:nishchaybhardwaj2004@gmail.com"><i /> Available for opportunities</a>
      </div>
      <button className="menu-button" data-testid="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
    </nav>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="pulse" /> Developer · Builder · Curious mind</div>
          <h1>Making digital<br /><em>things</em> matter<span className="blue">.</span></h1>
          <p className="hero-intro">I’m Nishchay — a computer science student and software developer crafting useful, thoughtful experiences with code.</p>
          <div className="hero-actions"><button className="primary-button" data-testid="explore-work-button" onClick={() => go("work")}>Explore my work <ArrowUpRight size={17} /></button><a className="text-link" data-testid="resume-download-link" href={resume} target="_blank" rel="noreferrer">View resume <Download size={15} /></a></div>
        </div>
        <div className="hero-visual reveal-delay"><div className="portrait-wrap"><img data-testid="profile-photo" src={portrait} alt="Nishchay Bhardwaj" /><div className="portrait-label">NB / 2025</div></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-stamp">CS<br /><span>22—26</span></div></div>
        <div className="hero-meta"><span>01 — 04</span><span>Scroll to explore <span className="scroll-line" /></span></div>
      </section>

      <section id="work" className="work-section section-pad"><div className="section-heading"><div><span className="section-index">01 / Selected work</span><h2>A few things<br /><span>I’ve built.</span></h2></div><p>Ideas are cheap. The fun part is giving them shape, a point of view, and a reason to exist.</p></div><div className="project-grid">{projects.map((project) => <a className="project-card" data-testid={`project-${project.number}-card`} href={project.url} target="_blank" rel="noreferrer" key={project.title}><div className="project-top"><span>{project.number}</span><span>{project.year}</span></div><div className="project-content"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.text}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-arrow"><ArrowUpRight size={21} /></div></a>)}</div><a className="github-banner" data-testid="github-profile-link" href="https://github.com/Nishchay-Bhardwaj" target="_blank" rel="noreferrer"><Github size={20} /><span>See all my code on GitHub</span><ArrowUpRight size={20} /></a></section>

      <section id="about" className="about-section section-pad"><div className="section-heading"><div><span className="section-index">02 / The person behind</span><h2>More than<br /><span>just code.</span></h2></div></div><div className="about-layout"><div className="about-statement"><p>I like working at the intersection of <strong>technology, people, and possibility.</strong></p><p>Currently studying Computer Science at JIIT and interning as an SDE at Hashedin by Deloitte. Outside the editor, I lead communities, organize things, and ask too many questions.</p><div className="about-links"><a data-testid="linkedin-profile-link" href="https://www.linkedin.com/in/nishchay-bhardwaj-223358253/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></a><a data-testid="about-github-link" href="https://github.com/Nishchay-Bhardwaj" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={15} /></a></div></div><div className="facts"><div><span>Currently</span><strong>SDE Intern<br />@ Hashedin by Deloitte</strong></div><div><span>Based in</span><strong><MapPin size={14} /> Noida, India</strong></div><div><span>Education</span><strong>B.Tech Computer Science<br />JIIT · 2022—26</strong></div></div></div><div className="skills-wrap"><span className="section-index">03 / Tools I speak</span><div className="skills-list">{skills.map((skill) => <span data-testid={`skill-${skill.replaceAll(" ", "-").toLowerCase()}`} key={skill}>{skill}</span>)}</div></div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-intro"><span className="section-index">03 / Say hello</span><h2>Have a good<br /><em>idea?</em> Let’s talk<span className="blue">.</span></h2><a className="email-link" data-testid="direct-email-link" href="mailto:nishchaybhardwaj2004@gmail.com">nishchaybhardwaj2004@gmail.com <ArrowUpRight size={18} /></a></div><form className="contact-form" data-testid="contact-form" onSubmit={submit}><label>Your name<input data-testid="contact-name-input" name="name" value={form.name} onChange={update} required placeholder="Jane Smith" /></label><label>Your email<input data-testid="contact-email-input" type="email" name="email" value={form.email} onChange={update} required placeholder="jane@company.com" /></label><label>Tell me about it<textarea data-testid="contact-message-input" name="message" value={form.message} onChange={update} required minLength="10" placeholder="I have a project in mind..." /></label><button className="primary-button send-button" data-testid="contact-submit-button" disabled={sending}>{sending ? "Sending..." : <>Send message <Send size={16} /></>}</button></form></section>
    </main>
    <footer className="footer"><span>© 2025 Nishchay Bhardwaj</span><span>Built with intention <Sparkles size={14} /></span><span>NB<span className="blue">.</span></span></footer>
  </div>;
}

export default App;