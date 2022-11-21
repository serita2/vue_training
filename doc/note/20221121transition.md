## トランジションコンポーネントとは
 - 簡単にアニメーションできる機能
 (トランジション→徐々に変化する　ぬるっと、すーっと画面切り替え)
書式）<transition name="名前"←cssの接頭辞になる　例えばname属性をbasicとした場合、クラス名は`v-をbasic-に置き換える
　　　子のコンポーネント
　　　</transition>
※順次CSSクラスが適用される
実際に付与されるクラス（CSS）によって動きを制御したい要素には、v-showまたはv-ifディレクティブで表示・非表示する挙動を実装する必要がある。
表示：v-enter-from 表示前
　　　v-enter-active 変化中
　　　v-enter-to 変化後
非表示：v-leave-from
　　　　v-leave-active
　　　　v-leave-to
→それぞれのCSSクラスに値を指定して動きをつける
☆cssを書く場所は子のコンポーネントではなく、トランジションを使っている側のコンポーネント
例：.v-enter-from, .v-leave-to{
    opacity: 0; ←透明度
}
変化前と変化後に透明にして何も見せないようにしたい(css適用時だけ表示？)
　　.v-enter-active, .v-leave-active{
    transition: opacity 5s; ←transitionは徐々にという感じの意味合いで5秒にわたって、だんだん見えるようにしていくということ
}

 - カスタムトランジションクラス
 Animation.cssのような既存のcssアニメーションライブラリを組み合わせたいときに便利
  - enter-class
  - enter-active-class
  - enter-to-class
  - leave-class
  - leave-active-class
  - leave-to-class
  これらを使うことでクラス名の上書きが可能

 - 明示的なトランジション期間の設定
 <transition>コンポーネントが持つ、durationプロパティを利用することで指定が可能
 例：<transition :duration="1000">...</transition>
 
 - appear属性
 初期描画時にトランジションで表示するとき
 例：<transition appear>　</transition>
 
 - トランジションモード
 同時にenteringとleaveingが行われることは必ずしも望ましくない→トランジションモード
  - in-out
  - out-in
  例：<transition name="fade" mode="out-in">
  　　<!-- ... the buttons ... -->
　　　</transition>

 - コンポーネント間のトランジション
 動的コンポーネントでラップするだけ。key必要なし。

 - リストトランジション(v-forを使うとき)
 <transition-group>コンポーネントを使う
  - 実際に描画(表示される)もののデフォルトは<span>なのでその他の要素で描画したい場合は、
  tag属性で指定する。
  - key属性が必須。
  例：<transition-group name="flip-list" tag="ul">
    <li v-for="item in items" v-bind:key="item">
      {{ item }}
    </li>
    </transition-group>

 - リスト移動トランジション
 v-moveクラスを使用し、トランジションのタイミングやイージングカーブを指定できる。
