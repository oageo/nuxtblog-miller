const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItMathjax = require("markdown-it-mathjax3");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Markdown設定
  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  });
  md.use(markdownItMathjax);
  
  eleventyConfig.setLibrary("md", md);

  // 日付フィルター
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy年MM月dd日");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-MM-dd');
  });

  // ナビゲーション用フィルター
  eleventyConfig.addFilter("getPreviousCollectionItem", function(collection, page) {
    const currentIndex = collection.findIndex(item => item.url === page.url);
    return currentIndex > 0 ? collection[currentIndex - 1] : null;
  });

  eleventyConfig.addFilter("getNextCollectionItem", function(collection, page) {
    const currentIndex = collection.findIndex(item => item.url === page.url);
    return currentIndex < collection.length - 1 ? collection[currentIndex + 1] : null;
  });

  // ファイル更新日時を取得するフィルター
  eleventyConfig.addFilter("lastModified", function(inputPath) {
    try {
      const stats = fs.statSync(inputPath);
      return stats.mtime;
    } catch (e) {
      return new Date(); // フォールバック
    }
  });

  // 記事をソートするコレクション（日付降順）
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/articles/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // カテゴリ別記事のコレクション
  eleventyConfig.addCollection("articlesByCategory", function(collectionApi) {
    const articles = collectionApi.getFilteredByGlob("./src/articles/*.md");
    const categoryMap = {};
    
    articles.forEach(article => {
      if (article.data.category) {
        article.data.category.forEach(cat => {
          if (!categoryMap[cat]) {
            categoryMap[cat] = [];
          }
          categoryMap[cat].push(article);
        });
      }
    });
    
    // ページネーション用の配列に変換
    return Object.entries(categoryMap);
  });

  // 静的ファイルのコピー  
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({"node_modules/mathjax/es5": "mathjax"});
  eleventyConfig.addPassthroughCopy({"node_modules/bulma/css": "css"});
  
  // static フォルダの内容をルート直下にコピー（Nuxt2と同じ動作）
  eleventyConfig.addPassthroughCopy({"static/": "."});

  // millerytタグをmiller-ytに変換するトランスフォーム
  eleventyConfig.addTransform("milleryt-transform", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // <milleryt>を<miller-yt>に、</milleryt>を</miller-yt>に変換
      return content.replace(/<milleryt/g, '<miller-yt').replace(/<\/milleryt>/g, '</miller-yt>');
    }
    return content;
  });

  // Nunjucksテンプレートエンジンの設定
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};