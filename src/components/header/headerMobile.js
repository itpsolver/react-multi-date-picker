/**
 * 프로젝트의 디자인 요건을 맞추기 위해 Header 를 복제한 사본
 */
import React, { isValidElement, cloneElement } from "react";
import Arrow from "../arrow/arrow";

export default function HeaderMobile({
  state,
  setState,
  disableYearPicker,
  disableMonthPicker,
  buttons,
  renderButton,
  handleMonthChange,
  disabled,
  hideMonth,
  hideYear,
  isRTL,
  fullYear,
  monthAndYears: [months, years],
  isStartMonth, // range는 달력이 두 개 이상이므로
  isEndMonth,
}) {
  console.log(
    `## month: [${months}], years: [${years}], isStartMonth: [${isStartMonth}], isEndMonth: [${isEndMonth}]`
  );
  let style = {},
    {
      date,
      onlyMonthPicker,
      onlyYearPicker,
      mustShowYearPicker,
      minDate,
      maxDate,
      year,
      today,
    } = state,
    isPreviousDisable =
      minDate &&
      date.year <= minDate.year &&
      minDate.monthIndex > date.monthIndex - 1,
    isNextDisable =
      maxDate &&
      date.year >= maxDate.year &&
      maxDate.monthIndex < date.monthIndex + 1;

  let maxYear = today.year + 7;

  maxYear = maxYear - 12 * Math.floor((maxYear - year) / 12);

  if ((hideMonth || fullYear) && hideYear && !buttons) return null;

  if (
    (hideMonth && hideYear) ||
    (onlyYearPicker && hideYear) ||
    (buttons && hideYear)
  ) {
    style.minHeight = "36px";
  }

  if (onlyMonthPicker || fullYear) {
    if (minDate && minDate.year >= date.year) isPreviousDisable = true;
    if (maxDate && maxDate.year <= date.year) isNextDisable = true;
  }

  if (mustShowYearPicker || onlyYearPicker) {
    let minYear = maxYear - 11;

    isPreviousDisable = minDate && minDate.year > minYear;
    isNextDisable = maxDate && maxDate.year < maxYear;
  }

  if (disabled) {
    isPreviousDisable = true;
    isNextDisable = true;
  }

  return (
    <div className="rmdp-header">
      <div style={{ position: "relative", display: "flex" }}>
        {buttons && getButton("left")}
        {fullYear ? (
          <div className="rmdp-header-values" style={style}>
            {!hideYear && date.format("YYYY")}
          </div>
        ) : (
          months
            // 원래 달력이 몇 개든 header가 하나였기 때문에 월이 2개 나열되어 출력되는데, 각각의 월 하나씩만 출력하도록 수정함.
            .filter(
              (month, index) =>
                (isStartMonth && index === 0) ||
                (isEndMonth && index === months.length - 1)
            )
            .map((month, index) => {
              console.log(`## month: ${JSON.stringify(month)}`);
              return (
                <div key={index} className="rmdp-header-values" style={style}>
                  {/* ###################### header, headerMobile 둘 다 고려해 주어야 함. ####################### */}
                  {/* ============== 원래 'October, 2022' 같은 형식으로 년월이 출력되고 있었음 (S) ============== */}
                  {/* {!hideMonth && (
                    <span
                      style={{
                        cursor:
                          disabled || disableMonthPicker || onlyMonthPicker
                            ? "default"
                            : "pointer",
                      }}
                      onClick={() =>
                        !disableMonthPicker && toggle("mustShowMonthPicker")
                      }
                    >
                      {month}
                      {!hideYear && (isRTL ? "،" : ",")}
                    </span>
                  )}
                  {!hideYear && (
                    <span
                      style={{
                        cursor:
                          disabled || disableYearPicker || onlyYearPicker
                            ? "default"
                            : "pointer",
                      }}
                      onClick={() =>
                        !disableYearPicker && toggle("mustShowYearPicker")
                      }
                    >
                      {years[index]}
                    </span>
                  )} */}
                  {/* ============== 원래 'October, 2022' 같은 형식으로 년월이 출력되고 있었음 (E) ============== */}
                  {/* ===================== '2022.October' 같은 형식으로 출력 포맷 변경 (S) ====================== */}
                  {!hideYear && (
                    <span
                      style={{
                        cursor:
                          disabled || disableYearPicker || onlyYearPicker
                            ? "default"
                            : "pointer",
                      }}
                      onClick={() =>
                        !disableYearPicker && toggle("mustShowYearPicker")
                      }
                    >
                      {
                        years[
                          isStartMonth ? 0 : isEndMonth ? months.length - 1 : 0
                        ]
                      }
                    </span>
                  )}
                  .
                  {!hideMonth && (
                    <span
                      style={{
                        cursor:
                          disabled || disableMonthPicker || onlyMonthPicker
                            ? "default"
                            : "pointer",
                      }}
                      onClick={() =>
                        !disableMonthPicker && toggle("mustShowMonthPicker")
                      }
                    >
                      {month}
                    </span>
                  )}
                  {/* ===================== '2022.October' 같은 형식으로 출력 포맷 변경 (E) ====================== */}
                </div>
              );
            })
        )}
        {buttons && getButton("right")}
      </div>
    </div>
  );

  function getButton(direction) {
    let handleClick = () => increaseValue(direction === "right" ? 1 : -1),
      disabled =
        (direction === "left" && isPreviousDisable) ||
        (direction === "right" && isNextDisable);

    return renderButton instanceof Function ? (
      renderButton(direction, handleClick, disabled)
    ) : isValidElement(renderButton) ? (
      cloneElement(renderButton, { direction, handleClick, disabled })
    ) : (
      <Arrow
        direction={`rmdp-${direction}`}
        onClick={handleClick}
        disabled={disabled}
      />
    );
  }

  function increaseValue(value) {
    if (
      disabled ||
      (value < 0 && isPreviousDisable) ||
      (value > 0 && isNextDisable)
    )
      return;

    if (fullYear) {
      date.year += value;
    } else if (!mustShowYearPicker && !onlyYearPicker) {
      date.toFirstOfMonth();

      if (onlyMonthPicker) {
        date.year += value;
      } else {
        date.month += value;

        handleMonthChange(date);
      }
    } else {
      year = year + value * 12;

      if (value < 0 && minDate && year < minDate.year) year = minDate.year;
      if (value > 0 && maxDate && year > maxDate.year) year = maxDate.year;
    }

    setState({
      ...state,
      date,
      year,
    });
  }

  function toggle(picker) {
    if (disabled) return;

    let object = {
      mustShowMonthPicker: false,
      mustShowYearPicker: false,
    };

    object[picker] = !state[picker];

    setState({
      ...state,
      ...object,
    });
  }
}
