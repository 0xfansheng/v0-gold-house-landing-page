import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: '隐私政策 — GoldHouse',
  description: 'GoldHouse 隐私政策：了解我们如何收集、使用和保护您的个人信息。',
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
