import offroad from '../../images/undraw_off_road_9oae.svg';
import savings from '../../images/undraw_Savings_re_eq4w.svg';
import secureData from '../../images/undraw_secure_data_0rwp.svg';

export const homeObjOne = {
  id:'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: '수수료없는 무제한 거래',
  description: '수수료없이 무제한으로 거래하실 수 있습니다. 어플리케이션으로 간편하게 이용하세요.',
  buttonLabel: '시작하기',
  imgStart: false,
  img: offroad,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id:'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimitied Access',
  headline: '언제 어디서나',
  description: '전 세계 어디서나 모바일 또는 웹으로 간편하게 거래하실 수 있습니다.',
  buttonLabel: '더 알아보기',
  imgStart: true,
  img: savings,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id:'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: '쉽고 빠른 계좌 개설',
  description: "10분이면 충분합니다. 정보를 추가하기만 하면 준비가 완료됩니다.",
  buttonLabel: '계좌 개설하기',
  imgStart: false,
  img: secureData,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true
};