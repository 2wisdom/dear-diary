import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CalendarStyle } from "../styles/Calendar";

const Calendar = dynamic(() => import("react-calendar"), {
  ssr: false,
});

export default function Diary() {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarStyle>
      <h1>Calendar</h1>

      <Calendar onChange={onChange} value={value} />
    </CalendarStyle>
  );
}
