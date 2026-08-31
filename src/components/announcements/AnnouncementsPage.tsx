"use client";

/* Source markup intentionally uses img elements during the pixel-accurate migration. */
/* eslint-disable @next/next/no-img-element */

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/i18n/landing";

type Category = "product" | "company" | "notice";

type AnnouncementText = {
  title: string;
  summary: string;
};

type Announcement = {
  id: string;
  date: string;
  category: Category;
  copy: Record<Locale, AnnouncementText>;
};

type PageCopy = {
  title: string;
  description: string;
  archiveTitle: string;
  all: string;
  categories: Record<Category, string>;
  search: string;
  empty: string;
  viewUpdate: string;
  close: string;
  published: string;
  detailNote: string;
  readingTime: string;
  articleIntro: string;
  contextTitle: string;
  contextBody: string;
  highlightsTitle: string;
  highlights: string[];
  storyTitle: string;
  storyBody: string;
  imageCaption: string;
  nextTitle: string;
};

const pageCopy: Record<Locale, PageCopy> = {
  "zh-CN": {
    title: "官方公告",
    description: "在这里，了解 GoldHouse 的每一次进展。",
    archiveTitle: "所有公告",
    all: "全部",
    categories: { product: "产品更新", company: "公司活动", notice: "官方通知" },
    search: "搜索公告",
    empty: "没有找到匹配的公告",
    viewUpdate: "查看更新",
    close: "关闭公告",
    published: "发布于",
    detailNote: "本公告将通过 GoldHouse 官方渠道同步。如有补充或调整，请以本页面的最新版本为准。",
    readingTime: "约 4 分钟阅读",
    articleIntro: "我们希望通过更完整的背景、实施方式与后续安排，让每一位社区成员都能理解这项进展将带来的实际变化。",
    contextTitle: "为什么我们要推进这项进展",
    contextBody: "GoldHouse 的每一次迭代都来自真实使用场景。我们持续整理社区反馈、产品数据与运营观察，并把影响最广泛的问题转化为清晰、可验证的改进计划。本次进展不仅回应当前需求，也为后续体验与生态协作建立更稳定的基础。",
    highlightsTitle: "本次公告重点",
    highlights: ["面向用户的体验与信息呈现更加清晰", "通过分阶段推进降低使用与迁移成本", "持续收集社区反馈并公开后续进展"],
    storyTitle: "从反馈到落地",
    storyBody: "团队会先在小范围场景中验证方案，再逐步扩大覆盖范围。每一阶段都会记录关键指标、异常反馈与使用建议，确保设计与实际体验保持一致。对于可能影响用户流程的调整，我们也会提前通过官方渠道发布说明。",
    imageCaption: "与本公告类别对应的主题插图",
    nextTitle: "接下来",
  },
  "zh-TW": {
    title: "官方公告",
    description: "在這裡，了解 GoldHouse 的每一次進展。",
    archiveTitle: "所有公告",
    all: "全部",
    categories: { product: "產品更新", company: "公司活動", notice: "官方通知" },
    search: "搜尋公告",
    empty: "找不到符合條件的公告",
    viewUpdate: "查看更新",
    close: "關閉公告",
    published: "發佈於",
    detailNote: "本公告將透過 GoldHouse 官方管道同步。如有補充或調整，請以本頁面的最新版本為準。",
    readingTime: "約 4 分鐘閱讀",
    articleIntro: "我們希望透過更完整的背景、實施方式與後續安排，讓每一位社群成員都能理解這項進展帶來的實際變化。",
    contextTitle: "為什麼我們要推進這項進展",
    contextBody: "GoldHouse 的每一次迭代都來自真實使用情境。我們持續整理社群回饋、產品資料與營運觀察，並把影響最廣泛的問題轉化為清晰、可驗證的改善計畫。",
    highlightsTitle: "本次公告重點",
    highlights: ["使用體驗與資訊呈現更加清晰", "透過分階段推進降低使用與移轉成本", "持續收集社群回饋並公開後續進展"],
    storyTitle: "從回饋到落地",
    storyBody: "團隊會先在小範圍情境中驗證方案，再逐步擴大涵蓋範圍。每一階段都會記錄關鍵指標、異常回饋與使用建議，確保設計與實際體驗保持一致。",
    imageCaption: "與本公告類別對應的主題插圖",
    nextTitle: "接下來",
  },
  ko: {
    title: "공식 공지",
    description: "GoldHouse의 모든 새로운 소식을 여기에서 확인하세요.",
    archiveTitle: "전체 공지",
    all: "전체",
    categories: { product: "제품 업데이트", company: "회사 활동", notice: "공식 안내" },
    search: "공지 검색",
    empty: "검색 조건에 맞는 공지가 없습니다",
    viewUpdate: "업데이트 보기",
    close: "공지 닫기",
    published: "게시일",
    detailNote: "이 공지는 GoldHouse 공식 채널에도 동시 게시됩니다. 추가 또는 변경 사항은 이 페이지의 최신 버전을 기준으로 합니다.",
    readingTime: "약 4분 소요",
    articleIntro: "더 자세한 배경과 실행 방식, 향후 계획을 통해 모든 커뮤니티 구성원이 이번 변화의 실제 의미를 이해할 수 있도록 안내합니다.",
    contextTitle: "이번 변화를 추진하는 이유",
    contextBody: "GoldHouse의 모든 변화는 실제 사용 경험에서 시작됩니다. 커뮤니티 피드백과 제품 데이터, 운영 과정에서 얻은 인사이트를 바탕으로 영향이 큰 문제를 명확하고 검증 가능한 개선 계획으로 전환합니다.",
    highlightsTitle: "주요 내용",
    highlights: ["사용 경험과 정보 구조를 더 명확하게 개선", "단계적 적용으로 전환 비용과 부담 최소화", "커뮤니티 피드백과 후속 진행 상황 지속 공유"],
    storyTitle: "피드백에서 실행까지",
    storyBody: "팀은 먼저 제한된 범위에서 방향을 검증한 뒤 점진적으로 적용 범위를 확대합니다. 각 단계에서 핵심 지표와 예외 상황, 사용자 의견을 기록해 설계와 실제 경험이 일치하도록 합니다.",
    imageCaption: "공지 카테고리를 표현한 대표 이미지",
    nextTitle: "다음 단계",
  },
  en: {
    title: "Announcements",
    description: "Follow every step forward from GoldHouse.",
    archiveTitle: "All announcements",
    all: "All",
    categories: { product: "Product updates", company: "Company events", notice: "Official notices" },
    search: "Search announcements",
    empty: "No announcements match your search",
    viewUpdate: "View update",
    close: "Close announcement",
    published: "Published",
    detailNote: "This announcement is also shared through official GoldHouse channels. Any additions or changes will appear in the latest version of this page.",
    readingTime: "4 min read",
    articleIntro: "This expanded update shares the context, rollout approach, and next steps so every community member can understand what the progress means in practice.",
    contextTitle: "Why we are moving this forward",
    contextBody: "Every GoldHouse iteration begins with real usage. We continuously review community feedback, product signals, and operational observations, then turn the most meaningful opportunities into clear and measurable improvements. This work responds to today’s needs while creating a stronger foundation for future experiences and ecosystem collaboration.",
    highlightsTitle: "What to know",
    highlights: ["A clearer experience and more focused information architecture", "A phased rollout that reduces adoption and migration effort", "Ongoing community feedback with transparent progress updates"],
    storyTitle: "From feedback to delivery",
    storyBody: "The team validates each direction in a focused set of scenarios before expanding access. Every phase tracks key signals, edge cases, and user input so the design remains aligned with the lived experience. Changes that may affect established workflows will be communicated through official channels in advance.",
    imageCaption: "Category illustration for this announcement",
    nextTitle: "What happens next",
  },
};

