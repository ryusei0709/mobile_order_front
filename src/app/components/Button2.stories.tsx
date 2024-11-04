// Reactを使うためにimport命令
import React from 'react';
import Button2 from './Button2';


// コンポーネントファイルを読み込む

export default {
  // ブラウザで表示するタイトル
  // titleは自由に変えられます。
  // titleを変えるとブラウザ画面上にエラーが出ます、その場合はtitleをもう一度クリックし直すと新しい設定値でコンポーネントを呼び出してくれエラーが直ります。
  title: "Button",

  // .storybook\main.jsの"stories"設定とマッチするファイルを探します。
  // Buttonの場合はButton.tsxファイルを探しています。
  component: Button2,

  // TypeScriptの型設定
  // ComponentMetaは コンポーネントのストーリーが、引数をプロップとして受け取る単純なコンポーネントで使用します。
};

// storyです
// このコンポーネントにいろんな引数を与えて
// 色んなパターンの表示を見ることができます。
// storyはそれぞれ独立しているので、このように中身が同じアロー関数を与えても大丈夫です。（通常は色々なパターンの引数を与えシミュレートします。）

export const Default1 = () => <Button2>Click me</Button2>;

export const Default2 = () => <Button2>Click me2</Button2>;

export const Default3 = () => <Button2>Click me3</Button2>;

