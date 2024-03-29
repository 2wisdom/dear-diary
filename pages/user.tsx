import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ButtonStyle } from "../styles/GlobalStyle";
import { useRouter } from "next/router";
import { UserStyle } from "../styles/UserStyle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Diary = {
  id: string;
  diaryDate: string;
  title: string;
};
export type DiaryResponse = {
  content: Diary[];
};

export default function User() {
  const router = useRouter();

  const { data: session } = useSession();
  const userName = session?.user?.name;

  const goLeadDiary = () => {
    const today = new Date().toJSON().slice(0, 10);

    router.push({
      pathname: "/diary",
      query: `at=${today}`,
    });
  };

  const at = router.query.at as string;

  const { data } = useQuery(["diaries"], async () => {
    return await axios.get<DiaryResponse>("/api/me/diary");
  });

  return (
    <UserStyle>
      <div className="go-creatediary-container">
        <div className="username-container container-margin">
          <span>
            <span className="username">{userName}</span>님,&nbsp;
          </span>
          <span>오늘은 무슨 일이 있었나요?</span>
        </div>
        <div>
          <ButtonStyle
            className="container-margin"
            onClick={() => {
              router.push({
                pathname: "/create-diary",
              });
            }}
          >
            오늘 일기 쓰러가기
          </ButtonStyle>
          <div>
            <span>이제까지 쓴 일기 </span>
            <span style={{ textDecoration: "underLine" }}>
              {data?.data.content.length}
            </span>
            <span> 장</span>
          </div>
        </div>
      </div>
      <div className="go-getdiary-container">
        <div className="mydiary-container container-margin">
          <div>&lt; 내가 쓴 일기 &gt;</div>
        </div>

        <div>
          <ButtonStyle className="container-margin" onClick={goLeadDiary}>
            일기 읽으러 가기
          </ButtonStyle>
        </div>
        <ul>
          {data?.data.content.map((diary) => (
            <li
              className="diaries-container"
              key={diary.id}
              onClick={() => {
                router.push({
                  pathname: "/diary",
                  query: `at=${diary.diaryDate.slice(0, 10)}`,
                });
              }}
            >
              <div>{diary.diaryDate.slice(0, 10)}</div>
              <div style={{ fontWeight: 600 }}>{diary.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </UserStyle>
  );
}
