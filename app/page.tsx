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
  ChevronDown,
  ExternalLink,
} from "lucide-react";

// Animated particles with trails
function ParticleField() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.id % 3 === 0 
              ? "rgba(245, 193, 92, 0.8)" 
              : particle.id % 3 === 1 
              ? "rgba(0, 122, 255, 0.8)"
              : "rgba(255, 255, 255, 0.6)",
            boxShadow: particle.id % 3 === 0 
              ? "0 0 10px rgba(245, 193, 92, 0.5)" 
              : particle.id % 3 === 1 
              ? "0 0 10px rgba(0, 122, 255, 0.5)"
              : "0 0 6px rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            y: [0, -1000],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Animated light rays
function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: "50%",
            top: "35%",
            width: "3px",
            height: "120vh",
            background: `linear-gradient(to bottom, 
              ${i % 3 === 0 ? "rgba(0, 122, 255, 0.4)" : i % 3 === 1 ? "rgba(245, 193, 92, 0.3)" : "rgba(0, 212, 255, 0.25)"}, 
              transparent 70%)`,
            transformOrigin: "top center",
            transform: `rotate(${i * 30 - 180}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scaleY: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

// Animated portal/door effect - inspired by amBit
function GlowingPortal() {
  return (
    <div className="relative w-52 h-80 md:w-64 md:h-[420px]">
      {/* Outer glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "linear-gradient(180deg, rgba(0, 122, 255, 0.5), rgba(0, 212, 255, 0.4), rgba(245, 193, 92, 0.3))",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary glow */}
      <motion.div
        className="absolute inset-8 rounded-2xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.6), transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Portal frame */}
      <motion.div
        className="absolute inset-4 rounded-2xl overflow-hidden border-2 border-black/30"
        style={{
          background: "linear-gradient(180deg, #00D4FF 0%, #007AFF 25%, #00A8E8 50%, #F5C15C 75%, #FF8C42 100%)",
          backgroundSize: "100% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Inner dark frame */}
        <div className="absolute inset-1 bg-gradient-to-b from-black/20 via-transparent to-black/20 rounded-xl" />
        
        {/* Center light */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1 h-full bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
        
        {/* Horizontal glow lines */}
        {[20, 40, 60, 80].map((top, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${top}%`,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Floating orbs around portal */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: i % 2 === 0 ? "#007AFF" : "#F5C15C",
            boxShadow: `0 0 20px ${i % 2 === 0 ? "rgba(0, 122, 255, 0.9)" : "rgba(245, 193, 92, 0.9)"}`,
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: [
              Math.cos((i * Math.PI * 2) / 8) * 120,
              Math.cos((i * Math.PI * 2) / 8 + Math.PI) * 120,
              Math.cos((i * Math.PI * 2) / 8) * 120,
            ],
            y: [
              Math.sin((i * Math.PI * 2) / 8) * 180,
              Math.sin((i * Math.PI * 2) / 8 + Math.PI) * 180,
              Math.sin((i * Math.PI * 2) / 8) * 180,
            ],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

