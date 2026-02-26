import { useState, useEffect } from "react";
import heroImage from "./assets/1.jpeg";
import aboutImage from "./assets/1.5.jpg";
import gameImage from "./assets/1.4.jpg";
import classImage from "./assets/1.9.jpg";
import utsavImage from "./assets/1.7.jpg";
import danceImage from "./assets/1.3.jpg";
import lightImage from "./assets/1.1.jpg";

const NAV_LINKS = [
  { label: "হোম", id: "Home" },
  { label: "আমাদের সম্পর্কে", id: "About" },
  { label: "গ্যালারি", id: "Gallery" },
  { label: "রুটিন", id: "Routines" },
  { label: "নোটিশ বোর্ড", id: "Notice Board" },
  { label: "যোগাযোগ", id: "Contact" },
];

const notices = [
  {
    id: 1,
    date: "২৪ ফেব্রুয়ারি, ২০২৬",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা – ১০ মার্চ",
    tag: "অনুষ্ঠান",
    color: "red",
    desc: "সমস্ত শিক্ষার্থীকে সকাল ৮:০০টার মধ্যে ক্রীড়া পোশাকে মাঠে উপস্থিত থাকতে হবে। অভিভাবকদের আন্তরিকভাবে আমন্ত্রণ জানানো হচ্ছে।"
  },
  {
    id: 2,
    date: "২০ ফেব্রুয়ারি, ২০২৬",
    title: "অভিভাবক-শিক্ষক সভা",
    tag: "সভা",
    color: "yellow",
    desc: "অভিভাবক-শিক্ষক সভা ৫ মার্চ, ২০২৬ তারিখে অনুষ্ঠিত হবে। অনুগ্রহ করে শ্রেণি শিক্ষকের কাছ থেকে আপনার সন্তানের অগ্রগতি প্রতিবেদন সংগ্রহ করুন।"
  },
  {
    id: 3,
    date: "১৮ ফেব্রুয়ারি, ২০২৬",
    title: "মধ্যবর্তী পরীক্ষার সময়সূচি",
    tag: "পরীক্ষা",
    color: "red",
    desc: "মধ্যবর্তী পরীক্ষা ১৫ মার্চ থেকে শুরু হবে। বিস্তারিত সময়সূচি স্কুল পোর্টালে উপলব্ধ।"
  },
  {
    id: 4,
    date: "১৫ ফেব্রুয়ারি, ২০২৬",
    title: "ছুটি – হোলি উৎসব",
    tag: "ছুটি",
    color: "yellow",
    desc: "হোলি উৎসব উপলক্ষে ১ মার্চ স্কুল বন্ধ থাকবে। ২ মার্চ থেকে নিয়মিত ক্লাস শুরু হবে।"
  },
  {
    id: 5,
    date: "১০ ফেব্রুয়ারি, ২০২৬",
    title: "বিজ্ঞান প্রদর্শনী ২০২৬",
    tag: "অনুষ্ঠান",
    color: "red",
    desc: "বার্ষিক বিজ্ঞান প্রদর্শনী ২৮ ফেব্রুয়ারি অনুষ্ঠিত হবে। ষষ্ঠ থেকে দ্বাদশ শ্রেণির শিক্ষার্থীদের ২২ ফেব্রুয়ারির মধ্যে প্রকল্প জমা দিতে হবে।"
  },
  {
    id: 6,
    date: "০৫ ফেব্রুয়ারি, ২০২৬",
    title: "নতুন লাইব্রেরি বই সংযোজন",
    tag: "তথ্য",
    color: "yellow",
    desc: "স্কুল লাইব্রেরিতে ২০০টিরও বেশি নতুন বই সংযোজন করা হয়েছে। অবসর সময়ে লাইব্রেরি পরিদর্শন করুন।"
  },
];
const galleryItems = [
  { id: 1, src: gameImage, label: "বার্ষিক ক্রীড়া প্রতিযোগিতা" },
  { id: 2, src: classImage, label: "শ্রেণিকক্ষে পাঠদান" },
  { id: 3, src: utsavImage, label: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান" },
  { id: 4, src: danceImage, label: "চারুকলা ও সংস্কৃতি" },
  { id: 5, src: lightImage, label: "বিদ্যালয় প্রাঙ্গণ" },
  { id: 6, src: heroImage, label: "বিদ্যালয় প্রাঙ্গণ" },
];

const routines = [
  { time: "৭:৩০ AM", activity: "স্কুল গেট খোলা", icon: "🚪", type: "normal" },
  { time: "৮:০০ AM", activity: "সকালের প্রার্থনা ও সমাবেশ", icon: "🙏", type: "highlight" },
  { time: "৮:২০ AM", activity: "প্রথম পিরিয়ড", icon: "📖", type: "normal" },
  { time: "৯:০৫ AM", activity: "দ্বিতীয় পিরিয়ড", icon: "📖", type: "normal" },
  { time: "৯:৫০ AM", activity: "তৃতীয় পিরিয়ড", icon: "📖", type: "normal" },
  { time: "১০:৩৫ AM", activity: "স্বল্প বিরতি (১৫ মিনিট)", icon: "☕", type: "break" },
  { time: "১০:৫০ AM", activity: "চতুর্থ পিরিয়ড", icon: "📖", type: "normal" },
  { time: "১১:৩৫ AM", activity: "পঞ্চম পিরিয়ড", icon: "📖", type: "normal" },
  { time: "১২:২০ PM", activity: "মধ্যাহ্নভোজ বিরতি (৪০ মিনিট)", icon: "🍱", type: "break" },
  { time: "১:০০ PM", activity: "ষষ্ঠ পিরিয়ড", icon: "📖", type: "normal" },
  { time: "১:৪৫ PM", activity: "সপ্তম পিরিয়ড", icon: "📖", type: "normal" },
  { time: "২:৩০ PM", activity: "ক্রীড়া ও সহশিক্ষা কার্যক্রম", icon: "⚽", type: "highlight" },
  { time: "৪:০০ PM", activity: "স্কুল ছুটি", icon: "🏠", type: "end" },
];

const stats = [
  { value: "২,৪০০+", label: "শিক্ষার্থী", icon: "👨‍🎓" },
  { value: "১৫০+", label: "প্রশিক্ষিত শিক্ষক", icon: "👩‍🏫" },
  { value: "৩৫+", label: "বছরের ঐতিহ্য", icon: "🏆" },
  { value: "৯৮%", label: "বোর্ড পরীক্ষায় উত্তীর্ণ", icon: "📊" },
];

const features = [
  {
    icon: "🏫",
    title: "স্মার্ট ক্লাসরুম",
    desc: "ইন্টার‌্যাক্টিভ বোর্ড ও আধুনিক শিক্ষাসামগ্রীসহ সম্পূর্ণ ডিজিটাল শ্রেণিকক্ষ।"
  },
  {
    icon: "🔬",
    title: "বিজ্ঞানাগার",
    desc: "ফিজিক্স, কেমিস্ট্রি ও বায়োলজির সুসজ্জিত ল্যাবরেটরি, হাতে-কলমে শিক্ষার জন্য।"
  },
  {
    icon: "📚",
    title: "সমৃদ্ধ গ্রন্থাগার",
    desc: "প্রতিটি বিষয়ের জন্য ৫,০০০+ বই, জার্নাল ও ডিজিটাল রিসোর্স উপলব্ধ।"
  },
  {
    icon: "⚽",
    title: "ক্রীড়া ক্ষেত্র",
    desc: "ক্রিকেট, ফুটবল, বাস্কেটবল ও অ্যাথলেটিক্সসহ প্রশিক্ষিত কোচের তত্ত্বাবধানে ক্রীড়া কার্যক্রম।"
  },
  {
    icon: "🎭",
    title: "শিল্প ও সংস্কৃতি",
    desc: "সংগীত, নৃত্য, নাটক ও চিত্রাঙ্কন কর্মসূচির মাধ্যমে সৃজনশীলতার বিকাশ।"
  },
  {
    icon: "💻",
    title: "কম্পিউটার ল্যাব",
    desc: "উন্নত প্রযুক্তিসম্পন্ন কম্পিউটার ল্যাব ও উচ্চগতির ইন্টারনেট সুবিধা।"
  },
];

export default function KishalaySchool() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTickerIdx(p => (p + 1) % notices.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const routineBg = (type) => {
    if (type === "highlight") return "bg-red-700 text-white";
    if (type === "break") return "bg-yellow-400 text-yellow-900";
    if (type === "end") return "bg-red-900 text-white";
    return "bg-white text-gray-700 border border-gray-100";
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Open+Sans:wght@400;600;700&display=swap');
        h1,h2,h3,h4 { font-family:'Merriweather',serif; }
        body { font-family:'Open Sans',sans-serif; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)} }
        @keyframes ticker { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.3} }
        .animate-fadeUp { animation: fadeUp 0.9s ease forwards; }
        .animate-ticker { animation: ticker 0.45s ease forwards; }
        .animate-blink { animation: blink 1.4s infinite; }
        .gallery-img { transition: transform 0.4s ease; }
        .gallery-card:hover .gallery-img { transform: scale(1.08); }
        .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
        .feature-card:hover { background: #b91c1c !important; }
        .feature-card:hover h3 { color: #fff !important; }
        .feature-card:hover p { color: rgba(255,255,255,0.85) !important; }
        .feature-card:hover .feat-icon { background: rgba(255,255,255,0.15) !important; }
        .notice-card { transition: transform 0.2s, box-shadow 0.2s; }
        .notice-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(185,28,28,0.18) !important; }
        .nav-btn:hover { color: #b91c1c !important; background: #fef2f2 !important; }
      `}</style>

      {/* ── TOP INFO BAR ── */}
      <div className="bg-red-950 text-red-200 text-xs overflow-hidden">

        {/* Desktop View */}
        <div className="hidden md:flex py-1.5 px-6 justify-between items-center">
          <div className="flex gap-5">
            <span>📞 +91 98765 43210</span>
            <span>✉ info@kishaloyschool.edu</span>
          </div>
          <div className="flex gap-5">
            <span>📍 Anandanagar, Singur, WB</span>
            <span className="text-yellow-400 font-semibold animate-blink">
              ● Admissions Open 2026–27
            </span>
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden whitespace-nowrap">
          <div className="animate-marquee inline-block py-1.5">
            📞 +91 98765 43210 &nbsp;&nbsp; ✉ info@kishaloyschool.edu &nbsp;&nbsp; 📍 Anandanagar, Singur, WB &nbsp;&nbsp;
            <span className="text-yellow-400 font-semibold">
              ● Admissions Open 2026–27
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            📞 +91 98765 43210 &nbsp;&nbsp; ✉ info@kishaloyschool.edu &nbsp;&nbsp; 📍 Anandanagar, Singur, WB &nbsp;&nbsp;
            <span className="text-yellow-400 font-semibold">
              ● Admissions Open 2026–27
            </span>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav className={`sticky top-0 z-50 bg-white border-b-4 border-red-700 transition-shadow duration-300 ${scrolled ? "shadow-xl" : "shadow-md"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-2xl shadow-lg border-2 border-red-300 shrink-0">
              🎓
            </div>
            <div>
              <div className="text-red-800 font-extrabold text-base leading-tight" style={{ fontFamily: "Merriweather, serif" }}>
                আনন্দনগর কিশলয় স্কুল
              </div>
              <div className="text-yellow-600 text-[10px] font-bold tracking-widest uppercase">
                শ্রেষ্ঠত্ব · শৃঙ্খলা · চরিত্র
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-btn px-4 py-2 rounded text-sm font-semibold border-none cursor-pointer transition-all duration-150 ${activeSection === link
                  ? "bg-red-700 text-white shadow"
                  : "bg-transparent text-gray-700"
                  }`}>
                {link.label}
              </button>
            ))}
            <button className="ml-3 px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-sm rounded cursor-pointer border-none transition-colors duration-150">
              আবেদন করুন
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-red-700 bg-transparent border-none cursor-pointer">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-red-700 flex flex-col">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link)}
                className="py-3 px-6 text-left text-white font-semibold text-sm border-b border-red-600 bg-transparent cursor-pointer hover:bg-red-800">
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO SECTION ── */}
      <section id="Home" className="relative h-screen min-h-[580px] overflow-hidden flex items-center">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Red overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 via-red-5 to-black/60"></div>
        {/* White diagonal cut bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl animate-fadeUp">
            {/* Badge */}
            <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-md">
              ✦ পশ্চিমবঙ্গ সরকার অনুমোদিত বিদ্যালয়
            </span>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5 drop-shadow-lg">
              আনন্দনগর <br />
              <span className="text-yellow-400">কিশলয় স্কুল</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
              জ্ঞান, মূল্যবোধ ও মানবতার আলোকেন্দ্র,আনন্দনগর কিশলয় স্কুল — যেখানে প্রতিটি শিশু নিজের সম্ভাবনা আবিষ্কার করে, কৌতূহল লালন করে এবং ভবিষ্যতের ভিত্তি গড়ে তোলে।

            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => scrollTo("About")}
                className="px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-base rounded cursor-pointer border-none shadow-lg transition-colors duration-200">
                বিদ্যালয় সম্পর্কে জানুন →
              </button>
              <button onClick={() => scrollTo("Notice Board")}
                className="px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-base rounded cursor-pointer border-2 border-white/80 transition-colors duration-200">
                নোটিশ বোর্ড দেখুন →
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex gap-10 flex-wrap">
              {[["২,৪০০+", "শিক্ষার্থী"], ["১৫০+", "প্রশিক্ষিত শিক্ষক"], ["৩৫+", "বছরের ঐতিহ্য"]].map(([v, l]) => (
                <div key={l}>
                  <div className="text-3xl font-black text-yellow-400">{v}</div>
                  <div className="text-sm text-white/70 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── NOTICE TICKER ── */}
      <div className="bg-red-700 flex items-center overflow-hidden">
        <div className="bg-red-900 px-5 py-3 flex items-center gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-blink inline-block"></span>
          <span className="text-white text-xs font-black tracking-widest uppercase">নোটিশ</span>
        </div>
        <div className="flex-1 px-5 py-3 overflow-hidden">
          <p key={tickerIdx} className="animate-ticker text-white font-semibold text-sm whitespace-nowrap">
            📢 {notices[tickerIdx].title} — {notices[tickerIdx].desc}
          </p>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {stats.map(s => (
            <div key={s.label} className="py-6 text-center">
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="text-3xl font-black text-red-700">{s.value}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="About" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Students learning"
              className="w-full h-[420px] object-cover rounded-xl shadow-2xl"
            />
            {/* floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-700 text-white px-6 py-4 rounded-xl shadow-xl text-center">
              <div className="text-4xl font-black text-yellow-400">৩৫+</div>
              <div className="text-xs font-bold tracking-wide mt-1">
                বছরের গৌরবময় ঐতিহ্য
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-red-700 text-xs font-bold tracking-widest uppercase mb-3">
              আমাদের সম্পর্কে
            </p>

            <h2 className="text-4xl font-black text-gray-900 leading-snug mb-4">
              শিক্ষা ও চরিত্র গঠনের এক গৌরবময় ঐতিহ্য
            </h2>

            <div className="w-14 h-1.5 bg-red-700 rounded mb-6"></div>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              ১৯৯০ সালে প্রতিষ্ঠিত <strong>আনন্দনগর কিশলয় স্কুল</strong> কলকাতার একটি বিশ্বস্ত ও স্বনামধন্য শিক্ষা প্রতিষ্ঠান।
              সিবিএসই অনুমোদিত এই বিদ্যালয়ে নার্সারি থেকে দ্বাদশ শ্রেণি পর্যন্ত সমন্বিত পাঠ্যক্রমের মাধ্যমে শিক্ষার্থীদের বৌদ্ধিক ও ব্যক্তিগত বিকাশে গুরুত্ব দেওয়া হয়।
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              আমাদের অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ, আধুনিক পরিকাঠামো এবং মূল্যবোধভিত্তিক শিক্ষা প্রতিটি শিক্ষার্থীকে
              আত্মবিশ্বাসী, মানবিক ও যোগ্য নাগরিক হিসেবে গড়ে তুলতে সহায়তা করে।
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "সিবিএসই অনুমোদিত",
                "রাজ্য পুরস্কারপ্রাপ্ত",
                "আইএসও সার্টিফাইড",
                "ডিজিটাল ক্যাম্পাস",
                "৯৯% অভিভাবক সন্তুষ্টি",
                "মেধাবৃত্তি কর্মসূচি"
              ].map(b => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center text-[10px] shrink-0">✓</span>
                  {b}
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("Contact")}
              className="px-7 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded cursor-pointer border-none transition-colors duration-200"
            >
              যোগাযোগ করুন →
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-700 text-xs font-bold tracking-widest mb-3">
              পরিকাঠামো
            </p>

            <h2 className="text-4xl font-black text-gray-900">
              বিশ্বমানের সুযোগ-সুবিধা
            </h2>

            <div className="w-14 h-1.5 bg-red-700 rounded mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="feature-card bg-white rounded-xl p-7 shadow-sm border border-gray-100 cursor-default transition-colors duration-250">
                <div className="feat-icon w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-3xl mb-5 transition-colors duration-250">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-250">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-250">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="Gallery" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-700 text-xs font-bold tracking-widest mb-3">
              ছবি গ্যালারি
            </p>

            <h2 className="text-4xl font-black text-gray-900">
              কিশলয় স্কুলের জীবনচিত্র
            </h2>
            <div className="w-14 h-1.5 bg-red-700 rounded mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map(item => (
              <div key={item.id} className="gallery-card relative rounded-xl overflow-hidden cursor-pointer shadow-md"
                onClick={() => setLightbox(item)}>
                <img src={item.src} alt={item.label}
                  className="gallery-img w-full h-56 object-cover block" />
                {/* overlay */}
                <div className="gallery-overlay absolute inset-0 bg-red-700/85 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300">
                  <span className="text-4xl">🔍</span>
                  <span className="text-white font-bold text-base text-center px-4">{item.label}</span>
                </div>
                {/* label strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/92 z-[9999] flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src.replace("w=600", "w=1200")} alt={lightbox.label}
              className="w-full max-h-[80vh] object-contain rounded-lg" />
            <p className="text-white text-center mt-4 text-lg font-bold">{lightbox.label}</p>
            <button onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-red-700 text-white text-lg flex items-center justify-center border-none cursor-pointer hover:bg-red-800">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ── ROUTINES ── */}
      <section id="Routines" className="bg-gray-950 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-500 text-xs font-bold tracking-widest mb-3">
              দৈনিক সময়সূচি
            </p>

            <h2 className="text-4xl font-black text-white">
              বিদ্যালয়ের সময়তালিকা
            </h2>
            <div className="w-14 h-1.5 bg-red-600 rounded mx-auto mt-4"></div>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10">
            {routines.map((r, i) => (
              <div key={i} className={`flex items-center border-b border-white/5 last:border-b-0 ${routineBg(r.type)}`}>
                <div className={`w-28 shrink-0 px-4 py-4 text-sm font-bold border-r border-white/10 ${r.type === "highlight" || r.type === "end" ? "text-yellow-300" :
                  r.type === "break" ? "text-yellow-800" : "text-red-400"
                  }`}>
                  {r.time}
                </div>
                <div className="flex items-center gap-3 px-5 py-4 flex-1">
                  <span className="text-xl">{r.icon}</span>
                  <span className={`text-sm font-${r.type === "normal" ? "normal" : "bold"}`}>
                    {r.activity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-red-900/30 border border-red-800/50 rounded-lg p-4 text-red-300 text-sm">
            📌 বিশেষ অনুষ্ঠান বা প্রয়োজনে সময়সূচিতে পরিবর্তন হতে পারে। সর্বশেষ তথ্যের জন্য বিদ্যালয়ের নোটিশ বোর্ড বা পোর্টাল দেখুন।
          </div>
        </div>
      </section>

      {/* ── NOTICE BOARD ── */}
      <section id="Notice Board" className="bg-red-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-700 text-xs font-bold tracking-widest mb-3">
              সর্বশেষ আপডেট
            </p>

            <h2 className="text-4xl font-black text-gray-900">
              📋 নোটিশ বোর্ড
            </h2>
            <div className="w-14 h-1.5 bg-red-700 rounded mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {notices.map(n => (
              <div key={n.id} className={`notice-card bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${n.color === "red" ? "border-red-700" : "border-yellow-500"}`}>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${n.color === "red" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {n.tag}
                    </span>
                    <span className="text-gray-400 text-xs">📅 {n.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{n.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                  <button className={`mt-4 text-xs font-bold border-none bg-transparent cursor-pointer ${n.color === "red" ? "text-red-700 hover:text-red-900" : "text-yellow-600 hover:text-yellow-800"}`}>
                    সম্পূর্ণ নোটিশ পড়ুন →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-10 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold rounded cursor-pointer border-none transition-colors duration-200 shadow-lg">
              বিস্তারিত পড়ুন →
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="Contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-700 text-xs font-bold tracking-widest mb-3">
              যোগাযোগের জন্য
            </p>

            <h2 className="text-4xl font-black text-gray-900">
              আমাদের সাথে যোগাযোগ করুন
            </h2>
            <div className="w-14 h-1.5 bg-red-700 rounded mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Info */}
            <div>
              <h3 className="text-xl font-black text-red-700 mb-7">আনন্দনগর কিশলয় স্কুল</h3>
              {[
                {
                  icon: "📍",
                  label: "ঠিকানা",
                  value: "আনন্দনগর, কলকাতা, পশ্চিমবঙ্গ – ৭০০০০১"
                },
                {
                  icon: "📞",
                  label: "ফোন",
                  value: "+৯১ ৯৮৭৬৫ ৪৩২১০"
                },
                {
                  icon: "✉",
                  label: "ইমেইল",
                  value: "info@kishaloyschool.edu"
                },
                {
                  icon: "🕐",
                  label: "অফিস সময়",
                  value: "সোম – শনি: সকাল ৮:০০ – বিকাল ৪:০০"
                },
                {
                  icon: "🌐",
                  label: "ওয়েবসাইট",
                  value: "www.kishaloyschool.edu"
                },
              ].map(c => (
                <div key={c.label} className="flex gap-4 mb-5 items-start">
                  <div className="w-11 h-11 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center text-lg shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{c.label}</div>
                    <div className="text-sm text-gray-800 font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-6">
                আমাদের একটি বার্তা পাঠান
              </h3>
              {["পূর্ণ নাম", "ফোন নম্বর", "ইমেইল ঠিকানা"].map(label => (
                <div key={label} className="mb-4">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
                  <input type="text" placeholder={`Enter your ${label.toLowerCase()}`}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-red-400 transition-colors bg-white" />
                </div>
              ))}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">বার্তা</label>
                <textarea rows={4} placeholder="আপনার বার্তা..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-red-400 transition-colors bg-white resize-y"></textarea>
              </div>
              <button className="w-full py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg cursor-pointer border-none transition-colors duration-200">
                বার্তা পাঠান →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-white pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center text-2xl shrink-0">🎓</div>
              <div>
                <div className="font-black text-sm leading-snug">আনন্দনগর কিশলয় স্কুল</div>
                <div className="text-yellow-500 text-[10px] font-bold">প্রতিষ্ঠিত ১৯৯০ · সিবিএসই অনুমোদিত</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ১৯৯০ সাল থেকে জ্ঞান, মূল্যবোধ ও শৃঙ্খলার মাধ্যমে কোমল মনকে লালন করছি। আগামী দিনের নেতৃত্ব গড়ে তুলছি।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-500 font-black text-sm mb-5 uppercase tracking-widest">দ্রুত লিঙ্কসমূহ</h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)}
                  className="text-gray-400 hover:text-red-400 text-sm text-left bg-transparent border-none cursor-pointer transition-colors">
                  → {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-500 font-black text-sm mb-5 uppercase tracking-widest">Contact</h4>
            <div className="flex flex-col gap-2.5 text-gray-400 text-sm">
              <span>📍 আনন্দনগর, পশ্চিমবঙ্গ</span>
              <span>📞 +৯১ ৯৮৭৬৫ ৪৩২১০</span>
              <span>✉ info@kishaloyschool.edu</span>
            </div>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-yellow-500 font-black text-sm mb-5 tracking-widest">
              ভর্তি সংক্রান্ত তথ্য
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              ২০২৬–২৭ শিক্ষাবর্ষের জন্য ভর্তি প্রক্রিয়া শুরু হয়েছে।
            </p>
            <button className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded cursor-pointer border-none transition-colors duration-200">
              আবেদন করুন →
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-gray-500 text-xs">
          © 2026 আনন্দনগর কিশলয় স্কুল, All Rights Reserved. | Made with ❤️ for Excellence in Education
        </div>
      </footer>
    </div>
  );
}