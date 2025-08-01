'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: '潤いある国土を育む',
      subtitle: 'テクノロジー・カンパニー',
      description: '車載用旅行補助AIデバイスとNFC Tour Rallyで地方創生を推進し、持続可能な地域循環モデルを全国展開。',
      cta: 'プロダクトを見る',
      href: '/product'
    },
    {
      title: 'NFC Tour Rally',
      subtitle: '観光体験を革新する',
      description: 'NFCタグを活用したバッジラリーで、観光地に新たな楽しみと価値を創造します。',
      cta: 'サービス詳細',
      href: '/nfc-tour-rally'
    },
    {
      title: 'しらみね大学村',
      subtitle: '地方大学生ネットワーク',
      description: '地方大学生が主体となった持続可能な地域活性化プロジェクトを全国に展開。',
      cta: 'プロジェクト詳細',
      href: '/projects'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* 背景リップルエフェクト */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/20 rounded-full animate-ripple"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary-400/15 rounded-full animate-ripple animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-accent-400/25 rounded-full animate-ripple animation-delay-2000"></div>
      </div>

      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3FB5AC" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* メインタイトル */}
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block">{slides[currentSlide].title}</span>
              <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                {slides[currentSlide].subtitle}
              </span>
            </motion.h1>
            
            <motion.p 
              className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>

          {/* CTA ボタン */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href={slides[currentSlide].href}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-400 to-secondary-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              <span className="relative z-10">{slides[currentSlide].cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              お問い合わせ
            </Link>
          </motion.div>

          {/* スライドインジケーター */}
          <div className="flex justify-center space-x-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-400 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`スライド ${index + 1}に移動`}
              />
            ))}
          </div>
        </motion.div>

        {/* スクロール促進アイコン */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