// Feature orbit icons - inspired by amBit's hexagonal layout
function FeatureOrbit() {
  const features = [
    { icon: MessageCircle, label: "即时通讯", sublabel: "Instant Chat", color: "#007AFF" },
    { icon: Users, label: "超大群组", sublabel: "Group Chat", color: "#F5C15C" },
    { icon: Video, label: "视频会议", sublabel: "Meetings", color: "#00D4FF" },
    { icon: Shield, label: "钱包", sublabel: "Wallet", color: "#10B981" },
    { icon: Sparkles, label: "社交身份", sublabel: "Social Identity", color: "#A855F7" },
    { icon: Zap, label: "AI 机器人", sublabel: "MBot", color: "#FF6B35" },
  ];

  return (
    <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px]">
      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 122, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(245, 193, 92, 0.3)" />
            <stop offset="100%" stopColor="rgba(0, 122, 255, 0.3)" />
          </linearGradient>
        </defs>
        {features.map((_, i) => {
          const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
          const nextAngle = ((i + 1) * Math.PI * 2) / 6 - Math.PI / 2;
          const radius = 180;
          const centerX = 275;
          const centerY = 275;
          
          return (
            <motion.line
              key={i}
              x1={centerX + Math.cos(angle) * radius}
              y1={centerY + Math.sin(angle) * radius}
              x2={centerX + Math.cos(nextAngle) * radius}
              y2={centerY + Math.sin(nextAngle) * radius}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
            />
          );
        })}
        {/* Lines to center */}
        {features.map((_, i) => {
          const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
          const radius = 180;
          const centerX = 275;
          const centerY = 275;
          
          return (
            <motion.line
              key={`center-${i}`}
              x1={centerX}
              y1={centerY}
              x2={centerX + Math.cos(angle) * radius}
              y2={centerY + Math.sin(angle) * radius}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Central logo */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          className="w-full h-full rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#00D4FF] flex items-center justify-center shadow-2xl relative overflow-hidden"
          animate={{
            boxShadow: [
              "0 0 30px rgba(0, 122, 255, 0.4)",
              "0 0 50px rgba(0, 122, 255, 0.6)",
              "0 0 30px rgba(0, 122, 255, 0.4)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white relative z-10">金</span>
        </motion.div>
        
        {/* Outer ring pulse */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-[#007AFF]"
          animate={{
            scale: [1, 1.3, 1.3],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Brand name under logo */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{ top: "calc(50% + 70px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-lg sm:text-xl font-semibold text-white">
          Gold<span className="text-[#F5C15C]">House</span>
        </span>
      </motion.div>

      {/* Orbiting icons */}
      {features.map((feature, i) => {
        const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ x: x - 40, y: y - 40 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.12, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {/* Icon container */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}08)`,
                  border: `1px solid ${feature.color}40`,
                  boxShadow: `0 0 25px ${feature.color}15`,
                }}
              >
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: feature.color }} />
                <span className="text-[10px] sm:text-xs text-white/80 hidden sm:block">{feature.sublabel}</span>
              </div>
              
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${feature.color}30, transparent 70%)`,
                  filter: "blur(10px)",
                }}
              />
              
              {/* Pulse ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ border: `1px solid ${feature.color}` }}
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: [1, 1.4],
                  opacity: [0.5, 0],
                  transition: { duration: 0.8, repeat: Infinity },
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Feature section with animated mockup
function FeatureSection({
  title,
  subtitle,
  description,
  features,
  mockup,
  reversed = false,
  accentColor = "#007AFF",
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  mockup: React.ReactNode;
  reversed?: boolean;
  accentColor?: string;
}) {
  return (
    <motion.div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1 space-y-6">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm"
          style={{
            background: `${accentColor}12`,
            border: `1px solid ${accentColor}30`,
            color: accentColor,
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ background: accentColor }}
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {subtitle}
        </motion.div>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h3>
        
        <p className="text-white/50 text-lg leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-3 text-white/70"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${accentColor}20` }}
              >
                <svg className="w-3 h-3" style={{ color: accentColor }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex-1 w-full max-w-md lg:max-w-none">
        {mockup}
      </div>
    </motion.div>
  );
}

// Chat mockup with animations
function ChatMockup() {
  const messages = [
    { id: 1, sender: "other", text: "Hey! Check out this new feature", time: "10:32" },
    { id: 2, sender: "self", text: "Wow, the encryption is amazing!", time: "10:33" },
    { id: 3, sender: "other", text: "End-to-end encrypted by default", time: "10:33" },
  ];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-blue-500/20 rounded-3xl blur-2xl" />
      
      <div className="relative bg-gradient-to-b from-[#151b2e] to-[#0a0f1c] rounded-3xl p-1 shadow-2xl border border-white/5">
        <div className="bg-[#0a0f1c] rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
            <motion.div
              className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-white font-semibold">A</span>
            </motion.div>
            <div className="flex-1">
              <p className="text-white font-medium">Alice Chen</p>
              <p className="text-green-400 text-sm flex items-center gap-1.5">
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Online
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <Video className="w-4 h-4 text-white/60" />
              </div>
              <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4 min-h-[300px]">
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                className={`flex ${msg.sender === "self" ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, y: 20, x: msg.sender === "self" ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    msg.sender === "self"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-md"
                      : "bg-white/5 text-white rounded-bl-md"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1.5 ${msg.sender === "self" ? "text-blue-200/70" : "text-white/40"}`}>
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Typing indicator */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <div className="w-8 h-8 rounded-full bg-white/10" />
              <div className="bg-white/5 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 rounded-full bg-white/40"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Meeting mockup with animations
function MeetingMockup() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/15 via-orange-500/10 to-yellow-500/15 rounded-3xl blur-2xl" />
      
      <div className="relative bg-gradient-to-b from-[#1a1f2e] to-[#0a0f1c] rounded-3xl p-1 shadow-2xl border border-white/5">
        <div className="bg-[#0a0f1c] rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <motion.span
                className="w-2.5 h-2.5 rounded-full bg-yellow-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-yellow-400 text-sm font-medium">Meeting Room</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
          </div>

          {/* Meeting info */}
          <div className="px-5 py-4 border-b border-white/5">
            <h4 className="text-white font-semibold text-lg">Gold House Weekly Sync</h4>
            <p className="text-white/50 text-sm mt-1 flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                12 participants
              </span>
              <span className="text-green-400 flex items-center gap-1.5">
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                In progress · 23:45
              </span>
            </p>
          </div>

          {/* Participants grid */}
          <div className="grid grid-cols-4 gap-2 p-4">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <Users className="w-6 h-6 text-white/30" />
                {i < 2 && (
                  <motion.div
                    className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3 px-5 py-4 border-t border-white/5">
            {[
              { icon: "🎤", active: true, color: "bg-white/10" },
              { icon: "📹", active: true, color: "bg-white/10" },
              { icon: "🖥️", active: false, color: "bg-white/5" },
              { icon: "👋", active: false, color: "bg-white/5" },
            ].map((ctrl, i) => (
              <motion.div
                key={i}
                className={`w-11 h-11 rounded-full flex items-center justify-center text-base ${ctrl.color} cursor-pointer hover:bg-white/15 transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctrl.icon}
              </motion.div>
            ))}
            <motion.div
              className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              📞
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Download platform card
function PlatformCard({
  icon,
  name,
  description,
  available = true,
  highlight = false,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
  available?: boolean;
  highlight?: boolean;
}) {
  return (
    <motion.div
      className={`relative group rounded-2xl p-6 transition-all duration-500 ${
        highlight
          ? "bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/30"
          : "bg-white/[0.02] border border-white/5 hover:border-white/15"
      }`}
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {highlight && (
        <>
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          <motion.div
            className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </>
      )}
      
      <div className="flex flex-col h-full relative z-10">
        <motion.div
          className="mb-4"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h4 className="text-lg font-semibold text-white mb-1">{name}</h4>
        <p className="text-sm text-white/40 mb-5 flex-1">{description}</p>
        
        {available ? (
          <motion.button
            className={`w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
              highlight
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25"
                : "bg-white/5 text-white hover:bg-white/10"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Free Download
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        ) : (
          <div className="w-full py-3 rounded-xl text-sm text-white/30 text-center bg-white/[0.02] border border-white/5">
            Coming Soon
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function GoldHouseLanding() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div className="relative min-h-screen bg-[#050810] text-white overflow-x-hidden">
      {/* Background effects */}
      <ParticleField />
      <div className="fixed inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated background lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${15 + i * 15}%`,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "rgba(0, 122, 255, 0.15)" : "rgba(245, 193, 92, 0.1)"}, transparent)`,
            }}
            animate={{
              x: i % 2 === 0 ? ["-100%", "100%"] : ["100%", "-100%"],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#050810]/70 border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-blue-500/25"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-lg font-bold">金</span>
            </motion.div>
            <span className="text-xl font-semibold">
              Gold<span className="text-[#F5C15C]">House</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Modules", "Get Started", "Blog"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-white/50 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#007AFF] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 text-sm bg-white/5 rounded-lg p-1">
              <button className="px-3 py-1.5 rounded-md bg-white/10 text-white font-medium">EN</button>
              <button className="px-3 py-1.5 rounded-md text-white/50 hover:text-white transition-colors">ZH</button>
            </div>
            <motion.button
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white text-sm font-medium shadow-lg shadow-green-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Launch App
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20">
        <LightRays />
        
        <motion.div 
          className="relative z-10 text-center px-6"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {/* Welcome badge */}
          <motion.p
            className="text-xs sm:text-sm tracking-[0.25em] text-white/40 mb-10 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to Gold House
          </motion.p>

          {/* Portal */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <GlowingPortal />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="block text-white mb-2">Open the Door to</span>
            <span className="bg-gradient-to-r from-[#007AFF] via-[#00D4FF] to-[#F5C15C] bg-clip-text text-transparent">
              Global Communication
            </span>
          </motion.h1>

          <motion.p
            className="text-white/40 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Your AI Agent is ready — chats, meetings, and connections, all in one app.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#007AFF] to-[#00D4FF] text-white font-medium flex items-center gap-2 shadow-xl shadow-blue-500/30"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 122, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Try It Now
              <ExternalLink className="w-4 h-4" />
            </motion.button>
            <motion.button
              className="px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download
              <Download className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* One App Section with Feature Orbit */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              One App.{" "}
              <span className="bg-gradient-to-r from-[#007AFF] to-[#F5C15C] bg-clip-text text-transparent">
                Everything Connected.
              </span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Seamlessly integrated communication platform for the modern world
            </p>
          </motion.div>

          {/* Feature Orbit */}
          <div className="flex justify-center overflow-visible py-10">
            <FeatureOrbit />
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section id="features" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          <FeatureSection
            subtitle="INSTANT CHAT"
            title="Private Encrypted Chat with Lightning Speed"
            description="End-to-end encrypted messaging with support for text, voice, files, and in-chat transfers. Your privacy is our priority."
            features={[
              "Military-grade E2E encryption",
              "Rich media & file sharing",
              "Message reactions & threads",
              "Cross-device sync in real-time",
            ]}
            mockup={<ChatMockup />}
            accentColor="#007AFF"
          />

          <FeatureSection
            subtitle="MEETINGS"
            title="Voice & Video Meetings, Anytime, Anywhere"
            description="Create or join meetings via link or room code with mic, camera, and screen sharing controls. Support for up to 10,000 participants."
            features={[
              "HD video & crystal-clear audio",
              "Screen sharing & annotations",
              "Meeting recordings & transcripts",
              "Virtual backgrounds & effects",
            ]}
            mockup={<MeetingMockup />}
            reversed
            accentColor="#F5C15C"
          />
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="relative py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#F5C15C] to-[#FF6B35] bg-clip-text text-transparent">
                Philosophy
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "文化 | Culture",
                desc: "真正的自由是对自由的追求",
                subdesc: "True freedom is the pursuit of freedom",
                color: "#007AFF",
              },
              {
                title: "使命 | Mission",
                desc: "让世界在你掌中",
                subdesc: "Let the world be in your hands",
                color: "#F5C15C",
              },
              {
                title: "愿景 | Vision",
                desc: "重新定义全球通讯",
                subdesc: "Redefining global communication",
                color: "#00D4FF",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}15, transparent)`,
                  }}
                />
                <div className="relative p-8 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-500 h-full bg-white/[0.01]">
                  <motion.div
                    className="w-1 h-12 rounded-full mb-6"
                    style={{ background: item.color }}
                    whileHover={{ height: 60 }}
                  />
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-2xl font-light text-white mb-3">{item.desc}</p>
                  <p className="text-white/40">{item.subdesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="get-started" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get Started with{" "}
              <span className="bg-gradient-to-r from-[#007AFF] to-[#00D4FF] bg-clip-text text-transparent">
                Gold House
              </span>
            </h2>
            <p className="text-white/40 text-lg">
              Available on all your favorite platforms
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <PlatformCard
              icon={<Apple className="w-9 h-9 text-white" />}
              name="iOS"
              description="App Store"
              highlight
            />
            <PlatformCard
              icon={<Play className="w-9 h-9 text-green-500" />}
              name="Android"
              description="Google Play"
              highlight
            />
            <PlatformCard
              icon={<Download className="w-9 h-9 text-blue-400" />}
              name="Android APK"
              description="Direct download"
            />
            <PlatformCard
              icon={<Monitor className="w-9 h-9 text-cyan-400" />}
              name="Windows"
              description="Desktop app"
              available={false}
            />
            <PlatformCard
              icon={<TestTube className="w-9 h-9 text-yellow-400" />}
              name="TestFlight Beta"
              description="Early access to new features"
            />
            <PlatformCard
              icon={<Apple className="w-9 h-9 text-gray-500" />}
              name="macOS"
              description="Desktop app"
              available={false}
            />
          </div>

          {/* Web App CTA */}
          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 text-white font-medium text-lg shadow-xl shadow-green-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(34, 197, 94, 0.35)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
              Try Web App Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-lg font-bold text-white">金</span>
              </div>
              <div>
                <span className="text-lg font-semibold block">
                  Gold<span className="text-[#F5C15C]">House</span>
                </span>
                <p className="text-xs text-white/30">The Smart Communication Platform</p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 text-center text-sm text-white/30">
            &copy; 2026 Gold House. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
