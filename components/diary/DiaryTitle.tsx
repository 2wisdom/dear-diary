import React from "react";
import { DiaryTitleStyle } from "../../styles/DiaryStyle";
import DiaryCalendar from "./DiaryCalendar";

export default function DiaryTitle(
  this: any,
  { isRead = false, isValue = this }
) {
  return (
    <DiaryTitleStyle>
      <DiaryCalendar />
      <input
        type="text"
        placeholder="오늘의 일기"
        readOnly={isRead}
        value={isValue}
      />
    </DiaryTitleStyle>
  );
}
