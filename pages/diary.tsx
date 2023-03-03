import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DiaryItem from "../components/diary/DiaryItem";

export type Diary = {
  title: string;
  image: string;
  diaryDate: string;
  content: string;
};

export default function Diary() {
  const { data, isFetching } = useQuery(["diaries"], async () => {
    return axios.get("/api/diary?at=2023-02-20");
  });

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {!isFetching && data && <DiaryItem data={data} />}
    </>
  );
}
