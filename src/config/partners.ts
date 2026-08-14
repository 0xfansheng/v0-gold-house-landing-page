export type Partner = {
  name: string;
  icon: string;
  profileUrl: string;
  announcementUrl?: string;
};

export const partners: readonly Partner[] = [
  { name: "Ave.ai", icon: "/assets/figma/ave.png", profileUrl: "https://x.com/AveaiGlobal", announcementUrl: "https://x.com/goldhousedotcc/status/2069756532544389206" },
  { name: "GoPlus", icon: "/assets/figma/goplus.png", profileUrl: "https://x.com/GoPlusSecurity", announcementUrl: "https://x.com/GoPlusSecurity/status/2066354226620768437" },
  { name: "U9", icon: "/assets/figma/u9.png", profileUrl: "https://x.com/U9_Finance", announcementUrl: "https://x.com/U9_Finance/status/2071808894771569073" },
  { name: "REI Network", icon: "/assets/figma/rei.png", profileUrl: "https://x.com/GXChainGlobal", announcementUrl: "https://x.com/goldhousedotcc/status/2068929881589821763" },
  { name: "X-Agent", icon: "/assets/figma/x-agent.png", profileUrl: "https://x.com/XAgent_official", announcementUrl: "https://x.com/goldhousedotcc/status/2073271442939289604" },
  { name: "FistFloor", icon: "/assets/figma/fistfloor.png", profileUrl: "https://x.com/FistFloor_sol", announcementUrl: "https://x.com/goldhousedotcc/status/2072568337494900826" },
  { name: "Alphio AI", icon: "/assets/figma/alphio.png", profileUrl: "https://x.com/AlphioAI" },
  { name: "Astarter", icon: "/assets/figma/astarter.png", profileUrl: "https://x.com/AstarterDefiHub" },
  { name: "GANA Insight", icon: "/assets/figma/gana.png", profileUrl: "https://x.com/GANA_Insight" },
];
