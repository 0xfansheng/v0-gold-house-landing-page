"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  Star,
  Check,
  Smartphone,
  Lock,
  Globe2,
  Bot,
  Wallet,
  QrCode,
} from "lucide-react";

// Floating shapes background
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(51, 112, 255, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(245, 166, 35, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -25, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
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
      className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg bg-white"
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
  const messages = [
    { id: 1, type: "received", text: "Hey! Welcome to Gold House", avatar: "A", time: "10:30" },
    { id: 2, type: "sent", text: "Thanks! The encryption looks great", time: "10:31" },
    { id: 3, type: "received", text: "End-to-end encrypted by default", avatar: "A", time: "10:31" },
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
                <span className="text-xs text-green-600">Online</span>
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
              Message...
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
        <IconBadge icon={Shield} color="#10B981" bgColor="#D1FAE5" label="E2E Encrypted" delay={0.5} />
      </motion.div>
      <motion.div
        className="absolute -right-20 top-32 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <IconBadge icon={Zap} color="#F5A623" bgColor="#FEF3C7" label="Lightning Fast" delay={0.7} />
      </motion.div>
      <motion.div
        className="absolute -left-12 bottom-24 hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <IconBadge icon={Globe2} color="#3370FF" bgColor="#DBEAFE" label="Global Network" delay={0.9} />
      </motion.div>
    </motion.div>
  );
}

// Company logos marquee
function LogoMarquee() {
  const logos = [
    "ByteDance", "Xiaomi", "7-Eleven", "Traveloka", "GOTO", "PopMart", "Haidilao", "MR.DIY"
  ];
  
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: [0, -800] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="text-gray-300 text-xl font-bold whitespace-nowrap">
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Feature card component
function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  bgColor,
  index 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  index: number;
}) {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: bgColor }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      
      {/* Hover arrow */}
      <motion.div
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </motion.div>
    </motion.div>
  );
}

