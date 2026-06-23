import type { Metadata } from 'next';
import AccountDeletionClient from './AccountDeletionClient';

export const metadata: Metadata = {
  title: '账户删除请求 — GoldHouse',
  description: 'GoldHouse 账户删除指引：了解如何永久删除您的账户，以及我们将删除或保留的数据。',
};

export default function AccountDeletionPage() {
  return <AccountDeletionClient />;
}
