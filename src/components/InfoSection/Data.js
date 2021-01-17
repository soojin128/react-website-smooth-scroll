import offroad from '../../images/undraw_off_road_9oae.svg';
import savings from '../../images/undraw_Savings_re_eq4w.svg';
import secureData from '../../images/undraw_secure_data_0rwp.svg';

export const homeObjOne = {
  id:'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get started',
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
  headline: 'Login to your account at any time',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Lern More',
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
  headline: 'Creating an account is extremely easy',
  description: "Get everyThing set up and ready in under 10 minutes. All you need to do is add tyour information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: secureData,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true
};