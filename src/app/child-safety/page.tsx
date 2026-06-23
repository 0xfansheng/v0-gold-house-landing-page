import type { Metadata } from 'next';
import ChildSafetyClient from './ChildSafetyClient';

export const metadata: Metadata = {
  title: 'Child Safety Standards (CSAE) — GoldHouse',
  description:
    'GoldHouse Child Safety Standards: our zero-tolerance policy against child sexual abuse and exploitation (CSAE), reporting channels, and child safety contact.',
};

export default function ChildSafetyPage() {
  return <ChildSafetyClient />;
}
