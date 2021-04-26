import React from "react";

export default function Props(translate, language) {
  const table = {
    description: (
      <table>
        <thead>
          <tr>
            <th>{translate("Name")}</th>
            <th>{translate("Type")}</th>
            <th>{translate("Default")}</th>
            <th>{translate("Availability (DatePicker/ Calendar)")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ref</td>
            <td>React.RefObject</td>
            <td>true</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>value</td>
            <td>Date, DateObject, String, Number {translate("or")} Array</td>
            <td>{language === "en" ? "new Date()" : "()new Date"}</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>Boolean</td>
            <td>false ({translate("true if value is Array")})</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>range</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr style={{ color: "red" }}>
            <td>timePicker (deprecated)</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr style={{ color: "red" }}>
            <td>onlyTimePicker (deprecated)</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>onlyMonthPicker</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>onlyYearPicker</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>format</td>
            <td>String</td>
            <td>YYYY/MM/DD</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>formattingIgnoreList</td>
            <td>Array</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>calendar</td>
            <td>String</td>
            <td>gregorian</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>locale</td>
            <td>String</td>
            <td>en</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>mapDays</td>
            <td>Function</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>Function</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>className</td>
            <td>String</td>
            <td>""</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>weekDays</td>
            <td>Array</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>months</td>
            <td>Array</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>showOtherDays</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>minDate</td>
            <td>Date, DateObject, String {translate("or")} Number</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>maxDate</td>
            <td>Date, DateObject, String {translate("or")} Number</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>disableYearPicker</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>disableMonthPicker</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>zIndex</td>
            <td>Number</td>
            <td>100</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>plugins</td>
            <td>Array</td>
            <td>[]</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>sort</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>numberOfMonths</td>
            <td>Number</td>
            <td>1</td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>currentDate</td>
            <td>DateObject</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>digits</td>
            <td>Array</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>buttons</td>
            <td>Boolean</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>renderButton</td>
            <td>Function {translate("or")} React.ReactElement</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>weekStartDayIndex</td>
            <td>Number</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>disableDayPicker</td>
            <td>Boolean</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>onPropsChange</td>
            <td>Function</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>onMonthChange</td>
            <td>Function</td>
            <td></td>
            <td>{translate("both")}</td>
          </tr>
          <tr>
            <td>arrow</td>
            <td>Boolean {translate("or")} React.ReactElement</td>
            <td>true</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>arrowStyle</td>
            <td>React.CSSProperties</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>arrowClassName</td>
            <td>String</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>animation</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>inputClass</td>
            <td>String</td>
            <td>""</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>name</td>
            <td>String</td>
            <td>""</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>id</td>
            <td>String</td>
            <td>""</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>title</td>
            <td>String</td>
            <td>""</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>""</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>style</td>
            <td>Object</td>
            <td>{"{}"}</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>input</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>render</td>
            <td>React.Component {translate("or")} Function</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>inputMode</td>
            <td>String</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>scrollSensitive</td>
            <td>Boolean</td>
            <td>true</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>hideOnScroll</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>calendarPosition</td>
            <td>String</td>
            <td>auto</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>containerStyle</td>
            <td>Object</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>containerClassNamey</td>
            <td>String</td>
            <td>""</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>editable</td>
            <td>Boolean</td>
            <td>true</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>onlyShowInRangeDates</td>
            <td>Boolean</td>
            <td>true</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>onOpen</td>
            <td>Function</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>Function</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>fixMainPosition</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>fixRelativePosition</td>
            <td>Boolean</td>
            <td>false</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>offsetY</td>
            <td>Number</td>
            <td>0</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>offsetX</td>
            <td>Number</td>
            <td>0</td>
            <td>{translate("DatePicker")}</td>
          </tr>
          <tr>
            <td>onPositionChange</td>
            <td>Function</td>
            <td></td>
            <td>{translate("DatePicker")}</td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return [table];
}
