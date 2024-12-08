// Reactを使うためにimport命令
import React from 'react';

type Props = {
  children: string;
};

// Buttonコンポーネント（中身は普通のJavaScript関数）
// { children }を受け取り
// 受け取る{ children }は
const Button2: React.FC<Props> = ({ children }: Props) => {
  // tsxファイルは返り値にHTMLのButtonタグを返す。
  // 受け取った引数{children}によってボタンに表示する文言が決定されます。
  // {children}はreactでよく使われる引数です。
  return <button>{children}</button>;
};

// export default は JavaScriptの基本です
export default Button2;
