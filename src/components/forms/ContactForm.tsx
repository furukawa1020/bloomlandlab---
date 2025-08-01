'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
    honeypot: '' // スパム対策
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const inquiryTypes = [
    'プロダクト導入相談',
    'NFC Tour Rally導入相談', 
    'パートナーシップ',
    '投資・事業提携',
    '採用について',
    'その他'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // ハニーポットチェック
    if (formData.honeypot) {
      return // スパムの可能性
    }

    setIsSubmitting(true)

    try {
      // Netlify Formsにデータを送信
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        throw new Error('送信に失敗しました')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('送信に失敗しました。時間をおいて再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-6xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせありがとうございます</h3>
        <p className="text-gray-600 mb-6">
          内容を確認の上、3営業日以内にご連絡いたします。
          <br />
          緊急の場合は、お電話にてお問い合わせください。
        </p>
        <button 
          onClick={() => {
            setSubmitted(false)
            setFormData({
              name: '',
              email: '',
              company: '',
              phone: '',
              inquiryType: '',
              message: '',
              honeypot: ''
            })
          }}
          className="bg-primary-400 text-white px-6 py-3 rounded-lg hover:bg-primary-500 transition-colors"
        >
          新しいお問い合わせ
        </button>
      </motion.div>
    )
  }

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Netlify Forms用の隠しフィールド */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* ハニーポット（非表示） */}
      <div className="hidden">
        <label>
          Don't fill this out if you're human:
          <input 
            name="bot-field" 
            value={formData.honeypot}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            お名前 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="example@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            会社名・組織名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="株式会社サンプル"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="03-1234-5678"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
          お問い合わせ種別 *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">選択してください</option>
          {inquiryTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          お問い合わせ内容 *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="お問い合わせ内容を詳しくお聞かせください..."
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>プライバシーポリシー</strong><br />
          お預かりした個人情報は、お問い合わせへの回答のためにのみ使用し、
          第三者に提供することはありません。詳しくは
          <a href="/legal/privacy" className="text-primary-600 hover:text-primary-700">プライバシーポリシー</a>
          をご覧ください。
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary-400 to-secondary-400 text-white py-4 px-6 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
      </button>
    </form>
  )
}

export default ContactForm
