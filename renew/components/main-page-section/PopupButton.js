import Image from "next/image";
import PlusBtn from "../../public/image/plus-btn.png";
import styled from "styled-components";
import ModalPage from "./modalpage";
import ModalCertPage from "./ModalCertPage";

const BtnGrid = styled.div`
  width: 100%;
  position: absolute;
  bottom: 160px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    bottom: 100px;
  }
`;

const BtnInner = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: block;
  }
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

const ExplainText = styled.div`
  text-align: center;
  font-size: 15px;
  margin-top: 5px;
  font-weight: 800;

  @media screen and (max-width: 768px) {
    font-size: 11px;
    position: relative;
    top: 10px;
    letter-spacing: -0.5px;
  }
`;

const PopupButton = () => {
  return (
    <BtnGrid>
      <BtnInner>
        <ModalPage />
        <ModalCertPage />
      </BtnInner>
      <ExplainText>
        위에 + 버튼을 누르면 현황 및 인증서 확인이 가능합니다.
      </ExplainText>
    </BtnGrid>
  );
};

export default PopupButton;
