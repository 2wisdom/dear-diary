import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios, { RawAxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";
import DiaryItem from "../../components/diary/DiaryItem";

export type Diary = {
  title: string;
  image: string;
  diaryDate: string;
  content: string;
};

export default function Diary() {
  const router = useRouter();
  const at = router.query.at as string;

  const { data, isFetching } = useQuery(["diaries", at], async () => {
    return await axios.get("/api/diary", {
      params: {
        at: at,
      },
    });
  });

  console.log("data", data);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {!isFetching && data && <DiaryItem data={data} />}
    </>
  );
}
