export type Partner = {
  name: string;
  icon: string;
  profileUrl: string;
  announcementUrl?: string;
};

export const partners: readonly Partner[] = [
  { name: "Ave.ai", icon: "/assets/figma/ave.png", profileUrl: "https://x.com/AveaiGlobal", announcementUrl: "https://x.com/goldhousedotcc/status/2069756532544389206" },
  { name: "GoPlus", icon: "/assets/figma/goplus.png", profileUrl: "https://x.com/GoPlusSecurity", announcementUrl: "https://x.com/GoPlusSecurity/status/2066354226620768437" },
  { name: "REI Network", icon: "/assets/figma/rei.png", profileUrl: "https://x.com/GXChainGlobal", announcementUrl: "https://x.com/goldhousedotcc/status/2068929881589821763" },
  { name: "X-Agent", icon: "/assets/figma/x-agent.png", profileUrl: "https://x.com/XAgent_official", announcementUrl: "https://x.com/goldhousedotcc/status/2073271442939289604" },
  { name: "Alphio AI", icon: "/assets/figma/alphio.png", profileUrl: "https://x.com/AlphioAI" },
  { name: "Astarter", icon: "/assets/figma/astarter.png", profileUrl: "https://x.com/AstarterDefiHub" },
  { name: "GANA Insight", icon: "/assets/figma/gana.png", profileUrl: "https://x.com/GANA_Insight" },
];
