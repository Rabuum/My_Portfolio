import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, Menu, X, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#E5E7EB]"
          : "bg-white border-b border-[#E5E7EB]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-2.5 min-w-0">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F2D5C] text-white shadow-xs transition-transform group-hover:scale-105">
            <Building2 className="h-4.5 w-4.5" />
          </div>
          <div className="min-w-0">
            <span className="text-sm font-extrabold tracking-tight text-[#0F2D5C] uppercase block leading-none font-heading truncate">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="text-[10px] font-bold text-[#4B5563] tracking-widest block uppercase mt-0.5 font-sans">
              Civil Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
          {PORTFOLIO_DATA.nav.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all duration-200 py-1 border-b-2 whitespace-nowrap ${
                  isActive
                    ? "text-[#0F2D5C] border-[#0F2D5C]"
                    : "text-[#4B5563] border-transparent hover:text-[#0F2D5C] hover:border-[#2E5BFF]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Download CV — desktop only */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.profile.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-[#0F2D5C] px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#1A3D74] hover:shadow-md active:scale-95 whitespace-nowrap"
          >
            <Download className="h-3.5 w-3.5 text-white" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-[#E5E7EB] bg-white text-[#0F2D5C] lg:hidden hover:bg-[#F5F7FA] transition-colors flex-shrink-0"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="border-t border-[#E5E7EB] bg-white px-4 pt-2 pb-5 lg:hidden shadow-xl">
          <div className="flex flex-col gap-1">
            {PORTFOLIO_DATA.nav.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={`mob-${item.id}`}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-[#0F2D5C] text-white"
                      : "text-[#333333] hover:bg-[#F5F7FA] hover:text-[#0F2D5C]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-[#E5E7EB]">
              <a
                href={PORTFOLIO_DATA.profile.resumePdf}
                download
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F2D5C] py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
