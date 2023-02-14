import React from "react";
import { diaryData } from "../../diary-dummy-data";
import { DiaryContentStyle } from "../../styles/DiaryStyle";
import EditButton from "./EditButton";

export default function DiaryContent() {
  return (
    <DiaryContentStyle>
      <div>
        <h4>{diaryData.date}</h4>
        <EditButton />
      </div>
      <div>
        <p>{diaryData.content}</p>
      </div>
    </DiaryContentStyle>
  );
}
