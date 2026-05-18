"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Languages, ChevronDown, Check, Sun, Moon } from "lucide-react";

type Language = "zh" | "en";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<Language>("en");
  const [isDark, setIsDark] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  const content = {
    title: t("隐私政策", "Privacy Policy"),
    lastUpdated: t("最后更新日期：2026年5月18日", "Last Updated: May 18, 2026"),
    sections: [
      {
        title: t("1. 我们收集的信息", "1. Information We Collect"),
        content: t(
          "我们可能会收集以下类型的信息：\n• 账户信息：当您注册 Gold House 账户时，我们会收集您的钱包地址、DID 标识符以及您选择提供的个人资料信息。\n• 使用数据：我们会自动收集您与我们服务互动的信息，包括访问时间、功能使用情况和设备信息。\n• 链上数据：与您的代理活动相关的公共区块链交易记录。",
          "We may collect the following types of information:\n• Account Information: When you register a Gold House account, we collect your wallet address, DID identifier, and profile information you choose to provide.\n• Usage Data: We automatically collect information about your interactions with our services, including access times, feature usage, and device information.\n• On-chain Data: Public blockchain transaction records related to your agent activities."
        ),
      },
      {
        title: t("2. 我们如何使用信息", "2. How We Use Information"),
        content: t(
          "我们使用收集的信息用于：\n• 提供、维护和改进我们的服务；\n• 处理交易并发送相关通知；\n• 提供个性化的客服体验；\n• 检测和预防欺诈、滥用和安全威胁；\n• 遵守法律义务。",
          "We use the collected information to:\n• Provide, maintain, and improve our services;\n• Process transactions and send related notifications;\n• Provide personalized customer service experience;\n• Detect and prevent fraud, abuse, and security threats;\n• Comply with legal obligations."
        ),
      },
      {
        title: t("3. 信息共享", "3. Information Sharing"),
        content: t(
          "我们不会出售您的个人信息。在以下情况下，我们可能会共享信息：\n• 经您同意或按您的指示；\n• 与代表我们提供服务的受信任合作伙伴共享（须遵守严格的数据保护协议）；\n• 为遵守法律要求、执行我们的政策或保护权利和安全。",
          "We do not sell your personal information. We may share information in the following circumstances:\n• With your consent or at your direction;\n• With trusted partners who provide services on our behalf (subject to strict data protection agreements);\n• To comply with legal requirements, enforce our policies, or protect rights and safety."
        ),
      },
      {
        title: t("4. 零容忍政策", "4. Zero Tolerance Policy"),
        content: t(
          "Gold House 对不良内容和辱骂行为采取零容忍政策。任何违反我们准则的用户或内容都将立即受到处罚，包括账户暂停或移除。",
          "Gold House has a zero-tolerance policy for inappropriate content and abusive behavior. Any users or content that violate our guidelines will be immediately penalized, including account suspension or removal."
        ),
      },
      {
        title: t("5. 数据安全", "5. Data Security"),
        content: t(
          "我们采用行业标准的安全措施来保护您的信息，包括：\n• 端到端加密通信\n• 去中心化身份验证 (DID)\n• 定期安全审计\n• 严格的访问控制机制",
          "We employ industry-standard security measures to protect your information, including:\n• End-to-end encrypted communications\n• Decentralized Identity Verification (DID)\n• Regular security audits\n• Strict access control mechanisms"
        ),
      },
      {
        title: t("6. 你的权利", "6. Your Rights"),
        content: t(
          "您有权：\n• 访问和导出您的个人数据\n• 请求更正或删除您的信息\n• 撤回对数据处理的同意\n• 通过您的DID完全控制您的身份数据",
          "You have the right to:\n• Access and export your personal data\n• Request correction or deletion of your information\n• Withdraw consent for data processing\n• Have complete control over your identity data through your DID"
        ),
      },
      {
        title: t("7. Cookie 和追踪", "7. Cookies and Tracking"),
        content: t(
          "我们使用必要的 Cookie 和类似技术来确保服务正常运行。您可以通过浏览器设置管理 Cookie 偏好。我们不使用任何第三方广告追踪工具。",
          "We use necessary cookies and similar technologies to ensure the proper functioning of our services. You can manage cookie preferences through your browser settings. We do not use any third-party advertising tracking tools."
        ),
      },
      {
        title: t("8. 政策更新", "8. Policy Updates"),
        content: t(
          "我们可能会不时更新本隐私政策。重大变更将通过应用内通知或电子邮件告知您。您继续使用我们的服务即表示您接受更新后的政策。",
          "We may update this Privacy Policy from time to time. Significant changes will be communicated to you through in-app notifications or email. Your continued use of our services indicates your acceptance of the updated policy."
        ),
      },
      {
        title: t("9. 联系我们", "9. Contact Us"),
        content: t(
          "如果您对本隐私政策有任何疑问，请通过以下方式联系我们：\n• 电子邮件：business@goldhouse.cc",
          "If you have any questions about this Privacy Policy, please contact us at:\n• Email: business@goldhouse.cc"
        ),
      },
    ],
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors ${
          isDark ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-100"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`p-2 rounded-lg transition-colors ${
                isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Gold House Logo" width={32} height={32} className="rounded-lg" />
              <span className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                Gold<span className="text-[#F5A623]">House</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-lg transition-colors ${
                isDark ? "text-yellow-400 hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isDark ? "text-gray-300 hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">{lang === "zh" ? "中文" : "EN"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute right-0 top-full mt-2 rounded-xl shadow-lg border overflow-hidden z-50 ${
                    isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => {
                      setLang("zh");
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 transition-colors ${
                      lang === "zh"
                        ? isDark
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                        : isDark
                        ? "text-gray-300 hover:bg-white/5"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    中文
                    {lang === "zh" && <Check className="w-4 h-4 ml-auto" />}
                  </button>
                  <button
                    onClick={() => {
                      setLang("en");
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 transition-colors ${
                      lang === "en"
                        ? isDark
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                        : isDark
                        ? "text-gray-300 hover:bg-white/5"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    English
                    {lang === "en" && <Check className="w-4 h-4 ml-auto" />}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
            {content.title}
          </h1>
          <p className={`mb-12 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{content.lastUpdated}</p>

          <div className="space-y-10">
            {content.sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {section.title}
                </h2>
                <div
                  className={`leading-relaxed whitespace-pre-line ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className={`py-8 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            &copy; 2024 Gold House. {t("保留所有权利", "All rights reserved.")}
          </p>
        </div>
      </footer>
    </div>
  );
}
