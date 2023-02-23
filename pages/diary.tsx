import React from "react";
import DiaryTitle from "../components/diary/DiaryTitle";
import DiaryMain from "../components/diary/DiaryMain";
import DiaryContent from "../components/diary/DiaryContent";
import { diaryData } from "../diary-dummy-data";

export default function Diary() {
  return (
    <>
      <DiaryTitle isRead={true} isValue={diaryData.title} />
      <DiaryMain />
      <DiaryContent
        isDate={diaryData.date}
        isContent={diaryData.content}
        isDisabled={true}
      />
    </>
  );
}
