import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "../components/common-style/button";
import MainSlider from "../components/slider/mainslider";
import MouseScroll from "../components/main-page-section/mousescroll";
import Section2 from "../components/main-page-section/section2";
import Section3 from "../components/main-page-section/section3";
import Section4 from "../components/main-page-section/section4";
import CharSlider from "../components/slider/charslider";
import Section6 from "../components/main-page-section/section6";
import Bgslide from "../components/slider/bgslider";
import Section8 from "../components/main-page-section/section8";
import Section9 from "../components/main-page-section/section9";
import Section10 from "../components/main-page-section/section10";

export default function Home() {
  return (
    <div>
      <Head>
        <title>메타포레스트</title>
      </Head>
      <div className={styles.container}>
        <MainSlider />
        <div className={styles.buttonstyle}>
          <Button color="#fff" bg="#2e2e2e" margin="0 10px">
            소개영상보기
          </Button>
          <Link href="#">
            <Button color="#fff" bg="#1fa170" margin="0 10px" s>
              도입 문의하기
            </Button>
          </Link>
        </div>
        <MouseScroll />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <CharSlider />
      <Section6 />
      <Bgslide />
      <Section8 />
      <Section9 />
      <Section10 />
    </div>
  );
}
