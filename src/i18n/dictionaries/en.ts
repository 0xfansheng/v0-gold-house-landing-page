import type { Dictionary } from './zh-CN';

const en: Dictionary = {
  meta: {
    title: 'GoldHouse — Multi-chain Web3 Social Platform · Infrastructure-Grade Social Gateway',
    description:
      'GoldHouse is an infrastructure-grade Web3 social platform that integrates identity, assets, governance, and applications into a single social account ecosystem. Social as Identity, Payment, Governance, and App—all in one seamless Web2-grade experience.',
  },
  nav: {
    logoAriaLabel: 'GoldHouse Home',
    links: {
      features: 'Features',
      solutions: 'Solutions',
      security: 'Security',
      ecosystem: 'Ecosystem',
      about: 'About',
    },
    start: 'Get Started',
    switchLang: 'Switch Language',
    closeMenu: 'Close Menu',
    openMenu: 'Open Menu',
    mainNav: 'Main Navigation',
    mobileNav: 'Mobile Navigation',
    megaMenuRegion: 'Product Features Menu',
    megaFooterText: 'Building the infrastructure-grade social gateway for the Web3 era',
    tryNow: 'Try Now',
    mega: {
      col1: {
        title: '4 Pillars',
        items: [
          { label: 'Social as Identity', desc: 'GoldHouse DID unified gateway' },
          { label: 'Social as Payment', desc: 'GoldHouse Pay in-chat transfers' },
          { label: 'Social as Governance', desc: 'Multisig Token-gated communities' },
          { label: 'Social as App', desc: 'DApp Hub multi-chain aggregator' },
        ],
      },
      col2: {
        title: '7 Modules',
        items: [
          { label: 'Social Login & Wallet Recovery', desc: 'One-click login · MPC protection' },
          { label: 'Programmable Master/Sub Accounts', desc: 'Permission layers · Org collaboration' },
          { label: 'E2E Encrypted IM', desc: 'End-to-end encrypted messaging' },
          { label: 'DApp Hub', desc: 'Multi-chain app aggregation hub' },
        ],
      },
      col3: {
        title: 'More',
        items: [
          { label: 'GoldHouse Pay', desc: 'Chat-native payment system' },
          { label: 'GoldHouse DID', desc: 'Cross-community unified identity' },
          { label: 'Independent Revenue Model', desc: 'Direct group owner revenue share' },
        ],
      },
    },
  },
  hero: {
    badge: 'Multi-chain Web3 Social Platform',
    headlinePart1: 'Building the',
    headlineGold: 'Web3-Era',
    headlinePart2: 'Infrastructure-Grade',
    headlineBrand: 'Social Gateway',
    subheadlinePart1: 'GoldHouse is not just "IM + Wallet" — it\'s one social account that unifies ',
    subheadlineStrong: 'identity, assets, governance, and apps',
    subheadlinePart2: '.',
    subheadlinePart3: 'A Web2-grade seamless experience carrying the full decentralized value of Web3.',
    ctaStart: 'Get Started',
    ctaLearnMore: 'Learn More',
    ctaStartAriaLabel: 'Get started with GoldHouse now',
    ctaLearnMoreAriaLabel: 'Learn more about GoldHouse features',
    downloads: {
      iosSmall: 'Download on the',
      androidSmall: 'GET IT ON',
      apkSmall: 'Direct download',
      iosAriaLabel: 'Download GoldHouse on the App Store',
      androidAriaLabel: 'Get GoldHouse on Google Play',
      apkAriaLabel: 'Download GoldHouse Android APK',
    },
    stats: [
      { value: '7+', label: 'Core Modules' },
      { value: 'Multi-chain', label: 'Account System' },
      { value: 'E2E', label: 'Encrypted Comms' },
      { value: 'MPC', label: 'Key Protection' },
    ],
    phoneMockup: {
      appLabel: 'GoldHouse app interface preview',
      activeGroups: '3 Active Communities',
      chats: [
        { name: 'DeFi Alpha Group', msg: 'Multisig governance vote completed ✅', time: 'Just now' },
        { name: 'GoldHouse Pay', msg: 'Alice sent you 0.5 ETH', time: '2 min' },
        { name: 'NFT Builders', msg: 'Token-gated verification passed 🔑', time: '5 min' },
        { name: 'Web3 Devs', msg: 'DApp Hub added Uniswap V4', time: '1 hr' },
      ],
      payLabel: 'GoldHouse Pay',
      transfer: 'Send',
      tabs: ['Chats', 'Discover', 'Wallet', 'Profile'],
    },
    badges: {
      e2e: 'E2E Encrypted',
      multichain: 'Multi-chain',
      mpc: 'MPC Protected',
    },
  },
  pillars: {
    badge: '4 Pillars',
    headingPart1: 'Social as',
    headingBrand: 'Everything',
    subtext:
      'Identity, assets, governance, apps—four pillars integrated into one social account ecosystem,\nredefining gateway value for the Web3 era.',
    items: [
      {
        number: '01',
        title: 'Social as Identity',
        subtitle: 'GoldHouse DID',
        desc: 'Turn your profile, connections, and reputation into a unified Web3 identity gateway. One DID maintains a consistent reputation system across all communities, on-chain protocols, and applications.',
        tags: ['Decentralized Identity', 'Cross-community', 'On-chain Reputation'],
      },
      {
        number: '02',
        title: 'Social as Payment',
        subtitle: 'GoldHouse Pay',
        desc: 'Seamlessly embed transfers, subscriptions, and tips into chat contexts. The conversation is the payment interface—no app switching, value flows as the message is sent.',
        tags: ['In-chat Payments', 'Tips & Subscriptions', 'Multi-chain Settlement'],
      },
      {
        number: '03',
        title: 'Social as Governance',
        subtitle: 'Master/Sub Accounts · Multisig · Token-gated',
        desc: 'Master/sub accounts, multisig mechanisms, and Token-gated communities make organizational collaboration programmable. From community votes to on-chain execution, one unified system.',
        tags: ['Master/Sub Accounts', 'Multisig Governance', 'Token-gated'],
      },
      {
        number: '04',
        title: 'Social as App',
        subtitle: 'DApp Hub',
        desc: 'Aggregate multi-chain DApps so users enter the ecosystem directly from conversations. No browser switching—trigger DeFi, NFT, governance, and all on-chain actions inside the chat interface.',
        tags: ['DApp Hub', 'Multi-chain Aggregation', 'In-conversation Trigger'],
      },
    ],
  },
  firstMinute: {
    badge: 'First-Minute Experience',
    headingPart1: 'From the Very First Second,',
    headingBrand: 'Frictionless Onboarding',
    subtext:
      "Web3's biggest barrier is the entry threshold. GoldHouse eliminates friction entirely with social login—no seed phrases, no wallet plugin downloads, start your Web3 journey in under one minute.",
    points: [
      'One-click social login, keeping your Web2 habits',
      'MPC protection with sharded private key storage, never lost',
      'Unified DID, one identity across all Web3 scenarios',
      'Messages as value gateways, complete every on-chain action from chat',
    ],
    cta: 'Experience the First Minute Now',
    steps: [
      {
        step: '01',
        title: 'Social Login',
        desc: 'No wallet creation needed. Log in with your existing social account in one click and enter the Web3 world in 30 seconds.',
      },
      {
        step: '02',
        title: 'Enterprise-grade Recovery',
        desc: 'MPC multi-party computation safeguards your assets. Even if your device is lost, recover securely—your assets are permanently yours.',
      },
      {
        step: '03',
        title: 'Unified DID',
        desc: 'Carry one decentralized identity across all communities. Your reputation and relationships follow seamlessly, no need to rebuild.',
      },
      {
        step: '04',
        title: 'Chat as App',
        desc: 'Access payments, governance, and DApps directly from the chat interface. Messages are not the destination—they are the gateway for value flow.',
      },
    ],
    stepLabel: 'Step',
  },
  imGateway: {
    badge: 'E2E Encrypted IM is the Gateway',
    headingPart1: 'Messages Are Not the Endpoint—',
    headingBrand: 'Messages Are the Value Gateway',
    subtext:
      'Every message can carry value. GoldHouse seamlessly embeds payments, governance, and app actions into the chat interface, turning "sending a message" into the starting point for every Web3 action.',
    mockup: {
      ariaLabel: 'GoldHouse IM interface simulation',
      groupName: 'DeFi Alpha Community',
      memberCount: 'Token-gated · 328 Members',
      multiSig: 'Multisig Governance',
      aliceAddr: 'Alice · 0xA1B2...C3D4',
      proposal: 'Proposal #23 initiated: Adjust GoldHouse Pay fee to 0.1%, requires 3/5 multisig confirmation 🗳️',
      governance: 'Governance Proposal #23',
      adjustFee: 'Adjust GoldHouse Pay Fee',
      vote: 'Sign in Favor',
      against: 'Oppose',
      transfer: 'Send 0.5 ETH to Bob',
      transferConfirmed: '≈ $1,842.50 · Confirmed',
      payLabel: 'GoldHouse Pay',
      inputPlaceholder: 'Send a message or trigger a DApp...',
      sendPayAriaLabel: 'Send payment',
      sendMsgAriaLabel: 'Send message',
    },
    features: [
      {
        title: 'Token-gated Communities',
        desc: 'Only Token holders can enter the community, automatically filtering genuine members and eliminating spam.',
      },
      {
        title: 'GoldHouse Pay In-chat Payments',
        desc: 'Initiate payments with one click beside the chat box. Recipients need no extra steps—assets arrive instantly.',
      },
      {
        title: 'Multisig Governance',
        desc: 'Important organizational decisions require multi-party signature confirmation, transparently verifiable on-chain with fully decentralized governance.',
      },
      {
        title: 'DApp Trigger',
        desc: 'Embed DApp action cards in chat messages—recipients click to execute on-chain interactions immediately.',
      },
    ],
  },
  modules: {
    badge: '7 Modules',
    headingPart1: 'A Complete',
    headingBrand: 'Closed-Loop Ecosystem',
    subtext:
      'Seven core modules built around "Identity · Wallet · Relationships · Permissions · App Gateway"—each an indispensable link in the ecosystem loop.',
    items: [
      {
        id: '01',
        title: 'Social Login & Wallet Recovery',
        desc: 'One-click social login, no wallet creation. MPC technology secures assets with enterprise-grade recovery ensuring private keys are never lost.',
      },
      {
        id: '02',
        title: 'Programmable Master/Sub Accounts',
        desc: 'Create multiple sub-accounts under a master account with granular permission layers, supporting team collaboration and institutional account management.',
      },
      {
        id: '03',
        title: 'E2E Encrypted IM',
        desc: 'End-to-end encrypted messages never pass through any centralized server. Chat content is readable only by the parties involved.',
      },
      {
        id: '04',
        title: 'DApp Hub',
        desc: 'Multi-chain DApp aggregation hub—trigger DeFi operations, NFT minting, and governance votes in-conversation without leaving the chat interface.',
      },
      {
        id: '05',
        title: 'GoldHouse Pay',
        desc: 'Unified in-chat transfers, subscriptions, and tips. Multi-chain asset support with Gas abstraction for seamless frictionless payments.',
      },
      {
        id: '06',
        title: 'GoldHouse DID',
        desc: 'Decentralized identity identifier maintaining unified identity and reputation across chains and communities. On-chain reputation is unforgeable.',
      },
      {
        id: '07',
        title: 'Independent Revenue Model',
        desc: 'Group owners earn direct revenue shares, decoupled from invite code systems. High-quality Token-gated communities select genuine members—conversations generate transactions, and revenue flows back to operators.',
      },
    ],
    moduleAriaPrefix: 'Module',
  },
  architecture: {
    badge: '4-Layer Architecture',
    headingPart1: 'Maximum Security',
    headingDot: '·',
    headingBrand: 'Frictionless Interaction',
    subtext:
      'From experience to foundation, the 4-layer architecture clearly divides responsibilities—each layer focused on its own role, together building an indestructible Web3 social infrastructure.',
    fromToLabel: 'From User Experience to Foundational Infrastructure',
    layers: [
      {
        level: 'Experience',
        levelEn: 'Experience Layer',
        items: ['Social Login', 'E2E IM', 'Chat-native Payments', 'Token-gated Communities'],
        description: 'User-facing interaction layer with Web2-grade fluidity',
      },
      {
        level: 'Account',
        levelEn: 'Account Layer',
        items: ['DID Identity', 'Master/Sub Accounts', 'Permission Layers', 'Community Identity'],
        description: 'Unified account system with consistent cross-chain, cross-community identity and permissions',
      },
      {
        level: 'Security',
        levelEn: 'Security Layer',
        items: ['MPC Key Management', 'Enterprise Recovery', 'Multisig Governance', 'End-to-End Encryption'],
        description: 'Maximum-security infrastructure protecting user assets and data',
      },
      {
        level: 'Multi-chain',
        levelEn: 'Multi-chain Layer',
        items: ['Account Abstraction', 'Cross-chain Unified Account', 'DApp Hub Extension', 'Multi-chain Asset Management'],
        description: 'Foundational multi-chain infrastructure powering all upper-layer capabilities',
      },
    ],
    cards: [
      {
        title: 'Maximum Security',
        text: 'MPC key sharding ensures private keys never appear intact at any single point. Multisig governance and end-to-end encryption provide full-stack security from keys to messages.',
      },
      {
        title: 'Frictionless Interaction',
        text: 'Social login removes wallet barriers, Gas abstraction eliminates fee concerns, and Account Abstraction reduces complex on-chain operations to a single tap.',
      },
      {
        title: 'Multi-chain Unified',
        text: 'Account Abstraction provides cross-chain unified accounts—users on Ethereum, BNB Chain, Polygon, and more share the same identity and asset view.',
      },
    ],
  },
  revenue: {
    badge: 'Independent Revenue Model',
    headingPart1: 'Direct Revenue Share for Group Owners,',
    headingGold: 'Decoupled from Invite Codes',
    subtext:
      'GoldHouse establishes a new community economic model—revenue does not depend on invite code virality, but comes from genuine community value creation.',
    flowSteps: [
      { label: 'Quality Members Join', sublabel: 'Token-gated Screening' },
      { label: 'Conversations Drive Transactions', sublabel: 'Pay · DApp · Tips' },
      { label: 'Protocol Auto-distributes', sublabel: 'Transparent On-chain Settlement' },
      { label: 'Governance Boosts Retention', sublabel: 'Sustained Flywheel Growth' },
    ],
    stepLabel: 'Step',
    features: [
      {
        title: 'High-Quality Communities',
        desc: 'Token-gated mechanisms automatically screen genuine members. Community quality directly impacts revenue, incentivizing operators to run tight, high-value groups.',
      },
      {
        title: 'Conversations Drive Transactions',
        desc: 'Every payment, tip, and subscription happens naturally in chat contexts. Community activity directly converts into real transaction volume.',
      },
      {
        title: 'Revenue Flows Back to Operators',
        desc: 'Group owners receive proportional direct transaction revenue shares with no invite code dependency. Settlement is transparent, on-chain verifiable.',
      },
      {
        title: 'Governance Improves Retention',
        desc: 'Members who participate in governance feel genuine belonging, improving retention. A stable community base ensures sustained revenue streams.',
      },
    ],
    coreBadge: 'Core Value Proposition',
    coreQuote1: '"Direct Revenue Share for Group Owners,',
    coreQuote2: 'Decoupled from',
    coreQuoteGold: 'Invite Codes',
    coreQuote3: '"',
    coreDesc:
      "GoldHouse's revenue model is built on genuine community value—no referral virality required. Only truly active communities can sustainably generate revenue.",
  },
  mission: {
    badge: 'Culture · Mission · Vision',
    headingPart1: 'The Future',
    headingGold: 'We Believe In',
    subtext:
      'GoldHouse is more than a product—it is a belief about the Web3 future: technology should dissolve boundaries, not create barriers.',
    tagline1: 'The World in Your Hands',
    tagline2Part1: 'Connect the Globe,',
    tagline2Brand: 'Build a Frictionless Ecosystem',
    cards: [
      {
        type: 'Culture',
        typeEn: 'Culture',
        title: 'Keep Moving Forward',
        subtitle: 'Embrace Innovation',
        desc: 'In the rapidly evolving Web3 world, we believe only continuous breakthroughs and embracing change can position us at the forefront of the next era.',
      },
      {
        type: 'Mission',
        typeEn: 'Mission',
        title: 'Maximum Security',
        subtitle: 'Frictionless Interaction',
        desc: 'Enable every user—regardless of technical background—to participate in the Web3 economy in the most natural way, while enjoying bank-grade asset security.',
      },
      {
        type: 'Vision',
        typeEn: 'Vision',
        title: 'Connect the Globe',
        subtitle: 'Build a Frictionless Ecosystem',
        desc: 'In the borderless Web3 network, empower every person to use social as the gateway to seamlessly participate in global economies, collaborations, and creations.',
      },
    ],
  },
  cta: {
    badge: 'Get Started Now',
    headingPart1: 'Enter the',
    headingGold: 'Web3',
    headingPart2: 'New Era',
    subtext: 'Download GoldHouse and experience the Web2-grade gateway to launch your Web3 social and asset journey.',
    appStoreLabel: 'Download GoldHouse on the App Store',
    appStoreSmall: 'Download on the',
    appStoreName: 'App Store',
    googlePlayLabel: 'Get GoldHouse on Google Play',
    googlePlaySmall: 'Get it on',
    googlePlayName: 'Google Play',
    webAppLabel: 'Open GoldHouse Web App',
    webAppText: 'Launch Web App',
    trust: [
      { icon: '🔐', text: 'E2E Encrypted' },
      { icon: '🛡️', text: 'MPC Protected' },
      { icon: '⛓️', text: 'Multi-chain' },
      { icon: '🌐', text: 'No Geo-restrictions' },
      { icon: '⚡', text: 'Frictionless UX' },
    ],
  },
  footer: {
    logoAriaLabel: 'GoldHouse Home',
    brandDesc: 'Multi-chain Web3 social platform building the infrastructure-grade social gateway. Identity · Wallet · Relationships · Permissions · Apps.',
    productHeading: 'Product',
    communityHeading: 'Community & About',
    aboutUs: 'About Us',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© 2024 GoldHouse. All rights reserved.',
    tagline: 'Building the infrastructure-grade social gateway for the Web3 era',
    productLinks: [
      { label: 'Social as Identity', href: '#pillars' },
      { label: 'Social as Payment', href: '#pillars' },
      { label: 'Social as Governance', href: '#pillars' },
      { label: 'Social as App', href: '#pillars' },
      { label: '7 Modules', href: '#modules' },
    ],
  },
  privacy: {
    pageTitle: 'Privacy Policy',
    metaTitle: 'Privacy Policy — GoldHouse',
    metaDesc: 'GoldHouse Privacy Policy: learn how we collect, use, and protect your personal information.',
    lastUpdated: 'Last Updated: May 18, 2026',
    sections: [
      {
        title: '1. Information We Collect',
        intro: 'We may collect the following types of information:',
        bullets: [
          'Account Information: When you register a Gold House account, we collect your wallet address, DID identifier, and profile information you choose to provide.',
          'Usage Data: We automatically collect information about your interactions with our services, including access times, feature usage, and device information.',
          'On-chain Data: Public blockchain transaction records related to your agent activities.',
        ],
      },
      {
        title: '2. How We Use Information',
        intro: 'We use the collected information to:',
        bullets: [
          'Provide, maintain, and improve our services;',
          'Process transactions and send related notifications;',
          'Provide personalized customer service experience;',
          'Detect and prevent fraud, abuse, and security threats;',
          'Comply with legal obligations.',
        ],
      },
      {
        title: '3. Information Sharing',
        intro: 'We do not sell your personal information. We may share information in the following circumstances:',
        bullets: [
          'With your consent or at your direction;',
          'With trusted partners who provide services on our behalf (subject to strict data protection agreements);',
          'To comply with legal requirements, enforce our policies, or protect rights and safety.',
        ],
      },
      {
        title: '4. Zero Tolerance Policy',
        intro:
          'Gold House has a zero-tolerance policy for inappropriate content and abusive behavior. Any users or content that violate our guidelines will be immediately penalized, including account suspension or removal.',
        bullets: [],
      },
      {
        title: '5. Data Security',
        intro: 'We employ industry-standard security measures to protect your information, including:',
        bullets: [
          'End-to-end encrypted communications',
          'Decentralized Identity Verification (DID)',
          'Regular security audits',
          'Strict access control mechanisms',
        ],
      },
      {
        title: '6. Your Rights',
        intro: 'You have the right to:',
        bullets: [
          'Access and export your personal data',
          'Request correction or deletion of your information',
          'Withdraw consent for data processing',
          'Have complete control over your identity data through your DID',
        ],
      },
      {
        title: '7. Cookies and Tracking',
        intro:
          'We use necessary cookies and similar technologies to ensure the proper functioning of our services. You can manage cookie preferences through your browser settings. We do not use any third-party advertising tracking tools.',
        bullets: [],
      },
      {
        title: '8. Policy Updates',
        intro:
          'We may update this Privacy Policy from time to time. Significant changes will be communicated to you through in-app notifications or email. Your continued use of our services indicates your acceptance of the updated policy.',
        bullets: [],
      },
      {
        title: '9. Contact Us',
        intro: 'If you have any questions about this Privacy Policy, please contact us at:',
        bullets: ['Email: business@goldhouse.cc'],
      },
    ],
    copyright: '© 2024 Gold House. All rights reserved.',
  },
  terms: {
    pageTitle: 'Terms of Service',
    metaTitle: 'Terms of Service — GoldHouse',
    metaDesc: 'GoldHouse Terms of Service: understand the rules and conditions for using our platform.',
    lastUpdated: 'Last Updated: January 1, 2026',
    sections: [
      {
        title: '1. Service Overview',
        intro:
          'Gold House is a Web4 super-app platform for humans and AI agents, providing decentralized identity (DID), AI social, Vibe Coding, agent gaming, trading engine, viral growth, and OpenClaw infrastructure services. By using our services, you agree to these terms.',
        bullets: [],
      },
      {
        title: '2. Account and Identity',
        intro: '',
        bullets: [
          'You must create a Gold House account and set up a DID identity to access all services.',
          'You are responsible for protecting your wallet private keys and account credentials.',
          'Your DID identity is entirely under your control; Gold House cannot recover lost private keys.',
          'You may not transfer, rent, or lend your account to third parties.',
        ],
      },
      {
        title: '3. Agent Services',
        intro: '',
        bullets: [
          'AI agent behavior depends on your configuration and training data; you are responsible for agent operation results.',
          'Agent operations in trading, gaming, and other scenarios involve real assets; please fully understand the related risks.',
          'We do not guarantee that agent decisions will produce expected results in any circumstance.',
          'You should regularly review and monitor your agent activities.',
        ],
      },
      {
        title: '4. Zero Tolerance Policy',
        intro:
          'Gold House has a zero-tolerance policy for inappropriate content and abusive behavior. The following actions will result in immediate penalties, including account suspension or permanent ban:',
        bullets: [
          'Publishing or distributing illegal, obscene, violent, hateful, or infringing content;',
          'Harassing, threatening, or discriminating against other users;',
          'Using the platform for fraud, money laundering, or other criminal activities;',
          'Spreading malware, spam, or attempting to compromise platform security;',
          'Impersonating others or using false identities for deception.',
          'Any violation of these guidelines will result in immediate penalties, including content removal, account suspension, or cooperation with law enforcement.',
        ],
      },
      {
        title: '5. Trading and Financial Services',
        intro: '',
        bullets: [
          'The trading engine provided by Gold House is a tool service only and does not constitute investment advice.',
          'Cryptocurrency and digital asset trading carries extremely high risks; you may lose all invested funds.',
          'You are responsible for complying with all applicable laws regarding digital asset trading in your jurisdiction.',
          'The platform reserves the right to restrict or suspend trading services when necessary.',
        ],
      },
      {
        title: '6. User Conduct',
        intro: 'When using Gold House services, you may not:',
        bullets: [
          'Engage in illegal activities or violate applicable laws and regulations;',
          'Manipulate markets, conduct fraudulent trades, or money launder;',
          'Interfere with or disrupt the normal operation of the platform;',
          'Infringe on others\' intellectual property or privacy rights;',
          'Distribute malware, spam, or harmful content;',
          'Exploit platform vulnerabilities or reverse engineer the system.',
        ],
      },
      {
        title: '7. Intellectual Property',
        intro: '',
        bullets: [
          'The Gold House platform and all its content, features, and technology are protected by intellectual property laws.',
          'Content you create through Vibe Coding belongs to you.',
          'You grant Gold House a non-exclusive license to use your content within the scope of platform operations.',
          'You may not copy, modify, or distribute any part of the platform without authorization.',
        ],
      },
      {
        title: '8. Service Changes and Termination',
        intro: '',
        bullets: [
          'We reserve the right to modify, suspend, or terminate any service at any time.',
          'For significant changes, we will notify users in advance.',
          'If you violate these terms (including the zero-tolerance policy), we may immediately suspend or terminate your account.',
          'After service termination, you can still export your identity and data through your DID.',
        ],
      },
      {
        title: '9. Disclaimer',
        intro: '',
        bullets: [
          'All services are provided "as is" and "as available" without any warranties of any kind.',
          'We are not liable for any losses arising from the use or inability to use the services.',
          'Blockchain network delays, congestion, or failures are beyond our control.',
          'AI agent outputs are for reference only and should not be used as the sole basis for decision-making.',
        ],
      },
      {
        title: '10. Dispute Resolution',
        intro: '',
        bullets: [
          'These terms are governed by and construed in accordance with the laws of Singapore.',
          'Any disputes should first be resolved through friendly negotiation.',
          'If negotiation fails, disputes shall be submitted to the Singapore International Arbitration Centre (SIAC) for arbitration.',
        ],
      },
      {
        title: '11. Contact Information',
        intro: 'If you have any questions about these Terms of Service, please contact:',
        bullets: ['Email: business@goldhouse.cc'],
      },
    ],
    copyright: '© 2024 Gold House. All rights reserved.',
  },
};

export default en;
