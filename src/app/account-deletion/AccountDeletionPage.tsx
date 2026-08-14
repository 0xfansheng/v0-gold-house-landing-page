"use client";

import LegalShell from "@/components/legal/LegalShell";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";

function AccountDeletionContent() {
  const { dict } = useI18n();
  const item = dict.accountDeletion;

  return (
    <LegalShell title={item.pageTitle} updated={item.lastUpdated} badge={item.badge} copyright={item.copyright}>
      <div className="legal-sections">
        <section><h2>{item.howToTitle}</h2><p>{item.howToIntro}</p>
          <div className="legal-card"><strong>{item.inAppLabel}</strong><p>{item.inAppDesc}</p></div>
          <div className="legal-card"><strong>{item.emailLabel}</strong><p>{item.emailDescPart1}<a href={`mailto:${item.emailAddress}`}>{item.emailAddress}</a>{item.emailDescPart2}<code>{item.emailSubject}</code>{item.emailDescPart3}<b>{item.emailDays}</b>{item.emailDescPart4}</p></div>
        </section>
        <section><h2>{item.deletedTitle}</h2><p>{item.deletedIntro}</p><ul>{item.deletedBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></section>
        <section><h2>{item.retainedTitle}</h2><p>{item.retainedIntroPart1}<b>{item.retainedDays}</b>{item.retainedIntroPart2}</p><ul>{item.retainedBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><p className="legal-notice">{item.retentionNote}</p></section>
        <section><h2>{item.chainNoticeTitle}</h2><p>{item.chainNoticeIntro}</p></section>
        <section><h2>{item.contactTitle}</h2><p>{item.contactIntroPart1}<a href={`mailto:${item.contactEmail}`}>{item.contactEmail}</a>{item.contactIntroPart2}</p></section>
      </div>
    </LegalShell>
  );
}

export default function AccountDeletionPage() { return <I18nProvider><AccountDeletionContent /></I18nProvider>; }
