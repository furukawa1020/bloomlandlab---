'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const rallyFlowSteps = [
  {
    step: '01',
    title: 'アプリダウンロード',
    description: '専用アプリをダウンロードしてアカウント作成',
    icon: '📱'
  },
  {
    step: '02',
    title: 'NFCタグにタッチ',
    description: '観光スポットのNFCタグにスマホをかざす',
    icon: '📍'
  },
  {
    step: '03',
    title: 'バッジ獲得',
    description: 'デジタルバッジをコレクションに追加',
    icon: '🏆'
  },
  {
    step: '04',
    title: '特典GET',
    description: 'コンプリート特典や限定情報を受け取り',
    icon: '🎁'
  }
]

const sampleBadges = [
  { name: '歴史探訪', image: '🏛️', color: 'from-amber-400 to-orange-500' },
  { name: '自然散策', image: '🌸', color: 'from-green-400 to-emerald-500' },
  { name: 'グルメ発見', image: '🍜', color: 'from-red-400 to-pink-500' },
  { name: '文化体験', image: '🎭', color: 'from-purple-400 to-indigo-500' },
  { name: '絶景スポット', image: '🏔️', color: 'from-blue-400 to-cyan-500' },
  { name: '隠れ名所', image: '💎', color: 'from-gray-400 to-slate-500' }
]

export default function NFCRallyPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

  return (
    <section id="nfc-rally" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              NFC Tour Rally
            </span>
            <span className="block mt-2">観光体験を革新する</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            NFCタグを活用したデジタルバッジラリーシステム。
            <br className="hidden sm:block" />
            観光地を巡りながらバッジを集め、特別な体験と特典を獲得できます。
          </p>
        </motion.div>

        {/* 体験フロー */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">体験フロー</h3>
            <p className="text-gray-600">簡単4ステップで観光ラリーを楽しめます</p>
          </div>

          {/* デスクトップビュー */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* 接続線 */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 transform -translate-y-1/2 z-0"></div>
              
              <div className="relative z-10 grid grid-cols-4 gap-8">
                {rallyFlowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary-400 to-accent-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* モバイル・タブレットビュー */}
          <div className="lg:hidden space-y-6">
            {rallyFlowSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-secondary-50 to-accent-50 rounded-xl"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-400 to-accent-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="text-3xl">{step.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* バッジギャラリー */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">コレクションバッジ</h3>
            <p className="text-gray-600">観光スポットを巡って様々なバッジを集めよう</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sampleBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredBadge(index)}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-4xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {badge.image}
                </div>
                <div className="mt-3 text-center">
                  <p className="font-medium text-gray-900">{badge.name}</p>
                </div>
                
                {/* ホバーエフェクト */}
                {hoveredBadge === index && (
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 導入効果 */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
            <div className="text-3xl mb-4">📈</div>
            <div className="text-2xl font-bold text-secondary-600 mb-2">+40%</div>
            <div className="text-gray-700">観光地滞在時間増加</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl">
            <div className="text-3xl mb-4">👥</div>
            <div className="text-2xl font-bold text-accent-600 mb-2">+60%</div>
            <div className="text-gray-700">リピーター率向上</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
            <div className="text-3xl mb-4">💡</div>
            <div className="text-2xl font-bold text-primary-600 mb-2">+80%</div>
            <div className="text-gray-700">満足度向上</div>
          </div>
        </motion.div>

        {/* CTAセクション */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-secondary-400 to-accent-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">観光地にNFC Tour Rallyを導入しませんか？</h3>
            <p className="mb-6 opacity-90">デジタル技術で観光体験を革新し、地域の魅力を最大化します。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/nfc-tour-rally"
                className="bg-white text-secondary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                サービス詳細
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                導入相談
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
