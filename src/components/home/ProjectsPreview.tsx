'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const projects = [
  {
    title: 'しらみね大学村',
    subtitle: '地方大学生ネットワーク',
    description: '地方大学生が主体となって地域活性化に取り組むプロジェクト。持続可能な地域循環モデルの構築を通じて、若者の力で地方に新たな活力をもたらします。',
    image: '🎓',
    color: 'from-primary-400 to-secondary-400',
    stats: [
      { label: '参加大学', value: '12校' },
      { label: '学生参加者', value: '200+名' },
      { label: '連携地域', value: '8地域' }
    ]
  },
  {
    title: '地域循環モデル',
    subtitle: '持続可能な地域経済',
    description: 'テクノロジーを活用した地域資源の最適化により、持続可能な地域循環経済の実現を目指します。地域の特色を活かした独自のエコシステムを構築。',
    image: '♻️',
    color: 'from-secondary-400 to-accent-400',
    stats: [
      { label: '実証地域', value: '5地域' },
      { label: '経済効果', value: '120%増' },
      { label: 'CO2削減', value: '30%減' }
    ]
  },
  {
    title: '全国展開ロードマップ',
    subtitle: '2030年ビジョン',
    description: '2030年までに全国47都道府県への展開を目指し、各地域の特性に合わせたカスタマイズされたソリューションを提供。国土全体の活性化を実現します。',
    image: '🗾',
    color: 'from-accent-400 to-primary-400',
    stats: [
      { label: '目標地域', value: '47都道府県' },
      { label: '展開予定', value: '2030年' },
      { label: '雇用創出', value: '5,000人' }
    ]
  }
]

export default function ProjectsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-secondary-50" ref={ref}>
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
              プロジェクト
            </span>
            <span className="block mt-2">地域を結ぶ、未来を創る</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            地方創生テクノロジーを通じて全国の地域に新たな価値を創造し、
            <br className="hidden sm:block" />
            持続可能な地域循環モデルの実現を目指しています。
          </p>
        </motion.div>

        {/* プロジェクト一覧 */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              {/* プロジェクト詳細 */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-lg text-gray-500 mb-4">{project.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                {/* 統計情報 */}
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="text-center p-4 bg-white rounded-lg shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 0.3 + (statIndex * 0.1) }}
                    >
                      <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* プロジェクト画像 */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  className={`relative bg-gradient-to-br ${project.color} rounded-2xl p-12 text-center shadow-xl`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-8xl mb-6">{project.image}</div>
                  <div className="text-white">
                    <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="opacity-90">{project.subtitle}</p>
                  </div>
                  
                  {/* 装飾的な要素 */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full animate-breathing"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/30 rounded-full animate-breathing animation-delay-1000"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 全体ビジョン */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2030年ビジョン</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              全国47都道府県に展開し、各地域の特性を活かした持続可能な地域循環モデルを構築。
              <br />
              テクノロジーの力で日本全体に「潤いある国土」を実現します。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">47</div>
                <div className="text-sm text-gray-600">都道府県展開</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-1">5,000</div>
                <div className="text-sm text-gray-600">雇用創出(人)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-1">100</div>
                <div className="text-sm text-gray-600">大学連携</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">∞</div>
                <div className="text-sm text-gray-600">可能性</div>
              </div>
            </div>

            <Link 
              href="/projects"
              className="inline-block bg-gradient-to-r from-secondary-400 to-accent-400 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              プロジェクト詳細を見る
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
