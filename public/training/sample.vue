<template>
    <div class="sample-tag">
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
    </div>
</template>
  
<script>
  export default {
    name: 'SampleTag',
    data () {
      // テンプレート内で保有するデータ
      return {
        title: "Vue Template File"
      }
    },
    props: {
      // 親要素から受け取るプロパティの定義
      msg: String
    },
    computed: {
      // 算出プロパティ(処理結果がキャッシュされ、入力値が変更されたときのみ再計算)
    },
    methods: {
      // メソッド(毎回呼び出す度に処理を実行)
    }
  }
</script>
<!--scopedでcssの適用範囲を限定的に-->
<style scoped>
    p {
      color: red;
    }
</style>