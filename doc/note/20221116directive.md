## vueの読み込み <head>に記述 グローバルビルド
 <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

## レンダリング
　{{　プロパティ(変数みたいなやつ)　}}
 JS側で　プロパティ: 値　のかたちで指定する
 →インスタンス内のdata()の中に記述
　Vue.createApp(インスタンス名).mount(要素の指定 例：'#app')

- v-bind
 →基本的にはタグ内にはレンダリングされない
　→v-bindを使うことでレンダリング可能

- v-on
 jqueryのイベントハンドラのようなもの
 →インスタンス内のmethods: の中に記述

- v-model
 双方向のバインディング
 →inputなどで入力した文字がそのままデータとしてリアクティブに変わる。

- v-if
 条件分岐する際にも使う
 data()の中に記述

- v-for
 ループの際に使う
 v-for="todo in todos"のように記述する(foreachみたい)

→ディレクティブはHTMLのタグの中に記述

- コンポーネント
 テンプレートとして繰り返し使用できる。
 中身を動的に変えたい場合はpropsを使う。
 Vueを使うメリットの一つ
