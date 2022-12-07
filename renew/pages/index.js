import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainSlider from "../components/mainslider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>메타포레스트</title>
      </Head>
      <MainSlider />
    </div>
  );
}
