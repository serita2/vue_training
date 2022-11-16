## 条件付きレンダリング
 - v-if
 ブロックを条件に応じてレンダリングしたいときに使う
  - v-elseでelseの際のブロックも設定できる(v-if要素の直後でないと認識されない)
  - v-else-if 同上
 - 一度に多くの要素を切り替えたい場合
 <template>要素を使う
 例：<template v-if="ok">
　<h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
　</template>
結果に<template>要素は含まれない
 - v-show
 v-ifとほとんど同じ
 違いはv-showはCSSプロパティのdisplayを切り替える
 <template>やv-elseは使えない

使い分け：とても頻繁に何かを切り替える必要があれば v-show を選び、
　　　　　条件が実行時に変更することがほとんどない場合は、v-if を選ぶ

v-ifとv-forを一緒に使うことは推奨されていない

## v-forで配列に要素をマッピング
イメージはforeach
配列のインデックスも2つ目の引数としてとしてしよう可
例：v-for="(item, index) in items"
v-forで要素の更新をする際、一意的なkey属性を持たす必要がある
例：v-for="item in items" :key="item.id"
 - 2つ目の引数がkeyになる→連想配列のとき
 - 配列に対して変更を加えるメソッドも使える
  - push()
  - pop()
  - shift()
  - unshift()
  - splice()
  - sort()
  - reverse()
  これに関しては適宜調べる。
  変更を加える際に算出プロパティ、メソッドを使うことが可
### 範囲付きv-for
v-forは整数値を取ることも可能
例：v-for="n in 10" :key="n"
 - <tenplate>でもv-if同様に使用可
### v-forとv-if
v-forとv-ifが同じノードに存在するときv-ifが優先される
つまり、v-if の条件は、 v-for のスコープの変数にはアクセスできない
<template>を使うことで修正可



