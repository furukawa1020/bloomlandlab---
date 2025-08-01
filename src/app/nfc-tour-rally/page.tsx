import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFC Tour Rally',
  description: 'NFCタグを活用したデジタルバッジラリーシステム。観光地を巡りながらバッジを集め、特別な体験と特典を獲得できます。',
  openGraph: {
    title: 'NFC Tour Rally | Bloom Land Labo',
    description: 'NFCタグを活用したデジタルバッジラリーシステム。',
    url: 'https://bloomlandlabo.netlify.app/nfc-tour-rally',
  },
}

export default function NFCTourRallyPage() {
  return (
    <div className="pt-16">
      {/* TODO: NFC Tour Rally詳細ページのコンテンツを実装 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              NFC Tour Rally
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              NFCラリーサービスの詳細情報をここに実装予定
            </p>
            <div className="bg-gradient-to-br from-secondary-400 to-accent-400 rounded-xl p-8 text-white">
              <div className="text-6xl mb-4">📱</div>
              <p>NFC Tour Rally詳細コンテンツを作成中...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
