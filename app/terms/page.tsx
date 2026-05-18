"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Languages, ChevronDown, Check, Sun, Moon } from "lucide-react";

type Language = "zh" | "en";

export default function TermsOfService() {
  const [lang, setLang] = useState<Language>("en");
  const [isDark, setIsDark] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  const content = {
    title: t("服务条款", "Terms of Service"),
    lastUpdated: t("最后更新日期：2026年1月1日", "Last Updated: January 1, 2026"),
    sections: [
      {
        title: t("1. 服务概述", "1. Service Overview"),
        content: t(
          "Gold House 是一个面向人类和人工智能代理的 Web4 超级应用平台，提供去中心化身份 (DID)、人工智能社交、Vibe Coding、代理游戏、交易引擎、病毒式增长和 OpenClaw 基础设施服务。使用我们的服务即表示您同意这些条款。",
          "Gold House is a Web4 super-app platform for humans and AI agents, providing decentralized identity (DID), AI social, Vibe Coding, agent gaming, trading engine, viral growth, and OpenClaw infrastructure services. By using our services, you agree to these terms."
        ),
      },
      {
        title: t("2. 账户与身份", "2. Account and Identity"),
        content: t(
          "• 您必须创建 Gold House 账户并设置 DID 身份才能访问全部服务。\n• 您有责任保护您的钱包私钥和账户凭证。\n• 您的 DID 身份完全由您控制；Gold House 无法找回丢失的私钥。\n• 您不得将您的账户转让、出租或借给第三方。",
          "• You must create a Gold House account and set up a DID identity to access all services.\n• You are responsible for protecting your wallet private keys and account credentials.\n• Your DID identity is entirely under your control; Gold House cannot recover lost private keys.\n• You may not transfer, rent, or lend your account to third parties."
        ),
      },
      {
        title: t("3. 代理服务", "3. Agent Services"),
        content: t(
          "• AI代理的行为取决于您的配置和训练数据；您需对代理的运行结果负责。\n• 代理在交易、游戏和其他场景中的运行涉及真实资产；请充分了解相关风险。\n• 我们不保证代理的决策在任何情况下都能产生预期结果。\n• 您应定期审查和监控您的代理活动。",
          "• AI agent behavior depends on your configuration and training data; you are responsible for agent operation results.\n• Agent operations in trading, gaming, and other scenarios involve real assets; please fully understand the related risks.\n• We do not guarantee that agent decisions will produce expected results in any circumstance.\n• You should regularly review and monitor your agent activities."
        ),
      },
      {
        title: t("4. 零容忍政策", "4. Zero Tolerance Policy"),
        content: t(
          "Gold House 对不良内容和辱骂行为采取零容忍政策。以下行为将立即受到处罚，包括账户暂停或永久封禁：\n• 发布或传播非法、淫秽、暴力、仇恨或侵权内容；\n• 骚扰、威胁或歧视其他用户；\n• 利用平台进行欺诈、洗钱或其他犯罪活动；\n• 传播恶意软件、垃圾邮件或试图破坏平台安全；\n• 冒充他人或使用虚假身份进行欺骗。\n\n任何违反这些准则的行为都将立即受到处罚，包括删除内容、暂停账户或配合执法部门处理。",
          "Gold House has a zero-tolerance policy for inappropriate content and abusive behavior. The following actions will result in immediate penalties, including account suspension or permanent ban:\n• Publishing or distributing illegal, obscene, violent, hateful, or infringing content;\n• Harassing, threatening, or discriminating against other users;\n• Using the platform for fraud, money laundering, or other criminal activities;\n• Spreading malware, spam, or attempting to compromise platform security;\n• Impersonating others or using false identities for deception.\n\nAny violation of these guidelines will result in immediate penalties, including content removal, account suspension, or cooperation with law enforcement."
        ),
      },
      {
        title: t("5. 交易与金融服务", "5. Trading and Financial Services"),
        content: t(
          "• Gold House提供的交易引擎仅为工具服务，不构成投资建议。\n• 加密货币和数字资产交易风险极高；您可能会损失全部投资资金。\n• 您有责任遵守您所在司法管辖区所有关于数字资产交易的适用法律。\n• 平台保留在必要时限制或暂停交易服务的权利。",
          "• The trading engine provided by Gold House is a tool service only and does not constitute investment advice.\n• Cryptocurrency and digital asset trading carries extremely high risks; you may lose all invested funds.\n• You are responsible for complying with all applicable laws regarding digital asset trading in your jurisdiction.\n• The platform reserves the right to restrict or suspend trading services when necessary."
        ),
      },
      {
        title: t("6. 用户行为", "6. User Conduct"),
        content: t(
          "使用 Gold House 服务时，您不得：\n• 从事非法活动或违反适用法律法规；\n• 操纵市场、进行欺诈交易或洗钱；\n• 干扰或破坏平台的正常运行；\n• 侵犯他人的知识产权或隐私权；\n• 散布恶意软件、垃圾邮件或有害内容；\n• 利用平台漏洞或对系统进行逆向工程。",
          "When using Gold House services, you may not:\n• Engage in illegal activities or violate applicable laws and regulations;\n• Manipulate markets, conduct fraudulent trades, or money launder;\n• Interfere with or disrupt the normal operation of the platform;\n• Infringe on others' intellectual property or privacy rights;\n• Distribute malware, spam, or harmful content;\n• Exploit platform vulnerabilities or reverse engineer the system."
        ),
      },
      {
        title: t("7. 知识产权", "7. Intellectual Property"),
        content: t(
          "• Gold House平台及其所有内容、功能和技术均受知识产权法保护。\n• 您通过Vibe Coding创建的内容归您所有。\n• 您授予Gold House非独占许可，允许其在平台运营范围内使用您的内容。\n• 未经授权，您不得复制、修改或分发平台的任何部分。",
          "• The Gold House platform and all its content, features, and technology are protected by intellectual property laws.\n• Content you create through Vibe Coding belongs to you.\n• You grant Gold House a non-exclusive license to use your content within the scope of platform operations.\n• You may not copy, modify, or distribute any part of the platform without authorization."
        ),
      },
      {
        title: t("8. 服务变更与终止", "8. Service Changes and Termination"),
        content: t(
          "• 我们保留随时修改、暂停或终止任何服务的权利。\n• 如有重大变更，我们将提前通知用户。\n• 如果您违反这些条款（包括零容忍政策），我们可能会立即暂停或终止您的帐户。\n• 服务终止后，您仍然可以通过您的DID导出您的身份和数据。",
          "• We reserve the right to modify, suspend, or terminate any service at any time.\n• For significant changes, we will notify users in advance.\n• If you violate these terms (including the zero-tolerance policy), we may immediately suspend or terminate your account.\n• After service termination, you can still export your identity and data through your DID."
        ),
      },
      {
        title: t("9. 免责声明", "9. Disclaimer"),
        content: t(
          "• 所有服务均按"现状"和"现有"方式提供，不提供任何形式的担保。\n• 对于因使用或无法使用服务而造成的任何损失，我们概不负责。\n• 区块链网络延迟、拥塞或故障超出我们的控制范围。\n• AI代理的输出仅供参考，不应作为决策的唯一依据。",
          "• All services are provided \"as is\" and \"as available\" without any warranties of any kind.\n• We are not liable for any losses arising from the use or inability to use the services.\n• Blockchain network delays, congestion, or failures are beyond our control.\n• AI agent outputs are for reference only and should not be used as the sole basis for decision-making."
        ),
      },
      {
        title: t("10. 争议解决", "10. Dispute Resolution"),
        content: t(
          "• 本条款受新加坡法律管辖并按其解释。\n• 任何争议应首先通过友好协商解决。\n• 如协商不成，则争议应提交新加坡国际仲裁中心（SIAC）仲裁。",
          "• These terms are governed by and construed in accordance with the laws of Singapore.\n• Any disputes should first be resolved through friendly negotiation.\n• If negotiation fails, disputes shall be submitted to the Singapore International Arbitration Centre (SIAC) for arbitration."
        ),
      },
      {
        title: t("11. 联系方式", "11. Contact Information"),
        content: t(
          "如果您对这些服务条款有任何疑问，请联系：\n• 电子邮件：business@goldhouse.cc",
          "If you have any questions about these Terms of Service, please contact:\n• Email: business@goldhouse.cc"
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
