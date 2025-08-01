import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '車載用旅行補助AIデバイス',
  description: '液晶ディスプレイとスピーカーを搭載した革新的な車載AIデバイス。AIが最適な旅行ルートを提案し、快適なドライブ体験を提供します。',
  openGraph: {
    title: '車載用旅行補助AIデバイス | Bloom Land Labo',
    description: '液晶ディスプレイとスピーカーを搭載した革新的な車載AIデバイス。',
    url: 'https://bloomlandlabo.netlify.app/product',
  },
}

export default function ProductPage() {
  return (
    <div className="pt-16">
      {/* TODO: プロダクト詳細ページのコンテンツを実装 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              車載用旅行補助AIデバイス
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              詳細なプロダクト情報をここに実装予定
            </p>
            <div className="bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl p-8 text-white">
              <div className="text-6xl mb-4">🚗</div>
              <p>プロダクト詳細コンテンツを作成中...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
