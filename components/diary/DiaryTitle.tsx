import React from "react";
import { DiaryTitleStyle } from "../../styles/DiaryStyle";
import DiaryCalendar from "./DiaryCalendar";
import { diaryData } from "../../diary-dummy-data";

export default function DiaryTitle() {
  return (
    <DiaryTitleStyle>
      <DiaryCalendar />
      <h3>{diaryData.title}</h3>
    </DiaryTitleStyle>
  );
}
