import React from "react";
import { DiaryContentStyle } from "../../styles/DiaryStyle";
import { ButtonStyle } from "../../styles/GlobalStyle";

export default function DiaryContent(
  this: string,
  { isDate = this, isContent = "", isDisabled = false }
) {
  return (
    <DiaryContentStyle>
      <div>
        <input type="date" value={isDate} />
        <ButtonStyle>
          <div>수정</div>
          <div>삭제</div>
        </ButtonStyle>
      </div>
      <div className="content-container">
        <textarea
          placeholder="오늘 무슨일이 있었나요?"
          maxLength={100}
          minLength={1}
          disabled={isDisabled}
        >
          {isContent}
        </textarea>
      </div>
    </DiaryContentStyle>
  );
}
