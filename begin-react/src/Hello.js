import React from "react";
// 5. props를 통해 컴포넌트에게 값 전달하기
// 6.조건부 렌더링

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
