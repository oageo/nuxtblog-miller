---
title: Test3 title
description: Test3 description
date: 2021-05-06
author: Osumi Akari
license: ccbysa40
---

このページは三番目のテストページです。

[Test1](../test) / [Test2](../test2)

## YouTube動画埋め込み
millerytタグを用いてYouTubeの動画IDを以下のように指定すると、YouTubeの動画が埋め込まれます。埋め込む対象の動画のURLが`https://www.youtube.com/watch?=PR7Rua0qFp0`であった場合、「動画ID」は`PR7Rua0qFp0`の部分です。それ以外の部分を誤って入力すると問題が発生する可能性がありますのでご注意ください。

`loading="lazy"`属性が付与されているため、モダンなブラウザでは遅延読み込みが行われます。これによるパフォーマンスの改善が見込まれます。

``` html
<milleryt ytvid="PR7Rua0qFp0"></milleryt>
```

<milleryt ytvid="PR7Rua0qFp0"></milleryt>

## カテゴリ機能
Markdown上部に`category`を入力する場所がありますが、そこに`taxonomy.js`で設定したslugを入力することで、記事にカテゴリを設定することができます。`articles/_slug.vue`で表示される各記事に表示される他、そこからのリンクで同じカテゴリに属する他の記事を閲覧できる上、[カテゴリ一覧ページ](/allcategory)から全てのカテゴリを閲覧することも可能です。