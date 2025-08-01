'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const missionPoints = [
  {
    icon: '🌱',
    title: '持続可能な地域循環',
    description: 'テクノロジーを活用して地域資源を最大限に活かし、持続可能な循環型社会の実現を目指します。'
  },
  {
    icon: '🚗',
    title: '車載AIによる旅行革新',
    description: '液晶ディスプレイとスピーカーを搭載した車載用AIデバイスで、旅行体験を根本から変革します。'
  },
  {
    icon: '📱',
    title: 'NFC技術で観光DX',
    description: 'NFCタグを活用したバッジラリーシステムで、観光地に新たな価値と楽しさを提供します。'
  },
  {
    icon: '🎓',
    title: '地方大学生ネットワーク',
    description: 'しらみね大学村をはじめとした地方大学生が主体となるプロジェクトを全国に展開します。'
  }
]

const visionSteps = [
  {
    step: '01',
    title: '技術開発',
    subtitle: 'Technology',
    description: '車載AI・NFC技術の開発',
    color: 'primary'
  },
  {
    step: '02', 
    title: '地域実装',
    subtitle: 'Implementation',
    description: '地方での実証実験・導入',
    color: 'secondary'
  },
  {
    step: '03',
    title: '全国展開',
    subtitle: 'Expansion', 
    description: '持続可能モデルの拡大',
    color: 'accent'
  },
  {
    step: '04',
    title: '国土再興',
    subtitle: 'Renaissance',
    description: '潤いある国土の実現',
    color: 'primary'
  }
]

export default function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mission" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="block">潤いある国土を育む</span>
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              テクノロジー・ビジョン
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            地方創生テクノロジーを通じて、持続可能な地域循環モデルを構築し、
            <br className="hidden sm:block" />
            全国の地域に新たな活力と価値を創造します。
          </p>
        </motion.div>

        {/* ミッションポイント */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="mb-6 text-6xl group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ビジョンロードマップ */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">実現への道筋</h3>
            <p className="text-lg text-gray-600">4つのステップで国土再興を実現</p>
          </div>

          {/* デスクトップビュー：横並び */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* 接続線 */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 via-accent-400 to-primary-400 transform -translate-y-1/2 z-0"></div>
              
              <div className="relative z-10 grid grid-cols-4 gap-8">
                {visionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-${step.color}-400 to-${step.color}-500 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 mb-3">{step.subtitle}</p>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* モバイル・タブレットビュー：縦並び */}
          <div className="lg:hidden space-y-8">
            {visionSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${step.color}-400 to-${step.color}-500 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                  {step.step}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500 mb-1">{step.subtitle}</p>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 統計情報 */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 mb-2">2024</div>
            <div className="text-gray-700">創業年</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
            <div className="text-3xl font-bold text-secondary-600 mb-2">10+</div>
            <div className="text-gray-700">連携地域数</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl">
            <div className="text-3xl font-bold text-accent-600 mb-2">∞</div>
            <div className="text-gray-700">可能性</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
