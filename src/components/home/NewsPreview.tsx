'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

// TODO: 実際のニュースデータは外部API or CMSから取得
const newsData = [
  {
    id: 1,
    category: 'プレスリリース',
    title: 'Bloom Land Labo設立のお知らせ',
    excerpt: '潤いある国土を育むテクノロジー・カンパニーとして、地方創生事業を開始いたします。',
    date: '2024-08-01',
    image: '🌱',
    color: 'from-primary-400 to-secondary-400'
  },
  {
    id: 2,
    category: 'プロダクト',
    title: '車載用旅行補助AIデバイス開発開始',
    excerpt: '液晶ディスプレイとスピーカーを搭載した革新的な車載デバイスの開発を発表。',
    date: '2024-07-15',
    image: '🚗',
    color: 'from-secondary-400 to-accent-400'
  },
  {
    id: 3,
    category: 'パートナーシップ',
    title: 'しらみね大学村プロジェクト始動',
    excerpt: '地方大学生ネットワークを活用した地域活性化プロジェクトを開始いたします。',
    date: '2024-07-01',
    image: '🎓',
    color: 'from-accent-400 to-primary-400'
  }
]

const categories = ['すべて', 'プレスリリース', 'プロダクト', 'パートナーシップ', '技術情報', 'イベント']

export default function NewsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
  }

  return (
    <section id="news" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              ニュース
            </span>
            <span className="block mt-2">最新情報をお届け</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Bloom Land Laboの最新の取り組み、プロダクト開発状況、
            <br className="hidden sm:block" />
            パートナーシップ情報などをお知らせします。
          </p>
        </motion.div>

        {/* ニュース記事一覧 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {newsData.map((news, index) => (
            <motion.article
              key={news.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* 記事画像・アイコン */}
              <div className={`h-48 bg-gradient-to-br ${news.color} flex items-center justify-center text-6xl text-white relative overflow-hidden`}>
                {news.image}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* カテゴリバッジ */}
                <div className="absolute top-4 left-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {news.category}
                </div>
                
                {/* 日付 */}
                <div className="absolute bottom-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm">
                  {formatDate(news.date)}
                </div>
              </div>

              {/* 記事内容 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/news/${news.id}`}
                    className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors flex items-center"
                  >
                    続きを読む
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* カテゴリフィルター（プレビュー用） */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-primary-400 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Newsletter購読CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">最新情報をお見逃しなく</h3>
          <p className="mb-6 opacity-90">
            Bloom Land Laboの最新ニュース、プロダクト情報、イベント案内を
            <br className="hidden sm:block" />
            いち早くお届けします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
              購読する
            </button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            ※配信停止はいつでも可能です
          </p>
        </motion.div>

        {/* 全ニュース表示リンク */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            href="/news"
            className="inline-flex items-center px-8 py-3 border-2 border-primary-400 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
          >
            すべてのニュースを見る
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