const announcements: Announcement[] = [
  {
    id: "goldhouse-1-8-0",
    date: "2026.08.28",
    category: "product",
    copy: {
      "zh-CN": { title: "GoldHouse v1.8.0 更新说明", summary: "全新的社群管理体验、更清晰的资产视图，以及多项性能与安全优化。" },
      "zh-TW": { title: "GoldHouse v1.8.0 更新說明", summary: "全新的社群管理體驗、更清晰的資產檢視，以及多項效能與安全最佳化。" },
      ko: { title: "GoldHouse v1.8.0 업데이트 안내", summary: "새로운 커뮤니티 관리 경험과 더 명확한 자산 보기, 성능 및 보안 개선을 제공합니다." },
      en: { title: "GoldHouse v1.8.0 release notes", summary: "A new community management experience, clearer asset views, and performance and security improvements." },
    },
  },
  {
    id: "community-co-creation",
    date: "2026.08.12",
    category: "company",
    copy: {
      "zh-CN": { title: "GoldHouse 社群共创计划正式启动", summary: "邀请社区伙伴共同参与产品共创、内容共建与生态拓展，携手构建更开放的 GoldHouse。" },
      "zh-TW": { title: "GoldHouse 社群共創計畫正式啟動", summary: "邀請社群夥伴共同參與產品共創、內容共建與生態拓展，攜手打造更開放的 GoldHouse。" },
      ko: { title: "GoldHouse 커뮤니티 공동 창작 프로그램 시작", summary: "커뮤니티 파트너와 함께 제품, 콘텐츠, 생태계를 만들며 더 개방적인 GoldHouse를 구축합니다." },
      en: { title: "GoldHouse Community Co-Creation Program launches", summary: "Community partners are invited to shape products, content, and ecosystem growth with GoldHouse." },
    },
  },
  {
    id: "terms-update",
    date: "2026.07.25",
    category: "notice",
    copy: {
      "zh-CN": { title: "关于服务条款更新的公告", summary: "我们将于 2026 年 8 月 1 日更新服务条款，进一步明确用户权益与平台责任。" },
      "zh-TW": { title: "關於服務條款更新的公告", summary: "我們將於 2026 年 8 月 1 日更新服務條款，進一步明確使用者權益與平台責任。" },
      ko: { title: "서비스 약관 업데이트 안내", summary: "사용자 권리와 플랫폼 책임을 명확히 하기 위해 2026년 8월 1일 서비스 약관이 업데이트됩니다." },
      en: { title: "Notice of Terms of Service update", summary: "Our Terms of Service will be updated on August 1, 2026 to clarify user rights and platform responsibilities." },
    },
  },
  {
    id: "goldhouse-1-7-2",
    date: "2026.07.09",
    category: "product",
    copy: {
      "zh-CN": { title: "GoldHouse v1.7.2 版本更新", summary: "优化了资产展示与转账体验，修复若干已知问题，提升整体稳定性。" },
      "zh-TW": { title: "GoldHouse v1.7.2 版本更新", summary: "最佳化資產展示與轉帳體驗，修復若干已知問題，提升整體穩定性。" },
      ko: { title: "GoldHouse v1.7.2 버전 업데이트", summary: "자산 표시와 전송 경험을 개선하고 알려진 문제를 수정해 전반적인 안정성을 높였습니다." },
      en: { title: "GoldHouse v1.7.2 update", summary: "Improved asset displays and transfers, fixes for known issues, and better overall stability." },
    },
  },
  {
    id: "asia-web3-summit-2026",
    date: "2026.06.18",
    category: "company",
    copy: {
      "zh-CN": { title: "GoldHouse 参展 Asia Web3 Summit 2026", summary: "6 月 18–20 日，GoldHouse 将亮相香港 Asia Web3 Summit 2026，欢迎现场交流。" },
      "zh-TW": { title: "GoldHouse 參展 Asia Web3 Summit 2026", summary: "6 月 18–20 日，GoldHouse 將亮相香港 Asia Web3 Summit 2026，歡迎現場交流。" },
      ko: { title: "GoldHouse, Asia Web3 Summit 2026 참가", summary: "6월 18일부터 20일까지 홍콩에서 열리는 Asia Web3 Summit 2026에서 GoldHouse를 만나보세요." },
      en: { title: "GoldHouse at Asia Web3 Summit 2026", summary: "Meet GoldHouse at Asia Web3 Summit 2026 in Hong Kong from June 18–20." },
    },
  },
  {
    id: "official-account-security",
    date: "2026.05.30",
    category: "notice",
    copy: {
      "zh-CN": { title: "关于防范虚假官方账号的安全提醒", summary: "请认准 GoldHouse 官方渠道与认证账号，谨防钓鱼与诈骗，保护您的资产安全。" },
      "zh-TW": { title: "關於防範虛假官方帳號的安全提醒", summary: "請認準 GoldHouse 官方管道與認證帳號，謹防釣魚與詐騙，保護您的資產安全。" },
      ko: { title: "가짜 공식 계정에 대한 보안 안내", summary: "GoldHouse 공식 채널과 인증 계정을 확인하고 피싱 및 사기로부터 자산을 보호하세요." },
      en: { title: "Security reminder about fake official accounts", summary: "Verify GoldHouse official channels and authenticated accounts to protect your assets from phishing and fraud." },
    },
  },
];

