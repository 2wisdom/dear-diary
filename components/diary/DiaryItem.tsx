import React from "react";
import {
  DiaryContentStyle,
  DiaryMainStyle,
  DiaryTitleStyle,
} from "../../styles/DiaryStyle";
import { ButtonStyle } from "../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/fontawesome-free-solid";
import { useRouter } from "next/router";

export type DiaryItemProps = {
  data: any;
};

export default function DiaryItem(props: DiaryItemProps) {
  const router = useRouter();
  const { data } = props;

  const diaryDate: string = data?.data.content.diaryDate;
  const diaryDateFormat = diaryDate.slice(0, 10);

  const onPrevAt = () => {
    const prevAt = data.data.meta.prevAt;

    if (prevAt === undefined) {
      alert("이전 일기가 없습니다!");
      return;
    }

    router.push({
      pathname: "/diary",
      query: `at=${prevAt}`,
    });
  };

  const onNextAt = () => {
    const nextAt = data.data.meta.nextAt;

    if (nextAt === undefined) {
      alert("이후 일기가 없습니다!");
      return;
    }

    router.push({
      pathname: "/diary",
      query: `at=${nextAt}`,
    });
  };

  console.log("data3", data.data.meta.prevAt);

  return (
    <form>
      <DiaryTitleStyle>
        {/* title */}
        <input type="text" value={data?.data.content.title} readOnly />
      </DiaryTitleStyle>

      {/* contents container */}
      <DiaryMainStyle>
        <div className="main-container">
          {/* Before Diary Button */}
          <FontAwesomeIcon
            className="chevron-icon"
            icon={faChevronLeft as IconProp}
            onClick={onPrevAt}
          />

          <div className="upload-btn">
            <img
              className={`upload-image`}
              src={data?.data.content.image}
              alt="diary-image"
            />
          </div>

          {/* After Diary Button */}
          <FontAwesomeIcon
            className="chevron-icon"
            icon={faChevronRight as IconProp}
            onClick={onNextAt}
          />
        </div>
      </DiaryMainStyle>
      <DiaryContentStyle>
        <div>
          <input
            type="date"
            value={diaryDateFormat}
            min="1998-02-20"
            max={new Date().toJSON().slice(0, 10)}
            readOnly
          />
          <div>
            <ButtonStyle>수정</ButtonStyle>
            <ButtonStyle>삭제</ButtonStyle>
          </div>
        </div>
        <div className="content-container">
          <textarea value={data?.data.content.content} readOnly />
        </div>
      </DiaryContentStyle>
    </form>
  );
}
