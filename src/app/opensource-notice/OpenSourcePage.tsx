"use client";

import LegalShell from "@/components/legal/LegalShell";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";
import { OSS_GROUPS } from "./ossData";

function OpenSourceContent() {
  const { dict } = useI18n();
  const item = dict.openSourceNotice;
  return (
    <LegalShell title={item.pageTitle} updated={`${item.intro} · ${item.versionNote}`} badge={item.badge} wide>
      <div className="oss-groups">
        {OSS_GROUPS.map((group) => <section key={group.id}><h2>{item.groups[group.id]}</h2><ul>{group.items.map((dependency) => <li key={`${group.id}-${dependency.name}`}><span>{dependency.url ? <a href={dependency.url} target="_blank" rel="noreferrer">{dependency.name}</a> : dependency.name}<small>{dependency.version}</small></span><em>{dependency.license}</em></li>)}</ul></section>)}
      </div>
      <p className="legal-notice">{item.footerNote}</p>
    </LegalShell>
  );
}

export default function OpenSourcePage() { return <I18nProvider><OpenSourceContent /></I18nProvider>; }
