import React from "react";
import DiaryCalendar from "../components/diary/DiaryCalendar";
import DiaryTitle from "../components/diary/DiaryTitle";
import { DiaryTitleStyle } from "../styles/DiaryStyle";

export default function Diary() {
  return (
    <DiaryTitleStyle>
      <DiaryCalendar />
      <DiaryTitle />
    </DiaryTitleStyle>
  );
}
