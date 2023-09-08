import styled from 'styled-components';

import { ReactComponent as Logo } from 'images/svg/blender.svg';

export const SvgLogo = styled(Logo)`
  width: 13px;
  height: 38px;
`;

export const LogoLink = styled.a`
  /* font-family: Sansation; */
  color: ${({ theme: { colors } }) => colors.accent};
  font-size: 34px;
  font-weight: 700;
  /* transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.accent};
  } */
`;

export const DisplayWrap = styled.span`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.span`
  font-size: 30px;
  font-weight: 400;
`;
