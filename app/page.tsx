"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import {
  Users,
  Video,
  Zap,
  Shield,
  Sparkles,
  Globe,
  Apple,
  Smartphone,
  Monitor,
  TestTube,
  ExternalLink,
  MessageCircle,
  Play,
  Download,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Magnetic button effect
function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.2)
    y.set((e.clientY - centerY) * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated gradient orbs
function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#007AFF]/10 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F5C15C]/8 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-[#00C6FF]/5 blur-[100px]"
      />
    </div>
  )
}

// Floating particles with trails
function ParticlesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? "#007AFF" : "#F5C15C",
              boxShadow: `0 0 ${10 + Math.random() * 10}px ${i % 2 === 0 ? "#007AFF" : "#F5C15C"}`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Animated text reveal
function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Glowing border card
function GlowCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,122,255,0.15), transparent 40%)`,
        }}
      />
      <div className="relative glass-card rounded-2xl h-full overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,193,92,0.1), transparent 40%)`,
          }}
        />
        {children}
      </div>
    </motion.div>
  )
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#0D1425] to-[#0A0F1C]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card border border-[#007AFF]/30"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-[#007AFF] rounded-full"
              />
              <span className="text-sm text-white/80">Next-Gen Communication</span>
              <ChevronRight className="w-4 h-4 text-[#007AFF]" />
            </motion.div>

            {/* Main headline with glow */}
            <div className="relative mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.5 }}
                className="absolute -inset-4 bg-gradient-to-r from-[#007AFF]/20 to-[#F5C15C]/20 blur-3xl rounded-full"
              />
              <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <AnimatedText
                  text="世界在你掌中"
                  className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                />
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Gold House connects the world through secure, fast, and scalable communication.
            </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <MagneticButton>
                <Button
                  asChild
                  className="bg-[#007AFF] hover:bg-[#007AFF]/90 text-white px-6 py-6 rounded-xl font-medium transition-all hover:shadow-[0_0_40px_rgba(0,122,255,0.4)]"
                >
                  <a href="#">
                    <Apple className="w-5 h-5 mr-2" />
                    App Store
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-6 rounded-xl font-medium backdrop-blur-sm border border-white/10 transition-all hover:border-[#007AFF]/50"
                >
                  <a href="#">
                    <Play className="w-5 h-5 mr-2" />
                    Google Play
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-6 py-6 rounded-xl font-medium transition-all hover:border-[#F5C15C]/50"
                >
                  <a href="#">
                    <Download className="w-5 h-5 mr-2" />
                    Android APK
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Monitor, label: "Windows" },
                { icon: TestTube, label: "TestFlight" },
                { icon: ExternalLink, label: "Web App" },
              ].map((item) => (
                <Button
                  key={item.label}
                  asChild
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 group"
                >
                  <a href="#">
                    <item.icon className="w-4 h-4 mr-2 group-hover:text-[#007AFF] transition-colors" />
                    {item.label}
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right mockup with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            {/* Phone mockup */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-[280px] md:w-[320px]"
            >
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#007AFF]/30 to-[#F5C15C]/20 blur-[60px] rounded-full scale-110" />

              {/* Phone frame */}
              <div className="relative rounded-[3rem] bg-gradient-to-b from-[#1a1f35] to-[#0d1220] p-3 shadow-2xl">
                <div className="rounded-[2.5rem] bg-[#0A0F1C] overflow-hidden border border-white/5">
                  {/* Screen content */}
                  <div className="p-4 space-y-4">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white/60 text-xs px-2">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                      </div>
                    </div>

                    {/* App header */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="glass-card rounded-2xl p-4"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#F5C15C] flex items-center justify-center"
                        >
                          <span className="text-white font-bold text-sm">GH</span>
                        </motion.div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">Gold House</h3>
                          <p className="text-white/50 text-xs">Online Meeting</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007AFF]/50 to-[#F5C15C]/50"
                          />
                        ))}
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs">
                          +99
                        </div>
                      </div>
                    </motion.div>

                    {/* Chat bubbles with stagger */}
                    <div className="space-y-3">
                      {[
                        { text: "Welcome to Gold House!", delay: 1.2, align: "left", color: "bg-white/10" },
                        { text: "This is amazing!", delay: 1.5, align: "right", color: "bg-[#007AFF]" },
                        { text: "10,000+ people online", delay: 1.8, align: "left", color: "bg-white/10" },
                      ].map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: msg.align === "left" ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: msg.delay }}
                          className={`flex gap-2 ${msg.align === "right" ? "justify-end" : ""}`}
                        >
                          {msg.align === "left" && (
                            <div className="w-8 h-8 rounded-full bg-[#007AFF]/30" />
                          )}
                          <div className={`${msg.color} rounded-2xl ${msg.align === "left" ? "rounded-tl-sm" : "rounded-tr-sm"} px-4 py-2 max-w-[70%]`}>
                            <p className="text-white/90 text-sm">{msg.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Typing indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 }}
                      className="flex gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#F5C15C]/30" />
                      <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                              className="w-2 h-2 bg-white/40 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5], x: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/4 glass-card rounded-xl p-3 shadow-lg border border-[#007AFF]/20"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#007AFF]" />
                  <span className="text-white/80 text-xs">End-to-End</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5], x: [2, -2, 2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-1/3 glass-card rounded-xl p-3 shadow-lg border border-[#F5C15C]/20"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F5C15C]" />
                  <span className="text-white/80 text-xs">Ultra Fast</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute right-8 -bottom-2 glass-card rounded-xl p-3 shadow-lg border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#00C6FF]" />
                  <span className="text-white/80 text-xs">10K+ Online</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#007AFF] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Feature Cards Section with interactive hover
function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "超大群组",
      subtitle: "Massive Groups",
      description: "支持超大规模社区和群组，轻松管理百万级成员",
      color: "#007AFF",
    },
    {
      icon: Video,
      title: "万人会议",
      subtitle: "10K+ Meetings",
      description: "支持万人级别在线视频/音频会议，高清流畅",
      color: "#F5C15C",
    },
    {
      icon: Zap,
      title: "极速通讯",
      subtitle: "Lightning Fast",
      description: "超低延迟消息传递，实时同步，毫秒级响应",
      color: "#00C6FF",
    },
    {
      icon: Shield,
      title: "极致安全",
      subtitle: "Secure & Private",
      description: "端到端加密，军事级安全保护您的每一次通信",
      color: "#10B981",
    },
    {
      icon: Sparkles,
      title: "无感交互",
      subtitle: "Seamless UX",
      description: "简洁自然的用户体验，流畅丝滑的交互设计",
      color: "#8B5CF6",
    },
    {
      icon: Globe,
      title: "全球生态",
      subtitle: "Global Network",
      description: "链接全球用户，打造无国界的社交网络生态",
      color: "#EC4899",
    },
  ]

  return (
    <section className="relative py-24 px-4">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#007AFF]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 text-[#007AFF] text-sm font-medium"
          >
            Core Features
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            核心优势
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Powerful features designed for the next generation of communication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlowCard key={feature.title} delay={index * 0.1}>
              <div className="p-8 h-full relative z-10">
                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                    style={{ background: `linear-gradient(135deg, ${feature.color}20, transparent)` }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    className="absolute inset-0 rounded-xl"
                    style={{ background: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: feature.color }}>{feature.subtitle}</p>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8"
                >
                  <ChevronRight className="w-5 h-5 text-white/40" />
                </motion.div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Brand Philosophy Section with animated cards
function BrandSection() {
  const philosophy = [
    {
      label: "Culture",
      chinese: "文化",
      value: "坚持前进 · 拥抱创新",
      gradient: "from-[#007AFF] to-[#00C6FF]",
      icon: "🚀",
    },
    {
      label: "Mission",
      chinese: "使命",
      value: "极致安全 · 无感交互",
      gradient: "from-[#F5C15C] to-[#FF9500]",
      icon: "🎯",
    },
    {
      label: "Vision",
      chinese: "愿景",
      value: "链接全球，打造无界生态",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
      icon: "🌍",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", opacity: 0.1 }}
            animate={{ x: "100%", opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#007AFF]/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: "100%" }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#F5C15C]/10 border border-[#F5C15C]/20 text-[#F5C15C] text-sm font-medium"
          >
            Our Philosophy
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            品牌理念
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full text-center relative overflow-hidden">
                {/* Background glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`}
                />

                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: "1px" }}>
                  <div className="w-full h-full rounded-2xl bg-[#0A0F1C]" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </motion.div>
                  <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} mb-4`}>
                    <span className="text-white/90 text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="text-white/50 text-sm mb-2">{item.chinese}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {item.value}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Download Section - Consolidated
function DownloadSection() {
  const platforms = [
    { icon: Apple, name: "iOS", description: "App Store", color: "#007AFF" },
    { icon: Play, name: "Android", description: "Google Play", color: "#34A853" },
    { icon: Smartphone, name: "APK", description: "Direct Download", color: "#F5C15C" },
    { icon: Monitor, name: "Windows", description: "Desktop App", color: "#00C6FF" },
    { icon: TestTube, name: "TestFlight", description: "Beta", color: "#8B5CF6" },
    { icon: ExternalLink, name: "Web", description: "Browser", color: "#EC4899" },
  ]

  return (
    <section className="relative py-24 px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, rgba(0,122,255,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 50%, rgba(245,193,92,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 50%, rgba(0,122,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium"
          >
            Available on All Platforms
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            立即下载
          </h2>
          <p className="text-white/60 text-lg">
            Choose your platform and start connecting
          </p>
        </motion.div>

        {/* Platform grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href="#"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:border-white/20">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                  style={{ background: `${platform.color}20` }}
                >
                  <platform.icon className="w-6 h-6 transition-colors" style={{ color: platform.color }} />
                </motion.div>
                <h3 className="text-white font-semibold text-sm mb-0.5">{platform.name}</h3>
                <p className="text-white/40 text-xs">{platform.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <MagneticButton>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#007AFF] to-[#00C6FF] hover:opacity-90 text-white px-8 py-6 rounded-xl font-medium text-lg transition-all hover:shadow-[0_0_40px_rgba(0,122,255,0.4)]"
            >
              <a href="#">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

// Footer with animated elements
function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#007AFF]/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Slogan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#F5C15C] flex items-center justify-center"
              >
                <span className="text-white font-bold">GH</span>
              </motion.div>
              <span className="text-2xl font-bold text-white">Gold House</span>
            </div>
            <p className="text-white/50">世界在你掌中</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            {["User Agreement", "Privacy Policy", "Web App", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/60 hover:text-[#007AFF] transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#007AFF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-white/40 text-sm">
            © 2026 Gold House. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

// Main Landing Page
export default function GoldHouseLanding() {
  return (
    <main className="relative min-h-screen bg-[#0A0F1C] overflow-hidden">
      <GradientOrbs />
      <ParticlesBackground />

      <HeroSection />
      <FeaturesSection />
      <BrandSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
