import Image from "next/image";
import PlusBtn from "../../public/image/plus-btn.png";
import styled from "styled-components";

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

const PopupButton = () => {
  return (
    <BtnGrid>
      <BtnInner>
        <CertBtn>
          <Check>
            <Image src={PlusBtn} alt="plus" />
            <BtnText>특허출원 및 MOU 현황</BtnText>
          </Check>
        </CertBtn>
        <CertBtn>
          <Check>
            <Image src={PlusBtn} alt="plus" />
            <BtnText>기업 증명서 확인</BtnText>
          </Check>
        </CertBtn>
      </BtnInner>
      <p style={{ textAlign: "center", fontSize: "15px", marginTop: "5px" }}>
        <b>위에 + 버튼을 누르면 현황 및 인증서 확인이 가능합니다.</b>
      </p>
    </BtnGrid>
  );
};

export default PopupButton;
