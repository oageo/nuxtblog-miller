# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 重要: ユーザーからの指示
* このプロジェクトは日本語が母語の日本人によって開発されています。可能な限り日本語で回答してください。
* ただし、技術的な用語は無理に翻訳を行わずとも問題ありません。

## Development Commands

This is a Nuxt 2 blog application using pnpm as the package manager:

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site (main deployment method)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint on .js and .vue files
- `pnpm lintfix` - Auto-fix ESLint issues

## Architecture Overview

### Core Framework
- **Nuxt 2** (static site generation mode) with Vue.js
- **Bulma CSS** for styling
- **@nuxt/content** for markdown-based blog content
- **Vuex store** for state management

### Content System
- Blog articles stored in `content/articles/` as markdown files
- Articles support frontmatter with title, description, date, author, category, license fields
- Categories defined in `taxonomy.js` and managed through Vuex store
- Content rendering supports math equations (MathJax) and external links

### Page Structure
- `pages/index.vue` - Homepage listing recent articles (sorted by date, descending)
- `pages/articles/_slug.vue` - Dynamic article pages with navigation between articles
- `pages/category/_slug.vue` - Category listing pages
- `pages/allcategory.vue` - All categories overview

### Components
- `millermenu.vue` - Top navigation bar
- `millerfooter.vue` - Site footer
- `millerlicense.vue` - License display component
- `milleryt.vue` - YouTube embed component

### Key Configuration
- Static site generation configured in `nuxt.config.js`
- Image optimization enabled via `@aceforth/nuxt-optimized-images`
- PWA support configured but icons disabled
- CSS extraction enabled for production builds
- Japanese language default (`lang: 'ja'`)

### Content Management
- Categories managed centrally in `taxonomy.js`
- Store (`store/index.js`) provides getters for category lookups
- Article metadata includes creation/update timestamps
- Support for article series navigation (prev/next)

## Important Notes
- This project uses the legacy Nuxt 2 framework (no longer supported)
- Primary deployment method is static generation (`pnpm generate`) to `dist/` folder
- Uses pnpm for package management - ensure pnpm commands are used consistently
- Dark theme styling throughout with Bulma CSS classes