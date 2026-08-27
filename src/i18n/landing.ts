export type Locale = "zh-CN" | "zh-TW" | "ko" | "en";

export const localeNames: Record<Locale, string> = {
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  ko: "한국어",
  en: "English",
};

type Copy = {
  nav: { product: string; ucard: string; ecosystem: string; about: string; open: string; download: string; menu: string };
  download: { title: string; description: string; ios: string; android: string; iosDevice: string; androidDevice: string; version: string; close: string };
  hero: { title: string; description: string };
  core: {
    eyebrow: string; title: string; description: string;
    items: Array<{ label: string; title: string; description: string }>;
  };
  product: {
    eyebrow: string; title: string; description: string;
    secondEyebrow: string; secondTitle: string; secondDescription: string;
    tabs: string[];
  };
  community: {
    eyebrow: string; title: string; description: string;
    items: Array<{ title: string; description: string }>;
  };
  ucard: { eyebrow: string; title: string; description: string; steps: string[] };
  ecosystem: { eyebrow: string; title: string; description: string; cards: string[]; announcement: string; comingSoon: string };
  cta: { title: string; description: string };
  footer: {
    tagline: string; copyright: string;
    groups: Array<{ title: string; links: string[] }>;
  };
};

export const translations: Record<Locale, Copy> = {
  "zh-CN": {
    nav: { product: "产品", ucard: "U Card", ecosystem: "生态", about: "关于", open: "打开 Web", download: "下载 App", menu: "菜单" },
    download: { title: "下载移动版 GoldHouse", description: "下载 GoldHouse，体验 Web2 级别的流畅入口，开启你的 Web3 社交与资产之旅。", ios: "iOS", android: "Android", iosDevice: "iPhone / iPad", androidDevice: "Android", version: "版本", close: "关闭下载窗口" },
    hero: {
      title: "To hold ! The world !",
      description: "GoldHouse 不只是「IM + 钱包」—— 一个社交账户，统一身份、资产、治理与应用。以 Web2 级的无缝体验，承载 Web3 的完整去中心化价值。",
    },
    core: {
      eyebrow: "核心能力",
      title: "社交即一切",
      description: "身份、资产、治理与应用，都发生在同一个社交账户中。",
      items: [
        { label: "身份", title: "社交即身份", description: "让身份、关系与声誉在不同 Web3 场景中始终一致。" },
        { label: "支付", title: "社交即支付", description: "转账、打赏与订阅自然发生在对话中，价值随消息流动。" },
        { label: "治理", title: "社交即治理", description: "从社区投票到多签执行，协作过程透明且可验证。" },
        { label: "DApp", title: "社交即应用", description: "在对话中直接访问和触发 Web3 应用，无需来回切换。" },
      ],
    },
    product: {
      eyebrow: "一个账户，连接链上一切",
      title: "一个账户，连接整个 Web3",
      description: "与社区交流、管理资产、参与治理并访问应用——无需在不同产品之间跳转。",
      secondEyebrow: "GoldHouse 内的一切",
      secondTitle: "完整能力，无需复杂入口",
      secondDescription: "把身份、社交、支付、治理与应用带进同一个产品体验。",
      tabs: ["消息", "社群", "发现", "我的"],
    },
    community: {
      eyebrow: "社区创造价值",
      title: "社区创造价值，价值回归社区",
      description: "社区运营者直接参与收益分配，不依赖邀请码体系。",
      items: [
        { title: "高质量社区", description: "Token-gated 机制自动筛选真实成员。社区质量直接影响收益，激励运营者建设紧密、高价值的社群。" },
        { title: "对话驱动交易", description: "支付、打赏与订阅自然发生在聊天场景中，社区活跃度直接转化为真实交易量。" },
        { title: "收益回流运营者", description: "群主按比例获得直接交易分成，不依赖邀请码；结算透明且链上可验证。" },
        { title: "治理提升留存", description: "参与治理让成员产生真正的归属感并提升留存，稳定的社区基础带来持续收益。" },
      ],
    },
    ucard: {
      eyebrow: "GOLDHOUSE U CARD",
      title: "一张 U Card，连接 Web3 与现实世界",
      description: "数字资产可转换为卡账户支付余额，用于日常消费场景。具体卡种、支持能力及限制以平台页面为准。",
      steps: ["数字资产", "GoldHouse", "U Card", "日常支付"],
    },
    ecosystem: {
      eyebrow: "生态",
      title: "共同构建",
      description: "与 Web3 项目一起，构建开放的生态系统。",
      announcement: "查看公告",
      comingSoon: "即将官宣",
      cards: [
        "Web3 交易聚合器，提供实时 DEX 交易、市场分析与智能交易工具，帮助用户更高效地执行和追踪链上资产。",
        "基于 BNB Chain 的去中心化 PayFi 支付基础设施，专注 Web3 支付、流动性与生态建设。",
        "面向代币化美股等链上资产的支付基础设施，将资产带入全球跨境支付和社交金融场景。",
        "2017 年上线的 EVM 兼容公链，拥有超过 32 万个链上地址，并获得多家知名加密基金支持。",
        "服务全球百万用户的 AI Agent 平台，已处理超过 840 亿 Token。",
        "通过 AI Agent 与支付生态扩展 Web4 的智能与连接能力。",
        "自主交易 Agent，已在 Google Play 与 App Store 上线，拥有 5 万用户。",
        "融合 AI Agent、DePIN 与 DeFAI 的 Web4 AI 网络基础设施平台。",
        "面向 Web3 的洞察与生态协作平台，连接数据、项目与社区价值。",
      ],
    },
    cta: { title: "你的 Web3 旅程，从 GoldHouse 开始", description: "一个账户，承载聊天、身份、资产、治理与应用。" },
    footer: {
      tagline: "连接、身份、所有权与社区的 Web3 枢纽。",
      copyright: "© 2026 GoldHouse. 保留所有权利。",
      groups: [
        { title: "产品", links: ["GoldHouse", "一个账户", "一体化体验", "U Card"] },
        { title: "核心能力", links: ["社交身份", "社交支付", "社交治理", "社交应用"] },
        { title: "生态", links: ["社区经济", "生态伙伴"] },
        { title: "访问", links: ["Web App", "下载 App"] },
      ],
    },
  },
  "zh-TW": {
    nav: { product: "產品", ucard: "U Card", ecosystem: "生態", about: "關於", open: "開啟 Web", download: "下載 App", menu: "選單" },
    download: { title: "下載行動版 GoldHouse", description: "下載 GoldHouse，體驗 Web2 級別的流暢入口，開啟你的 Web3 社交與資產之旅。", ios: "iOS", android: "Android", iosDevice: "iPhone / iPad", androidDevice: "Android", version: "版本", close: "關閉下載視窗" },
    hero: {
      title: "To hold ! The world !",
      description: "GoldHouse 不只是「IM + 錢包」—— 一個社交帳戶，統一身分、資產、治理與應用。以 Web2 級的無縫體驗，承載 Web3 的完整去中心化價值。",
    },
    core: {
      eyebrow: "核心能力", title: "社交即一切", description: "身分、資產、治理與應用，都發生在同一個社交帳戶中。",
      items: [
        { label: "身分", title: "社交即身分", description: "讓身分、關係與聲譽在不同 Web3 場景中始終一致。" },
        { label: "支付", title: "社交即支付", description: "轉帳、打賞與訂閱自然發生在對話中，價值隨訊息流動。" },
        { label: "治理", title: "社交即治理", description: "從社群投票到多簽執行，協作過程透明且可驗證。" },
        { label: "DApp", title: "社交即應用", description: "在對話中直接存取和觸發 Web3 應用，無需來回切換。" },
      ],
    },
    product: {
      eyebrow: "一個帳戶，連接鏈上一切", title: "一個帳戶，連接整個 Web3", description: "與社群交流、管理資產、參與治理並存取應用——無需在不同產品之間跳轉。",
      secondEyebrow: "GoldHouse 內的一切", secondTitle: "完整能力，無需複雜入口", secondDescription: "把身分、社交、支付、治理與應用帶進同一個產品體驗。",
      tabs: ["訊息", "社群", "探索", "我的"],
    },
    community: {
      eyebrow: "社群創造價值", title: "社群創造價值，價值回歸社群", description: "社群營運者直接參與收益分配，不依賴邀請碼體系。",
      items: [
        { title: "高品質社群", description: "Token-gated 機制自動篩選真實成員，社群品質直接影響收益。" },
        { title: "對話驅動交易", description: "支付、打賞與訂閱自然發生在聊天場景中，活躍度直接轉化為交易量。" },
        { title: "收益回流營運者", description: "群主按比例獲得交易分成；結算透明且鏈上可驗證。" },
        { title: "治理提升留存", description: "參與治理帶來歸屬感並提升留存，穩定社群帶來持續收益。" },
      ],
    },
    ucard: { eyebrow: "GOLDHOUSE U CARD", title: "一張 U Card，連接 Web3 與現實世界", description: "數位資產可轉換為卡帳戶支付餘額，用於日常消費場景。具體卡種、支援能力及限制以平台頁面為準。", steps: ["數位資產", "GoldHouse", "U Card", "日常支付"] },
    ecosystem: {
      eyebrow: "生態", title: "共同構建", description: "與 Web3 專案一起，構建開放的生態系統。", announcement: "查看公告", comingSoon: "即將官宣",
      cards: [
        "Web3 交易聚合器，提供即時 DEX 交易、分析與智能交易工具。",
        "基於 BNB Chain 的去中心化 PayFi 支付基礎設施。",
        "將代幣化資產帶入全球跨境支付和社交金融場景。",
        "2017 年上線的 EVM 相容公鏈，擁有超過 32 萬個鏈上地址。",
        "服務全球百萬用戶的 AI Agent 平台，已處理超過 840 億 Token。",
        "透過 AI Agent 與支付生態擴展 Web4 的智能與連接能力。",
        "自主交易 Agent，已於 Google Play 與 App Store 上線。",
        "融合 AI Agent、DePIN 與 DeFAI 的 Web4 AI 網路基礎設施。",
        "面向 Web3 的洞察與生態協作平台。",
      ],
    },
    cta: { title: "你的 Web3 旅程，從 GoldHouse 開始", description: "一個帳戶，承載聊天、身分、資產、治理與應用。" },
    footer: {
      tagline: "連接、身分、所有權與社群的 Web3 樞紐。", copyright: "© 2026 GoldHouse. 保留所有權利。",
      groups: [
        { title: "產品", links: ["GoldHouse", "一個帳戶", "一體化體驗", "U Card"] },
        { title: "核心能力", links: ["社交身分", "社交支付", "社交治理", "社交應用"] },
        { title: "生態", links: ["社群經濟", "生態夥伴"] },
        { title: "存取", links: ["Web App", "下載 App"] },
      ],
    },
  },
  ko: {
    nav: { product: "제품", ucard: "U Card", ecosystem: "생태계", about: "소개", open: "Web 열기", download: "앱 다운로드", menu: "메뉴" },
    download: { title: "모바일 GoldHouse 다운로드", description: "GoldHouse를 다운로드하고 Web2처럼 매끄러운 진입 경험으로 Web3 소셜과 자산 여정을 시작하세요.", ios: "iOS", android: "Android", iosDevice: "iPhone / iPad", androidDevice: "Android", version: "버전", close: "다운로드 창 닫기" },
    hero: {
      title: "To hold ! The world !",
      description: "GoldHouse는 단순한 ‘IM + Wallet’이 아닙니다. 하나의 소셜 계정으로 정체성, 자산, 거버넌스, 앱을 연결하고 Web2 수준의 매끄러운 경험으로 Web3의 가치를 담습니다.",
    },
    core: {
      eyebrow: "핵심 역량", title: "소셜이 곧 모든 것", description: "정체성, 자산, 거버넌스와 앱이 하나의 소셜 계정 안에서 작동합니다.",
      items: [
        { label: "정체성", title: "소셜이 곧 정체성", description: "Web3의 모든 맥락에서 정체성, 관계와 평판을 일관되게 유지합니다." },
        { label: "결제", title: "소셜이 곧 결제", description: "송금, 팁과 구독이 대화 속에서 자연스럽게 이루어집니다." },
        { label: "거버넌스", title: "소셜이 곧 거버넌스", description: "커뮤니티 투표부터 멀티시그 실행까지 투명하게 검증합니다." },
        { label: "DApp", title: "소셜이 곧 앱", description: "대화에서 Web3 앱을 바로 열고 실행합니다." },
      ],
    },
    product: {
      eyebrow: "하나의 계정, 온체인의 모든 것", title: "하나의 계정으로 Web3 전체를 연결", description: "커뮤니티 대화, 자산 관리, 거버넌스 참여와 앱 접근을 제품 전환 없이 경험하세요.",
      secondEyebrow: "GOLDHOUSE 안의 모든 것", secondTitle: "복잡한 진입점 없이 완전한 기능", secondDescription: "정체성, 소셜, 결제, 거버넌스와 앱을 하나의 제품 경험으로 통합합니다.",
      tabs: ["메시지", "커뮤니티", "탐색", "프로필"],
    },
    community: {
      eyebrow: "커뮤니티가 만드는 가치", title: "커뮤니티가 가치를 만들고, 가치는 커뮤니티로", description: "초대 코드와 분리된 커뮤니티 운영자 직접 수익 공유.",
      items: [
        { title: "고품질 커뮤니티", description: "Token-gated 메커니즘이 진짜 구성원을 선별하고 커뮤니티 품질을 높입니다." },
        { title: "대화가 거래를 만듭니다", description: "결제, 팁과 구독이 채팅 안에서 이루어져 활동이 거래량으로 전환됩니다." },
        { title: "운영자에게 돌아가는 수익", description: "그룹 운영자는 초대 코드 없이 직접 거래 수익을 분배받습니다." },
        { title: "거버넌스로 높이는 유지율", description: "거버넌스 참여는 소속감과 유지율을 높여 지속 가능한 수익을 만듭니다." },
      ],
    },
    ucard: { eyebrow: "GOLDHOUSE U CARD", title: "Web3와 현실을 연결하는 하나의 U Card", description: "디지털 자산을 카드 계정의 결제 잔액으로 전환해 일상에서 사용할 수 있습니다. 세부 조건은 플랫폼 페이지를 따릅니다.", steps: ["디지털 자산", "GoldHouse", "U Card", "일상 결제"] },
    ecosystem: {
      eyebrow: "생태계", title: "함께 구축합니다", description: "Web3 프로젝트와 열린 생태계를 함께 만듭니다.", announcement: "공지 보기", comingSoon: "곧 공개",
      cards: [
        "실시간 DEX 거래와 시장 분석을 제공하는 Web3 거래 애그리게이터.",
        "BNB Chain 기반의 탈중앙 PayFi 결제 인프라.",
        "토큰화 자산을 글로벌 결제와 소셜 금융으로 연결하는 인프라.",
        "32만 개 이상의 주소를 보유한 EVM 호환 퍼블릭 체인.",
        "전 세계 100만 사용자를 위한 AI Agent 플랫폼.",
        "AI Agent와 결제 생태계로 Web4 연결성을 확장합니다.",
        "앱스토어에 출시된 자율 거래 Agent.",
        "AI Agent, DePIN, DeFAI를 결합한 Web4 AI 네트워크.",
        "데이터, 프로젝트와 커뮤니티를 잇는 Web3 인사이트 플랫폼.",
      ],
    },
    cta: { title: "GoldHouse에서 Web3 여정을 시작하세요", description: "채팅, 정체성, 자산, 거버넌스와 앱을 위한 하나의 계정." },
    footer: {
      tagline: "연결, 정체성, 소유권과 커뮤니티를 위한 Web3 허브.", copyright: "© 2026 GoldHouse. All rights reserved.",
      groups: [
        { title: "제품", links: ["GoldHouse", "하나의 계정", "통합 경험", "U Card"] },
        { title: "핵심 기능", links: ["소셜 아이덴티티", "소셜 결제", "소셜 거버넌스", "소셜 앱"] },
        { title: "생태계", links: ["커뮤니티 경제", "생태계 파트너"] },
        { title: "접속", links: ["Web App", "앱 다운로드"] },
      ],
    },
  },
  en: {
    nav: { product: "Product", ucard: "U Card", ecosystem: "Ecosystem", about: "About", open: "Open Web", download: "Download App", menu: "Menu" },
    download: { title: "Download GoldHouse mobile", description: "Download GoldHouse for a Web2-smooth entry into your Web3 social and asset journey.", ios: "iOS", android: "Android", iosDevice: "iPhone / iPad", androidDevice: "Android", version: "Version", close: "Close download dialog" },
    hero: {
      title: "To hold ! The world !",
      description: "GoldHouse is not just ‘IM + Wallet’ — it’s one social account that unifies identity, assets, governance, and apps. A Web2-grade seamless experience carrying the full decentralized value of Web3.",
    },
    core: {
      eyebrow: "CORE CAPABILITIES", title: "Social is everything", description: "Identity, funds, governance and applications happen inside one social account.",
      items: [
        { label: "Identity", title: "Social as identity", description: "Keep identity, relationships and reputation consistent across Web3 contexts." },
        { label: "Pay", title: "Social as payment", description: "Transfers, tips and subscriptions flow naturally through conversation." },
        { label: "Governance", title: "Social as governance", description: "From community votes to multisig execution, collaboration stays verifiable." },
        { label: "DApp", title: "Social as applications", description: "Access and trigger Web3 applications directly inside conversation." },
      ],
    },
    product: {
      eyebrow: "ONE ACCOUNT, EVERYTHING ONCHAIN", title: "One account, connected across Web3", description: "Chat with your community, manage assets, participate in governance, and access apps — without jumping between products.",
      secondEyebrow: "EVERYTHING INSIDE GOLDHOUSE", secondTitle: "Complete capability without complex entry points", secondDescription: "Bring identity, social, payments, governance and applications into one product experience.",
      tabs: ["Messages", "Community", "Discover", "Profile"],
    },
    community: {
      eyebrow: "COMMUNITY CREATES VALUE", title: "Communities create value, and value returns to communities", description: "Direct revenue sharing for community operators, decoupled from invitation codes.",
      items: [
        { title: "High-Quality Communities", description: "Token-gated mechanisms screen genuine members. Community quality directly impacts revenue, incentivizing operators to run tight, high-value groups." },
        { title: "Conversations Drive Transactions", description: "Every payment, tip, and subscription happens naturally in chat contexts. Community activity converts into real transaction volume." },
        { title: "Revenue Flows Back to Operators", description: "Group owners receive proportional transaction revenue shares with no invite-code dependency. Settlement is transparent and verifiable onchain." },
        { title: "Governance Improves Retention", description: "Members who participate in governance feel genuine belonging, improving retention and sustaining revenue streams." },
      ],
    },
    ucard: { eyebrow: "GOLDHOUSE U CARD", title: "One U Card connecting Web3 and the real world", description: "Digital assets can be converted into payment balance in the card account for everyday spending. Card types, capabilities and restrictions are subject to the platform page.", steps: ["Digital Assets", "GoldHouse", "U Card", "Everyday Payment"] },
    ecosystem: {
      eyebrow: "ECOSYSTEM", title: "Built Together", description: "Build an open ecosystem together with Web3 projects.", announcement: "View announcement", comingSoon: "Coming soon",
      cards: [
        "A Web3 trading aggregator offering real-time DEX trading, market analysis and smart trading tools.",
        "Decentralized PayFi payment infrastructure on BNB Chain, focused on Web3 payments and liquidity.",
        "Onchain payment infrastructure bringing tokenized assets into global payments and social finance.",
        "An EVM-compatible public chain launched in 2017 with more than 320,000 onchain addresses.",
        "An AI agent platform with more than one million users and 84 billion tokens processed.",
        "Expanding Web4 intelligence and connectivity through AI agents and a payment ecosystem.",
        "An autonomous trading agent live on Google Play and the App Store with 50,000 users.",
        "A Web4 AI network combining AI agents, DePIN and DeFAI technologies.",
        "A Web3 insight and ecosystem collaboration platform connecting data, projects and communities.",
      ],
    },
    cta: { title: "Your Web3 journey starts with GoldHouse", description: "One account for chat, identity, assets, governance, and apps." },
    footer: {
      tagline: "Your Web3 hub for connection, identity, ownership, and community.", copyright: "© 2026 GoldHouse. All rights reserved.",
      groups: [
        { title: "Product", links: ["GoldHouse", "One Account", "All-in-One Experience", "U Card"] },
        { title: "Core Capabilities", links: ["Social Identity", "Social Payments", "Social Governance", "Social Apps"] },
        { title: "Ecosystem", links: ["Community Economy", "Ecosystem Partners"] },
        { title: "Access", links: ["Web App", "Download App"] },
      ],
    },
  },
};
