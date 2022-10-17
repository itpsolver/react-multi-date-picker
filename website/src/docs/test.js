import React from "react";
import DatePicker from "../../../build/index";

export default function Doc({ otherProps, localeImport }) {
  const description = {
    title: "프로젝트 요건",
    description: `
      1. datepicker 2개를 사용한 date range 처리<br>
      1-1. PC 에서는 좌우로 나열 (레이어 팝업)<br>
      1-2. 모바일에서는 상하로 반응형 나열 (inline)<br><br>

      2. 다국어 (한/영/중/베)<br><br>

      3. 퍼블 디자인에 맞춘 디자인 커스텀.<br><br>

      4. input이 아닌 별도 핸들러로 호출
    `,
  };

  const custom = {
    title: "Custom Arrow",
    description: "custom_arrow",
    code: `${localeImport}<DatePicker
  arrow={<div style={{ backgroundColor: "white" }}>arrow</div>}
/>`,
    jsx: <DatePicker {...otherProps} />,
  };

  return [description, custom];
}
