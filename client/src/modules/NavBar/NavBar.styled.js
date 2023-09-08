import styled from 'styled-components';

import { ReactComponent as SvgUser } from 'images/svg/user.svg';
import { ReactComponent as SvgBag } from 'images/svg/bag.svg';

export const NavSlyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Link = styled.a`
  position: relative;
  color: inherit;
  font-size: 20px;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

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
    color: ${({ theme: { colors } }) => colors.accent};
    &::before {
      opacity: 1;
    }
  }
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 30px;
  }
`;

export const ContactsText = styled.p`
  margin-left: 6px;
  font-size: 20px;
`;

export const Bag = styled(SvgBag)`
  width: 23px;
  height: 26px;
`;

export const User = styled(SvgUser)`
  width: 20px;
  height: 25px;
`;
