import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import MissionSection from '@/components/home/MissionSection'
import ProductPreview from '@/components/home/ProductPreview'
import NFCRallyPreview from '@/components/home/NFCRallyPreview'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import NewsPreview from '@/components/home/NewsPreview'
import ContactCTA from '@/components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'ホーム',
  description: '潤いある国土を育むテクノロジー・カンパニー、Bloom Land Labo。車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進し、持続可能な地域循環モデルを全国展開。',
  openGraph: {
    title: 'Bloom Land Labo | 潤いある国土を育むテクノロジー・カンパニー',
    description: '車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進。持続可能な地域循環モデルを全国展開。',
    url: 'https://bloomlandlabo.netlify.app/',
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Bloom Land Labo',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProductPreview />
      <NFCRallyPreview />
      <ProjectsPreview />
      <NewsPreview />
      <ContactCTA />
    </>
  )
}
