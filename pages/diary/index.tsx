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

  const findDataLength = () => {
    if (!data) {
      return;
    }

    const dataKey = Object.keys(data?.data.content).length;
    if (dataKey === 0) {
      return;
    }

    return dataKey;
  };

  // console.log("dataLength", findDataLength());

  // console.log("data", data);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {/* {!isFetching && !findDataLength() && <AddDiary />} */}
      {(!isFetching && !findDataLength() && <AddDiary data={data} />) ||
        (!isFetching && data && (
          <DiaryItem
            data={data}
            id={data.data.content.id}
            title={data.data.content.title}
            image={data.data.content.image}
            content={data.data.content.content}
            onUpdateDiary={handleOnUpdateDiary}
          />
        ))}
    </>
  );
}
