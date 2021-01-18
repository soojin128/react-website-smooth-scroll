import React, {useState} from 'react';
import video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight} from './HeroElements';

const HeroSection = () => {
const [hover, setHover] = useState(false);

const onHover = () => {
  setHover(!hover);
}
  return (
    <HeroContainer id='Home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
        지금 새로운 계좌를 만드시면 다음 결제시<br/>5000포인트를 드립니다.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          >
            계좌 개설하기 {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
