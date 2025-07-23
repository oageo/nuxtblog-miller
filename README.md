# nuxtblog-miller
![GitHub](https://img.shields.io/github/license/oageo/nuxtblog-miller)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/oageo/nuxtblog-miller)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/oageo/nuxtblog-miller)

Simple blog made with 11ty (Eleventy) & bulma

> [!NOTE]
> このプロジェクトはNuxt2から11ty（Eleventy）に移行されました。モダンな静的サイトジェネレーターを使用しています。

## Build Setup

### 事前準備
1. インターネット環境
2. [Git](https://git-scm.com/)
3. [Node.js](https://nodejs.org/) (v16以上推奨)
4. [pnpm](https://pnpm.io/ja/) (推奨パッケージマネージャー)

### コマンドを実行
```bash
git clone https://github.com/oageo/nuxtblog-miller.git
cd nuxtblog-miller
pnpm install
pnpm generate
```

> **Note**: Windows環境で`pnpm`コマンドが動作しない場合は、以下の代替コマンドを使用してください：
> ```bash
> npx @11ty/eleventy        # ビルド
> npx @11ty/eleventy --serve # 開発サーバー
> ```

`_site` フォルダが生成されたことを確認

### 開発環境での実行
```bash
pnpm dev
# または
npx @11ty/eleventy --serve
```

ローカルサーバーが http://localhost:8080 で開始されます

## Migration from Nuxt2 to 11ty

このプロジェクトはNuxt2から11ty（Eleventy）に移行されています。既存のNuxt2プロジェクトから11ty版に移行する場合は以下の手順を実行してください。

### 1. 依存関係の移行

#### package.jsonの更新
既存のNuxt2関連の依存関係を削除し、11ty関連の依存関係に置き換えます：

```bash
# 古いNuxt2依存関係を削除
pnpm remove nuxt @nuxt/content @nuxtjs/axios @nuxtjs/pwa

# 11ty関連依存関係をインストール
pnpm add @11ty/eleventy bulma luxon markdown-it markdown-it-mathjax3 mathjax
```

#### package.jsonスクリプトの更新
```json
{
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy",
    "start": "eleventy --serve",
    "generate": "eleventy",
    "lint:js": "eslint --ext \".js,.njk\" --ignore-path .gitignore .",
    "lint": "pnpm lint:js",
    "lintfix": "pnpm lint:js --fix"
  }
}
```

### 2. プロジェクト構造の移行

#### ディレクトリ構造の変更
```
# 移行前（Nuxt2）
layouts/ → src/_includes/
components/ → src/_includes/
pages/ → src/
content/articles/ → src/articles/
static/ → src/assets/

# 移行後（11ty）
src/_includes/     # レイアウトとコンポーネント
src/articles/      # マークダウン記事
src/assets/        # 静的ファイル
_site/            # ビルド出力（.gitignoreに追加）
```

#### ファイルの移行作業
1. **レイアウトファイル**：
   - `layouts/default.vue` → `src/_includes/base.njk`
   - Vue.js テンプレート記法からNunjucks記法に変換

2. **コンポーネント**：
   - `components/*.vue` → `src/_includes/*.njk`
   - `components/milleryt.vue` → `src/assets/milleryt-component.js`（WebComponent化）

3. **ページファイル**：
   - `pages/*.vue` → `src/*.njk`
   - Vue.js記法からNunjucks記法に変換

4. **記事ファイル**：
   - `content/articles/*.md` → `src/articles/*.md`
   - frontmatterは基本的にそのまま使用可能

`git mv`などを活用することで、Gitログの肥大を軽減することが可能です。

### 3. 設定ファイルの移行

#### nuxt.config.js → .eleventy.js
Nuxt2の設定を11tyの設定に変換：

```javascript
// .eleventy.js の作成
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItMathjax = require("markdown-it-mathjax3");

module.exports = function(eleventyConfig) {
  // Markdown設定
  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  });
  md.use(markdownItMathjax, {});
  eleventyConfig.setLibrary("md", md);

  // 静的ファイルのコピー
  eleventyConfig.addPassthroughCopy({"node_modules/bulma/css/bulma.min.css": "css/bulma.min.css"});
  eleventyConfig.addPassthroughCopy({"node_modules/mathjax": "mathjax"});
  eleventyConfig.addPassthroughCopy("src/assets");

  // 日付フィルター
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy年MM月dd日');
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
```

### 4. .gitignoreの更新

```gitignore
# 11ty build output
_site
```

### 5. WebComponentの作成

`milleryt.vue`をWebComponentに変換：

```javascript
// src/assets/milleryt-component.js
class MillerYT extends HTMLElement {
  connectedCallback() {
    const ytvid = this.getAttribute('ytvid');
    if (ytvid) {
      this.render(ytvid);
    }
  }

  render(ytvid) {
    this.innerHTML = `
      <div class="lazy block is-centered videoyt milleryt">
        <iframe src="https://youtube.com/embed/${ytvid}" loading="lazy" title="YouTube video player">
          <div class="milleryterror">
            <p>milleryt.vue: something broken.</p>
          </div>
        </iframe>
      </div>
    `;
  }
}

customElements.define('milleryt', MillerYT);
```

### 6. 移行の検証

移行完了後、以下のポイントを確認：

1. **ビルドが正常に実行される**：`pnpm generate`
2. **デザインが維持されている**：レイアウト、色、フォントが同じ
3. **機能が正常動作する**：
   - 記事間ナビゲーション
   - カテゴリ表示
   - MathJax数式表示
   - milleryt WebComponent
   - ライセンス表示
4. **メタデータが正しく設定される**：OGタグ、title、description
5. **日付表示が正確**：作成日と更新日が適切に表示

### 7. 注意事項

- Vue.jsの動的機能は使用できなくなります（静的サイト生成のため）
- Nuxt2のプラグインやモジュールは11ty用に再実装が必要
- ルーティングは11tyの規則に従います（ファイルベース）
- 開発サーバーのポートが変更されます（デフォルト8080）

