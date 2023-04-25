import React from "react";

const ColorfulMessage = (props) => {
  // コンポーネントの最初はconstを並べていく。（前提の関数的な）
  // color: props.color,やprops.childrenなどの書き方を分割代入で整えて書く。
  const { color, children } = props;
  const contentStyle = {
    color: color, //前のcolor:部分がなくても大丈夫（名前が同じだから）
    fontSize: "18px"
  };

  // 後の部分でreturn（実際のコンポーネント部分）を書いていく。
  // props.ChildrenでApp.jsvでタグで囲んだ部分を指すようになる。
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
