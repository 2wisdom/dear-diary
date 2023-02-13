import React from "react";
import Image from "next/image";

const diaryImageExmaple = "diary-image-example.jpg";

export default function DiaryImage() {
  return (
    <Image
      src={`/images/${diaryImageExmaple}`}
      alt="diaryImage"
      width={600}
      height={1}
      style={{ width: "auto", maxWidth: 900, height: "auto", maxHeight: 450 }}
    />
  );
}