import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { GoogleAnalytics } from '@/components/common/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Bloom Land Labo | 潤いある国土を育むテクノロジー・カンパニー',
    template: '%s | Bloom Land Labo'
  },
  description: '車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進。しらみね大学村をはじめとした持続可能な地域循環モデルを全国展開。',
  keywords: ['地方創生', 'テクノロジー', '車載AI', 'NFCラリー', '観光', 'DX', '持続可能', '地域循環'],
  authors: [{ name: 'Bloom Land Labo' }],
  creator: 'Bloom Land Labo',
  publisher: 'Bloom Land Labo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://bloomlandlabo.netlify.app/',
    siteName: 'Bloom Land Labo',
    title: 'Bloom Land Labo | 潤いある国土を育むテクノロジー・カンパニー',
    description: '車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進。持続可能な地域循環モデルを全国展開。',
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Bloom Land Labo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bloom Land Labo | 潤いある国土を育むテクノロジー・カンパニー',
    description: '車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進。',
    images: ['/opengraph.jpg'],
    creator: '@bloomlandlabo',
  },
  verification: {
    google: 'TODO_GOOGLE_SEARCH_CONSOLE_VERIFICATION',
  },
  alternates: {
    canonical: 'https://bloomlandlabo.netlify.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* JSON-LD構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bloom Land Labo",
              "alternateName": "ブルームランドラボ",
              "url": "https://bloomlandlabo.netlify.app/",
              "logo": "https://bloomlandlabo.netlify.app/logo.png",
              "description": "潤いある国土を育むテクノロジー・カンパニー。車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進。",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP",
                "addressRegion": "TODO_地域名",
                "addressLocality": "TODO_市区町村名"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "TODO_電話番号",
                "contactType": "customer service",
                "availableLanguage": "Japanese"
              },
              "sameAs": [
                "https://twitter.com/bloomlandlabo",
                "https://www.linkedin.com/company/bloomlandlabo"
              ],
              "hasProduct": [
                {
                  "@type": "Product",
                  "name": "車載用旅行補助AIデバイス",
                  "description": "液晶ディスプレイとスピーカーを搭載した車載用AI旅行アシスタント"
                },
                {
                  "@type": "Service",
                  "name": "NFC Tour Rally",
                  "description": "NFCタグを活用した観光バッジラリーサービス"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
