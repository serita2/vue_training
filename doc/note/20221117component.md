## コンポーネント
再利用可能なインスタンスのことで、ヘッダーやサイドバー、コンテンツエリアなどのコンポーネントが存在する。
コンポーネント書き方
 - templateの中にhtmlを書く
例：app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})
 - 親子関係になったコンポーネント同士でお互いにデータの受け渡しや、イベントハンドリングでのやり取りを行う。
  →props emit
  - props 親から子に渡されるデータのこと(常時親の変更内容を子に伝え続ける。)
  - emit 子から親にイベントの伝達、データの受け渡しを行う。カスタムイベントと言う独自のイベントをつくり、親側のメソッドを実行する。
  イメージを掴むの大事。
 - propsでプロパティをHTML属性に渡すとき大文字小文字の違いを無視する
例：props: ['postTitle'],　<blog-post post-title="hello!"></blog-post>

 - slot
  親のコンポーネントから任意の場所だけをテンプレートとして挿入できる
 - is
  動的にコンポーネント自体を切り替える(v-ifでもできるが、is属性を使ったほうがスッキリする。)
イメージを掴むの大事！
### コンポーネント名
コンポーネントを登録する際は名前をつける
app.component()の第一引数がコンポーネント名になる。
例：app.component('my-component-name', {
 - 命名時の注意
  - すべて小文字
  - ハイフンを含める
これらは絶対ではないが推奨されている。(コンフリクト回避のため)
 - app.componentはグローバル登録
 あらゆるコンポーネントインスタンスのテンプレート内で使える
 - components: { 'component-a': ComponentA, コンポーネントオプションを使うのはローカル登録
 制限された範囲内でしか使えない
簡単にゆうと
グローバル登録はどのVueインスタンスでも使えるが、ローカル登録は特定のVueインスタンスでしか使えないようにしたもの

### プロパティの型
それぞれのプロパティに特定の型を指定したい場合、プロパティのキーと値ににそれぞれプロパティの名前と型が設定できる。
例：props: {
  　title: String,
  　likes: Number,
  　isPublished: Boolean,
  　commentIds: Array,
  　author: Object,
  　callback: Function,
  　contactsPromise: Promise 
　}

### 単方向データフロー
基本的に親から子ににプロパティは流される。親が変われば子も変わるがその逆はしてはいけない。

### プロパティの形式
HTML ケバブケース 例：post-title
JS(インスタンス内) 例：postTitle