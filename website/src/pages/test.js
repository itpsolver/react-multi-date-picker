import React, { useState } from "react";
import DateObject from "react-date-object";
import { Calendar } from "../../../build/index";
import "./test.css";

export default function Ref({ pageContext }) {
  const language = pageContext.language || "en";

  const [open, setOpen] = useState(true);

  // const [val, setVal] = useState([new Date()); // 이렇게 하면 최초 클릭부가 endDate가 되어 사용성이 안좋아짐
  // const [val, setVal] = useState([new Date(), new Date()]);
  const [val, setVal] = useState(new DateObject()); // 이렇게 하면 최초 선택된 날짜가 없어서 사용성이 좋음
  console.log(`## val:[${val}]`);

  const [isMobile, setMobile] = useState(false);

  /**
   * datepicker 호출
   */
  const toggleOpen = () => {
    setOpen(!open);
  };

  /**
   * 모바일 전환
   */
  const toggleMobile = () => {
    setMobile(!isMobile);
  };

  return (
    <div id="wrap">
      <div id="desc-wrap">
        <h2>프로젝트 datepicker 요건</h2>
        <p>
          1. datepicker 2개를 사용한 date range 처리 (팝업이 아니라 특정
          레이어안에 포함되는 inline)
          <br />
          1-1. PC 에서는 좌우로 나열
          <br />
          1-2. 모바일에서는 상하로 반응형 나열
          <br />
          <br />
          2. 다국어 (한/영/중/베)
          <br />
          <br />
          3. 퍼블 디자인에 맞춘 디자인 커스텀.
          <br />
          <br />
          4. input이 아닌 별도 핸들러로 호출
          <br />
          4-1. 상위 엘리먼트 호출시 포함되어 나오는 것이기 때문에 상시노출이라고
          생각하면 될 듯.
        </p>
      </div>
      <hr />
      <div id="test-area">
        <button onClick={() => toggleOpen()}>달력 노출</button>
        <button onClick={() => toggleMobile()}>모바일 전환</button>
        <br />
        <br />

        {/* range picker는 DatePicker가 아니라 Calendar로 사용하는 듯 하다. */}
        {/* 팝업 형태로 뜨는 것을 DatePicker라 하는 것 같다. */}
        {/* <DatePicker /> */}

        <div
          style={{
            backgroundColor: "skyblue",
            padding: "10px",
            display: `${open ? "block" : "none"}`,
          }}
        >
          <Calendar
            className={`${isMobile && "rmdp-mobile"}`} // rmdp-mobile 클래스 유무가 Calendar 내부적으로 모바일 여부 플래그를 생성한다.
            value={val}
            onChange={setVal}
            range
            numberOfMonths={2}
            // disableYearPicker
            // disableMonthPicker
            // rangeHover // 속성은 있다고 하는데 작동하지 않음
            // showOtherDays // 날짜의 빈 칸을 전월/익월 날짜로 채우기
          />
        </div>
      </div>
    </div>
  );
}
