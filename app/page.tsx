"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
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
  QrCode,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#007AFF] to-[#F5C15C] bg-clip-text text-transparent"
    >
      {value}{suffix}
    </motion.span>
  )
}

// Mouse glow effect component
function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
        background: "radial-gradient(circle, rgba(0,122,255,0.3) 0%, rgba(245,193,92,0.1) 50%, transparent 70%)",
      }}
    />
  )
}

// Floating particles background
function ParticlesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#007AFF]/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, -20, 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Hero Section
function HeroSection() {
  const features = [
    { icon: Users, label: "10M+ Users" },
    { icon: MessageCircle, label: "Real-time" },
    { icon: Shield, label: "Encrypted" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#0D1425] to-[#0A0F1C]" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#007AFF]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F5C15C]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card"
            >
              <span className="w-2 h-2 bg-[#007AFF] rounded-full animate-pulse" />
              <span className="text-sm text-white/80">Next-Gen Communication</span>
            </motion.div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                世界在你掌中
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Gold House connects the world through secure, fast, and scalable communication.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <Button
                asChild
                className="bg-[#007AFF] hover:bg-[#007AFF]/90 text-white px-6 py-6 rounded-xl font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,122,255,0.3)]"
              >
                <a href="#">
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </a>
              </Button>
              <Button
                asChild
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-6 rounded-xl font-medium backdrop-blur-sm border border-white/10 transition-all hover:scale-105"
              >
                <a href="#">
                  <Play className="w-5 h-5 mr-2" />
                  Google Play
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-6 py-6 rounded-xl font-medium transition-all hover:scale-105"
              >
                <a href="#">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Android APK
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button
                asChild
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5 px-4 py-2"
              >
                <a href="#">
                  <Monitor className="w-4 h-4 mr-2" />
                  Windows
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5 px-4 py-2"
              >
                <a href="#">
                  <TestTube className="w-4 h-4 mr-2" />
                  TestFlight
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/5 px-4 py-2"
              >
                <a href="#">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Web App
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Phone mockup */}
            <div className="relative mx-auto w-[280px] md:w-[320px] animate-float">
              {/* Phone frame */}
              <div className="relative rounded-[3rem] bg-gradient-to-b from-[#1a1f35] to-[#0d1220] p-3 shadow-2xl shadow-[#007AFF]/20">
                <div className="rounded-[2.5rem] bg-[#0A0F1C] overflow-hidden">
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
                    <div className="glass-card rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#F5C15C] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">GH</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">Gold House</h3>
                          <p className="text-white/50 text-xs">Online Meeting</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007AFF]/50 to-[#F5C15C]/50"
                          />
                        ))}
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs">
                          +99
                        </div>
                      </div>
                    </div>

                    {/* Chat bubbles */}
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="flex gap-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#007AFF]/30" />
                        <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[70%]">
                          <p className="text-white/90 text-sm">Welcome to Gold House! 🎉</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 }}
                        className="flex gap-2 justify-end"
                      >
                        <div className="bg-[#007AFF] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[70%]">
                          <p className="text-white text-sm">This is amazing! 🚀</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 }}
                        className="flex gap-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#F5C15C]/30" />
                        <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[70%]">
                          <p className="text-white/90 text-sm">10,000+ people online now</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Active users indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 }}
                      className="glass-card rounded-xl p-3 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-white/70 text-xs">Active Users</span>
                      </div>
                      <span className="text-[#007AFF] font-semibold text-sm">12,847</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/4 glass-card rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#007AFF]" />
                  <span className="text-white/80 text-xs">End-to-End</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-1/3 glass-card rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F5C15C]" />
                  <span className="text-white/80 text-xs">Ultra Fast</span>
                </div>
              </motion.div>
            </div>

            {/* Feature pills */}
            <div className="flex justify-center gap-4 mt-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <feature.icon className="w-4 h-4 text-[#007AFF]" />
                  <span className="text-white/70 text-sm">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Feature Cards Section
function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "超大群组",
      subtitle: "Massive Groups",
      description: "支持超大规模社区和群组，轻松管理百万级成员",
    },
    {
      icon: Video,
      title: "万人会议",
      subtitle: "10K+ Meetings",
      description: "支持万人级别在线视频/音频会议，高清流畅",
    },
    {
      icon: Zap,
      title: "极速通讯",
      subtitle: "Lightning Fast",
      description: "超低延迟消息传递，实时同步，毫秒级响应",
    },
    {
      icon: Shield,
      title: "极致安全",
      subtitle: "Secure & Private",
      description: "端到端加密，军事级安全保护您的每一次通信",
    },
    {
      icon: Sparkles,
      title: "无感交互",
      subtitle: "Seamless UX",
      description: "简洁自然的用户体验，流畅丝滑的交互设计",
    },
    {
      icon: Globe,
      title: "全球生态",
      subtitle: "Global Network",
      description: "链接全球用户，打造无国界的社交网络生态",
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            核心优势
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Powerful features designed for the next generation of communication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-[#007AFF]/30 hover:shadow-[0_0_40px_rgba(0,122,255,0.15)]">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#007AFF]/20 to-[#F5C15C]/10 flex items-center justify-center group-hover:from-[#007AFF]/30 group-hover:to-[#F5C15C]/20 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-[#007AFF] group-hover:text-[#F5C15C] transition-colors duration-500" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-14 h-14 rounded-xl bg-[#007AFF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-[#007AFF] text-sm font-medium mb-3">{feature.subtitle}</p>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Brand Philosophy Section
function BrandSection() {
  const philosophy = [
    {
      label: "Culture",
      chinese: "文化",
      value: "坚持前进 · 拥抱创新",
      gradient: "from-[#007AFF] to-[#00C6FF]",
    },
    {
      label: "Mission",
      chinese: "使命",
      value: "极致安全 · 无感交互",
      gradient: "from-[#F5C15C] to-[#FF9500]",
    },
    {
      label: "Vision",
      chinese: "愿景",
      value: "链接全球，打造无界生态",
      gradient: "from-[#8B5CF6] to-[#007AFF]",
    },
  ]

  return (
    <section className="relative py-24 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007AFF]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            品牌理念
          </h2>
          <p className="text-white/60 text-lg">Our Philosophy</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full text-center transition-all duration-500 hover:bg-white/[0.08]">
                <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} mb-6`}>
                  <span className="text-white/90 text-sm font-medium">{item.label}</span>
                </div>
                <p className="text-white/50 text-sm mb-2">{item.chinese}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {item.value}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: "1,000,000", suffix: "+", label: "Global Users" },
    { value: "10,000", suffix: "+", label: "Meeting Capacity" },
    { value: "99.99", suffix: "%", label: "Stability" },
    { value: "200", suffix: "+", label: "Global Nodes" },
  ]

  return (
    <section className="relative py-24 px-4">
      {/* Gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#007AFF]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            数据说话
          </h2>
          <p className="text-white/60 text-lg">Numbers that matter</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 mt-3 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#F5C15C]/30 to-transparent" />
    </section>
  )
}

// Download Section
function DownloadSection() {
  const platforms = [
    {
      icon: Apple,
      name: "iOS",
      description: "iPhone & iPad",
      button: "App Store",
      href: "#",
    },
    {
      icon: Smartphone,
      name: "Android",
      description: "Google Play & APK",
      button: "Download",
      href: "#",
    },
    {
      icon: Monitor,
      name: "Windows",
      description: "Windows 10/11",
      button: "Download",
      href: "#",
    },
    {
      icon: ExternalLink,
      name: "Web",
      description: "Browser App",
      button: "Open",
      href: "#",
    },
    {
      icon: TestTube,
      name: "TestFlight",
      description: "Beta Testing",
      button: "Join Beta",
      href: "#",
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            立即下载
          </h2>
          <p className="text-white/60 text-lg">Download Gold House on your favorite platform</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-[#007AFF]/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#007AFF]/20 to-transparent flex items-center justify-center mb-4 group-hover:from-[#007AFF]/30 transition-all">
                  <platform.icon className="w-7 h-7 text-[#007AFF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{platform.name}</h3>
                <p className="text-white/50 text-sm mb-4">{platform.description}</p>
                
                {/* QR Code placeholder */}
                <div className="w-20 h-20 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <QrCode className="w-10 h-10 text-white/30" />
                </div>

                <Button
                  asChild
                  size="sm"
                  className="w-full bg-[#007AFF] hover:bg-[#007AFF]/90 text-white rounded-lg transition-all hover:scale-105"
                >
                  <a href={platform.href}>
                    <Download className="w-4 h-4 mr-2" />
                    {platform.button}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#F5C15C] flex items-center justify-center">
                <span className="text-white font-bold">GH</span>
              </div>
              <span className="text-2xl font-bold text-white">Gold House</span>
            </div>
            <p className="text-white/50">世界在你掌中</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              User Agreement
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Web App
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Gold House. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Landing Page
export default function GoldHouseLanding() {
  return (
    <main className="relative min-h-screen bg-[#0A0F1C] overflow-hidden grid-bg">
      <MouseGlow />
      <ParticlesBackground />
      
      <HeroSection />
      <FeaturesSection />
      <BrandSection />
      <StatsSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
