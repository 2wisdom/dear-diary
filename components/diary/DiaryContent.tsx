import React from "react";
import { diaryData } from "../../diary-dummy-data";
import { DiaryContentStyle } from "../../styles/DiaryStyle";
import { ButtonStyle } from "../../styles/GlobalStyle";

export default function DiaryContent({ isDate = "", isContent = "" }) {
  return (
    <DiaryContentStyle>
      <div>
        <input type="date" value={isDate} />
        <ButtonStyle>
          <div>수정</div>
          <div>삭제</div>
        </ButtonStyle>
      </div>
      <div>
        <input type="text" value={isContent} />
      </div>
    </DiaryContentStyle>
  );
}
