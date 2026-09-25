"use client";

import { Fragment, type ReactNode } from "react";
import LegalShell from "./LegalShell";
import PolicyShell from "./PolicyShell";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";

type PolicyKey = "privacy" | "terms" | "childSafety";

const TOKEN_RE = /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

function linkify(text: string): ReactNode {
  return text.split(TOKEN_RE).map((part, index) => {
    if (index % 2 === 0) return <Fragment key={index}>{part}</Fragment>;
    const isEmail = part.includes("@") && !part.startsWith("http");
    return <a key={index} href={isEmail ? `mailto:${part}` : part} {...(isEmail ? {} : { target: "_blank", rel: "noreferrer" })}>{part}</a>;
  });
}

function PolicyContent({ policyKey }: { policyKey: PolicyKey }) {
  const { dict } = useI18n();
  const policy = dict[policyKey];

  const content = (
    <div className="legal-sections">
      {policy.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.intro ? <p>{linkify(section.intro)}</p> : null}
          {section.bullets.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{linkify(bullet)}</li>)}</ul> : null}
        </section>
      ))}
    </div>
  );

  if (policyKey === "privacy" || policyKey === "terms") {
    return <PolicyShell title={policy.pageTitle} updated={policy.lastUpdated}>{content}</PolicyShell>;
  }

  return <LegalShell title={policy.pageTitle} updated={policy.lastUpdated} copyright={policy.copyright}>{content}</LegalShell>;
}

export default function PolicyPage({ policyKey }: { policyKey: PolicyKey }) {
  return <I18nProvider><PolicyContent policyKey={policyKey} /></I18nProvider>;
}
