"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Apple,
  Play,
  Download,
  Monitor,
  TestTube,
  Globe,
  MessageCircle,
  Users,
  Video,
  Shield,
  Zap,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Check,
  Smartphone,
  Lock,
  Globe2,
  Bot,
  Wallet,
  QrCode,
  Sun,
  Moon,
  Languages,
  ChevronDown,
} from "lucide-react";

// Language context
type Language = "zh" | "en";
const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: (zh: string, en: string) => string;
}>({
  lang: "zh",
  setLang: () => {},
  t: (zh) => zh,
});

function useLanguage() {
  return useContext(LanguageContext);
}

// Theme context
const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({
  isDark: false,
  toggleTheme: () => {},
});

function useTheme() {
  return useContext(ThemeContext);
}

// Language selector component
function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          isDark 
            ? "text-gray-300 hover:bg-white/10" 
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium">{lang === "zh" ? "中文" : "EN"}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute right-0 top-full mt-2 rounded-xl shadow-lg border overflow-hidden z-50 ${
              isDark 
                ? "bg-gray-800 border-gray-700" 
                : "bg-white border-gray-200"
            }`}
          >
            <button
              onClick={() => { setLang("zh"); setIsOpen(false); }}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 transition-colors ${
                lang === "zh" 
                  ? isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"
                  : isDark ? "text-gray-300 hover:bg-white/5" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              中文
              {lang === "zh" && <Check className="w-4 h-4 ml-auto" />}
            </button>
            <button
              onClick={() => { setLang("en"); setIsOpen(false); }}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 transition-colors ${
                lang === "en" 
                  ? isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"
                  : isDark ? "text-gray-300 hover:bg-white/5" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              English
              {lang === "en" && <Check className="w-4 h-4 ml-auto" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Theme toggle component
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2.5 rounded-lg transition-colors ${
        isDark 
          ? "text-yellow-400 hover:bg-white/10" 
          : "text-gray-600 hover:bg-gray-100"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// Animated icon badge
function IconBadge({ 
  icon: Icon, 
  color, 
  bgColor,
  label,
  delay = 0 
}: { 
  icon: React.ElementType; 
  color: string; 
  bgColor: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg bg-white/95 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: bgColor }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </motion.div>
  );
}

// Hero phone mockup with chat UI
function PhoneMockup() {
  const { t } = useLanguage();
  
  const messages = [
    { id: 1, type: "received", text: t("嘿！欢迎来到 Gold House", "Hey! Welcome to Gold House"), avatar: "A", time: "10:30" },
    { id: 2, type: "sent", text: t("谢谢！加密功能真棒", "Thanks! The encryption looks great"), time: "10:31" },
    { id: 3, type: "received", text: t("默认端到端加密保护", "End-to-end encrypted by default"), avatar: "A", time: "10:31" },
  ];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Phone shadow */}
      <div className="absolute inset-0 translate-y-8 blur-3xl opacity-30 bg-gradient-to-b from-blue-400 to-transparent rounded-[3rem]" />
      
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden w-[280px] sm:w-[320px]">
          {/* Status bar */}
          <div className="bg-gray-50 px-6 py-2 flex items-center justify-between text-xs text-gray-600">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-gray-400 rounded-sm">
                <div className="w-3/4 h-full bg-green-500 rounded-sm" />
              </div>
            </div>
          </div>
          
          {/* Chat header */}
          <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              A
            </motion.div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Alice Chen</p>
              <div className="flex items-center gap-1.5">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-green-600">{t("在线", "Online")}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Video className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <Lock className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className="p-4 space-y-3 min-h-[280px] bg-gray-50">
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                className={`flex items-end gap-2 ${msg.type === "sent" ? "justify-end" : ""}`}
                initial={{ opacity: 0, y: 15, x: msg.type === "sent" ? 15 : -15 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8 + i * 0.2 }}
              >
                {msg.type === "received" && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-medium">
                    {msg.avatar}
                  </div>
                )}
                <div
                  className={`max-w-[70%] px-4 py-2.5 rounded-2xl ${
                    msg.type === "sent"
                      ? "bg-[#3370FF] text-white rounded-br-md"
                      : "bg-white text-gray-800 rounded-bl-md shadow-sm"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-[10px] mt-1 ${msg.type === "sent" ? "text-blue-100" : "text-gray-400"}`}>
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Typing indicator */}
            <motion.div
              className="flex items-end gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-medium">
                A
              </div>
              <div className="px-4 py-3 bg-white rounded-2xl rounded-bl-md shadow-sm flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gray-300 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4], y: [0, -3, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Input bar */}
          <div className="bg-white border-t px-4 py-3 flex items-center gap-3">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm text-gray-400">
              {t("输入消息...", "Message...")}
            </div>
            <motion.div
              className="w-10 h-10 rounded-full bg-[#3370FF] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating badges around phone */}
      <motion.div
        className="absolute -left-16 top-12 hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <IconBadge icon={Shield} color="#10B981" bgColor="#D1FAE5" label={t("端到端加密", "E2E Encrypted")} delay={0.5} />
      </motion.div>
      <motion.div
        className="absolute -right-20 top-32 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <IconBadge icon={Zap} color="#F5A623" bgColor="#FEF3C7" label={t("极速传输", "Lightning Fast")} delay={0.7} />
      </motion.div>
      <motion.div
        className="absolute -left-12 bottom-24 hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <IconBadge icon={Globe2} color="#3370FF" bgColor="#DBEAFE" label={t("全球网络", "Global Network")} delay={0.9} />
      </motion.div>
    </motion.div>
  );
}

// Feature card component
function FeatureCard({ 
  icon: Icon, 
  title, 
  titleEn,
  description, 
  descriptionEn,
  color, 
  bgColor,
  index 
}: { 
  icon: React.ElementType;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  color: string;
  bgColor: string;
  index: number;
}) {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  
  return (
    <motion.div
      className={`group relative rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
        isDark 
          ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-gray-600" 
          : "bg-white border-gray-100 hover:shadow-xl hover:border-gray-200"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: isDark ? `${color}20` : bgColor }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      
      {/* Content */}
      <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
        {t(title, titleEn)}
      </h3>
      <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        {t(description, descriptionEn)}
      </p>
      
      {/* Hover arrow */}
      <motion.div
        className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity ${
          isDark ? "text-gray-500" : "text-gray-400"
        }`}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
}

// App showcase mockup
function AppShowcase() {
  const { t } = useLanguage();
  
  const screens = [
    { title: t("聊天", "Chat"), color: "#3370FF", icon: MessageCircle },
    { title: t("会议", "Meeting"), color: "#10B981", icon: Video },
    { title: t("钱包", "Wallet"), color: "#F5A623", icon: Wallet },
  ];
  
  return (
    <div className="relative py-12">
      <div className="flex justify-center items-end gap-4 md:gap-8">
        {screens.map((screen, i) => (
          <motion.div
            key={i}
            className={`relative ${i === 1 ? "z-10" : "opacity-80"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: i === 1 ? 1 : 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            style={{ 
              transform: i === 0 ? "rotate(-8deg)" : i === 2 ? "rotate(8deg)" : "none",
            }}
          >
            <div 
              className={`bg-gray-900 rounded-[1.5rem] md:rounded-[2rem] p-2 shadow-2xl ${i === 1 ? "scale-110" : "scale-90"}`}
            >
              <div className="bg-white rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden w-[100px] md:w-[180px]">
                {/* Screen content */}
                <div 
                  className="h-[180px] md:h-[320px] flex flex-col items-center justify-center gap-3"
                  style={{ background: `linear-gradient(180deg, ${screen.color}15 0%, white 100%)` }}
                >
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${screen.color}20` }}
                  >
                    <screen.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: screen.color }} />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">{screen.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Download button component - all standard blue
function DownloadButton({ 
  icon: Icon, 
  title, 
  subtitle, 
}: { 
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.button
      className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 bg-[#3370FF] text-white hover:bg-[#2860E0] shadow-lg shadow-blue-500/25"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-6 h-6" />
      <div className="text-left">
        <p className="text-xs text-blue-100">{subtitle}</p>
        <p className="font-semibold">{title}</p>
      </div>
    </motion.button>
  );
}

// Main component
export default function GoldHouseLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Language>("en");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const t = (zh: string, en: string) => lang === "zh" ? zh : en;

  const features = [
    {
      icon: MessageCircle,
      title: "即时通讯",
      titleEn: "Instant Messaging",
      description: "支持万人群组，消息实时同步，多端无缝切换",
      descriptionEn: "Support 10K+ group chats, real-time sync, seamless multi-device",
      color: "#3370FF",
      bgColor: "#EBF2FF",
    },
    {
      icon: Video,
      title: "高清会议",
      titleEn: "HD Meetings",
      description: "万人同时在线，高清稳定，智能降噪",
      descriptionEn: "10K+ participants, HD quality, AI noise cancellation",
      color: "#10B981",
      bgColor: "#D1FAE5",
    },
    {
      icon: Shield,
      title: "端到端加密",
      titleEn: "E2E Encryption",
      description: "军事级加密技术，保护每一条消息安全",
      descriptionEn: "Military-grade encryption protects every message",
      color: "#6366F1",
      bgColor: "#E0E7FF",
    },
    {
      icon: Wallet,
      title: "数字钱包",
      titleEn: "Digital Wallet",
      description: "安全便捷的数字资产管理，一键转账收款",
      descriptionEn: "Secure digital asset management, instant transfers",
      color: "#F5A623",
      bgColor: "#FEF3C7",
    },
    {
      icon: Bot,
      title: "AI 智能助手",
      titleEn: "AI Assistant",
      description: "内置 MBot 机器人，智能回复，效率翻倍",
      descriptionEn: "Built-in MBot for smart replies and productivity",
      color: "#EC4899",
      bgColor: "#FCE7F3",
    },
    {
      icon: Globe2,
      title: "全球网络",
      titleEn: "Global Network",
      description: "200+ 节点覆盖全球，超低延迟体验",
      descriptionEn: "200+ nodes worldwide, ultra-low latency",
      color: "#14B8A6",
      bgColor: "#CCFBF1",
    },
  ];

  const brandValues = [
    { 
      title: "Culture", 
      chinese: t("文化", "Culture"), 
      description: t("坚持前进  拥抱创新", "Keep Moving Forward, Embrace Innovation"),
      color: "#3370FF",
      bgColor: isDark ? "from-blue-900/30 to-cyan-900/30" : "from-blue-50 to-cyan-50"
    },
    { 
      title: "Mission", 
      chinese: t("使命", "Mission"), 
      description: t("极致安全  无感交互", "Ultimate Security, Seamless Interaction"),
      color: "#F5A623",
      bgColor: isDark ? "from-orange-900/30 to-yellow-900/30" : "from-orange-50 to-yellow-50"
    },
    { 
      title: "Vision", 
      chinese: t("愿景", "Vision"), 
      description: t("链接全球，打造无界生态", "Connect Globally, Build Boundless Ecosystem"),
      color: "#10B981",
      bgColor: isDark ? "from-green-900/30 to-emerald-900/30" : "from-green-50 to-emerald-50"
    },
  ];

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, setLang, t }}>
        <div className={`min-h-screen overflow-hidden transition-colors duration-500 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}>
          {/* Navigation */}
          <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled 
                ? isDark 
                  ? "bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/20" 
                  : "bg-white/80 backdrop-blur-xl shadow-sm"
                : ""
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="Gold House Logo" 
              width={40} 
              height={40} 
              className="rounded-xl"
            />
                <span className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Gold<span className="text-[#F5A623]">House</span>
                </span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className={`transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                  {t("功能", "Features")}
                </a>
                <a href="#download" className={`transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                  {t("下载", "Download")}
                </a>
                <a href="#about" className={`transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                  {t("关于", "About")}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageSelector />
                <motion.button
                  className="hidden sm:block px-5 py-2.5 bg-[#3370FF] text-white rounded-full font-medium text-sm hover:bg-[#2860E0] transition-colors shadow-lg shadow-blue-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("立即下载", "Download")}
                </motion.button>
              </div>
            </div>
          </motion.nav>

          {/* Hero Section with Background Image */}
          <section ref={heroRef} className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <motion.div 
              className="absolute inset-0 z-0"
              style={{ scale: heroScale }}
            >
              <Image
                src="/hero-bg.png"
                alt="City Skyline"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay for readability */}
              <div className={`absolute inset-0 ${
                isDark 
                  ? "bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900" 
                  : "bg-gradient-to-b from-black/40 via-black/30 to-white"
              }`} />
            </motion.div>
            
            <motion.div
              className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-24"
              style={{ opacity: heroOpacity }}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left content */}
                <div className="space-y-8">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium text-white">
                      {t("新一代超级通讯应用", "Next-Gen Super Communication App")}
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-gradient">{t("世界在你掌中", "The World in Your Hands")}</span>
                  </motion.h1>
                  
                  <motion.p
                    className="text-lg max-w-lg leading-relaxed text-white/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t(
                      "集即时通讯、高清会议、数字钱包于一体。端到端加密，全球畅连，随时随地高效沟通。",
                      "All-in-one platform for messaging, HD meetings, and digital wallet. End-to-end encrypted, globally connected."
                    )}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <DownloadButton icon={Apple} title="App Store" subtitle={t("下载于", "Download on")} />
                    <DownloadButton icon={Play} title="Google Play" subtitle={t("下载于", "Get it on")} />
                    <DownloadButton icon={Globe} title="Web App" subtitle={t("在浏览器打开", "Open in browser")} />
                  </motion.div>
                </div>
                
                {/* Right content - Phone mockup */}
                <div className="flex justify-center lg:justify-end">
                  <PhoneMockup />
                </div>
              </div>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-white/70"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section id="features" className={`py-24 ${isDark ? "bg-gray-900" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                className="text-center max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {t("一个平台，", "One platform. ")}
                  <span className="text-gradient">{t("全面集成", "Fully integrated.")}</span>
                </h2>
                <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {t("Gold House 将通讯、会议、钱包集成于一体，让沟通更高效", "Gold House integrates messaging, meetings, and wallet for efficient communication")}
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <FeatureCard key={i} {...feature} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* App showcase */}
          <section className={`py-24 ${isDark ? "bg-gray-800/50" : "bg-gray-50"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                className="text-center max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {t("一体化 ", "All-in-one ")}
                  <span className="text-gradient-gold">{t("超级应用", "Superapp")}</span>
                </h2>
                <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {t("聊天、会议、支付 - 一个应用满足所有需求", "Chat, Meet, Pay - One app for all your needs")}
                </p>
              </motion.div>
              
              <AppShowcase />
            </div>
          </section>

          {/* Brand values section */}
          <section id="about" className={`py-24 ${isDark ? "bg-gray-900" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                className="text-center max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {t("我们的理念", "Our Philosophy")}
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {brandValues.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.bgColor} p-8`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="absolute top-0 left-0 w-1 h-full"
                      style={{ background: item.color }}
                    />
                    <span 
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </span>
                    <h3 className={`text-2xl font-bold mt-2 mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {item.chinese}
                    </h3>
                    <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section id="download" className={`py-24 ${isDark ? "bg-gradient-to-br from-[#1a1f36] to-[#0f1219]" : "bg-gradient-to-br from-gray-50 to-white"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                className="text-center max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {t("获取 ", "Get ")}
                  <span className="text-gradient">Gold House</span>
                </h2>
                <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {t("全平台支持，立即下载开始连接世界", "Available on all platforms. Download now and start connecting.")}
                </p>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: Apple, name: "iOS", desc: "App Store" },
                  { icon: Play, name: "Android", desc: "Google Play" },
                  { icon: Download, name: "APK", desc: t("直接下载", "Direct Download") },
                  { icon: Monitor, name: "Windows", desc: t("桌面应用", "Desktop App") },
                  { icon: TestTube, name: "TestFlight", desc: t("测试版", "Beta Testing") },
                  { icon: Globe, name: "Web", desc: t("网页版", "Browser App") },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`group relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      isDark 
                        ? "bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20" 
                        : "bg-white hover:bg-gray-50 border-gray-200 hover:border-[#3370FF]/30 shadow-sm hover:shadow-md"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#3370FF]/10">
                      <item.icon className="w-6 h-6 text-[#3370FF]" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{item.name}</p>
                      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.desc}</p>
                    </div>
                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-all ${isDark ? "text-gray-500 group-hover:text-white" : "text-gray-400 group-hover:text-[#3370FF]"}`} />
                  </motion.div>
                ))}
              </div>
              
              {/* QR Code section */}
              <motion.div
                className="mt-16 flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className={`w-32 h-32 rounded-2xl p-3 mb-4 ${isDark ? "bg-white" : "bg-white border border-gray-200 shadow-sm"}`}>
                  <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{t("扫码下载", "Scan to download")}</p>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className={`py-16 ${isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                  <Image 
                    src="/logo.svg" 
                    alt="Gold House Logo" 
                    width={40} 
                    height={40} 
                    className="rounded-xl"
                  />
                  <div>
                    <span className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      Gold<span className="text-[#F5A623]">House</span>
                    </span>
                    <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>{t("世界在你掌中", "The World in Your Hands")}</p>
                  </div>
                </div>
                
                <div className={`flex flex-wrap justify-center gap-8 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  <a href="/privacy" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}>{t("隐私政策", "Privacy Policy")}</a>
                  <a href="/terms" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}>{t("服务条款", "Terms of Service")}</a>
                  <a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}>{t("联系我们", "Contact Us")}</a>
                  <a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}>{t("帮助支持", "Support")}</a>
                </div>
              </div>
              
              <div className={`mt-12 pt-8 border-t text-center text-sm ${isDark ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-400"}`}>
                &copy; 2026 Gold House. {t("保留所有权利", "All rights reserved.")}
              </div>
            </div>
          </footer>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
