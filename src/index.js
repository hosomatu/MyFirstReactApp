import React from "react";
import ReactDom from "react-dom";
// エクスポートされている他のファイルから使う。（コンポーネントされているものを使う。）
import App from "./App";

// index.htmlのルートのとこにこのファイル（コンポーネントたくさん）を入れ込むよ。
ReactDom.render(<App />, document.getElementById("root"));
