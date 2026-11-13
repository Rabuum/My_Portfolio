import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, Building2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../common/SocialIcons";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E5E7EB] bg-white text-[#333333]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0F2D5C] text-white shadow-xs">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-[#0F2D5C] uppercase block leading-none font-heading">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="text-xs font-semibold text-[#4B5563] block uppercase mt-1">
                  {PORTFOLIO_DATA.profile.title}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#4B5563] max-w-md leading-relaxed">
              Passionate Civil Engineering graduate focusing on Water Resources Engineering, hydrology research, and sustainable infrastructure development.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#E5E7EB] bg-[#F5F7FA] text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-2xs"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#E5E7EB] bg-[#F5F7FA] text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#E5E7EB] bg-[#F5F7FA] text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-2xs"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C]">
              Quick Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium text-[#4B5563]">
              {PORTFOLIO_DATA.nav.map((item) => (
                <li key={`foot-${item.id}`}>
                  <Link
                    to={item.path}
                    className="hover:text-[#0F2D5C] hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C]">
              Contact Details
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-[#4B5563]">
              <li>
                <strong className="text-[#333333]">Email:</strong>{" "}
                <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:underline">
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </li>
              <li>
                <strong className="text-[#333333]">Location:</strong> {PORTFOLIO_DATA.profile.location}
              </li>
              <li>
                <strong className="text-[#333333]">Status:</strong> B.E. Graduate · Germany M.Sc. Track
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="mt-12 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F5F7FA] px-3 py-1.5 font-semibold text-[#0F2D5C] hover:bg-[#0F2D5C] hover:text-white transition-all shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
