import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../components/common/SocialIcons";
import { toast, Toaster } from "sonner";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rabin Giri | Civil Engineer" },
      { name: "description", content: "Contact Rabin Giri for research collaborations, graduate admissions, and engineering inquiries." },
    ],
  }),
  component: ContactPage,
});

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TARGET_EMAIL = "rabingiri456@gmail.com";

function ContactPage() {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) { toast.error("Please enter your full name."); return; }
    if (!email || !EMAIL_REGEX.test(email)) { toast.error("Please enter a valid email address."); return; }
    if (!message) { toast.error("Please enter your message."); return; }

    const emailSubject = subject || `Portfolio Inquiry from ${name}`;
    const emailBody = `Hi Rabin,\n\nMy name is ${name} and I am reaching out via your portfolio.\n\n${message}\n\n---\nName: ${name}\nEmail: ${email}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TARGET_EMAIL)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(gmailUrl, "_blank");
    setSubmitted(true);
    toast.success("Gmail opened! Click Send to deliver your message.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans">
      <Toaster position="top-right" richColors />
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#0F2D5C] mb-4">
              <Sparkles className="h-3 w-3" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
              Contact Rabin Giri
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed px-4">
              Open for research collaborations, graduate admissions inquiries, and engineering discussions. Reach out directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">

            {/* LEFT: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden"
            >
              <div className="bg-[#0F2D5C] px-8 py-6">
                <h2 className="text-lg font-bold text-white font-heading">Send a Message</h2>
                <p className="text-xs text-white/70 mt-1">
                  Your message will be delivered directly to <span className="text-white font-semibold">{TARGET_EMAIL}</span>
                </p>
              </div>

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0F2D5C] font-heading">Message Ready to Send!</h3>
                      <p className="mt-2 text-xs text-[#4B5563] leading-relaxed max-w-sm">
                        Your Gmail compose window has opened and is pre-filled. Simply click <strong>Send</strong> in Gmail to deliver your message to Rabin.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#0F2D5C] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1A3D74] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] placeholder-[#9CA3AF] focus:border-[#0F2D5C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2D5C]/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] placeholder-[#9CA3AF] focus:border-[#0F2D5C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2D5C]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-2">Subject</label>
                      <input
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] placeholder-[#9CA3AF] focus:border-[#0F2D5C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2D5C]/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] placeholder-[#9CA3AF] focus:border-[#0F2D5C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2D5C]/10 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F2D5C] py-3.5 text-sm font-bold text-white shadow hover:bg-[#1A3D74] hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Message via Gmail</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </button>

                    <p className="text-center text-[11px] text-[#9CA3AF]">
                      Clicking Send opens your Gmail with the message pre-filled. One click to deliver.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* RIGHT: Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Contact Details Card */}
              <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-6">
                <h3 className="text-sm font-bold text-[#0F2D5C] font-heading mb-5">Contact Details</h3>

                <div className="space-y-4">
                  <a href={`mailto:${TARGET_EMAIL}`} className="flex items-center gap-4 group">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] text-[#0F2D5C]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">Email</div>
                      <div className="text-xs font-semibold text-[#0F2D5C] group-hover:underline">{TARGET_EMAIL}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] text-[#0F2D5C]">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">Response Time</div>
                      <div className="text-xs font-semibold text-[#0F2D5C]">Within 24 Hours</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] text-[#0F2D5C]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">Phone</div>
                      <div className="text-xs font-semibold text-[#0F2D5C]">{profile.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F5F7FA] border border-[#E5E7EB] text-[#0F2D5C]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">Location</div>
                      <div className="text-xs font-semibold text-[#0F2D5C]">{profile.location}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F3F4F6]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-3">Find Me Online</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-xs font-semibold text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white hover:border-[#0F2D5C] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <LinkedinIcon className="h-3.5 w-3.5" />
                        <span>LinkedIn Profile</span>
                      </div>
                      <ArrowRight className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-all" />
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#E5E7EB] px-4 py-2.5 text-xs font-semibold text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white hover:border-[#0F2D5C] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>GitHub — @Rabuum</span>
                      </div>
                      <ArrowRight className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-[#0F2D5C] rounded-3xl p-6 text-white shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Currently Available</span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading leading-snug">
                  Open for Admissions & Research Collaboration
                </h4>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">
                  Applying for M.Sc. programs in Germany — Water Resources Engineering, Hydraulic Modeling & Hydrology.
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
