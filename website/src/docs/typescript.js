export default function Doc() {
  const typescript = {
    title: "Usage",
    description: "typescript",
    code: `import React, { useState } from "react";
import DatePicker, { DateObject } from "@itpsolver/react-multi-date-picker"
import type{Value} from "@itpsolver/react-multi-date-picker"

export default function Example() {
  const [value, setValue] = useState<Value>(new Date());

  return <DatePicker value={value} onChange={setValue} />;
}`,
  };

  const ref = {
    title: "Adding Ref to Calendar & DatePicker",
    code: `import React, { useRef } from "react";
import DatePicker, { Calendar } from "@itpsolver/react-multi-date-picker"

export default function Example() {
  const calendarRef = useRef<any>();
  const datepickerRef = useRef<any>();

  return (
    <>
      <Calendar ref={calendarRef} />
      <DatePicker ref={datepickerRef} />
    </>
  )
}`,
  };

  return [typescript, ref];
}
