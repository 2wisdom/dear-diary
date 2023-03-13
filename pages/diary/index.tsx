import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios, { RawAxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";
import DiaryItem from "../../components/diary/DiaryItem";
import AddDiary from "../../components/diary/AddDiary";

export type Diary = {
  title: string;
  image: string;
  diaryDate: string;
  content: string;
  id: string;
};

// export type DiaryResponse = {
//   content: Diary[];
// };

export default function Diary() {
  const router = useRouter();
  const at = router.query.at as string;

  const { data, isFetching, refetch } = useQuery(["diaries", at], async () => {
    return await axios.get("/api/diary", {
      params: {
        at: at,
      },
    });
  });

  const handleOnUpdateDiary = () => {
    refetch();
  };

  console.log("data", data);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {/* fetching 이 끝났는데, 데이터가 없으면, <AddDiary /> 를 띄운다. */}
      {!isFetching && !data && <AddDiary />}
      {!isFetching && data && (
        <DiaryItem
          data={data}
          id={data.data.content.id}
          title={data.data.content.title}
          image={data.data.content.image}
          content={data.data.content.content}
          onUpdateDiary={handleOnUpdateDiary}
        />
      )}
    </>
  );
}
