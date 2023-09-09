import styled from 'styled-components';

import blenders from 'images/hero-img.png';
import blenderbg from 'images/hero-img-bg.png';

export const HeroSection = styled.section`
  position: relative;
  padding: 238px 0px 68px;
  background-color: ${({ theme: { colors } }) => colors.bg};
  background-image: url(${blenderbg}), url(${blenders});
  background-position: bottom right, top right 15%;
  background-repeat: no-repeat;
  background-size: contain, contain;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 310px;
    height: 310px;
    transform: translate(-50%, -50%);
    border: 2px solid #e5e5e5;
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
    border: 2px solid #e5e5e5;
    border-radius: 50%;
  }

  /* &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 898px;
    height: 898px;
    transform: translate(-50%, -50%);
    border: 2px solid #e5e5e5;
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
    border: 2px solid #e5e5e5;
    border-radius: 50%;
  } */
`;

export const Wrap = styled.div`
  position: relative;
  max-width: 50%;
  margin-left: 152px;
  margin-bottom: 288px;
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
  right: 100px;
  bottom: -257px;
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-family: 'Sansation Regular';
  font-size: 42px;
  font-weight: 400;
  line-height: 1.009;
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Social = styled.p`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-family: 'Sansation Regular';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.009;
`;
