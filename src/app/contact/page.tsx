import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'Bloom Land Laboへのお問い合わせはこちらから。プロダクト導入相談、パートナーシップ、採用情報など、お気軽にご連絡ください。',
  openGraph: {
    title: 'お問い合わせ | Bloom Land Labo',
    description: 'Bloom Land Laboへのお問い合わせはこちらから。',
    url: 'https://bloomlandlabo.netlify.app/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* ページヘッダー */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            お問い合わせ
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            プロダクト導入のご相談、パートナーシップ、採用情報など、
            <br className="hidden sm:block" />
            どのような内容でもお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* 連絡先情報・地図 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 連絡先情報 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">直接のお問い合わせ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">メール</h3>
                    <p className="text-gray-600">info@bloomlandlabo.com</p>
                    <p className="text-sm text-gray-500">24時間受付・3営業日以内に回答</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">電話</h3>
                    <p className="text-gray-600">TODO: 電話番号</p>
                    <p className="text-sm text-gray-500">平日 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">所在地</h3>
                    <p className="text-gray-600">
                      〒TODO-0000<br />
                      TODO: 所在地住所
                    </p>
                    <p className="text-sm text-gray-500">最寄駅: TODO駅</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">営業時間</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>平日</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>土日祝日</span>
                    <span className="text-gray-500">お休み</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  ※緊急時は24時間メールで受け付けております
                </p>
              </div>
            </div>

            {/* 地図 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">アクセス</h2>
              
              {/* TODO: Google Maps埋め込み（API Key設定後） */}
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p>Google Maps</p>
                  <p className="text-sm">（API Key設定後に表示）</p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">交通アクセス</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• TODO駅から徒歩X分</li>
                  <li>• TODO高速道路XXICから車でX分</li>
                  <li>• 駐車場: X台完備（無料）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">よくあるご質問</h2>
            <p className="text-gray-600">お問い合わせ前にこちらもご確認ください</p>
          </div>

          <div className="space-y-6">
            {/* TODO: FAQ アコーディオンコンポーネントを実装 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Q. 導入費用はどれくらいかかりますか？</h3>
              <p className="text-gray-600">A. プロダクトや導入規模により異なります。詳細はお問い合わせください。</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Q. 地方自治体での導入実績はありますか？</h3>
              <p className="text-gray-600">A. 複数の自治体で実証実験を実施しており、本格導入も検討いただいています。</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Q. 技術サポートは提供されますか？</h3>
              <p className="text-gray-600">A. 導入から運用まで、専任チームが包括的にサポートいたします。</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/faq"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              すべてのFAQを見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
