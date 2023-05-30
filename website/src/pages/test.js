import React, { useState } from "react";
import DateObject from "react-date-object";
import DatePicker, { Calendar } from "../../../build/index.js"; // 이걸 이런식으로 import 해야 HMR 을 사용할 수 있다.
import "./test.css";
import { useRef } from "react";

export default function Ref({ pageContext }) {
  const dpRef = useRef();

  // const [val, setVal] = useState(new DateObject()); // 이렇게 하면 최초 선택된 날짜가 없어서 사용성이 좋음
  // const [val, setVal] = useState([new Date()]); // 이렇게 하면 최초 클릭부가 endDate가 되어 사용성이 안좋아짐
  // const [val, setVal] = useState([new Date(), new Date()]);
  const [val, setVal] = useState(["2023-05-02", "2023-06-15"]);
  console.log(`## val:[${val}]`);

  const [isMobile, setMobile] = useState(false);
  const btnLabel = isMobile ? "PC모드로 전환" : "모바일모드로 전환";

  /**
   * 모바일 전환
   */
  const toggleMobile = () => {
    setMobile(!isMobile);
    dpRef.current?.openCalendar();
  };

  return (
    <div id="wrap">
      <div id="desc-wrap">
        <h2>DatePicker 테스트 페이지</h2>
      </div>
      <hr style={{ marginBottom: 30 }} />
      <div id="test-area">
        <button onClick={() => toggleMobile()}>{btnLabel}</button>
        <br />
        <br />

        <div>
          <DatePicker
            ref={dpRef}
            className={`${isMobile && "rmdp-mobile"}`} // rmdp-mobile 클래스 유무가 Calendar 내부적으로 모바일 여부 플래그를 생성한다.
            months={DP_MONTHS}
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

// 월 표기용 배열
export const DP_MONTHS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
