import { HiPhone } from 'react-icons/hi';

import Logo from 'shared/components/Logo/Logo';

import {
  NavSlyled,
  MenuList,
  Link,
  Contacts,
  ContactsText,
  Bag,
  User,
} from './NavBar.styled';

import items from './menuItems.json';
import SearchBar from 'modules/SearchBar/SearchBar';

const NavBar = () => {
  return (
    <>
      <NavSlyled>
        <Logo />
        <SearchBar />
        <MenuList>
          {' '}
          {items.map(({ id, text, link }) => (
            <li key={id}>
              <Link href={link}>{text}</Link>
            </li>
          ))}
        </MenuList>
        <Contacts>
          <HiPhone size="15" color="#3D3025" />
          <ContactsText>+38 (097) 466 31 90</ContactsText>
          <Bag />
          <User />
        </Contacts>
      </NavSlyled>
    </>
  );
};

export default NavBar;