// App showcase mockup
function AppShowcase() {
  const screens = [
    { title: "Chat", color: "#3370FF", icon: MessageCircle },
    { title: "Meeting", color: "#10B981", icon: Video },
    { title: "Wallet", color: "#F5A623", icon: Wallet },
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

// Download button component
function DownloadButton({ 
  icon: Icon, 
  title, 
  subtitle, 
  primary = false,
  comingSoon = false,
}: { 
  icon: React.ElementType;
  title: string;
  subtitle: string;
  primary?: boolean;
  comingSoon?: boolean;
}) {
  return (
    <motion.button
      className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${
        comingSoon
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : primary
          ? "bg-[#3370FF] text-white hover:bg-[#2860E0] shadow-lg shadow-blue-500/25"
          : "bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
      whileHover={comingSoon ? {} : { scale: 1.02 }}
      whileTap={comingSoon ? {} : { scale: 0.98 }}
    >
      <Icon className={`w-6 h-6 ${comingSoon ? "opacity-50" : ""}`} />
      <div className="text-left">
        <p className={`text-xs ${comingSoon ? "text-gray-400" : primary ? "text-blue-100" : "text-gray-500"}`}>
          {comingSoon ? "Coming Soon" : subtitle}
        </p>
        <p className={`font-semibold ${comingSoon ? "text-gray-400" : ""}`}>{title}</p>
      </div>
    </motion.button>
  );
}

// Main component
export default function GoldHouseLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: "即时通讯",
      description: "支持万人群组,消息实时同步,多端无缝切换",
      color: "#3370FF",
      bgColor: "#EBF2FF",
    },
    {
      icon: Video,
      title: "高清会议",
      description: "万人同时在线,高清稳定,智能降噪",
      color: "#10B981",
      bgColor: "#D1FAE5",
    },
    {
      icon: Shield,
      title: "端到端加密",
      description: "军事级加密技术,保护每一条消息安全",
      color: "#6366F1",
      bgColor: "#E0E7FF",
    },
    {
      icon: Wallet,
      title: "数字钱包",
      description: "安全便捷的数字资产管理,一键转账收款",
      color: "#F5A623",
      bgColor: "#FEF3C7",
    },
    {
      icon: Bot,
      title: "AI 智能助手",
      description: "内置 MBot 机器人,智能回复,效率翻倍",
      color: "#EC4899",
      bgColor: "#FCE7F3",
    },
    {
      icon: Globe2,
      title: "全球网络",
      description: "200+ 节点覆盖全球,超低延迟体验",
      color: "#14B8A6",
      bgColor: "#CCFBF1",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3370FF] to-[#00C4B4] flex items-center justify-center">
              <span className="text-white font-bold text-lg">金</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Gold<span className="text-[#F5A623]">House</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">Download</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          </div>
          
          <motion.button
            className="px-5 py-2.5 bg-[#3370FF] text-white rounded-full font-medium text-sm hover:bg-[#2860E0] transition-colors shadow-lg shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            立即下载
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen pt-24 pb-16 overflow-hidden">
        <FloatingShapes />
        
        <motion.div
          className="max-w-7xl mx-auto px-6 pt-16 md:pt-24"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-blue-700 font-medium">新一代超级通讯应用</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-gradient">世界在你掌中</span>
                <br />
                <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl">The World in Your Hands</span>
              </motion.h1>
              
              <motion.p
                className="text-lg text-gray-600 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                集即时通讯、高清会议、数字钱包于一体。
                <br />
                <span className="text-gray-400">端到端加密,全球畅连,随时随地高效沟通。</span>
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <DownloadButton icon={Apple} title="App Store" subtitle="Download on the" primary />
                <DownloadButton icon={Play} title="Google Play" subtitle="Get it on" />
                <DownloadButton icon={Globe} title="Web App" subtitle="Open in browser" />
              </motion.div>
              
              {/* Rating */}
              <motion.div
                className="flex items-center gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">
                  <span className="font-semibold text-gray-900">4.9</span> | Based on 10,000+ reviews
                </span>
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Logo marquee */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <LogoMarquee />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One platform. <span className="text-gradient">Fully integrated.</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Gold House 将通讯、会议、钱包集成于一体,让沟通更高效
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All-in-one <span className="text-gradient-gold">Superapp</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Chat, Meet, Pay - 一个应用满足所有需求
            </p>
          </motion.div>
          
          <AppShowcase />
        </div>
      </section>

      {/* Brand values section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Culture", 
                chinese: "文化", 
                description: "传承华人文化精髓,以科技赋能全球华人社区",
                color: "#3370FF",
                bgColor: "from-blue-50 to-cyan-50"
              },
              { 
                title: "Mission", 
                chinese: "使命", 
                description: "让每一位用户享受安全、便捷、高效的数字生活",
                color: "#F5A623",
                bgColor: "from-orange-50 to-yellow-50"
              },
              { 
                title: "Vision", 
                chinese: "愿景", 
                description: "成为全球华人首选的超级应用生态平台",
                color: "#10B981",
                bgColor: "from-green-50 to-emerald-50"
              },
            ].map((item, i) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{item.chinese}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-[#1a1f36] to-[#0f1219] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get <span className="text-gradient">Gold House</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Available on all platforms. Download now and start connecting.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Apple, name: "iOS", desc: "App Store", available: true },
              { icon: Play, name: "Android", desc: "Google Play", available: true },
              { icon: Download, name: "APK", desc: "Direct Download", available: true },
              { icon: Monitor, name: "Windows", desc: "Desktop App", available: true },
              { icon: TestTube, name: "TestFlight", desc: "Beta Testing", available: true },
              { icon: Globe, name: "Web", desc: "Browser App", available: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`group relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ${
                  item.available
                    ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 cursor-pointer"
                    : "bg-white/[0.02] border border-white/5 opacity-50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={item.available ? { scale: 1.02 } : {}}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.available ? "bg-[#3370FF]/20" : "bg-white/5"
                }`}>
                  <item.icon className={`w-6 h-6 ${item.available ? "text-[#3370FF]" : "text-gray-500"}`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.available ? item.desc : "Coming Soon"}</p>
                </div>
                {item.available && (
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                )}
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
            <div className="w-32 h-32 bg-white rounded-2xl p-3 mb-4">
              <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                <QrCode className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <p className="text-gray-400 text-sm">Scan to download</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3370FF] to-[#00C4B4] flex items-center justify-center">
                <span className="text-white font-bold">金</span>
              </div>
              <div>
                <span className="text-lg font-bold">
                  Gold<span className="text-[#F5A623]">House</span>
                </span>
                <p className="text-gray-500 text-sm">世界在你掌中</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; 2024 Gold House. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
