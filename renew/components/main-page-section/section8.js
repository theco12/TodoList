import Image from "next/image";
import styled from "styled-components";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import EAP1 from "../../public/image/EAP/eap1.png";
import EAP2 from "../../public/image/EAP/eap2.png";
import IconGrid from "../common-style/IconGrid";
import TitleGrid from "../common-style/TitleGrid";
import Button from "../common-style/button";
import ButtonLayout from "../common-style/ButtonLayout";
import BottomTextLayout from "../common-style/BottomTextLayout";
import Grid from "../common-style/Grid";

const IconTitle = styled.h5`
  font-size: 16px;
`;

const IconSubTitle = styled.p`
  font-size: 13px;
  margin-top: 20px;
`;

const IconLayout = styled.div`
  margin: 0 25px;
`;

export default function Section6() {
  return (
    <Grid bg="#b4e2de" height="700px" MobileHeight="800px">
      <TitleGrid top="80px">
        <MainTItleStyle color="#55689d">
          비대면 업무가 익숙한 요즘,
          <br />
          EAP 상담에 최적화된 서비스를 제공합니다!
        </MainTItleStyle>
      </TitleGrid>
      <IconGrid top="280px">
        <IconLayout>
          <Image
            src={EAP1}
            width={382}
            height={216}
            layout="responsive"
            alt="EAP1"
          />
        </IconLayout>
        <IconLayout>
          <Image
            src={EAP2}
            width={382}
            height={216}
            layout="responsive"
            alt="EAP2"
          />
        </IconLayout>
      </IconGrid>

      <ButtonLayout>
        <BottomTextLayout color="#55689d">
          지금 EAP 서비스를 알아보세요!
        </BottomTextLayout>
        <Button color="#fff" bg="#55689d" margin="0 auto">
          EAP문의
        </Button>
      </ButtonLayout>
    </Grid>
  );
}
