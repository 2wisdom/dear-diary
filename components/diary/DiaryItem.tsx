import React, { ChangeEvent, useEffect, useState } from "react";
import { DiaryStyle } from "../../styles/DiaryStyle";
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
import { useForm } from "react-hook-form";

export type DiaryItemProps = {
  data: any;
  id: string;
  title: string;
  image: string;
  content: string;
  onUpdateDiary: () => void;
};

export type ItemMode = "read" | "update";

export default function DiaryItem(props: DiaryItemProps) {
  const router = useRouter();
  const { data, id, onUpdateDiary } = props;

  const [mode, setMode] = useState<ItemMode>("read");

  const { register, handleSubmit } = useForm<DiaryItemProps>();

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

  /**
   * 다이어리 삭제
   */
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

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.push({
      pathname: "/diary",
      query: `at=${e.target.value}`,
    });
  };

  /**
   * 다이어리 수정
   */

  const updateDiary = useMutation(async (diary: DiaryItemProps) => {
    return axios.put("/api/diary", {
      ...diary,
    });
  });

  const handleClickMode = (mode: ItemMode) => {
    setMode(mode);
  };

  const onSubmit = handleSubmit(async (values) => {
    await updateDiary.mutateAsync({
      ...values,
      id,
    });

    console.log("values", values);

    handleClickMode("read");
    onUpdateDiary();
  });

  return (
    <DiaryStyle>
      {mode === "read" && (
        <form>
          <div className="diary-title-container">
            {/* title */}
            <input
              className="diary-title-input"
              type="text"
              value={data?.data.content.title}
              readOnly
            />
          </div>

          {/* contents container */}
          <div className="main-container">
            {/* Before Diary Button */}
            <FontAwesomeIcon
              className="chevron-icon"
              icon={faChevronLeft as IconProp}
              onClick={onPrevAt}
            />

            <div className="upload-btn">
              <img
                className="upload-image"
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
            {/* </div> */}
          </div>
          <div className="diary-content-wrapper">
            <div className="diary-content-container">
              <input
                type="date"
                value={diaryDateFormat}
                min="1998-02-20"
                max={new Date().toJSON().slice(0, 10)}
                onChange={onChangeDate}
              />
              <div className="button-container">
                <ButtonStyle onClick={() => handleClickMode("update")}>
                  수정
                </ButtonStyle>
                <ButtonStyle onClick={onDelete} style={{ marginLeft: 10 }}>
                  삭제
                </ButtonStyle>
              </div>
            </div>
            <div className="content-container">
              <textarea value={data?.data.content.content} readOnly />
            </div>
          </div>
        </form>
      )}
      {mode === "update" && (
        <form onSubmit={onSubmit}>
          <div className="diary-title-container">
            {/* title */}
            <input
              className="diary-title-input"
              type="text"
              defaultValue={data?.data.content.title}
              {...register("title")}
            />
          </div>

          {/* contents container */}
          <div className="main-container">
            <div className="upload-btn">
              <img
                className={`upload-image`}
                src={data?.data.content.image}
                alt="diary-image"
                {...register("image")}
              />
            </div>
          </div>
          <div className="diary-content-wrapper">
            <div className="diary-content-container">
              <input
                type="date"
                value={diaryDateFormat}
                min="1998-02-20"
                max={new Date().toJSON().slice(0, 10)}
                onChange={onChangeDate}
                readOnly
              />
              <div className="button-container">
                <ButtonStyle
                  onClick={() => {
                    handleClickMode("read");
                  }}
                >
                  취소
                </ButtonStyle>
                <ButtonStyle type="submit" style={{ marginLeft: 10 }}>
                  저장
                </ButtonStyle>
              </div>
            </div>
            <div className="content-container">
              <textarea
                defaultValue={data?.data.content.content}
                {...register("content")}
              />
            </div>
          </div>
        </form>
      )}
    </DiaryStyle>
  );
}
