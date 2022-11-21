## typeScript覚えおかなければないもの
 - 型
  - boolean
  - number
  - string
  例：let a: string = "a";
  　　let b: boolen = true;←代入する型が決まっているので省略可(let b: boolen = true;)
 - 関数定義
  - any
  - void
  例：function func(a, b) : number(なければvoid){
      return a;
  }

 - Array
　例：let aa: number[] = [10, 20]
 - Object
　例：interface hoge {
    a: number,
    b: number,
    .....
    }
　　→Objectだけインターフェイスでそれぞれ定義
    let v = (a: 10, b: 20)

 - undefined
 値が入ってくるかわからないとき？をつけることでundefinedを定義でき、エラーで返されなくなる
 例：interface hoge {
    a: number,
    b?: number,
    .....
    }
    let v = (a: 10)
 - nullable
 値がnullかもしれないとき | null とつけることで、nullもokになる
 例：interface hoge {
    a: number,
    b?: number | null,
    .....
    }
    let v = (a: 10, b: null)

## vue　+　TypeScript
 - vue-class-component
 TypeScriptでコンポーネントが書けるようになる
 - vue-property-decorator
 vue-class-componentを更に使いやすくしたもの
 propsなどをComponentデコレータの中に書いていく
 例：import { Prop } from 'vue-property-decorator';
    @Component
    class MyComponent extends Vue {
        @Prop({ type: String })
        hoge: string
    }