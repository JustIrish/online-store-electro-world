import styled, { keyframes } from 'styled-components';

import { Element } from 'react-scroll';

import blenderbg from 'images/hero-img-bg.png';

import { ReactComponent as SvgArrowR } from 'images/svg/arrow-slider-r.svg';
import { ReactComponent as SvgArrowL } from 'images/svg/arrow-slider-l.svg';

const translateIn = keyframes`
0% {
    -webkit-transform: translateX(-500px);
    transform: translateX(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
`;

const scaleIn = keyframes`
0% {
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px);
    transform: scale(2);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transform: scale(1);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  padding: 238px 0px 68px;
  background-color: ${({ theme: { colors } }) => colors.bg};
  background-image: url(${blenderbg});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: -50%;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 13px;
    height: 13px;
    transform: translate(-50%, -50%);
    background-color: #e8e8e8;
    opacity: 0.4;
    border-radius: 50%;
  }
`;

export const BoxCircle = styled(Element)`
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 310px;
    height: 310px;
    transform: translate(-50%, -50%);
    border: 1px solid #e5e5e5;
    opacity: 0.6;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 560px;
    height: 560px;
    transform: translate(-50%, -50%);
    border: 1px solid #e5e5e5;
    opacity: 0.6;
    border-radius: 50%;
  }
`;

export const BoxCircleSecond = styled.div`
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 898px;
    height: 898px;
    transform: translate(-50%, -50%);
    border: 1px solid #e5e5e5;
    opacity: 0.6;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1122px;
    height: 1122px;
    transform: translate(-50%, -50%);
    border: 1px solid #e5e5e5;
    opacity: 0.6;
    border-radius: 50%;
  }
`;

export const Wrap = styled.div`
  position: relative;
  margin-left: 152px;
  margin-bottom: 288px;
  animation: ${translateIn} 2500ms linear;
`;

export const ImageWrap = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-16.5%, -44%);
`;

export const FlexBox = styled.div`
  position: absolute;
  bottom: 30%;
  left: 42%;

  display: flex;
  align-items: center;
  gap: 56px;
  padding: 19px 30px;

  border-width: 1px;
  border-radius: 10px;
  border-color: transparent;
  border-style: solid;
  box-shadow: 1px 1px 2px rgba(152, 136, 122, 0.5);
`;

export const ImageTitle = styled.p`
  font-family: 'Sansation Regular';
  font-size: 22px;
  font-weight: 400;
`;

export const Mark = styled.div`
  position: absolute;
  top: -50px;
  left: -70px;
  width: 200px;
  height: 70px;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  animation: ${scaleIn} 2500ms linear;
  animation-delay: 1000ms;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -40px;
    width: 100%;
    height: 100%;

    border: 2px solid ${({ theme: { colors } }) => colors.secondaryTxt};
    border-radius: 50%;
    rotate: -15deg;
  }
`;

export const Title = styled.h1`
  font-family: 'Sansation Regular';
  font-size: 60px;
  font-weight: 400;
  line-height: 1.009;
  max-width: 750px;
  margin-bottom: 25px;
`;

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
  max-width: 420px;
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 250px;
`;

export const Slider = styled.p`
  position: absolute;
  left: 38%;
  bottom: -300px;
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-family: 'Sansation Regular';
  font-size: 42px;
  font-weight: 400;
  line-height: 1.009;

  span {
    color: #e5e5e5;
    font-size: 26px;
  }
`;

export const ArrowWrap = styled.span`
  display: flex;
  align-items: center;
  gap: 29px;
  margin-top: 40px;
`;

export const ArrowLeft = styled(SvgArrowL)`
  width: 52px;
`;

export const ArrowRight = styled(SvgArrowR)`
  width: 52px;
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Social = styled.a`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-family: 'Sansation Regular';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.009;
`;
