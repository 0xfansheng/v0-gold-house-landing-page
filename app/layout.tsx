import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Gold House | 世界在你掌中',
  description: 'Gold House - Next-generation global instant messaging platform. Secure communication, massive group chats, high-speed interaction, and large-scale online meetings.',
  keywords: ['instant messaging', 'secure chat', 'video meetings', 'global communication', 'Gold House'],
  authors: [{ name: 'Gold House' }],
  openGraph: {
    title: 'Gold House | 世界在你掌中',
    description: 'Next-generation global instant messaging platform for secure, fast, and scalable communication.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-white">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
