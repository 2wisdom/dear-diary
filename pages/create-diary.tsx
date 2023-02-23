import React from "react";
import DiaryTitle from "../components/diary/DiaryTitle";
import DiaryMain from "../components/diary/DiaryMain";
import DiaryContent from "../components/diary/DiaryContent";

export default function CreateDiary() {
  return (
    <>
      <DiaryTitle />
      <DiaryMain />
      <DiaryContent />
    </>
  );
}
