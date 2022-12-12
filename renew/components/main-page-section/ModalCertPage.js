import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Modal from "./Modal";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import ModalMOU from "./Modal";
import ModalCert from "./ModalCert";
import Cert1 from "../../public/image/certification/Corporate1.png";
import Cert2 from "../../public/image/certification/Corporate2.jpg";
import Cert3 from "../../public/image/certification/Corporate3.png";
import Cert4 from "../../public/image/certification/Corporate4.jpg";
import Cert5 from "../../public/image/certification/Corporate5.jpg";
import PlusBtn from "../../public/image/plus-btn.png";

export default function ModalCertPage() {
  const [modalVisiblecert, setModalVisiblecert] = useState(false);
  const openModal = () => {
    setModalVisiblecert(true);
  };
  const closeModal = () => {
    setModalVisiblecert(false);
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
  `;

  return (
    <>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <CertBtn>
        <Check onClick={openModal}>
          <Image src={PlusBtn} alt="plus" />
          <BtnText>기업 증명서 확인</BtnText>
        </Check>
      </CertBtn>

      {modalVisiblecert && (
        <ModalCert
          visible={modalVisiblecert}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
          >
            <SwiperSlide>
              <Image src={Cert1} alt="Cert1" width={366} height={512} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Cert2} alt="Cert2" width={366} height={512} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Cert3} alt="Cert3" width={366} height={512} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Cert4} alt="Cert4" width={366} height={512} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Cert5} alt="Cert5" width={366} height={512} />
            </SwiperSlide>
          </Swiper>
        </ModalCert>
      )}
    </>
  );
}
