import { HiPhone } from 'react-icons/hi';
import { GiShoppingBag } from 'react-icons/gi';
import { BsPersonFill } from 'react-icons/bs';

import Logo from 'shared/components/Logo/Logo';

import {
  NavSlyled,
  MenuList,
  Link,
  Contacts,
  ContactsText,
} from './NavBar.styled';

import items from './menuItems.json';

const NavBar = () => {
  return (
    <>
      <NavSlyled>
        <Logo />
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
          <GiShoppingBag size="23" color="#3D3025" />
          <BsPersonFill size="23" color="#3D3025" />
        </Contacts>
      </NavSlyled>
    </>
  );
};

export default NavBar;
