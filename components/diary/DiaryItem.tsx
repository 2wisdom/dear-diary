import React, { ChangeEvent, useEffect, useState } from "react";
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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export type DiaryItemProps = {
  data: any;
  id: string;
};

export default function DiaryItem(props: DiaryItemProps) {
  const router = useRouter();
  const { data, id } = props;

  const diaryDate: string = data?.data.content.diaryDate;
  const diaryDateFormat = diaryDate?.split("T")[0];

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

  const deleteDiary = useMutation(async (diaryId: string) => {
    return axios.delete("/api/diary", {
      params: {
        id: diaryId,
      },
    });
  });

  const onDelete = async () => {
    if (!confirm("정말 삭제하시겠어요?")) {
      return;
    }

    router.push({
      pathname: "/user",
    });

    await deleteDiary.mutateAsync(id);
  };

  const [changeDate, setChangeDate] = useState(diaryDateFormat);

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeDate(e.target.value);
  };

  useEffect(() => {
    if (changeDate?.length > 2) {
      // TODO: 일기가 없으면 addDiary 를 보여줌.

      // TODO: 해당 날짜에 일기가 있으면 해당 일기로 이동
      router.push({
        pathname: "/diary",
        query: `at=${changeDate}`,
      });

      if (!changeDate.length) {
        console.log("없어용");
      }
    }
  }, [changeDate]);

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
            value={changeDate}
            min="1998-02-20"
            max={new Date().toJSON().slice(0, 10)}
            onChange={onChangeDate}
          />
          <div>
            <ButtonStyle>수정</ButtonStyle>
            <ButtonStyle onClick={onDelete} style={{ marginLeft: 10 }}>
              삭제
            </ButtonStyle>
          </div>
        </div>
        <div className="content-container">
          <textarea value={data?.data.content.content} readOnly />
        </div>
      </DiaryContentStyle>
    </form>
  );
}
