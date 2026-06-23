import type { Metadata } from 'next';
import AnnouncementsClient from './AnnouncementsClient';

export const metadata: Metadata = {
  title: '更新公告 — GoldHouse',
  description: 'GoldHouse 版本更新公告与更新日志：了解每个版本的新增功能、体验优化与问题修复。',
};

export default function AnnouncementsPage() {
  return <AnnouncementsClient />;
}
