import React from "react";
import { diaryData } from "../../diary-dummy-data";
import { DiaryContentStyle } from "../../styles/DiaryStyle";
import { ButtonStyle } from "../../styles/GlobalStyle";

export default function DiaryContent() {
  return (
    <DiaryContentStyle>
      <div>
        <h4>{diaryData.date}</h4>
        <ButtonStyle>
          <div>수정</div>
          <div>삭제</div>
        </ButtonStyle>
      </div>
      <div>
        <p>{diaryData.content}</p>
      </div>
    </DiaryContentStyle>
  );
}
