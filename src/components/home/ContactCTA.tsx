'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon 
} from 'react-share'

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copiedUrl, setCopiedUrl] = useState(false)

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://bloomlandlabo.netlify.app/'
  const shareTitle = 'Bloom Land Labo | 潤いある国土を育むテクノロジー・カンパニー'
  const shareDescription = '車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進。持続可能な地域循環モデルを全国展開。'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopiedUrl(true)
      setTimeout(() => setCopiedUrl(false), 2000)
    } catch (err) {
      console.error('URLのコピーに失敗しました:', err)
    }
  }

  const contactMethods = [
    {
      title: '事業提携・投資に関するお問い合わせ',
      description: 'パートナーシップや投資機会についてご相談ください',
      icon: '🤝',
      color: 'from-primary-400 to-secondary-400',
      cta: 'パートナーシップ相談',
      href: '/contact?type=partnership'
    },
    {
      title: 'プロダクト導入のご相談',
      description: '車載AIデバイスやNFC Tour Rallyの導入をご検討の方',
      icon: '🚗',
      color: 'from-secondary-400 to-accent-400',
      cta: '導入相談',
      href: '/contact?type=product'
    },
    {
      title: '採用・キャリアに関するお問い合わせ',
      description: '一緒に地方創生の未来を創る仲間を募集しています',
      icon: '👥',
      color: 'from-accent-400 to-primary-400',
      cta: '採用情報',
      href: '/careers'
    }
  ]

  return (
    <section id="contact-cta" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインCTA */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="block">一緒に未来を創りませんか？</span>
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              お気軽にお問い合わせください
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-10">
            潤いある国土の実現に向けて、技術パートナー、投資家、自治体、
            <br className="hidden sm:block" />
            大学関係者など、様々な方々との連携をお待ちしています。
          </p>

          {/* シェアボタン */}
          <motion.div 
            className="flex justify-center items-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gray-400 text-sm">シェア:</span>
            
            <TwitterShareButton url={currentUrl} title={shareTitle}>
              <TwitterIcon size={32} round className="hover:scale-110 transition-transform" />
            </TwitterShareButton>
            
            <FacebookShareButton url={currentUrl} quote={shareDescription}>
              <FacebookIcon size={32} round className="hover:scale-110 transition-transform" />
            </FacebookShareButton>
            
            <LinkedinShareButton url={currentUrl} title={shareTitle} summary={shareDescription}>
              <LinkedinIcon size={32} round className="hover:scale-110 transition-transform" />
            </LinkedinShareButton>
            
            <button
              onClick={copyToClipboard}
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors hover:scale-110"
              title="URLをコピー"
            >
              {copiedUrl ? (
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </motion.div>
        </motion.div>

        {/* お問い合わせ方法 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="bg-gray-800 rounded-2xl p-8 h-full border border-gray-700 group-hover:border-gray-600 transition-colors">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{method.description}</p>
                <Link 
                  href={method.href}
                  className={`inline-block bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow`}
                >
                  {method.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 直接連絡先情報 */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* 連絡先詳細 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">直接お問い合わせ</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">メール</p>
                  <p className="text-gray-300">info@bloomlandlabo.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">電話</p>
                  <p className="text-gray-300">TODO: 電話番号</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">所在地</p>
                  <p className="text-gray-300">TODO: 所在地住所</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                営業時間: 平日 9:00-18:00<br />
                ※土日祝日はお休みをいただいております
              </p>
            </div>
          </div>

          {/* 緊急度別お問い合わせ */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold mb-6">緊急度別お問い合わせ</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="font-medium text-red-300">緊急</span>
                </div>
                <p className="text-sm text-gray-300">システム障害・緊急時対応</p>
                <p className="text-sm text-red-300">24時間以内に対応</p>
              </div>
              
              <div className="p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="font-medium text-yellow-300">通常</span>
                </div>
                <p className="text-sm text-gray-300">一般的なお問い合わせ</p>
                <p className="text-sm text-yellow-300">3営業日以内に対応</p>
              </div>
              
              <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="font-medium text-green-300">情報提供</span>
                </div>
                <p className="text-sm text-gray-300">資料請求・情報提供</p>
                <p className="text-sm text-green-300">1週間以内に対応</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 最終CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-primary-400 to-secondary-400 text-white px-8 py-4 rounded-lg font-medium text-lg hover:shadow-lg transition-shadow"
          >
            お問い合わせフォームへ
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
