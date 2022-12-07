import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/common-style/button";
import MainSlider from "../components/slider/mainslider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>메타포레스트</title>
      </Head>
      <div className={styles.container}>
        <MainSlider />
        <div className={styles.buttonstyle}>
          <Button color="#fff" bg="#2e2e2e">
            소개영상보기
          </Button>
          <Button color="#fff" bg="#1fa170">
            도입 문의하기
          </Button>
        </div>
      </div>
    </div>
  );
}
