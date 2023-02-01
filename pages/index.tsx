import Image from "next/image";
import { IndexStyle } from "../styles/IndexStyle";

export default function Home() {
  return (
    <IndexStyle>
      <div>
        <Image
          src="/images/book_vector.svg"
          alt="home"
          width={825}
          height={404}
        />
      </div>
      <div>
        <Image
          src="/images/title.svg"
          alt="title"
          width={418}
          height={91}
          style={{ marginTop: 60 }}
        />
        <a>액정 속 나만의 다이어리</a>
      </div>
    </IndexStyle>
  );
}
