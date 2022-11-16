## フォーム入力バインディング(v-model)
input textarea select要素に双方向データバインディングを付与するためのもの
 - v-modelはform要素のvalueやchecked,selectedの初期値を無視する。
  初期値の宣言はコンポーネント内のdataオプション内で行う。
  簡単にゆうと
  →v-model=checed,selectedなどはそのチェックボックスにチェックが入ったり、
  ラジオボタンが押されたりしたときのvalueをリアクティブに指定の場所に表示できる。
  valueはv-bindで動的なものにもできる
　※valueが指定されていないときはtrue false
 - チェックボックス
  - true-value false-value属性があり、それぞれで表示を変えることができる。
  ※このときvalue属性には影響を与えない
  　2つの値のうちどちらかが必ず送信されたいときはラジオボタン
### 修飾子
 - .lazy
 - .number
 - .trim
それぞれ適宜調べる
