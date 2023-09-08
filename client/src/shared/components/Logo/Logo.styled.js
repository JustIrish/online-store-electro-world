import styled from 'styled-components';

import { ReactComponent as Logo } from 'images/svg/blender.svg';

export const SvgLogo = styled(Logo)`
  width: 13px;
  height: 38px;
`;

export const LogoLink = styled.a`
  font-family: 'Sansation Regular';
  color: ${({ theme: { colors } }) => colors.accent};
  font-size: 34px;
  font-weight: 700;
`;

export const Box = styled.span`
  display: flex;
  align-items: center;
  margin-right: 6px;
`;

export const DisplayWrap = styled.span`
  display: flex;
  align-items: baseline;
`;

export const Wrap = styled.span`
  position: relative;
  font-size: 30px;
  font-weight: 400;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme: { colors } }) => colors.accent};
    opacity: 0;
    transition: opacity 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 1;
    }
  }
`;
