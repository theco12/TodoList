import styled from "styled-components";
import Image from "next/image";
import Icon1 from "../../public/image/scroll/Icon1.png";
import Icon22 from "../../public/image/scroll/Icon22.png";

const ScrollingWrapper = styled.div`
  z-index: 20;
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  bottom: 40px;
`;

const Arrow11 = styled.div`
  animation: down 0.5s linear infinite alternate;

  @keyframes down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(40%);
    }
  }
`;

const ImageWrapper = styled.div`
  display: block;
  width: 1.1%;
  margin: 0 auto;
  padding: 4px 0;
`;

const MouseScroll = () => {
  return (
    <div>
      <ScrollingWrapper>
        <ImageWrapper>
          <Image src={Icon1} />
          <Arrow11>
            <Image src={Icon22} />
          </Arrow11>
        </ImageWrapper>
      </ScrollingWrapper>
    </div>
  );
};

export default MouseScroll;