const categoryClass: Record<Category, string> = {
  product: "is-product",
  company: "is-company",
  notice: "is-notice",
};

const categoryVisuals: Record<Category, string> = {
  product: "/assets/announcements/category-product-generated.png?v=20260830-2",
  company: "/assets/announcements/category-company-generated.png?v=20260830-2",
  notice: "/assets/announcements/category-notice-generated.png?v=20260830-2",
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function AnnouncementDialog({ announcement, locale, close }: { announcement: Announcement; locale: Locale; close: () => void }) {
  const copy = pageCopy[locale];
  const text = announcement.copy[locale];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close]);

  return (
    <div className="announcement-dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <article className="announcement-dialog" role="dialog" aria-modal="true" aria-labelledby="announcement-dialog-title">
        <button className="announcement-dialog-close" type="button" aria-label={copy.close} onClick={close}>
          <span /><span />
        </button>
        <div className={`announcement-dialog-category ${categoryClass[announcement.category]}`}>{copy.categories[announcement.category]}</div>
        <h2 id="announcement-dialog-title">{text.title}</h2>
        <div className="announcement-dialog-meta">
          <span>{copy.published}</span>
          <time dateTime={announcement.date.replaceAll(".", "-")}>{announcement.date}</time>
          <i aria-hidden="true">·</i>
          <span>{copy.readingTime}</span>
        </div>
        <div className="announcement-dialog-body">
          <div className="announcement-dialog-lead">
            <div className="announcement-dialog-lead-copy">
              <p className="announcement-dialog-summary">{text.summary}</p>
              <p>{copy.articleIntro}</p>
            </div>
            <figure className={`announcement-dialog-figure ${categoryClass[announcement.category]}`}>
              <img src={categoryVisuals[announcement.category]} alt="" />
              <figcaption>{copy.imageCaption}</figcaption>
            </figure>
          </div>
          <div className="announcement-dialog-content">
            <div className="announcement-dialog-prose">
              <section>
                <h3>{copy.contextTitle}</h3>
                <p>{copy.contextBody}</p>
              </section>
              <blockquote>{text.summary}</blockquote>
              <section>
                <h3>{copy.storyTitle}</h3>
                <p>{copy.storyBody}</p>
              </section>
              <section className="announcement-dialog-next">
                <h3>{copy.nextTitle}</h3>
                <p>{copy.detailNote}</p>
              </section>
            </div>
            <aside className="announcement-dialog-highlights">
              <h3>{copy.highlightsTitle}</h3>
              <ul>
                {copy.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function AnnouncementsPage({ locale }: { locale: Locale }) {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Announcement | null>(null);
  const deferredQuery = useDeferredValue(query);
  const copy = pageCopy[locale];
  const featured = activeCategory === "all"
    ? announcements[0]
    : announcements.find((announcement) => announcement.category === activeCategory) ?? announcements[0];
  const featuredText = featured.copy[locale];

  const filteredAnnouncements = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLocaleLowerCase();
    return announcements.filter((announcement) => {
      if (activeCategory !== "all" && announcement.category !== activeCategory) return false;
      if (!normalizedQuery) return true;
      const text = announcement.copy[locale];
      return `${text.title} ${text.summary} ${announcement.date}`.toLocaleLowerCase().includes(normalizedQuery);
    });
  }, [activeCategory, deferredQuery, locale]);

  const filters: Array<Category | "all"> = ["all", "product", "company", "notice"];

  return (
    <>
      <main className="announcements-page">
        <section className="announcement-hero">
          <div className="announcement-hero-inner">
            <div className="announcement-intro">
              <h1>{copy.title}</h1>
              <p>{copy.description}</p>
            </div>
            <article className="featured-announcement">
              <div className="featured-announcement-copy">
                <h2>{featuredText.title}</h2>
                <p>{featuredText.summary}</p>
                <div className="featured-announcement-meta">
                  <span>{copy.categories[featured.category]}</span><i aria-hidden="true">·</i><time dateTime={featured.date.replaceAll(".", "-")}>{featured.date}</time>
                </div>
                <button type="button" onClick={() => setSelected(featured)}>{copy.viewUpdate}<ArrowIcon /></button>
              </div>
              <div className="featured-announcement-visual" aria-hidden="true">
                <img key={featured.category} src={categoryVisuals[featured.category]} alt="" fetchPriority="high" />
              </div>
            </article>
          </div>
        </section>

        <section className="announcement-archive" aria-labelledby="announcement-archive-title">
          <div className="announcement-archive-heading">
            <h2 id="announcement-archive-title">{copy.archiveTitle}</h2>
            <div className="announcement-filters" role="group" aria-label={copy.archiveTitle}>
              {filters.map((filter) => (
                <button
                  className={activeCategory === filter ? "is-active" : ""}
                  type="button"
                  aria-pressed={activeCategory === filter}
                  onClick={() => setActiveCategory(filter)}
                  key={filter}
                >
                  {filter === "all" ? copy.all : copy.categories[filter]}
                </button>
              ))}
            </div>
            <label className="announcement-search">
              <span className="sr-only">{copy.search}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></svg>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.search} />
            </label>
          </div>

          <div className="announcement-list" aria-live="polite">
            {filteredAnnouncements.length > 0 ? filteredAnnouncements.map((announcement) => {
              const text = announcement.copy[locale];
              return (
                <button className="announcement-row" type="button" onClick={() => setSelected(announcement)} key={announcement.id}>
                  <time dateTime={announcement.date.replaceAll(".", "-")}>{announcement.date}</time>
                  <span className={`announcement-category ${categoryClass[announcement.category]}`}>{copy.categories[announcement.category]}</span>
                  <strong>{text.title}</strong>
                  <span className="announcement-summary">{text.summary}</span>
                </button>
              );
            }) : <p className="announcement-empty">{copy.empty}</p>}
          </div>
        </section>
      </main>
      {selected ? <AnnouncementDialog announcement={selected} locale={locale} close={() => setSelected(null)} /> : null}
    </>
  );
}
