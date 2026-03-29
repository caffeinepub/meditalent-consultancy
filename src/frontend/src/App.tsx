import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  Handshake,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  Twitter,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5"
            data-ocid="header.link"
          >
            <div className="w-9 h-9 rounded-lg bg-teal-800 flex items-center justify-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11 2C11 2 8 5 8 9C8 11.2 9.1 13.1 10.8 14.2V18H13.2V14.2C14.9 13.1 16 11.2 16 9C16 5 13 2 11 2Z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M7 9H15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11 6V12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 18H14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="11"
                  cy="9"
                  r="3"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <div>
              <span className="font-bold text-lg text-teal-800 leading-none">
                MediTalent
              </span>
              <p className="text-[10px] text-muted-foreground leading-none mt-0.5 font-medium tracking-wide uppercase">
                Consultancy
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-teal-800 transition-colors"
                data-ocid="header.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              className="bg-teal-800 hover:bg-teal-700 text-white font-semibold px-5"
              asChild
              data-ocid="header.primary_button"
            >
              <a href="#contact">Find a Match</a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-teal-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-border"
          >
            <nav className="section-container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-teal-800 py-1"
                  onClick={() => setMenuOpen(false)}
                  data-ocid="header.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-teal-800 hover:bg-teal-700 text-white w-full mt-2"
                data-ocid="header.primary_button"
                onClick={() => {
                  setMenuOpen(false);
                  window.location.hash = "contact";
                }}
              >
                Find a Match
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, #0A3542 0%, #0F4B5A 45%, #145A6A 75%, #1a6b7e 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #2A8BB7 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #145A6A 0%, transparent 70%)",
          }}
        />
        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              Trusted Medical Staffing Since 2010
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
              Connecting Top Physicians with Leading Healthcare Facilities
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              MediTalent bridges the gap between exceptional medical talent and
              the healthcare organizations that need them most — faster,
              smarter, and nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-white text-teal-800 hover:bg-teal-50 font-semibold text-sm px-7 shadow-lg"
                asChild
                data-ocid="hero.primary_button"
              >
                <a href="#contact">
                  For Doctors <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/15 bg-white/10 font-semibold text-sm px-7"
                asChild
                data-ocid="hero.secondary_button"
              >
                <a href="#contact">
                  For Hospitals <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/15">
              {[
                { value: "5,000+", label: "Physicians Placed" },
                { value: "800+", label: "Partner Hospitals" },
                { value: "50", label: "States Covered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: doctor image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-end items-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl scale-95" />
              <img
                src="/assets/generated/doctor-hero.dim_600x800.png"
                alt="Medical professional"
                className="relative z-10 max-h-[560px] object-contain drop-shadow-2xl rounded-2xl"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute bottom-8 -left-10 bg-white rounded-xl shadow-card px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-teal-800" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-teal-800">
                    Verified Credentials
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Board-certified specialists
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Physician Placement",
      description:
        "We specialize in matching board-certified physicians with permanent and locum tenens positions across all specialties. Our rigorous vetting process ensures both parties are perfectly aligned.",
    },
    {
      icon: Building2,
      title: "Hospital Staffing",
      description:
        "From critical care to ambulatory settings, we staff healthcare facilities with qualified medical professionals. We handle credentialing, scheduling, and compliance so you can focus on care.",
    },
    {
      icon: Handshake,
      title: "Career Matching",
      description:
        "Our career advisors work one-on-one with physicians to understand their goals, lifestyle preferences, and clinical interests — then find opportunities that truly fit their vision.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mt-2">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Comprehensive staffing and placement solutions tailored for the
            modern healthcare landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="h-full border-border hover:shadow-card-hover transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <service.icon className="w-6 h-6 text-teal-800" />
                  </div>
                  <h3 className="font-bold text-lg text-teal-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Partner ──────────────────────────────────────────────────────────────
function WhyPartner() {
  const bullets = [
    {
      icon: Clock,
      title: "Speed of Placement",
      text: "Average time-to-placement of 14 days — significantly faster than industry standard.",
    },
    {
      icon: CheckCircle2,
      title: "Vetted Candidates",
      text: "Every physician undergoes thorough background checks, credential verification, and reference calls.",
    },
    {
      icon: Globe,
      title: "Nationwide Network",
      text: "Over 800 partner facilities and 12,000 physicians in our database spanning all 50 states.",
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support",
      text: "A personal account manager is assigned to every client and candidate throughout the process.",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: "#EAF4F7" }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mt-2 mb-6">
              Why Partner With Us?
            </h2>
            <div className="space-y-5">
              {bullets.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-800/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-800">{item.title}</p>
                    <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button
              className="mt-8 bg-teal-800 hover:bg-teal-700 text-white font-semibold px-6"
              asChild
              data-ocid="why_partner.primary_button"
            >
              <a href="#contact">Partner With Us Today</a>
            </Button>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/assets/generated/doctors-collaborating.dim_500x400.jpg"
              alt="Doctors collaborating"
              className="w-full max-w-md rounded-2xl shadow-card-hover object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── About Us ─────────────────────────────────────────────────────────────────
function AboutUs() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src="/assets/generated/doctors-team.dim_600x400.jpg"
              alt="MediTalent team of clinicians"
              className="w-full rounded-2xl shadow-card-hover object-cover"
            />
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mt-2 mb-5">
              About MediTalent
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2010, MediTalent Consultancy was born from a simple but
              powerful idea: physicians deserve a placement partner who truly
              understands medicine — not just recruiting. Our founding team of
              former clinicians and healthcare administrators set out to
              revolutionize how hospitals find talent and how doctors find
              fulfilling careers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, MediTalent is one of the nation's leading physician
              placement agencies, trusted by more than 800 healthcare facilities
              and thousands of physicians across all 50 states. We specialize in
              permanent placements, locum tenens staffing, and executive-level
              medical leadership roles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is simple:{" "}
              <span className="text-teal-800 font-medium">
                right doctor, right place, right time
              </span>
              . We take pride in relationships built on trust, transparency, and
              a relentless commitment to excellence in healthcare staffing.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: Users, label: "Physician-Founded" },
                { icon: Globe, label: "All 50 States" },
                { icon: CheckCircle2, label: "JCAHO Compliant" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <badge.icon className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-teal-800">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
type FormState = {
  name: string;
  email: string;
  phone: string;
  specialization: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please include a message.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mt-2">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Ready to find your perfect match? Reach out today and a MediTalent
            advisor will get back to you within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-16"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-teal-800" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for reaching out. A MediTalent advisor will
                    contact you within one business day.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-teal-800 text-teal-800 hover:bg-teal-50"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        specialization: "",
                        message: "",
                      });
                    }}
                    data-ocid="contact.secondary_button"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="contact.modal"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Dr. Jane Smith"
                        className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
                        data-ocid="contact.input"
                      />
                      {errors.name && (
                        <p
                          className="text-red-500 text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@example.com"
                        className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                        data-ocid="contact.input"
                      />
                      {errors.email && (
                        <p
                          className="text-red-500 text-xs mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+1 (555) 000-0000"
                        className="mt-1"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="specialization"
                        className="text-sm font-medium text-foreground"
                      >
                        Specialization
                      </Label>
                      <Input
                        id="specialization"
                        value={form.specialization}
                        onChange={update("specialization")}
                        placeholder="e.g. Cardiology"
                        className="mt-1"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your staffing needs or career goals..."
                      rows={5}
                      className={`mt-1 resize-none ${errors.message ? "border-red-500" : ""}`}
                      data-ocid="contact.textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-red-500 text-xs mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-800 hover:bg-teal-700 text-white font-semibold py-2.5"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+18006337823"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <Phone className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-teal-800 text-sm">
                      +1 800-MED-STAFF
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@medstaff.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <Mail className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-teal-800 text-sm">
                      info@medstaff.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="font-medium text-teal-800 text-sm">
                      350 Medical Drive, Suite 400
                      <br />
                      Chicago, IL 60601
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="flex-1 min-h-[220px] rounded-2xl overflow-hidden relative bg-teal-50 border border-border flex flex-col items-center justify-center"
              data-ocid="contact.map_marker"
            >
              {/* Stylized map grid */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="mapgrid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#0F4B5A"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)" />
              </svg>
              {/* Simulated roads */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="35%"
                  x2="100%"
                  y2="35%"
                  stroke="#0F4B5A"
                  strokeWidth="2"
                />
                <line
                  x1="0"
                  y1="65%"
                  x2="100%"
                  y2="65%"
                  stroke="#0F4B5A"
                  strokeWidth="1.5"
                />
                <line
                  x1="30%"
                  y1="0"
                  x2="30%"
                  y2="100%"
                  stroke="#0F4B5A"
                  strokeWidth="2"
                />
                <line
                  x1="60%"
                  y1="0"
                  x2="60%"
                  y2="100%"
                  stroke="#0F4B5A"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-teal-800 font-semibold text-sm">
                  MediTalent HQ
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-600 underline underline-offset-2 hover:text-teal-800"
                >
                  View on Map
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ backgroundColor: "#1F2A33" }} className="text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-600/40 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M11 2C11 2 8 5 8 9C8 11.2 9.1 13.1 10.8 14.2V18H13.2V14.2C14.9 13.1 16 11.2 16 9C16 5 13 2 11 2Z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M7 9H15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 6V12"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="11"
                    cy="9"
                    r="3"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
              <span className="font-bold text-base text-white">MediTalent</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              Connecting top physicians with leading healthcare facilities since
              2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white/80 text-sm mb-3 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col">
            <p className="font-semibold text-white/80 text-sm mb-3 uppercase tracking-wider">
              Follow Us
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-teal-600/60 flex items-center justify-center transition-colors"
                  data-ocid="footer.link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {year} MediTalent Consultancy. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyPartner />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
