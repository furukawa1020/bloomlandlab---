# Bloom Land Labo 公式サイト - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## プロジェクト概要

**Bloom Land Labo**は「潤いある国土を育むテクノロジー・カンパニー」として、地方創生事業を展開する企業の公式サイトです。

### 重要なルール

1. **用語規則**:
   - ✅ 「地方創生テクノロジー」「持続可能な地域循環モデル」
   - ❌ 「ソーシャルビジネス」「社会的課題解決」という語は使用禁止

2. **カラーパレット**:
   - Primary: `#3FB5AC` (湧水ターコイズ)
   - Secondary: `#A3D977` (若葉グリーン)  
   - Accent: `#F1C27D` (暖色アクセント)

3. **アニメーション方針**:
   - 水面リップル、ブリージングエフェクトを活用
   - `framer-motion`でスムーズな演出

## 技術スタック

- **Framework**: Next.js 14 (App Router, SSG)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + カスタムアニメーション
- **Forms**: Netlify Forms (`<form netlify>`)
- **Share**: react-share
- **Animation**: Framer Motion
- **Deployment**: Netlify

## コード生成ガイドライン

### コンポーネント作成
- すべて関数型コンポーネント（React Hooks使用）
- TypeScript型定義を適切に設定
- responsive design必須（mobile-first）
- accessibility対応（aria-label等）

### スタイリング
- Tailwind CSSクラスを優先使用
- カスタムアニメーションは`tailwind.config.js`で定義
- 色はカラーパレットから選択

### SEO対策
- 各ページで`metadata`エクスポート必須
- JSON-LD構造化データを含める
- OpenGraph、Twitter Card対応

### フォーム
- Netlify Forms使用: `<form netlify>`
- honeypotフィールド追加でスパム対策
- バリデーションとエラーハンドリング実装

### アニメーション
- `framer-motion`の`motion`コンポーネント使用
- `useInView`でスクロール連動アニメーション
- パフォーマンスを考慮した最適化

## ファイル構造

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── common/            # Header, Footer, Layout等
│   ├── home/              # ホーム専用コンポーネント
│   ├── forms/             # フォーム関連
│   └── ui/                # 再利用可能UI
├── lib/                   # ユーティリティ・設定
├── data/                  # 静的データ
└── types/                 # TypeScript型定義
```

## 命名規則

- コンポーネント: PascalCase (例: `HeroSection`)
- ファイル名: PascalCase (例: `HeroSection.tsx`)
- 関数・変数: camelCase
- 定数: UPPER_SNAKE_CASE
- CSS class: kebab-case（Tailwind標準）

## パフォーマンス要件

- Lighthouse スコア 90+ 目標
- Core Web Vitals最適化
- 画像最適化（next/image使用）
- 遅延ロード適用

## 多言語対応（将来対応）

- 日本語がメイン、英語併記の可能性
- i18n対応準備（コメントで記載）

---

このプロジェクトは企業サイトとして「普通に揃っている」と評価される機能網羅を目指しています。
