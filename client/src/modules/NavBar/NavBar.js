import { HiPhone } from 'react-icons/hi';
import { ImSearch } from 'react-icons/im';

import Logo from 'shared/components/Logo/Logo';

import {
  NavSlyled,
  MenuList,
  StyledLink,
  Contacts,
  ContactsText,
  Bag,
  User,
} from './NavBar.styled';

import items from './menuItems.json';
import SearchBar from 'shared/components/SearchBar/SearchBar';

const NavBar = () => {
  return (
    <>
      <NavSlyled>
        <Logo />
        <SearchBar text={'Ваш запит'} icon={ImSearch} />
        <MenuList>
          {' '}
          {items.map(({ id, text, link }) => (
            <li key={id}>
              <StyledLink to={link} smooth={true} duration={500}>
                {text}
              </StyledLink>
            </li>
          ))}
        </MenuList>
        <Contacts>
          <HiPhone size="15" color="#3D3025" />
          <ContactsText href="tel:+380974663190">
            +38 (097) 466 31 90
          </ContactsText>
          <Bag />
          <User />
        </Contacts>
      </NavSlyled>
    </>
  );
};

export default NavBar;
