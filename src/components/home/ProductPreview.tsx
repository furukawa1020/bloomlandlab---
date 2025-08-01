'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const productFeatures = [
  {
    title: '高精細液晶ディスプレイ',
    description: '7インチタッチスクリーンで直感的な操作を実現',
    icon: '📱'
  },
  {
    title: '高音質スピーカー',
    description: 'クリアな音声ガイダンスとBGM再生',
    icon: '🔊'
  },
  {
    title: 'AI音声アシスタント',
    description: '自然な対話で旅行プランを提案',
    icon: '🤖'
  },
  {
    title: 'リアルタイム情報',
    description: '交通情報・天気・イベント情報を配信',
    icon: '📡'
  }
]

const productSpecs = [
  { label: 'ディスプレイ', value: '7インチ IPS液晶タッチスクリーン' },
  { label: 'CPU', value: 'ARM Cortex-A72 クアッドコア' },
  { label: 'メモリ', value: '4GB RAM / 32GB ストレージ' },
  { label: '接続', value: 'Wi-Fi 6, Bluetooth 5.0, 4G LTE' },
  { label: '電源', value: 'シガーソケット給電対応' },
  { label: 'サイズ', value: '180 × 120 × 15mm' }
]

export default function ProductPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('features')

  return (
    <section id="product" className="py-24 bg-gradient-to-br from-gray-50 to-primary-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            車載用旅行補助
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              AIデバイス
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            液晶ディスプレイとスピーカーを搭載した革新的な車載デバイス。
            <br className="hidden sm:block" />
            AIが最適な旅行ルートを提案し、快適なドライブ体験を提供します。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 製品画像 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              {/* TODO: 実際の製品画像に置き換え */}
              <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <p className="text-lg font-medium">車載AIデバイス</p>
                  <p className="text-sm opacity-80">製品画像準備中</p>
                </div>
              </div>
              
              {/* 装飾的な要素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-breathing"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full opacity-30 animate-breathing animation-delay-1000"></div>
            </div>
          </motion.div>

          {/* 製品情報 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* タブナビゲーション */}
            <div className="flex space-x-4 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === 'features'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                主要機能
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-4 px-2 font-medium transition-colors ${
                  activeTab === 'specs'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                技術仕様
              </button>
            </div>

            {/* 機能一覧 */}
            {activeTab === 'features' && (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {productFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* 技術仕様 */}
            {activeTab === 'specs' && (
              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-4">
                  {productSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTAボタン */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/product"
                className="flex-1 bg-gradient-to-r from-primary-400 to-secondary-400 text-white text-center py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-shadow"
              >
                詳細を見る
              </Link>
              <Link 
                href="/contact"
                className="flex-1 border-2 border-primary-400 text-primary-600 text-center py-3 px-6 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
