import React from "react";
import DiaryImage from "../components/diary/DiaryImage";
import DiaryTitle from "../components/diary/DiaryTitle";
import { DiaryTitleStyle } from "../styles/DiaryStyle";

export default function Diary() {
  return (
    <>
      <DiaryTitle />
      <DiaryImage />
    </>
  );
}
