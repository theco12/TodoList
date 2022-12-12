import Image from "next/image";
import styled from "styled-components";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import Icon4 from "../../public/image/icon/icon4.png";
import Icon5 from "../../public/image/icon/icon5.png";
import Icon6 from "../../public/image/icon/icon6.png";
import IconGrid from "../common-style/IconGrid";
import TitleGrid from "../common-style/TitleGrid";
import PopupButton from "./PopupButton";
import FaceMode1 from "../../public/image/char_facemode1.png";
import FaceMode2 from "../../public/image/cahr_facemode2.png";
import styles from "../../styles/Onoff.module.css";

const Grid = styled.div`
  width: 100%;
  height: 700px;
  margin: 0 auto;
  position: relative;

  background-color: ${(props) => props.bg};
`;

const IconTitle = styled.h5`
  font-size: 16px;
`;

const IconSubTitle = styled.p`
  font-size: 13px;
  margin-top: 20px;
`;

const IconLayout = styled.div`
  margin: 0 70px;
`;

export default function Section4() {
  return (
    <Grid bg="#e8f1e9">
      <TitleGrid top="90px">
        <MainTItleStyle color="#1fa170">
          원하는 페이스 모드로 <br />
          자유로운 심리상담을 경험해보세요!
        </MainTItleStyle>
        <SubTitleStyle color="#333" style={{ fontWeight: "800" }}>
          얼굴을 드러내고 싶지 않다면 off <br />
          얼굴을 드러내고 싶다면 on
        </SubTitleStyle>
        <SubTitleStyle
          color="#1fa170"
          style={{ fontWeight: "400", marginTop: "145px" }}
        >
          아래 OFF/ON버튼을 편하게 눌러보세요!
        </SubTitleStyle>
      </TitleGrid>

      <div className={styles.backgroundChar}>
        <Image src={FaceMode1} className={styles.char1} alt="Facemode1" />
        <Image src={FaceMode2} className={styles.char2} alt="Facemode2" />
      </div>
    </Grid>
  );
}
