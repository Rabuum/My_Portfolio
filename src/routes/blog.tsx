import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Search,
  Sparkles,
  X,
  Droplets,
  Layers,
  Compass,
  Building2,
  Mail,
  ChevronRight,
  Share2,
  Check,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PORTFOLIO_DATA, BlogPost } from "../data/portfolio";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Technical Articles — Rabin Giri | Civil Engineer" },
      {
        name: "description",
        content:
          "Civil engineering insights, personal journey, research notes, and technical articles by Rabin Giri covering water resources, Melamchi river hydraulics, self-healing concrete, and quality assurance.",
      },
    ],
  }),
  component: BlogPage,
});

const CATEGORY_ICONS: Record<string, typeof Building2> = {
  "Water Resources": Droplets,
  "Concrete & Materials": Layers,
  "Quality Assurance": Building2,
  "GIS & Hydrology": Compass,
};

function renderFormattedText(text: string) {
  // Support [label](url), **bold**, and *italic*
  const tokenRegex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*)/g;
  const parts = text.split(tokenRegex);
  return parts.map((part, index) => {
    if (!part) return null;
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0F2D5C] font-semibold underline decoration-[#0F2D5C]/40 hover:decoration-[#2E5BFF] hover:text-[#2E5BFF] transition-colors"
        >
          {label}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-[#0F2D5C]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index} className="italic text-[#1E3A8A]">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function BlogPage() {
  const { blogPosts, profile } = PORTFOLIO_DATA;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync with URL query parameter on mount and back/forward navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const postId = params.get("post") || params.get("id");
      const slug = params.get("slug");
      if (postId) {
        const found = blogPosts.find((p) => p.id === postId);
        if (found) setActiveModalPost(found);
      } else if (slug) {
        const found = blogPosts.find((p) => p.slug === slug);
        if (found) setActiveModalPost(found);
      }
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [blogPosts]);

  const handleOpenPost = (post: BlogPost) => {
    setActiveModalPost(post);
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}?post=${encodeURIComponent(post.id)}`;
      window.history.pushState({ postId: post.id }, "", newUrl);
    }
  };

  const handleClosePost = () => {
    setActiveModalPost(null);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", window.location.pathname);
    }
  };

  const handleCopyLink = (post: BlogPost) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/blog?post=${encodeURIComponent(post.id)}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const categories = useMemo(() => {
    const list = Array.from(new Set(blogPosts.map((p) => p.category)));
    return ["All", ...list];
  }, [blogPosts]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, [blogPosts]);

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333333] flex flex-col font-sans selection:bg-[#0F2D5C] selection:text-white">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2D5C]/10 border border-[#0F2D5C]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0F2D5C]">
                <Sparkles className="h-3 w-3" />
                <span>Technical Notes & Research Publications</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D5C] font-heading tracking-tight">
                Engineering & Research Blog
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Reflections, personal motivation, experimental laboratory findings, and computational modeling strategies in
                Water Resources Engineering, river hydraulics, flood resilience, and autonomous self-healing concrete.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search articles by title, tag, or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-[#E5E7EB] bg-[#F5F7FA] text-[#333333] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F2D5C] focus:bg-white transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#333333]"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const Icon = cat !== "All" ? CATEGORY_ICONS[cat] : BookOpen;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "bg-[#0F2D5C] text-white shadow-xs"
                          : "bg-[#F5F7FA] text-[#4B5563] border border-[#E5E7EB] hover:bg-[#E5E7EB] hover:text-[#0F2D5C]"
                      }`}
                    >
                      {Icon && <Icon className="h-3 w-3" />}
                      <span>{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Featured Post Spotlight (When not filtering/searching) */}
          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 rounded-3xl border border-[#E5E7EB] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow group cursor-pointer"
              onClick={() => handleOpenPost(featuredPost)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] bg-[#0F2D5C]/5 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#0F2D5C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    <Sparkles className="h-3 w-3 text-amber-300" />
                    <span>Featured Article</span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B7280]">
                      <span className="font-bold uppercase tracking-wider text-[#0F2D5C] bg-[#0F2D5C]/10 px-2.5 py-0.5 rounded-md">
                        {featuredPost.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F2D5C] font-heading leading-tight group-hover:text-[#2E5BFF] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] bg-[#F5F7FA] border border-[#E5E7EB] text-[#4B5563] px-2.5 py-0.5 rounded-md"
                        >
                          <Tag className="h-2.5 w-2.5 text-[#0F2D5C]" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#6B7280]">
                      By {featuredPost.author}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenPost(featuredPost);
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0F2D5C] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-[#1A3D74] transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Articles Section Header */}
          <div className="mt-10 mb-6 flex items-center justify-between border-b border-[#E5E7EB] pb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F2D5C] font-heading">
                {selectedCategory === "All"
                  ? "All Publications & Articles"
                  : `${selectedCategory} Articles`}
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-12 text-center">
              <BookOpen className="h-10 w-10 text-[#9CA3AF] mx-auto mb-3" />
              <h4 className="text-base font-bold text-[#0F2D5C]">No articles found</h4>
              <p className="mt-1 text-xs text-[#6B7280]">
                Try adjusting your search query or selected category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0F2D5C] text-xs font-bold text-white uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => handleOpenPost(post)}
                  className="rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative h-44 sm:h-48 w-full bg-[#F5F7FA] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block rounded-md bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0F2D5C] shadow-2xs border border-[#E5E7EB]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h4 className="mt-2.5 text-base sm:text-lg font-bold text-[#0F2D5C] font-heading group-hover:text-[#2E5BFF] transition-colors line-clamp-2">
                        {post.title}
                      </h4>

                      <p className="mt-2 text-xs text-[#4B5563] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] bg-[#F5F7FA] text-[#6B7280] border border-[#E5E7EB] px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-[10px] text-[#9CA3AF] px-1 py-0.5">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="px-5 pb-5 pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#6B7280]">
                      By {post.author}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenPost(post);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] hover:text-[#2E5BFF] transition-colors"
                    >
                      <span>Read More</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Bottom Call to Action for Research Collaboration */}
          <div className="mt-14 rounded-3xl border border-[#E5E7EB] bg-[#0F2D5C] p-6 sm:p-8 md:p-10 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E5BFF] bg-white/10 px-3 py-1 rounded-full">
                  Academic Discourse & Inquiries
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold font-heading">
                  Interested in discussing this research?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                  I welcome feedback, discussions, and prospective collaborations on water resources,
                  hydraulic modeling, flood mitigation, or sustainable materials engineering.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0F2D5C] shadow-md hover:bg-[#F5F7FA] transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact Rabin</span>
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all"
                >
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Full Article Modal Reader */}
      <AnimatePresence>
        {activeModalPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] px-5 sm:px-7 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F2D5C] bg-[#0F2D5C]/10 px-2.5 py-0.5 rounded-md">
                    {activeModalPost.category}
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    • {activeModalPost.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyLink(activeModalPost)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-xs font-semibold text-[#4B5563] hover:text-[#0F2D5C] hover:bg-[#F5F7FA] transition-all"
                    title="Share this article"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="h-3.5 w-3.5 text-[#0F2D5C]" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleClosePost}
                    aria-label="Close article modal"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#E5E7EB] text-[#4B5563] hover:text-[#0F2D5C] hover:bg-[#F5F7FA] transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2D5C] font-heading leading-tight">
                    {activeModalPost.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#6B7280]">
                    <span className="font-semibold text-[#0F2D5C]">By {activeModalPost.author}</span>
                    <span>Published: {activeModalPost.date}</span>
                  </div>
                </div>

                {/* Banner Thumbnail */}
                <div className="rounded-2xl overflow-hidden max-h-80 w-full bg-[#F5F7FA] border border-[#E5E7EB]">
                  <img
                    src={activeModalPost.image}
                    alt={activeModalPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Body with rich Markdown parser */}
                <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#374151] leading-relaxed space-y-4">
                  {activeModalPost.content.split("\n\n").map((para, i) => {
                    const trimmed = para.trim();
                    if (!trimmed) return null;

                    // Support embedded images: ![alt](url)
                    const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
                    if (imgMatch) {
                      const [, alt, src] = imgMatch;
                      return (
                        <figure key={i} className="my-6 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#F5F7FA] shadow-xs">
                          <img
                            src={src}
                            alt={alt}
                            className="w-full h-auto max-h-[460px] object-cover"
                          />
                          {alt && (
                            <figcaption className="p-3 text-center text-xs text-[#4B5563] italic bg-white border-t border-[#E5E7EB]">
                              {alt}
                            </figcaption>
                          )}
                        </figure>
                      );
                    }

                    // Horizontal divider (---)
                    if (trimmed === "---") {
                      return <hr key={i} className="my-6 border-t border-[#E5E7EB]" />;
                    }

                    // Section Headings (###)
                    if (trimmed.startsWith("### ")) {
                      return (
                        <h3
                          key={i}
                          className="text-base sm:text-lg font-bold text-[#0F2D5C] font-heading pt-3 border-b border-[#E5E7EB] pb-1.5"
                        >
                          {renderFormattedText(trimmed.replace("### ", ""))}
                        </h3>
                      );
                    }

                    // Section Headings (##)
                    if (trimmed.startsWith("## ")) {
                      return (
                        <h2
                          key={i}
                          className="text-lg sm:text-xl font-extrabold text-[#0F2D5C] font-heading pt-4 border-b border-[#E5E7EB] pb-2"
                        >
                          {trimmed.replace("## ", "")}
                        </h2>
                      );
                    }

                    // Blockquotes
                    if (trimmed.startsWith("> ")) {
                      return (
                        <blockquote
                          key={i}
                          className="border-l-4 border-[#0F2D5C] bg-[#0F2D5C]/5 p-4 rounded-r-xl italic text-xs sm:text-sm text-[#0F2D5C] my-3 leading-relaxed"
                        >
                          {trimmed.replace(/^>\s*/, "")}
                        </blockquote>
                      );
                    }

                    // Lists (- or 1.)
                    if (trimmed.startsWith("- ") || /^\d+\.\s/.test(trimmed)) {
                      const lines = trimmed.split("\n");
                      const isOrdered = /^\d+\.\s/.test(trimmed);
                      const ListTag = isOrdered ? "ol" : "ul";
                      return (
                        <ListTag
                          key={i}
                          className={`${isOrdered ? "list-decimal" : "list-disc"} pl-5 space-y-2 my-2`}
                        >
                          {lines.map((l, li) => {
                            const clean = l.replace(/^[-*]\s+|\d+\.\s+/, "");
                            return (
                              <li key={li} className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                                {renderFormattedText(clean)}
                              </li>
                            );
                          })}
                        </ListTag>
                      );
                    }

                    // Normal paragraph
                    return (
                      <p key={i} className="leading-relaxed">
                        {renderFormattedText(trimmed)}
                      </p>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <span className="text-xs font-bold text-[#0F2D5C] block mb-2">Topic Tags:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#F5F7FA] border border-[#E5E7EB] text-[#4B5563] px-2.5 py-1 rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-[#F5F7FA] border-t border-[#E5E7EB] px-5 sm:px-7 py-3.5 flex items-center justify-between">
                <span className="text-xs text-[#6B7280]">
                  Portfolio of {profile.name}
                </span>
                <div className="flex items-center gap-2">
                  <Link
                    to="/contact"
                    onClick={handleClosePost}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F2D5C] text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-[#1A3D74] transition-all"
                  >
                    <span>Discuss Article</span>
                    <Mail className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={handleClosePost}
                    className="px-4 py-2 rounded-xl border border-[#E5E7EB] bg-white text-xs font-bold text-[#4B5563] hover:bg-[#F5F7FA] transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
