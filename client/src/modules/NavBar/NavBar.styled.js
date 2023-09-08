import styled from 'styled-components';

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
  color: inherit;
  font-size: 20px;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.accent};
    text-decoration: underline;
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