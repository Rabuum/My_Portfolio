import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Clock, ExternalLink } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../components/common/SocialIcons";
import { toast, Toaster } from "sonner";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rabin Giri | Civil Engineer" },
      {
        name: "description",
        content: "Contact channel for Rabin Giri. Send direct inquiries regarding civil engineering, water resources research, and graduate admissions.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TARGET_EMAIL = "nirallunima@gmail.com";

function ContactPage() {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      toast.error("Please enter a valid email address (e.g. name@domain.com).");
      return;
    }

    if (!message) {
      toast.error("Please enter your message.");
      return;
    }

    // Build email subject and body from form data
    const emailSubject = subject || `Portfolio Inquiry from ${name}`;
    const emailBody =
      `Hi Rabin,\n\nMy name is ${name} and I am writing to you from your portfolio contact form.\n\n${message}\n\n---\nSender Name: ${name}\nSender Email: ${email}\nSent via: Portfolio Contact Form`;

    // Open visitor's Gmail compose — email comes directly from THEIR account
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(TARGET_EMAIL)}` +
      `&su=${encodeURIComponent(emailSubject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.open(gmailUrl, "_blank");

    setSubmitted(true);
    toast.success("Gmail opened! Click Send in the Gmail window to deliver your message.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };


  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans">
      <Toaster position="top-right" richColors />
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner with 2-Column Right Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F2D5C]">
                  <Sparkles className="h-3 w-3" />
                  <span>Get In Touch</span>
                </div>
                <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
                  Contact & Inquiry Channel
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  Open for discussions with university admissions committees, research collaborators, professors, and engineering colleagues. Messages are delivered directly to Rabin Giri's Gmail inbox.
                </p>
              </div>

              {/* Right Column: Quick Highlights */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3.5 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Direct Gmail</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">nirallunima@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3.5 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Response Time</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">Within 24 Hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] p-3.5 shadow-2xs">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#6B7280]">Location</div>
                    <div className="text-xs font-bold text-[#0F2D5C]">Lalitpur, Nepal</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form Container */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold text-[#0F2D5C] font-heading">
                Send a Direct Message
              </h2>
              <p className="mt-1 text-xs text-[#6B7280]">
                Fill in your details and click <strong>Send via Gmail</strong>. Your Gmail will open pre-filled — just click Send and the email arrives directly in Rabin's inbox from <strong>your</strong> email address.
              </p>

              {/* How It Works Banner */}
              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-800 leading-relaxed">
                  <strong className="block text-emerald-900 mb-0.5">How it works:</strong>
                  Fill the form → Click "Send via Gmail" → Your Gmail opens pre-filled → Click Send in Gmail → Email arrives directly from <strong>your email address</strong> in Rabin's inbox.
                </div>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                  <h3 className="mt-3 text-lg font-bold text-emerald-900 font-heading">
                    Gmail Opened! 🎉
                  </h3>
                  <p className="mt-1.5 text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your Gmail compose window should be open and pre-filled. Simply click <strong>Send</strong> in Gmail — the email will be delivered <strong>directly from your email address</strong> to <strong>nirallunima@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 inline-flex items-center rounded-xl bg-[#0F2D5C] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1A3D74] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Alexander Weber"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-xs sm:text-sm text-[#333333] placeholder-[#6B7280] focus:border-[#0F2D5C] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alexander@university.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-xs sm:text-sm text-[#333333] placeholder-[#6B7280] focus:border-[#0F2D5C] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. M.Sc. Water Resources Inquiries"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-xs sm:text-sm text-[#333333] placeholder-[#6B7280] focus:border-[#0F2D5C] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2D5C] uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Type your message or project inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-4 py-3 text-xs sm:text-sm text-[#333333] placeholder-[#6B7280] focus:border-[#0F2D5C] focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2D5C] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#1A3D74] hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send via Gmail</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6B7280] pt-1">
                    <Mail className="h-3.5 w-3.5 text-[#0F2D5C]" />
                    <span>
                      Email sent from <strong>your Gmail</strong> directly to <strong>nirallunima@gmail.com</strong> — no third party
                    </span>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Sidebar: Direct Communication Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Direct Info Card */}
              <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-base font-bold text-[#0F2D5C] font-heading">
                  Direct Communication Details
                </h3>

                <ul className="mt-4 space-y-4 text-xs text-[#333333]">
                  <li className="flex items-start gap-3">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-[#0F2D5C]">Email Address</strong>
                      <a
                        href="mailto:nirallunima@gmail.com"
                        className="text-[#2E5BFF] font-semibold hover:underline"
                      >
                        nirallunima@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-[#0F2D5C]">Phone / WhatsApp</strong>
                      <span className="text-[#4B5563]">{profile.phone}</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#F5F7FA] text-[#0F2D5C] border border-[#E5E7EB]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-[#0F2D5C]">Location</strong>
                      <span className="text-[#4B5563]">{profile.location}</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                  <span className="block text-[11px] font-bold uppercase text-[#0F2D5C] tracking-wider mb-2">
                    Professional Networks
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-3.5 py-2 text-xs font-bold text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-2xs"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] px-3.5 py-2 text-xs font-bold text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-2xs"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="rounded-3xl border border-[#E5E7EB] bg-[#0F2D5C] p-6 text-white shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E5BFF] bg-white/10 px-3 py-1 rounded-full w-max">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Current Status</span>
                </div>
                <h4 className="mt-3 text-base font-extrabold text-white font-heading">
                  Open for Admissions & Research Collaboration
                </h4>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">
                  Currently applying for postgraduate Master's research programs in Germany (DAAD track) focusing on Water Resources Engineering, Hydraulic Modeling, and Hydrology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
