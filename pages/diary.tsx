import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DiaryContentStyle,
  DiaryMainStyle,
  DiaryTitleStyle,
} from "../styles/DiaryStyle";
import { ButtonStyle } from "../styles/GlobalStyle";

export default function Diary() {
  const getDiary = async () => {
    try {
      const data = await axios.get("api/diary", { params: "?at=2023-02-20" });
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  // getDiary();

  return (
    <form>
      <DiaryTitleStyle>
        {/* title */}
        <input type="text" readOnly />
      </DiaryTitleStyle>

      {/* contents container */}
      <DiaryMainStyle>
        <div className="main-container">
          <div className="upload-btn">
            {/* <img
              className={`upload-image ${changeImageStyle}`}
              src={uploadImage}
              alt="diary-image"
            /> */}
          </div>
        </div>
      </DiaryMainStyle>
      <DiaryContentStyle>
        <div>
          <input
            type="date"
            min="1998-02-20"
            max={new Date().toJSON().slice(0, 10)}
          />
          <div>
            <ButtonStyle>수정</ButtonStyle>
            <ButtonStyle>삭제</ButtonStyle>
          </div>
        </div>
        <div className="content-container">
          <textarea />
        </div>
      </DiaryContentStyle>
    </form>
  );
}
