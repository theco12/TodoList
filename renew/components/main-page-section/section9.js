import Image from "next/image";
import styled from "styled-components";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import Partner1 from "../../public/image/Partner/partner1.png";
import Partner2 from "../../public/image/Partner/partner2.png";
import Partner3 from "../../public/image/Partner/partner3.png";
import Partner4 from "../../public/image/Partner/partner4.png";
import Partner5 from "../../public/image/Partner/partner5.png";
import Partner6 from "../../public/image/Partner/partner6.png";
import Partner7 from "../../public/image/Partner/partner7.png";
import Partner8 from "../../public/image/Partner/partner8.png";
import Partner9 from "../../public/image/Partner/partner9.png";
import Partner10 from "../../public/image/Partner/partner10.png";
import Partner11 from "../../public/image/Partner/partner11.png";
import Partner12 from "../../public/image/Partner/partner12.png";
import Partner13 from "../../public/image/Partner/partner13.png";
import Partner14 from "../../public/image/Partner/partner14.png";
import Partner15 from "../../public/image/Partner/partner15.png";
import Partner16 from "../../public/image/Partner/partner16.png";
import Partner17 from "../../public/image/Partner/partner17.png";
import Partner18 from "../../public/image/Partner/partner18.png";
import Partner19 from "../../public/image/Partner/partner19.png";
import Partner20 from "../../public/image/Partner/partner20.png";
import Partner21 from "../../public/image/Partner/partner21.png";
import Partner22 from "../../public/image/Partner/partner22.png";
import Partner23 from "../../public/image/Partner/partner23.png";
import Partner24 from "../../public/image/Partner/partner24.png";
import Partner25 from "../../public/image/Partner/partner25.png";

import IconGrid from "../common-style/IconGrid";
import TitleGrid from "../common-style/TitleGrid";
import Button from "../common-style/button";
import ButtonLayout from "../common-style/ButtonLayout";
import BottomTextLayout from "../common-style/BottomTextLayout";

const Grid = styled.div`
  width: 100%;
  height: 700px;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.bg};
`;

const PartnerGrid = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 730px;
  top: 215px;
`;

const PartnerLogo = styled.div`
  display: inline-block;
  margin: 4px 10px;
`;

export default function Section9() {
  return (
    <Grid bg="#fff">
      <TitleGrid top="110px">
        <MainTItleStyle color="#1fa170">
          비대면 업무가 익숙한 요즘,
          <br />
          EAP 상담에 최적화된 서비스를 제공합니다!
        </MainTItleStyle>
      </TitleGrid>

      <PartnerGrid>
        <PartnerLogo>
          <Image src={Partner1} width={125} height={40} alt="고려대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner2} width={125} height={40} alt="한양대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner3} width={125} height={40} alt="호서대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner4} width={125} height={40} alt="순천향대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner5} width={125} height={40} alt="조선대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner6} width={125} height={40} alt="한동대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner7} width={125} height={40} alt="울산대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner8} width={125} height={40} alt="계명대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner9} width={125} height={40} alt="명지대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner10} width={125} height={40} alt="한국교원대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner11} width={125} height={40} alt="서울교대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner12} width={125} height={40} alt="안산대" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner13} width={125} height={40} alt="DSC" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner14} width={125} height={40} alt="세은심리상담소" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner15} width={125} height={40} alt="맑음" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner16} width={125} height={40} alt="마음" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner17} width={125} height={40} alt="아하" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner18} width={125} height={40} alt="부산" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner19} width={125} height={40} alt="대전청소년" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner20} width={125} height={40} alt="대전2" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner21} width={125} height={40} alt="포항" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner22} width={125} height={40} alt="창동" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner23} width={125} height={40} alt="유성구" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner24} width={125} height={40} alt="deepvision" />
        </PartnerLogo>
        <PartnerLogo>
          <Image src={Partner25} width={125} height={40} alt="수돗물" />
        </PartnerLogo>
      </PartnerGrid>

      <ButtonLayout>
        <BottomTextLayout color="#1fa170">
          교육 | 컨설팅 | 시연 <br />
          지금 상담 받아보세요!
        </BottomTextLayout>
        <Button color="#fff" bg="#1fa170" margin="0 auto">
          교육문의
        </Button>
      </ButtonLayout>
    </Grid>
  );
}
