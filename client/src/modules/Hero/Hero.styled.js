import styled from 'styled-components';

import blenders from 'images/hero-img.png';
import blenderbg from 'images/hero-img-bg.png';

export const HeroSection = styled.section`
  padding: 238px 0px 68px;
  background-color: ${({ theme: { colors } }) => colors.bg};
  background-image: url(${blenderbg}), url(${blenders});
  background-position: bottom right, top right 15%;
  background-repeat: no-repeat;
  background-size: contain, contain;
`;

export const Wrap = styled.div`
  position: relative;
  margin-left: 152px;
`;

export const Mark = styled.div`
  position: absolute;
  top: -50px;
  left: -70px;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
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
export const Link = styled.a`
  display: inline-block;
  color: inherit;
  font-family: 'Sansation Regular';
  font-size: 18px;
  font-weight: 700;
  text-decoration-line: underline;
  margin-bottom: 215px;
`;
