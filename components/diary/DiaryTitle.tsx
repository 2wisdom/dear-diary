import React from "react";
import { DiaryTitleStyle } from "../../styles/DiaryStyle";
import Image from "next/image";

export default function DiaryTitle() {
  return (
    <DiaryTitleStyle>
      {/* calendar */}
      <Image
        src="/images/calendar_icon.png"
        alt="calendar"
        width={42}
        height={42}
      />

      {/* title */}
      <input />
    </DiaryTitleStyle>
  );
}
