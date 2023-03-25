import React from "react";
import { useRouter } from "next/router";
import { DiaryStyle } from "../../styles/DiaryStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/fontawesome-free-solid";

export type AddDiaryProps = {
  data: any;
};

export default function AddDiary(props: AddDiaryProps) {
  const router = useRouter();
  const { data } = props;

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

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push({
      pathname: "/diary",
      query: `at=${e.target.value}`,
    });
  };

  const onCreateDiary = () => {
    router.push({
      pathname: "/create-diary",
    });
  };

  return (
    <DiaryStyle>
      <div className="diary-title-container">
        {/* title */}
        <input className="diary-title-input" type="text" readOnly />
      </div>

      {/* contents container */}
      <div className="diary-main-container">
        <div className="main-container">
          {/* Before Diary Button */}
          <FontAwesomeIcon
            className="chevron-icon"
            icon={faChevronLeft as IconProp}
            onClick={onPrevAt}
          />

          <div className="upload-btn">
            <FontAwesomeIcon
              className="plus-icon"
              icon={faPlus as IconProp}
              onClick={onCreateDiary}
            />
          </div>

          {/* After Diary Button */}
          <FontAwesomeIcon
            className="chevron-icon"
            icon={faChevronRight as IconProp}
            onClick={onNextAt}
          />
        </div>
      </div>

      <div className="diary-content-wrapper">
        <div className="diary-content-container">
          <input
            type="date"
            value={router.query.at}
            min="1998-02-20"
            max={new Date().toJSON().slice(0, 10)}
            onChange={onChangeDate}
          />
        </div>
        <div className="content-container">
          <textarea value={data?.data.content.content} readOnly />
        </div>
      </div>
    </DiaryStyle>
  );
}
