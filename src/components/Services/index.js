import React from 'react';
import Icon1 from '../../images/undraw_off_road_9oae.svg';
import Icon2 from '../../images/undraw_secure_data_0rwp.svg';
import Icon3 from '../../images/undraw_growth_analytics_8btt.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

function Services() {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>비용 절감</ServicesH2>
          <ServicesP>개인 또는 법인의 비용을 줄이고 전반적인 수익을 높이는 데 도움을 드립니다.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>비대면 거래</ServicesH2>
          <ServicesP>전 세계 어디서나 온라인으로 어플리케이션에 접속, 거래를 할 수 있습니다.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>
          프리미엄 혜택
          </ServicesH2>
          <ServicesP>놓치지 마세요!<br/> 
            특별 회원카드를 만드시면 5% 캐시백을 해드립니다.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
