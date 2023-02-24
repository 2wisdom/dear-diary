import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {
  DiaryContentStyle,
  DiaryMainStyle,
  DiaryTitleStyle,
} from "../styles/DiaryStyle";
import { ButtonStyle } from "../styles/GlobalStyle";

/* type */
interface FormInput {
  title: string;
  image: string;
  content: string;
  diaryDate: string;
}

/* Yup Vaildation */
const DiarySchema = yup.object().shape({
  title: yup.string().required("일기 제목을 입력해 주세요!"),
  image: yup.string().required("오늘을 보여주는 사진을 등록해주세요!"),
  content: yup.string().required("오늘 있던 일을 이야기해 주세요!"),
  diaryDate: yup.string().required("오늘이 며칠인지 알려주세요!"),
});

export default function CreateDiary() {
  /* Submit */
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormInput>({
    resolver: yupResolver(DiarySchema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log("data", data);
    /* Api Connect */
    try {
      const res = await axios.post("/api/diary", data);

      if (res.status === 200) {
        alert("오늘도 수고했어요!");
      }
    } catch (err) {
      alert("오류가 발생하였습니다.");
    }
  };

  /* Image Upload */
  const onImageChange = async (e: any) => {
    const formData = new FormData();

    if (!e.target.files[0]) {
      return;
    }

    formData.append("file", e.target.files[0]);
    const response = await axios.post("/api/upload", formData);
    const imageUrl = response.data.resolveUrl;
    console.log("image", imageUrl);

    setValue("image", imageUrl);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <input type="hidden" {...register("image")} />
      <DiaryTitleStyle>
        {/* title */}
        <input type="text" placeholder="오늘의 일기" {...register("title")} />
      </DiaryTitleStyle>

      {/* contents container */}
      <DiaryMainStyle>
        <div className="main-container">
          <div className="upload-btn">
            <label htmlFor="uploadFile" className="upladLabel">
              Click ! 📸
            </label>

            <input
              type="file"
              style={{ display: "none" }}
              id="uploadFile"
              accept="image/*"
              onChange={onImageChange}
            />
          </div>
        </div>
      </DiaryMainStyle>
      <DiaryContentStyle>
        <div>
          <input
            type="date"
            min="1998-02-20"
            max={new Date().toJSON().slice(0, 10)}
            {...register("diaryDate")}
          />
          <div>
            <ButtonStyle type="submit">완료</ButtonStyle>
            <ButtonStyle type="reset">취소</ButtonStyle>
          </div>
        </div>
        <div className="content-container">
          <textarea
            placeholder="오늘 무슨일이 있었나요?"
            {...register("content")}
          />
        </div>
      </DiaryContentStyle>
      <p className="error-message">
        {errors.title?.message ||
          errors.image?.message ||
          errors.diaryDate?.message ||
          errors.content?.message ||
          "\u00A0"}
      </p>
    </form>
  );
}
