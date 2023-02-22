import React from "react";
import { DiaryTitleStyle } from "../../styles/DiaryStyle";
import DiaryCalendar from "./DiaryCalendar";

export default function DiaryTitle(
  this: any,
  { isRead = true, isValue = this }
) {
  return (
    <DiaryTitleStyle>
      <DiaryCalendar />
      <input type="text" readOnly={isRead} value={isValue} />
    </DiaryTitleStyle>
  );
}
