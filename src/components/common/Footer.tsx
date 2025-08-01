import Link from 'next/link'

const footerNavigation = {
  main: [
    { name: 'ホーム', href: '/' },
    { name: 'プロダクト', href: '/product' },
    { name: 'NFC Tour Rally', href: '/nfc-tour-rally' },
    { name: 'プロジェクト', href: '/projects' },
    { name: 'ニュース', href: '/news' },
    { name: 'ブログ', href: '/blog' },
  ],
  company: [
    { name: '企業情報', href: '/about' },
    { name: '採用情報', href: '/careers' },
    { name: 'お問い合わせ', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'プライバシーポリシー', href: '/legal/privacy' },
    { name: '利用規約', href: '/legal/terms' },
    { name: 'Cookieポリシー', href: '/legal/cookies' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/bloomlandlabo',
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/bloomlandlabo',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/bloomlandlabo',
      icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        フッター
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* 会社情報 */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                <span className="text-white font-bold">BL</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Bloom Land Labo
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              潤いある国土を育むテクノロジー・カンパニー。
              <br />
              車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進し、
              持続可能な地域循環モデルを全国展開しています。
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ナビゲーションリンク */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">サービス</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">企業情報</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">法的情報</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* お問い合わせ情報 */}
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">お問い合わせ</h3>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-gray-300">
                  <span className="block">〒TODO-0000</span>
                  <span className="block">TODO: 所在地住所</span>
                </p>
                <p className="text-sm text-gray-300">
                  TEL: TODO-電話番号<br />
                  Email: info@bloomlandlabo.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">営業時間</h3>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-gray-300">
                  平日 9:00-18:00<br />
                  土日祝日はお休みをいただいております
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Bloom Land Labo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
