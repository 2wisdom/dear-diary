import React, { useState } from "react";
import { useRouter } from "next/router";
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
import { useMutation } from "@tanstack/react-query";

/* type */
export type DiaryFormValue = {
  title: string;
  image: string;
  content: string;
  diaryDate: string;
};

/* Yup Vaildation */
const DiarySchema = yup.object().shape({
  title: yup.string().required("일기 제목을 입력해 주세요!"),
  image: yup.string().required("오늘을 보여주는 사진을 등록해주세요!"),
  content: yup.string().required("오늘 있던 일을 이야기해 주세요!"),
  diaryDate: yup.string().required("오늘이 며칠인지 알려주세요!"),
});

export default function CreateDiaryForm() {
  const router = useRouter();

  const [uploadImage, setuploadImage] = useState();
  const [changeImageStyle, setChangeImageStyle] = useState("image-hidden");
  const [changeClick, setChangeClick] = useState("");

  /* Submit */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DiaryFormValue>({
    resolver: yupResolver(DiarySchema),
  });

  const createDiary = useMutation(async (values: DiaryFormValue) => {
    /* Api Call */
    return axios.post("/api/diary", values);
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await createDiary.mutateAsync(values);

      alert("오늘도 수고했어요!");
      router.push({
        pathname: "/diary",
      });
    } catch (err) {
      console.log(err);
      alert("오류가 발생하였습니다.");
    }
  });

  /* Image Upload */
  const onImageChange = async (e: any) => {
    const formData = new FormData();

    if (!e.target.files[0]) {
      return;
    }

    formData.append("file", e.target.files[0]);
    const response = await axios.post("/api/upload", formData);
    const imageUrl = response.data.resolveUrl;

    setValue("image", imageUrl);

    setuploadImage(imageUrl);
    setChangeImageStyle("");
    setChangeClick("click-hidden");
  };

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <DiaryTitleStyle>
        {/* title */}
        <input type="text" placeholder="오늘의 일기" {...register("title")} />
      </DiaryTitleStyle>

      {/* contents container */}
      <DiaryMainStyle>
        <div className="main-container">
          <div className="upload-btn">
            <input type="hidden" {...register("image")} />
            <label htmlFor="uploadFile" className={`upladLabel ${changeClick}`}>
              Click ! 📸
            </label>

            <img
              className={`upload-image ${changeImageStyle}`}
              src={uploadImage}
              alt="diary-image"
            />

            <input
              type="file"
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
