import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ページが見つかりません - 404',
  description: 'お探しのページは見つかりませんでした。',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-green-50">
      <div className="text-center px-4 max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 mb-8">
            お探しのページは削除されたか、URL が変更された可能性があります。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            ホームに戻る
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>または、以下のページをご確認ください：</p>
            <div className="mt-2 space-x-4">
              <Link href="/product" className="text-primary hover:underline">
                プロダクト
              </Link>
              <Link href="/nfc-tour-rally" className="text-primary hover:underline">
                NFCツアーラリー
              </Link>
              <Link href="/contact" className="text-primary hover:underline">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
