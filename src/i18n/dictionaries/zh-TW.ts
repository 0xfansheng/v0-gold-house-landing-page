import type { Dictionary } from './zh-CN';

const zhTW: Dictionary = {
  meta: {
    title: 'GoldHouse — 多鏈 Web3 社交平台 · 基礎設施級社交入口',
    description:
      'GoldHouse 是基礎設施級的 Web3 社交平台，將身份、資金、治理與應用整合進同一社交帳戶體系。社交即身份、社交即支付、社交即治理、社交即應用——用 Web2 級別的絲滑體驗承載 Web3 完整價值。',
  },
  nav: {
    logoAriaLabel: 'GoldHouse 首頁',
    links: {
      features: '產品功能',
      solutions: '解決方案',
      security: '安全架構',
      ecosystem: '生態',
      alliance: '生態聯盟',
      updates: '動態',
      about: '關於',
    },
    start: '開始使用',
    webApp: '網頁版',
    webAppAriaLabel: '在瀏覽器中開啟 GoldHouse 網頁版',
    switchLang: '切換語言',
    closeMenu: '關閉選單',
    openMenu: '開啟選單',
    mainNav: '主導覽',
    mobileNav: '行動端導覽',
    megaMenuRegion: '產品功能選單',
    megaFooterText: '構建 Web3 時代基礎設施級的社交入口',
    tryNow: '立即體驗',
    mega: {
      col1: {
        title: '四大支柱',
        items: [
          { label: '社交即身份', desc: 'GoldHouse DID 統一入口' },
          { label: '社交即支付', desc: 'GoldHouse Pay 聊天轉帳' },
          { label: '社交即治理', desc: '多簽 Token-gated 社群' },
          { label: '社交即應用', desc: 'DApp Hub 多鏈聚合' },
        ],
      },
      col2: {
        title: '七大模組',
        items: [
          { label: '社交登入與錢包恢復', desc: '一鍵登入 · MPC 保護' },
          { label: '可程式化主子帳戶', desc: '權限分層 · 組織協作' },
          { label: 'E2E 加密 IM', desc: '端到端加密訊息' },
          { label: 'DApp Hub', desc: '多鏈應用聚合中心' },
        ],
      },
      col3: {
        title: '更多',
        items: [
          { label: 'GoldHouse Pay', desc: '嵌入聊天的支付體系' },
          { label: 'GoldHouse DID', desc: '跨社群統一身份' },
          { label: '獨立收益模型', desc: '群主直接分潤' },
        ],
      },
    },
  },
  hero: {
    badge: 'Multi-chain Web3 Social Platform',
    headlinePart1: '構建',
    headlineGold: 'Web3 時代',
    headlinePart2: '基礎設施級的',
    headlineBrand: '社交入口',
    subheadlinePart1: 'GoldHouse 不是「IM + 錢包」，而是承載',
    subheadlineStrong: '身份、資金、治理與應用',
    subheadlinePart2: '的社交帳戶。',
    subheadlinePart3: '用 Web2 級別的絲滑體驗，承載 Web3 完整的去中心化價值。',
    ctaStart: '開始使用',
    ctaLearnMore: '了解更多',
    ctaStartAriaLabel: '立即開始使用 GoldHouse',
    ctaLearnMoreAriaLabel: '了解更多關於 GoldHouse 的功能',
    downloads: {
      appStoreSmall: 'App Store',
      iosSmall: 'TestFlight',
      androidSmall: 'Google Play',
      apkSmall: 'APK 直接安裝',
      appStoreAriaLabel: '在 App Store 取得 GoldHouse',
      iosAriaLabel: '透過 TestFlight 取得適用於 iPhone / iPad 的 GoldHouse',
      androidAriaLabel: '在 Google Play 取得適用於 Android 的 GoldHouse',
      apkAriaLabel: '下載適用於 Android 的 GoldHouse APK',
      webSmall: '網頁版',
      webName: '瀏覽器直達',
      webAriaLabel: '在瀏覽器中開啟 GoldHouse 網頁版，無需安裝',
      comingSoon: '即將發布',
    },
    stats: [
      { value: '7+', label: '核心模組' },
      { value: '多鏈', label: '帳戶體系' },
      { value: 'E2E', label: '加密通訊' },
      { value: 'MPC', label: '金鑰保護' },
    ],
    phoneMockup: {
      appLabel: 'GoldHouse 應用介面預覽',
      activeGroups: '3 個活躍社群',
      chats: [
        { name: 'DeFi Alpha 社群', msg: '剛完成多簽治理投票 ✅', time: '剛剛' },
        { name: 'GoldHouse Pay', msg: 'Alice 向你轉帳 0.5 ETH', time: '2分鐘' },
        { name: 'NFT Builders', msg: 'Token-gated 通過驗證 🔑', time: '5分鐘' },
        { name: 'Web3 開發者', msg: 'DApp Hub 新增 Uniswap V4', time: '1小時' },
      ],
      payLabel: 'GoldHouse Pay',
      transfer: '轉帳',
      tabs: ['聊天', '探索', '錢包', '我的'],
    },
    badges: {
      e2e: 'E2E 加密',
      multichain: '多鏈支援',
      mpc: 'MPC 保護',
    },
  },
  pillars: {
    badge: '四大支柱',
    headingPart1: '社交即',
    headingBrand: '一切',
    subtext:
      '身份、資金、治理、應用——四大支柱整合進同一社交帳戶體系，\n重新定義 Web3 時代的入口價值。',
    items: [
      {
        number: '01',
        title: '社交即身份',
        subtitle: 'GoldHouse DID',
        desc: '讓資料、關係和信譽成為統一的 Web3 身份入口。一個 DID，跨所有社群、鏈上協議與應用保持一致的聲譽體系。',
        tags: ['去中心化身份', '跨社群統一', '鏈上聲譽'],
      },
      {
        number: '02',
        title: '社交即支付',
        subtitle: 'GoldHouse Pay',
        desc: '把轉帳、訂閱、打賞無縫嵌入聊天情境。對話就是支付介面，無需切換 App，訊息發出的同時價值流轉。',
        tags: ['聊天內支付', '打賞訂閱', '多鏈結算'],
      },
      {
        number: '03',
        title: '社交即治理',
        subtitle: '主子帳戶 · 多簽 · Token-gated',
        desc: '主子帳戶、多簽機制與 Token-gated 社群讓組織協作可程式化。從社群投票到鏈上執行，一個體系打通。',
        tags: ['主子帳戶', '多簽治理', 'Token-gated'],
      },
      {
        number: '04',
        title: '社交即應用',
        subtitle: 'DApp Hub',
        desc: '聚合多鏈 DApp，用戶從會話直接進入生態。無需跳轉瀏覽器，在聊天介面內觸發 DeFi、NFT、治理等一切鏈上操作。',
        tags: ['DApp Hub', '多鏈聚合', '會話內觸發'],
      },
    ],
  },
  firstMinute: {
    badge: '首分鐘體驗',
    headingPart1: '從第一秒開始',
    headingBrand: '無感進場',
    subtext:
      'Web3 最大的障礙是入門門檻。GoldHouse 用社交登入徹底消除摩擦——無需助記詞、無需下載錢包插件，一分鐘內開始你的 Web3 旅程。',
    points: [
      '無錢包一鍵登入，保留 Web2 習慣',
      'MPC 保護，私鑰碎片化儲存，永不丟失',
      '統一 DID，一個身份走遍所有 Web3 場景',
      '訊息即價值入口，聊天內完成一切鏈上操作',
    ],
    cta: '立即體驗首分鐘',
    steps: [
      {
        step: '01',
        title: '社交登入',
        desc: '無需建立錢包，使用已有社交帳號一鍵登入，30 秒內進入 Web3 世界。',
      },
      {
        step: '02',
        title: '企業級恢復',
        desc: 'MPC 多方計算守住你的資產，即使裝置遺失也能安全恢復，資產永久屬於你。',
      },
      {
        step: '03',
        title: '統一 DID',
        desc: '跨所有社群持有同一個去中心化身份，聲譽和關係網路無縫跟隨，無需重複建立。',
      },
      {
        step: '04',
        title: '聊天即應用',
        desc: '在聊天介面內直達支付、治理與 DApp。訊息不是終點，訊息是價值流轉的入口。',
      },
    ],
    stepLabel: '步驟',
  },
  imGateway: {
    badge: 'E2E 加密 IM 是入口',
    headingPart1: '訊息不是終點',
    headingBrand: '訊息是價值入口',
    subtext:
      '每一條訊息都可以承載價值流轉。GoldHouse 將支付、治理、應用操作無縫嵌入聊天介面，讓「發訊息」變成完成一切 Web3 操作的起點。',
    mockup: {
      ariaLabel: 'GoldHouse IM 介面模擬',
      groupName: 'DeFi Alpha 社群',
      memberCount: 'Token-gated · 328 成員',
      multiSig: '多簽治理',
      aliceAddr: 'Alice · 0xA1B2...C3D4',
      proposal: '提案 #23 已發起：調整 GoldHouse Pay 手續費至 0.1%，需要 3/5 多簽確認 🗳️',
      governance: '治理提案 #23',
      adjustFee: '調整 GoldHouse Pay 手續費',
      vote: '贊成簽名',
      against: '反對',
      transfer: '向 Bob 轉帳 0.5 ETH',
      transferConfirmed: '≈ $1,842.50 · 已確認',
      payLabel: 'GoldHouse Pay',
      inputPlaceholder: '發送訊息或觸發 DApp...',
      sendPayAriaLabel: '發送支付',
      sendMsgAriaLabel: '發送訊息',
    },
    features: [
      {
        title: 'Token-gated 社群',
        desc: '持有特定 Token 才可進入社群，自動篩選真實成員，告別垃圾訊息。',
      },
      {
        title: 'GoldHouse Pay 聊天內支付',
        desc: '聊天框旁一鍵發起支付，收款方無需任何額外操作，資產即時到帳。',
      },
      {
        title: '多簽治理',
        desc: '組織重要決策需多方簽名確認，鏈上透明可驗證，治理流程完全去中心化。',
      },
      {
        title: 'DApp 觸發',
        desc: '在聊天訊息中嵌入 DApp 操作卡片，接收方點擊即可執行鏈上互動。',
      },
    ],
  },
  modules: {
    badge: '七大模組',
    headingPart1: '完整的',
    headingBrand: '閉環生態',
    subtext:
      '圍繞「身份 · 錢包 · 關係 · 權限 · 應用入口」構建七個核心模組，每一個都是生態閉環中不可缺少的一環。',
    items: [
      {
        id: '01',
        title: '社交登入與錢包恢復',
        desc: '一鍵社交登入，無需建立錢包。MPC 技術保障資產安全，企業級恢復機制確保私鑰永不丟失。',
      },
      {
        id: '02',
        title: '可程式化主子帳戶',
        desc: '主帳戶下建立多個子帳戶，細粒度權限分層，支援團隊協作與機構級帳戶管理。',
      },
      {
        id: '03',
        title: 'E2E 加密 IM',
        desc: '端到端加密訊息，訊息不經過任何中心化伺服器，聊天內容只有雙方可讀。',
      },
      {
        id: '04',
        title: 'DApp Hub',
        desc: '多鏈 DApp 聚合中心，在會話內一鍵觸發 DeFi 操作、NFT 鑄造、治理投票，無需離開聊天介面。',
      },
      {
        id: '05',
        title: 'GoldHouse Pay',
        desc: '聊天內轉帳、訂閱、打賞一體化。支援多鏈資產，Gas 抽象讓用戶無感支付。',
      },
      {
        id: '06',
        title: 'GoldHouse DID',
        desc: '去中心化身份標識，跨鏈、跨社群保持統一身份和信譽積累，鏈上聲譽不可偽造。',
      },
      {
        id: '07',
        title: '獨立收益模型',
        desc: '群主直接分潤，與邀請碼體系解綁。高品質 Token-gated 社群篩選真實成員，對話產生交易，收益回到營運者。',
      },
    ],
    moduleAriaPrefix: '模組',
  },
  alliance: {
    badge: '生態聯盟',
    headingPart1: '與優質專案',
    headingBrand: '共建生態',
    subtext:
      '從安全、支付、公鏈到 AI 代理，GoldHouse 正與一批優質 Web3 專案攜手，\n共同構建開放、互聯的多鏈生態聯盟。',
    announceLabel: '查看官宣',
    comingSoonLabel: '即將官宣',
    visitXPrefix: '造訪',
    partnerAriaPrefix: '生態聯盟成員',
    partners: [
      {
        name: 'AVE',
        desc: 'Web3 交易聚合器，提供即時 DEX 交易、市場分析與智慧交易工具，協助使用者更高效地執行和追蹤鏈上資產。',
      },
      {
        name: 'GoPlus',
        desc: '提供 Web3 安全基礎設施與即時風險偵測能力，為鏈上交易與資產提供安全防護與風控服務。',
      },
      {
        name: 'U9',
        desc: '鏈上資產支付基礎設施，專注將 Binance 等平台的鏈上美股資產轉化為實際支付與消費場景，支援全球跨境支付與社交金融（PayFi）。',
      },
      {
        name: 'REI',
        desc: '2017 年上線的 EVM 相容公鏈，鏈上位址超 32 萬。早期投資方包括分佈式資本、Bixin Ventures、LD Capital 等知名 crypto 基金。',
      },
      {
        name: 'XAgent',
        desc: 'AI Agent 平台，全球使用者超 100 萬，累計處理 840 億+ Tokens。',
      },
      {
        name: 'FistFloor',
        desc: '以 Rise.rich 守住 $FF 永久地板，以 AI Agent 與支付生態拓展 Web4 的智慧與連接。',
      },
      {
        name: 'Alphio AI',
        desc: '自主交易代理，已上線 Google Play 與 App Store，使用者規模達 5 萬。',
      },
      {
        name: 'Astarter',
        desc: 'Web4 AI 網路基礎設施平台，融合 AI 代理、DePIN 與 DeFAI 技術，投資方包括 OKX Ventures 與 EMURGO。',
      },
      {
        name: 'GANA',
        desc: '基於 BNB Chain 的去中心化 PayFi 支付基礎設施，專注 Web3 支付、流動性與生態建設，目標打造全球無縫支付網路。',
      },
    ],
  },
  architecture: {
    badge: '四層架構',
    headingPart1: '極致安全',
    headingDot: '·',
    headingBrand: '無感互動',
    subtext:
      '從體驗到底層，四層架構分工清晰，每層專注自身職責，共同構建堅不可摧的 Web3 社交基礎設施。',
    fromToLabel: '從使用者體驗到底層基礎設施',
    layers: [
      {
        level: '體驗層',
        levelEn: 'Experience Layer',
        items: ['社交登入', 'E2E IM', '聊天即支付', 'Token-gated 社群'],
        description: '用戶直接觸達的互動介面，Web2 級別流暢度',
      },
      {
        level: '帳戶層',
        levelEn: 'Account Layer',
        items: ['DID 身份', '主子帳戶', '權限分層', '社群身份'],
        description: '統一帳戶體系，跨鏈跨社群一致身份和權限',
      },
      {
        level: '安全層',
        levelEn: 'Security Layer',
        items: ['MPC 金鑰管理', '企業級恢復', '多簽治理', '端到端加密'],
        description: '極致安全基礎設施，保障用戶資產和資料',
      },
      {
        level: '多鏈層',
        levelEn: 'Multi-chain Layer',
        items: ['Account Abstraction', '跨鏈統一帳戶', 'DApp Hub 擴展', '多鏈資產管理'],
        description: '底層多鏈基礎設施，支撐所有上層能力',
      },
    ],
    cards: [
      {
        title: '極致安全',
        text: 'MPC 金鑰分片技術確保私鑰永不完整出現在任何單點。多簽治理、端到端加密，從金鑰到訊息全棧安全保障。',
      },
      {
        title: '無感互動',
        text: '社交登入消除錢包門檻，Gas 抽象讓用戶無需關心手續費，Account Abstraction 讓複雜鏈上操作降至一鍵觸達。',
      },
      {
        title: '多鏈統一',
        text: 'Account Abstraction 跨鏈統一帳戶，用戶在 Ethereum、BNB Chain、Polygon 等多鏈共享同一身份和資產視圖。',
      },
    ],
  },
  revenue: {
    badge: '獨立收益模型',
    headingPart1: '群主直接分潤',
    headingGold: '與邀請碼解綁',
    subtext:
      'GoldHouse 建立了全新的社群經濟模型——收益不依賴邀請碼裂變，而是來自真實的社群價值創造。',
    flowSteps: [
      { label: '優質成員入群', sublabel: 'Token-gated 篩選' },
      { label: '對話觸發交易', sublabel: 'Pay · DApp · 打賞' },
      { label: '協議自動分潤', sublabel: '鏈上透明結算' },
      { label: '治理強化留存', sublabel: '持續飛輪成長' },
    ],
    stepLabel: '步驟',
    features: [
      {
        title: '高品質社群',
        desc: 'Token-gated 機制自動篩選真實成員，社群品質直接影響收益，激勵營運者精細化營運。',
      },
      {
        title: '對話產生交易',
        desc: '每一次支付、打賞、訂閱都在聊天情境中自然發生，社群活躍度直接轉化為真實交易量。',
      },
      {
        title: '收益回到營運者',
        desc: '群主按比例直接獲得社群內交易分潤，無需透過邀請碼，收益結算透明可查，鏈上可驗證。',
      },
      {
        title: '治理提升留存',
        desc: '成員透過治理參與社群決策，歸屬感提升留存率，穩定的社群基礎保障持續收益流。',
      },
    ],
    coreBadge: '核心價值主張',
    coreQuote1: '「群主直接分潤',
    coreQuote2: '與邀請碼',
    coreQuoteGold: '解綁',
    coreQuote3: '」',
    coreDesc:
      'GoldHouse 的收益模型建立在真實社群價值之上，不依賴拉人裂變，只有真實活躍的社群才能持續創造收益。',
  },
  mission: {
    badge: '文化 · 使命 · 願景',
    headingPart1: '我們相信的',
    headingGold: '未來',
    subtext:
      'GoldHouse 不只是一款產品，更是一個關於 Web3 未來的信念——技術應當消弭邊界，而非製造門檻。',
    tagline1: '世界在你掌中',
    tagline2Part1: '聯結全球，',
    tagline2Brand: '打造無感生態',
    cards: [
      {
        type: '文化',
        typeEn: 'Culture',
        title: '堅持前進',
        subtitle: '擁抱創新',
        desc: '在快速演進的 Web3 世界中，我們相信只有持續突破、擁抱變化，才能在下一個時代站在最前沿。',
      },
      {
        type: '使命',
        typeEn: 'Mission',
        title: '極致安全',
        subtitle: '無感互動',
        desc: '讓每一位用戶——無論技術背景——都能以最自然的方式參與 Web3 經濟，同時享受銀行級別的資產安全保障。',
      },
      {
        type: '願景',
        typeEn: 'Vision',
        title: '聯結全球',
        subtitle: '打造無感生態',
        desc: '在無國界的 Web3 網路中，讓每一個人都能以社交為入口，無縫參與全球經濟、協作和創造。',
      },
    ],
  },
  ucard: {
    intro: {
      badge: 'GoldHouse U 卡',
      headingPart1: '一張 U 卡，',
      headingBrand: '連接 Web3 與現實世界',
      subtext:
        'GoldHouse U 卡讓數位資產無需複雜兌換流程，即可連接全球支付網路。儲值主流數位資產後，可即時轉換為支付額度，並在全球支援 Visa / Mastercard 的商戶完成消費。',
      card: {
        brand: 'U CARD',
        tagline: 'Crypto In · Spend Anywhere',
        holder: 'GOLDHOUSE',
        validLabel: 'VALID THRU',
        validDate: '08 / 30',
        network: 'VISA',
      },
      highlights: [
        { title: '全球覆蓋', desc: '支援全球主流線上線下商戶' },
        { title: '即時轉換', desc: '資產秒級轉換為支付額度' },
        { title: '安全合規', desc: '多重風控保障資產安全' },
        { title: '透明可查', desc: '交易記錄即時可查' },
      ],
      flowTitle: '使用流程',
      flow: [
        { step: '01', title: '儲值數位資產', desc: '從平台餘額劃轉到卡帳戶' },
        { step: '02', title: '即時轉換額度', desc: '資產秒級轉換為可用支付額度' },
        { step: '03', title: '全球商戶消費', desc: '線上線下任意場景使用' },
        { step: '04', title: '交易記錄可查', desc: '帳單與狀態隨時查看' },
      ],
      capabilitiesTitle: '核心能力',
      capabilities: [
        '加密貨幣儲值',
        '虛擬卡與實體卡',
        'Apple Pay / Google Pay',
        '全球線上線下消費',
        '多幣種資產管理',
      ],
      assetsTitle: '支援資產',
      assets: ['USDT', 'USDC', 'ETH', 'BNB'],
      assetsMore: '以及更多主流數位資產',
      scenesTitle: '覆蓋場景',
      scenes: ['電商購物', '訂閱服務', '跨境旅行', '日常消費', '企業支出', '廣告投放'],
    },
    badge: 'GoldHouse U 卡',
    headingPart1: '關於 U 卡，',
    headingBrand: '你想問的都在這裡',
    subtext:
      '從辦理、儲值，到消費、退款——GoldHouse U 卡是一張由海外發行的國際卡，可在支援 Visa / Mastercard 的全球商戶消費。以下是最常被問到的問題。',
    searchPlaceholder: '搜尋問題關鍵字…',
    allLabel: '全部',
    noResults: '沒有找到相關問題，換個關鍵字試試。',
    questionCountSuffix: ' 個問題',
    categories: [
      {
        id: 'before',
        name: '辦理前',
        items: [
          {
            q: '辦理 U 卡需要什麼資料？',
            a: '需要一個手機號碼（需符合目前所在國家）、一個常用信箱（不建議使用 QQ 信箱），以及本人基本資訊。',
          },
          {
            q: '必須實名認證嗎？',
            a: '大部分卡片免 KYC 認證即可辦理；部分卡種需提供中國大陸以外國家或地區的護照進行認證。',
          },
          {
            q: '辦理需要多久？',
            a: '購買後最低儲值 30 USDT，儲值完成後大約 20 分鐘左右即可啟用卡號。',
          },
          {
            q: '辦理失敗一般是什麼原因？',
            a: '常見原因是購買了重複的卡段，或同一帳號重複開通——一個帳號只能開通一種類型的卡片。',
          },
          {
            q: 'U 卡是國際卡嗎？',
            a: '是的，U 卡由海外機構發行，是一張可在全球使用的國際卡。',
          },
        ],
      },
      {
        id: 'recharge',
        name: '儲值與到帳',
        items: [
          {
            q: 'U 卡怎麼儲值？',
            a: '從 GoldHouse 平台餘額直接轉帳到卡帳戶即可完成儲值。',
          },
          {
            q: '支援哪些儲值鏈？',
            a: '支援 TRC20 與 BEP20。請務必選對鏈，儲值錯鏈可能導致資金無法找回。',
          },
          {
            q: '儲值沒到帳怎麼辦？',
            a: '請提供交易雜湊（TxID）、儲值金額、儲值時間、儲值所用鏈以及收款地址截圖，客服核實後會為你處理。',
          },
        ],
      },
      {
        id: 'spending',
        name: '消費與提現',
        items: [
          {
            q: 'U 卡可以在哪裡消費？',
            a: '通常可用於支援 Visa / Mastercard 等卡組織的線上或線下商戶，實際情況取決於卡種和商戶風控。',
          },
          {
            q: '為什麼支付失敗？',
            a: '常見原因包括：餘額不足、商戶不支援、風控攔截、地區限制、單筆額度超限或網路異常。',
          },
          {
            q: '可以綁定 Apple Pay / Google Pay / 微信 / 支付寶嗎？',
            a: '是否支援取決於實際卡種，請以平台頁面顯示的資訊為準。',
          },
          {
            q: '可以用 ATM 提領現金嗎？',
            a: '實體卡支援 ATM 提領現金，但會收取手續費，並受單筆限額、每日限額和地區限制約束。',
          },
          {
            q: '可以用於訂閱 ChatGPT 等服務嗎？',
            a: '大多數卡片支援。建議在電腦上操作，透過 VPN 切換到美國地區，填寫美國帳單地址後輸入卡片資料完成扣款。',
          },
        ],
      },
      {
        id: 'authorization',
        name: '交易授權',
        items: [
          {
            q: '為什麼會看到兩筆扣款？',
            a: '信用卡消費通常是先做交易授權、再正式扣款。若看到兩筆金額，請以最終的消費扣款為準，邏輯與一般信用卡一致。',
          },
        ],
      },
      {
        id: 'fees',
        name: '費用與額度',
        items: [
          {
            q: '有沒有最低儲值金額？',
            a: '最低儲值金額為 30 USDT。',
          },
          {
            q: '單筆消費額度是多少？',
            a: '單筆消費額度上限為 20,000 美元。',
          },
        ],
      },
      {
        id: 'security',
        name: '帳戶與安全',
        items: [
          {
            q: '卡片被凍結了怎麼辦？',
            a: '請聯絡客服，提交卡號和交易說明後等待處理。',
          },
          {
            q: '卡片遺失怎麼辦？',
            a: '請第一時間在平台凍結卡片，並聯絡客服申請補卡或換卡，以避免資金損失。',
          },
          {
            q: '忘記密碼怎麼辦？',
            a: '請提供卡號和卡片餘額截圖，客服核實身分後會為你人工修改。',
          },
          {
            q: '帳戶被盜刷怎麼辦？',
            a: '請立即在平台凍結卡片，並提供卡號與盜刷交易記錄給客服處理。',
          },
        ],
      },
      {
        id: 'refund',
        name: '退款與爭議',
        items: [
          {
            q: '商戶退款多久能到帳？',
            a: '退款時間取決於商戶、卡組織和發卡機構的處理速度，通常需要 3–5 個工作天，部分情況長達 20 個工作天，實際以帳單狀態為準。',
          },
          {
            q: '消費失敗但被扣款了怎麼辦？',
            a: '請提供卡號和扣款截圖，客服會為你查看詳情。這類情況一般會進入預授權或沖正流程，等待系統自動退回即可。',
          },
        ],
      },
    ],
  },
  cta: {
    badge: '立即開始',
    headingPart1: '進入',
    headingGold: 'Web3',
    headingPart2: '新紀元',
    subtext: '下載 GoldHouse，體驗 Web2 級別的流暢入口，開啟你的 Web3 社交與資產之旅。',
    appStoreLabel: '在 App Store 取得 GoldHouse',
    appStoreSmall: 'App Store',
    appStoreName: 'iPhone / iPad',
    testflightLabel: '透過 TestFlight 取得適用於 iPhone / iPad 的 GoldHouse',
    testflightSmall: 'TestFlight',
    testflightName: 'iPhone / iPad',
    googlePlayLabel: '在 Google Play 取得適用於 Android 的 GoldHouse',
    googlePlaySmall: 'Google Play',
    googlePlayName: 'Android',
    webAppLabel: '在瀏覽器中開啟 GoldHouse 網頁版，無需安裝',
    webAppText: '網頁版',
    webAppSmall: '免安裝直達',
    comingSoon: '即將發布',
    apkLabel: '下載適用於 Android 的 GoldHouse APK',
    apkSmall: 'APK 直接安裝',
    apkName: 'Android',
    trust: [
      { icon: '🔐', text: 'E2E 加密' },
      { icon: '🛡️', text: 'MPC 保護' },
      { icon: '⛓️', text: '多鏈支援' },
      { icon: '🌐', text: '無地域限制' },
      { icon: '⚡', text: '無感體驗' },
    ],
  },
  splash: {
    slogan: '世界在你掌中',
    sloganSub: 'To hold ! The world !',
    loadingLabel: '正在進入 GoldHouse',
  },
  footer: {
    logoAriaLabel: 'GoldHouse 首頁',
    brandDesc: '多鏈 Web3 社交平台，構建基礎設施級的社交入口。身份 · 錢包 · 關係 · 權限 · 應用。',
    productHeading: '產品',
    communityHeading: '社群與關於',
    aboutUs: '關於我們',
    updates: '更新公告',
    privacy: '隱私政策',
    terms: '服務條款',
    accountDeletion: '帳戶刪除',
    childSafety: '兒童安全',
    copyright: '© 2026 GoldHouse · AUROWAVE TECHNOLOGIES PTE. LTD. All rights reserved.',
    tagline: '構建 Web3 時代基礎設施級的社交入口',
    productLinks: [
      { label: '社交即身份', href: '#pillars' },
      { label: '社交即支付', href: '#pillars' },
      { label: '社交即治理', href: '#pillars' },
      { label: '社交即應用', href: '#pillars' },
      { label: '七大模組', href: '#modules' },
    ],
  },
  privacy: {
    pageTitle: '隱私政策',
    metaTitle: '隱私政策 — GoldHouse',
    metaDesc: 'GoldHouse 隱私政策：了解我們如何收集、使用和保護您的個人資訊。',
    lastUpdated: '最後更新：2026年5月18日',
    sections: [
      {
        title: '1. 我們收集的資訊',
        intro: '我們可能收集以下類型的資訊：',
        bullets: [
          '帳戶資訊：當您註冊 Gold House 帳戶時，我們會收集您的錢包地址、DID 標識符以及您選擇提供的個人資料資訊。',
          '使用資料：我們自動收集您與服務互動的資訊，包括存取時間、功能使用狀況和裝置資訊。',
          '鏈上資料：與您的代理活動相關的公開區塊鏈交易記錄。',
        ],
      },
      {
        title: '2. 我們如何使用資訊',
        intro: '我們使用收集的資訊以：',
        bullets: [
          '提供、維護和改進我們的服務；',
          '處理交易並發送相關通知；',
          '提供個人化客戶服務體驗；',
          '偵測和防止欺詐、濫用和安全威脅；',
          '遵守法律義務。',
        ],
      },
      {
        title: '3. 資訊共享',
        intro: '我們不出售您的個人資訊。在以下情況下我們可能共享資訊：',
        bullets: [
          '經您同意或在您的指示下；',
          '與代表我們提供服務的受信任合作夥伴共享（須遵守嚴格的資料保護協議）；',
          '為遵守法律要求、執行我們的政策或保護權利和安全。',
        ],
      },
      {
        title: '4. 零容忍政策',
        intro:
          'Gold House 對不當內容和濫用行為採取零容忍政策。任何違反我們準則的用戶或內容將立即受到處罰，包括帳戶暫停或刪除。',
        bullets: [],
      },
      {
        title: '5. 資料安全',
        intro: '我們採用業界標準的安全措施保護您的資訊，包括：',
        bullets: [
          '端到端加密通訊',
          '去中心化身份驗證（DID）',
          '定期安全稽核',
          '嚴格的存取控制機制',
        ],
      },
      {
        title: '6. 您的權利',
        intro: '您有權：',
        bullets: [
          '存取和匯出您的個人資料',
          '請求更正或刪除您的資訊',
          '撤回資料處理的同意',
          '透過您的 DID 對您的身份資料擁有完全控制權',
        ],
      },
      {
        title: '7. Cookie 與追蹤',
        intro:
          '我們使用必要的 Cookie 和類似技術確保服務正常運作。您可以透過瀏覽器設定管理 Cookie 偏好。我們不使用任何第三方廣告追蹤工具。',
        bullets: [],
      },
      {
        title: '8. 政策更新',
        intro:
          '我們可能會不時更新本隱私政策。重大變更將透過應用程式內通知或電子郵件告知您。您繼續使用我們的服務表示您接受更新後的政策。',
        bullets: [],
      },
      {
        title: '9. 聯絡我們',
        intro: '如果您對本隱私政策有任何疑問，請聯絡：',
        bullets: ['營運主體：AUROWAVE TECHNOLOGIES PTE. LTD.', '電子郵件：business@goldhouse.cc'],
      },
    ],
    copyright: '© 2026 GoldHouse · AUROWAVE TECHNOLOGIES PTE. LTD. All rights reserved.',
  },
  terms: {
    pageTitle: '服務條款',
    metaTitle: '服務條款 — GoldHouse',
    metaDesc: 'GoldHouse 服務條款：了解使用我們平台的規則和條件。',
    lastUpdated: '最後更新：2026年1月1日',
    sections: [
      {
        title: '1. 服務概述',
        intro:
          'GoldHouse 是面向人類和 AI 代理的 Web4 超級應用平台，提供去中心化身份（DID）、AI 社交、Vibe Coding、代理遊戲、交易引擎、病毒增長和 OpenClaw 基礎設施服務。使用我們的服務即表示您同意這些條款。',
        bullets: [],
      },
      {
        title: '2. 帳戶與身份',
        intro: '',
        bullets: [
          '您必須建立 GoldHouse 帳戶並設定 DID 身份才能存取所有服務。',
          '您有責任保護您的錢包私鑰和帳戶憑證。',
          '您的 DID 身份完全由您控制；GoldHouse 無法恢復遺失的私鑰。',
          '您不得將帳戶轉讓、出租或借給第三方。',
        ],
      },
      {
        title: '3. 代理服務',
        intro: '',
        bullets: [
          'AI 代理的行為取決於您的設定和訓練資料；您對代理的運行結果負責。',
          '代理在交易、遊戲等情境中的操作涉及真實資產；請充分了解相關風險。',
          '我們不保證代理決策在任何情況下都會產生預期結果。',
          '您應定期審查和監控您的代理活動。',
        ],
      },
      {
        title: '4. 零容忍政策',
        intro:
          'GoldHouse 對不當內容和濫用行為採取零容忍政策。以下行為將導致立即處罰，包括帳戶暫停或永久封禁：',
        bullets: [
          '發布或傳播非法、淫穢、暴力、仇恨或侵權內容；',
          '騷擾、威脅或歧視其他用戶；',
          '利用平台從事欺詐、洗錢或其他犯罪活動；',
          '傳播惡意軟體、垃圾訊息或試圖破壞平台安全；',
          '冒充他人或使用虛假身份進行欺騙。',
          '任何違反這些準則的行為將導致立即處罰，包括刪除內容、暫停帳戶或配合執法機構。',
        ],
      },
      {
        title: '5. 交易與金融服務',
        intro: '',
        bullets: [
          'GoldHouse 提供的交易引擎僅為工具服務，不構成投資建議。',
          '加密貨幣和數位資產交易具有極高風險；您可能損失所有投入資金。',
          '您有責任遵守您所在司法管轄區有關數位資產交易的所有適用法律。',
          '平台保留在必要時限制或暫停交易服務的權利。',
        ],
      },
      {
        title: '6. 用戶行為',
        intro: '使用 GoldHouse 服務時，您不得：',
        bullets: [
          '從事非法活動或違反適用法律法規；',
          '操縱市場、進行欺詐性交易或洗錢；',
          '干擾或破壞平台正常運營；',
          '侵犯他人的知識產權或隱私權；',
          '傳播惡意軟體、垃圾訊息或有害內容；',
          '利用平台漏洞或對系統進行逆向工程。',
        ],
      },
      {
        title: '7. 知識產權',
        intro: '',
        bullets: [
          'GoldHouse 平台及其所有內容、功能和技術受知識產權法律保護。',
          '您透過 Vibe Coding 建立的內容歸您所有。',
          '您授予 GoldHouse 在平台營運範圍內使用您內容的非獨家授權。',
          '未經授權，您不得複製、修改或散布平台的任何部分。',
        ],
      },
      {
        title: '8. 服務變更與終止',
        intro: '',
        bullets: [
          '我們保留隨時修改、暫停或終止任何服務的權利。',
          '對於重大變更，我們將提前通知用戶。',
          '如果您違反這些條款（包括零容忍政策），我們可能立即暫停或終止您的帳戶。',
          '服務終止後，您仍可透過 DID 匯出您的身份和資料。',
        ],
      },
      {
        title: '9. 免責聲明',
        intro: '',
        bullets: [
          '所有服務按「現狀」和「可用」提供，不提供任何形式的保證。',
          '我們不對因使用或無法使用服務而產生的任何損失承擔責任。',
          '區塊鏈網路延遲、壅塞或故障超出我們的控制範圍。',
          'AI 代理輸出僅供參考，不應作為決策的唯一依據。',
        ],
      },
      {
        title: '10. 爭議解決',
        intro: '',
        bullets: [
          '這些條款受新加坡法律管轄並據此解釋。',
          '任何爭議應首先透過友好協商解決。',
          '若協商失敗，爭議應提交新加坡國際仲裁中心（SIAC）進行仲裁。',
        ],
      },
      {
        title: '11. 聯絡資訊',
        intro: '如果您對這些服務條款有任何疑問，請聯絡：',
        bullets: ['營運主體：AUROWAVE TECHNOLOGIES PTE. LTD.', '電子郵件：business@goldhouse.cc'],
      },
    ],
    copyright: '© 2026 GoldHouse · AUROWAVE TECHNOLOGIES PTE. LTD. All rights reserved.',
  },
  accountDeletion: {
    pageTitle: '帳戶刪除請求',
    metaTitle: '帳戶刪除請求 — GoldHouse',
    metaDesc: 'GoldHouse 帳戶刪除指引：了解如何永久刪除您的帳戶，以及我們將刪除或保留的資料。',
    badge: '帳戶與隱私',
    lastUpdated: '最後更新：2026年5月 · 本頁面說明如何永久刪除您的 GoldHouse 帳戶，以及我們將刪除或保留的資料。',
    howToTitle: '如何刪除您的帳戶',
    howToIntro: '您可以透過以下任一方式刪除您的 GoldHouse 帳戶。',
    inAppLabel: '方式一 · 應用內操作',
    inAppDesc: '開啟 GoldHouse → 設定 → 帳戶 → 刪除帳戶 → 確認',
    emailLabel: '方式二 · 郵件申請',
    emailDescPart1: '使用您帳戶綁定的信箱，向 ',
    emailAddress: 'support@goldhouse.cc',
    emailDescPart2: ' 寄送郵件，主旨為 ',
    emailSubject: 'Delete My Account',
    emailDescPart3: '。我們將在 ',
    emailDays: '15 個工作日',
    emailDescPart4: ' 內處理您的請求。',
    deletedTitle: '將被刪除的資料',
    deletedIntro: '帳戶刪除後，以下資料將被永久移除：',
    deletedBullets: [
      '個人資料（暱稱、頭像、簡介、DID 關聯資訊）',
      '聊天訊息、媒體檔案及群組會話記錄',
      '聯絡人清單與社群成員關係',
      '動態、留言、按讚與收藏',
      '錢包綁定關係與本機快取（不影響鏈上資產本身）',
      '通知偏好與應用程式設定',
    ],
    retainedTitle: '可能保留的資料',
    retainedIntroPart1: '出於法律、安全或合規要求，以下資料在刪除請求生效後最多保留 ',
    retainedDays: '90 天',
    retainedIntroPart2: '：',
    retainedBullets: [
      '交易與支付流水（滿足金融監管與反洗錢要求）',
      '帳戶活動日誌（用於風控與反詐欺調查）',
      '為遵守法律義務、回應執法請求所需的最低必要資料',
    ],
    retentionNote: '保留期結束後，所有剩餘資料將被永久刪除，且無法恢復。',
    chainNoticeTitle: '關於鏈上資料',
    chainNoticeIntro:
      '請注意：寫入公開區塊鏈的交易紀錄與 DID 識別符具有不可篡改性，GoldHouse 無法從區塊鏈上刪除這些資訊。帳戶刪除僅作用於 GoldHouse 平台內的關聯資料。',
    contactTitle: '聯絡我們',
    contactIntroPart1: '如對帳戶刪除或資料處理有任何疑問，請聯絡 ',
    contactEmail: 'support@goldhouse.cc',
    contactIntroPart2: '。',
    copyright: '© 2026 GoldHouse · AUROWAVE TECHNOLOGIES PTE. LTD. All rights reserved.',
  },
  childSafety: {
    pageTitle: '兒童安全標準',
    metaTitle: '兒童安全標準（CSAE）— GoldHouse',
    metaDesc:
      'GoldHouse 兒童安全標準：我們對兒童性虐待和性剝削（CSAE）採取零容忍政策，並提供檢舉管道與兒童安全聯絡人。',
    lastUpdated: '最後更新：2026年6月11日',
    sections: [
      {
        title: '1. 我們對兒童安全的承諾',
        intro:
          'GoldHouse（由 GoldHouse 團隊營運）致力於保護兒童並維護平台安全。我們對兒童性虐待和性剝削（CSAE）以及兒童性虐待內容（CSAM）採取嚴格的零容忍政策。本標準適用於 GoldHouse 應用程式及所有相關服務的每一位使用者。',
        bullets: [],
      },
      {
        title: '2. 禁止的內容與行為',
        intro: '以下內容與行為在 GoldHouse 上被嚴格禁止，一經發現將立即處理：',
        bullets: [
          '任何兒童性虐待內容（CSAM）——包括描繪對未成年人進行性虐待或性剝削的圖片、影片、文字或 AI 生成內容。',
          '誘騙（grooming）、引誘、性勒索，或任何試圖對未成年人實施性剝削的行為。',
          '分享、宣傳、提供連結，或以其他方式協助取得 CSAE 或 CSAM 內容。',
          '以任何形式對兒童進行販運、性化或使其處於危險之中。',
        ],
      },
      {
        title: '3. 我們的標準與執行',
        intro: '為保護平台上的兒童，GoldHouse：',
        bullets: [
          '在服務條款和內容準則中明確禁止 CSAE 與 CSAM，並以零容忍方式執行。',
          '及時刪除違規內容，並永久封鎖相關帳戶。',
          '依法將確認的 CSAM 檢舉至美國國家失蹤與受虐兒童中心（NCMEC）及／或相關當地執法機關。',
          '保存相關證據並配合執法部門的調查。',
        ],
      },
      {
        title: '4. 如何檢舉',
        intro: '如果您發現可能構成兒童性虐待或性剝削的內容或行為，請立即檢舉：',
        bullets: [
          '應用程式內：在任意使用者資料、訊息或內容上使用「檢舉」功能。',
          '寄送電子郵件至我們的兒童安全團隊：support@goldhouse.cc',
          '您也可以直接向 NCMEC CyberTipline 檢舉：https://report.cybertip.org',
        ],
      },
      {
        title: '5. 兒童安全聯絡人',
        intro: 'GoldHouse 已指定專門負責處理兒童安全事宜的聯絡人：',
        bullets: [
          'GoldHouse 兒童安全團隊',
          '電子郵件：support@goldhouse.cc',
          '我們會及時審查並處理所有檢舉。',
        ],
      },
      {
        title: '6. 合規與公開',
        intro:
          '本兒童安全標準已公開發布，全球任何人皆可存取。本標準符合適用的兒童保護法律以及 Google Play 的「兒童安全標準」政策。我們會定期審查並更新本標準。',
        bullets: ['已發布標準：https://goldhouse.cc/child-safety'],
      },
    ],
    copyright: '© 2026 GoldHouse · AUROWAVE TECHNOLOGIES PTE. LTD. All rights reserved.',
  },
  announcements: {
    badge: '公告 · 版本更新',
    headingPart1: '持續',
    headingGold: '進化',
    subtext: '每一次更新都讓 GoldHouse 更安全、更流暢。以下是最近的版本同步公告與更新明細。',
    latestLabel: '最新',
    copyright: '© 2026 GoldHouse · AUROWAVE TECHNOLOGIES PTE. LTD. All rights reserved.',
    categories: {
      feature: '新增功能',
      improvement: '體驗優化',
      fix: '問題修復',
    },
    noticesLabel: '營運公告',
    noticeBanner: {
      viewDetails: '查看詳情',
      dismissAriaLabel: '關閉公告',
    },
    notices: [
      {
        id: 'ucard-upgrade-202607',
        date: '2026-07-12',
        title: 'GoldHouse 關於 U 卡升級優化的公告',
        bannerText: 'U 卡功能升級優化中，升級期間請暫勿進行 U 卡相關操作',
        greeting: '尊敬的各位用戶：',
        paragraphs: [
          '為進一步提升 U 卡的穩定性與使用體驗，目前 U 卡相關功能正在進行升級優化。',
        ],
        listIntro: '升級期間，將重點優化以下內容：',
        listItems: [
          '新卡開卡流程優化',
          '交易流水顯示優化（授權記錄與扣款記錄展示邏輯優化）',
          '系統穩定性及其他已知問題修復',
        ],
        closingParagraphs: [
          '升級期間，請暫勿進行任何與 U 卡相關的操作，恢復時間請以官方後續公告為準。',
          '感謝您的理解與支持，我們將盡快完成升級，為大家提供更穩定、更優質的服務。',
        ],
        signature: 'GoldHouse 團隊',
        signatureDate: '2026 年 7 月 12 日',
      },
    ],
    releases: [
      {
        date: '2026-07-12',
        version: 'v1.0.9',
        title: '聊天與會議翻譯上線，錢包支援全鏈資產總覽',
        summary:
          '本次更新為聊天帶來翻譯功能，會議支援辨識字幕與語言翻譯；錢包功能升級，可顯示全鏈路資產餘額，並進一步優化整體體驗與穩定性。',
        groups: [
          {
            type: 'feature',
            items: [
              '聊天支援翻譯功能',
              '會議支援辨識字幕與語言翻譯',
              '錢包功能更新，顯示全鏈路資產餘額',
            ],
          },
          {
            type: 'improvement',
            items: [
              '產品體驗優化，功能細節改進',
              '提升產品穩定性，優化使用速度',
            ],
          },
        ],
      },
      {
        date: '2026-07-05',
        version: 'v1.0.8',
        title: 'Swap 能力擴展與錢包體驗優化',
        summary:
          '本次更新為安卓端擴大錢包截圖支援範圍、新增 Polygon 鏈 Swap 功能，並優化 Swap 頁面與匯出私鑰體驗。',
        groups: [
          {
            type: 'feature',
            items: [
              '新增 Polygon 鏈的 Swap 功能',
              'Swap 頁面新增重新整理按鈕',
            ],
          },
          {
            type: 'improvement',
            items: [
              '安卓端優化錢包截圖範圍，除匯出私鑰外的其他場景現已支援截圖',
              '提高匯出私鑰成功率',
            ],
          },
        ],
      },
      {
        date: '2026-07-03',
        version: 'v1.0.7',
        title: '新增私鑰匯入功能',
        summary: '本次更新新增私鑰匯入功能，可將既有錢包私鑰匯入 GoldHouse 使用。',
        groups: [
          {
            type: 'feature',
            items: ['新增私鑰匯入功能'],
          },
        ],
      },
      {
        date: '2026-06-26',
        version: 'v1.0.4',
        title: 'IM、群組與會議底層機制重大升級',
        summary:
          '本次對 IM、群組與會議的底層機制進行了重大升級，修復並優化 Web3 錢包支付流程，同時帶來 U 卡體驗的全面更新。',
        groups: [
          {
            type: 'improvement',
            items: [
              'IM 底層機制重大更新，訊息收發更穩定高效',
              '群組與會議底層機制更新，承載能力與穩定性提升',
              'U 卡使用者體驗更新，申領與使用更順暢',
            ],
          },
          {
            type: 'fix',
            items: ['修復並優化 Web3 錢包，支付流程更加順暢'],
          },
        ],
      },
      {
        date: '2026-06-24',
        version: 'v1.0.3',
        title: 'U 卡申領與會議群聊改進',
        summary:
          '新增 U 卡，註冊帳戶後即可申領；帶來會議與群聊的諸多體驗改進，並進一步提升整體穩定性。',
        groups: [
          {
            type: 'feature',
            items: ['新增 U 卡，註冊帳戶後即可申領使用'],
          },
          {
            type: 'improvement',
            items: [
              '會議相關的多項體驗改進',
              '群聊相關的多項體驗改進',
            ],
          },
          {
            type: 'fix',
            items: ['進一步提升整體執行穩定性'],
          },
        ],
      },
      {
        date: '2026-06-18',
        version: 'v1.0.2',
        title: 'Web3 與 Web2 版本能力升級',
        summary:
          'Web3 版本新增端內無私鑰錢包支付、DApp 支付打通與 U 卡內測；Web2 版本同步提升會議與群組容量。',
        groups: [
          {
            type: 'feature',
            items: [
              'Web3 版本支援無私鑰錢包，可在端內使用 Web3 錢包進行支付',
              'Web3 版本支援 5000 人會議',
              'Web3 版本支援 5000 人群',
              'Web3 版本支援 DApp 與 DApp 支付打通',
              'Web3 版本推出 U 卡內測版',
              'Web2 版本支援 5000 人會議',
              'Web2 版本支援 5000 人群',
            ],
          },
          {
            type: 'fix',
            items: ['修復並優化使用者體驗', '提升安全風控能力'],
          },
        ],
      },
      {
        date: '2026-06-15',
        version: 'v1.0.1',
        title: '功能新增與體驗優化',
        summary:
          '新增影片訊息儲存到相簿，並帶來搜尋、會議體驗優化及多項穩定性修復。',
        groups: [
          {
            type: 'feature',
            items: ['聊天中收到的影片訊息現在支援儲存到手機相簿'],
          },
          {
            type: 'improvement',
            items: [
              '搜尋聯絡人時不再顯示機器人帳號，搜尋結果更清爽',
              '優化會議中懸浮視窗與主介面的層級，不再遮擋會議畫面',
            ],
          },
          {
            type: 'fix',
            items: [
              '修復好友修改名稱後、本地仍顯示舊名稱的問題',
              '修復新增聯絡人時備註被自動填成對方暱稱的問題',
              '修復開啟生物辨識（指紋 / 臉部）後、部分驗證流程被卡住的問題',
              '修復掃描個人 QR Code 偶爾提示「未找到」的問題',
              '修復登出時偶發卡頓 / 無回應的問題',
            ],
          },
        ],
      },
      {
        date: '2026-06-13',
        version: 'v1.0.0',
        title: 'GoldHouse 正式上線',
        summary:
          'GoldHouse 正式版發布——基礎設施級 Web3 社交平台正式啟航，身份、資金、治理、應用首次整合進同一社交帳戶。',
        groups: [
          {
            type: 'feature',
            items: [
              '社交登入與 MPC 錢包恢復，無需助記詞即可進入 Web3',
              'E2E 端到端加密 IM，訊息內容僅雙方可讀',
              'GoldHouse DID 統一身份，跨社群保持一致聲譽',
              '聊天內 GoldHouse Pay，對話即支付介面',
            ],
          },
        ],
      },
    ],
  },
  openSourceNotice: {
    pageTitle: 'GoldHouse — 開源軟體聲明（Android）',
    metaTitle: 'GoldHouse — 開源軟體聲明（Android）',
    metaDesc: 'GoldHouse Android 客戶端使用的第三方開源軟體清單。',
    badge: '開源聲明',
    intro: '本產品部分內容可能包含以下第三方開源軟體，特此聲明。',
    versionNote: '聲明版本 1.0.0 · 2026-04-23',
    footerNote:
      '本清單涵蓋隨 GoldHouse Android 應用程式一併散布的開源軟體組件。各組件的版權歸其原作者所有，並依所列開源授權條款發布。完整授權條款文字可在上方連結的上游專案頁面取得。',
    groups: {
      androidx: 'AndroidX / Jetpack',
      compose: 'Jetpack Compose',
      cameraMedia: 'CameraX 與 Media3',
      google: 'Google',
      kotlin: 'Kotlin / JetBrains',
      networking: '網路與序列化',
      image: '圖片載入',
      utils: '工具庫',
      tinode: '即時通訊 SDK',
    },
  },
};

export default zhTW;
