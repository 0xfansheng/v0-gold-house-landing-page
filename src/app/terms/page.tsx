import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: '服务条款 — GoldHouse',
  description: 'GoldHouse 服务条款：了解使用我们平台的规则和条件。',
};

export default function TermsPage() {
  return <TermsClient />;
}
