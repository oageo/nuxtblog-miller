# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 重要: ユーザーからの指示
* このプロジェクトは日本語が母語の日本人によって開発されています。可能な限り日本語で回答してください。
* ただし、技術的な用語は無理に翻訳を行わずとも問題ありません。

## Development Commands

This is an 11ty (Eleventy) blog application using pnpm as the package manager:

- `pnpm dev` - Start development server with `eleventy --serve` (http://localhost:8080)
- `pnpm build` - Build static site with `eleventy`  
- `pnpm generate` - Same as build, generates static site to `_site/` folder
- `pnpm start` - Start development server (same as dev)
- `pnpm lint` - Run ESLint on .js and .njk files
- `pnpm lintfix` - Auto-fix ESLint issues

## Architecture Overview

### Core Framework
- **11ty (Eleventy)** static site generator with Nunjucks templating
- **Bulma CSS** for styling (via node_modules passthrough copy)
- **Markdown-it** with MathJax3 plugin for content processing
- **Luxon** for date formatting

### Content System
- Blog articles stored in `src/articles/` as markdown files
- Articles support frontmatter with title, description, date, author, category, license fields
- Categories defined in `src/_data/taxonomy.js` and accessed via Eleventy data cascade
- Content rendering supports math equations (MathJax) and external links
- Custom collections for article sorting and category grouping

### Directory Structure
- `src/` - Source files (input directory)
- `src/_includes/` - Nunjucks templates (layouts and components)
- `src/_data/` - Global data files including taxonomy
- `src/articles/` - Markdown blog articles
- `src/assets/` - Static assets and JavaScript components
- `_site/` - Generated output directory

### Templates and Components
- `src/_includes/base.njk` - Main layout template
- `src/_includes/navigation.njk` - Top navigation
- `src/_includes/footer.njk` - Site footer  
- `src/_includes/license.njk` - License display
- `src/assets/milleryt-component.js` - YouTube embed Web Component
- `src/index.njk` - Homepage template
- `src/category.njk` - Category listing template with pagination

### Key Configuration (.eleventy.js)
- Markdown-it with MathJax3 for math equation rendering
- Custom filters for date formatting (Japanese locale) and navigation
- Collections for articles and category-based grouping
- Passthrough copy for assets, Bulma CSS, and MathJax
- Transform to convert `<milleryt>` tags to Web Component format

### Content Management  
- Categories defined in `src/_data/taxonomy.js` with text/slug pairs
- Article collections auto-sorted by date (descending)
- Previous/next navigation between articles
- Category-based article filtering and pagination
- File modification timestamps for last-updated dates

## Important Notes
- This project has been **migrated from Nuxt 2 to 11ty (Eleventy)**
- Primary deployment method is static generation (`pnpm generate`) to `_site/` folder
- Uses pnpm for package management - ensure pnpm commands are used consistently
- Dark theme styling throughout with Bulma CSS classes
- Development server runs on http://localhost:8080 (not 3000 like Nuxt)
- Web Components are used instead of Vue components (e.g., `<miller-yt>`)
- Nunjucks templating instead of Vue template syntax