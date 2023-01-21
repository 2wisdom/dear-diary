import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: version } = useQuery(["initApp"], async () => {
    return "1.0";
  });
  return (
    <div>
      {version}
      <h1>Dear Diary!</h1>
    </div>
  );
}
