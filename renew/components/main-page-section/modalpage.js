import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Modal from "../main-page-section/Modal";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import ModalMOU from "../../components/main-page-section/Modal";
import ModalCert from "../../components/main-page-section/ModalCert";
import MOU1 from "../../public/image/MOU/MOU1.png";
import MOU2 from "../../public/image/MOU/MOU2.png";
import MOU3 from "../../public/image/MOU/MOU3.png";
import MOU4 from "../../public/image/MOU/MOU4.png";
import MOU5 from "../../public/image/MOU/MOU5.png";
import MOU6 from "../../public/image/MOU/MOU6.png";
import MOU7 from "../../public/image/MOU/MOU7.png";
import MOU8 from "../../public/image/MOU/MOU8.png";
import MOU9 from "../../public/image/MOU/MOU9.png";
import MOU10 from "../../public/image/MOU/MOU10.png";
import MOU11 from "../../public/image/MOU/MOU11.png";
import MOU12 from "../../public/image/MOU/MOU12.png";
import PlusBtn from "../../public/image/plus-btn.png";

export default function ModalPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const BtnGrid = styled.div`
    width: 100%;
    position: absolute;
    bottom: 160px;
    cursor: pointer;
  `;

  const BtnInner = styled.div`
    display: flex;
    max-width: 700px;
    margin: 0 auto;
  `;

  const CertBtn = styled.div`
    position: relative;
    background-color: #1fa170;
    width: 300px;
    height: 70px;
    border-radius: 50px;
    margin: 10px auto;

    @media screen and (max-width: 768px) {
      width: 260px;
      height: 70px;
    }
  `;

  const Check = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    display: flex;
    align-items: center;
  `;

  const BtnText = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin: 0 19px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  `;

  return (
    <>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <CertBtn>
        <Check onClick={openModal}>
          <Image src={PlusBtn} alt="plus" />
          <BtnText>특허출원 및 MOU 현황</BtnText>
        </Check>
      </CertBtn>

      {modalVisible && (
        <ModalMOU
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
          >
            <SwiperSlide>
              <Image src={MOU1} alt="MOU1" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU2} alt="MOU2" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU3} alt="MOU3" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU4} alt="MOU4" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU5} alt="MOU5" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU6} alt="MOU6" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU7} alt="MOU7" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU8} alt="MOU8" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU9} alt="MOU9" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU10} alt="MOU10" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU11} alt="MOU11" width={300} height={410} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={MOU12} alt="MOU12" width={300} height={410} />
            </SwiperSlide>
          </Swiper>
        </ModalMOU>
      )}
    </>
  );
}
