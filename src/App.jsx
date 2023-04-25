import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// アロー関数でコンポーネントを作成している。index.htmlに入れ込む一番大枠の部分。
const App = () => {
  // レンダリングのルート各員のためにコンソールログを置いたもの。
  console.log("さいしょ");
  // state（コンポーネントの状態）を使うとき。上にもimport忘れない。
  // useStateの中から配列の分割代入で、実際に使う関数を取り出す。
  // 動的に変わるnumとそれを更新するsetNumと名付けた。（１つ目にステートの変数名、２つ目にステートを更新していく関数名）
  // useState()の中にstateの初期値を設定することができる。
  const [num, setNum] = useState(0);

  // 顔文字をオンオフにする関数を定義。上と同じように動的に変わる部分、更新する部分、初期値
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // Stateを更新するsetNumの中身（メソッド（関数））を定義していく。後でボタンに入れ込む。
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // 顔文字をオンオフするための関数を定義
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag); //!で逆にするという意味
  };

  // レンダリングの通り道にこのif文があると、オンオフスイッチが使えなくなるので、
  // useEffectで関心の分岐を行う。第２引数に[]空の配列を置くと、最初だけ通過して、レンダリングしても通らなくなる。
  //今回は配列の中にnumを入れることによってnumに関してだけ関心を持つ関数になる。
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true); // ||でfalseの場合の論理演算子
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  // ３の倍数のときに顔文字を出力するif文。
  // この書き方じゃtoo many rendersとなってループが終わらなくなってしまう。
  // if (num % 3 === 0){
  //   setFaceShowFlag(true);
  // } else{
  //   setFaceShowFlag(false);
  // }

  // でかコンポーネントを作成
  return (
    <>
      {/* 外側の{}はJavaScriptかくよ。内側の{}はオブジェクトを書くよ 。文字列にするのを忘れずに*/}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* コンポーネントにpropsを指定して使っている。今回はタグで囲ってchildrenで表示させる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      　　　　
      {/* 上で定義した、アラートを鳴らすメソッドをもったボタンを作成している。 */}
      <button onClick={onClickCountUp}>カウントアップ</button>　 　
      <br />
      <button onClick={onClickSwitchShowFlag}> on/off </button>
      <br />
      <p>{num}</p>
      {/* サイレンダリング。ユーズエフェクトを当てはめる顔文字 */}
      {/* faceshowflagたtrueの時に顔文字が出るという、論理演算子 */}
      {faceShowFlag && <p>٩( ᐛ )و</p>}
    </>
  );
};

// 他のファイルでも使えるようにエクスポート
export default App;
