import { useState } from 'react';

import { toast } from 'react-hot-toast';

import { HiPhone } from 'react-icons/hi';
import { BsFillEnvelopeFill, BsFillGeoFill } from 'react-icons/bs';

import Container from 'shared/components/Container/Container';
import ContactsForm from 'shared/components/ContactsForm/ContactsForm';
import SectionTitle from 'shared/components/SectionTitle/SectionTitle';
import UsersList from 'modules/UsersList/UsersList';

import { fetchUsers } from 'shared/API/api';

import {
  Section,
  FlexWrap,
  FormWrap,
  FormTitle,
  BtnShowUsers,
  ContactsBox,
  FlexBox,
  ContactsList,
  InfoTitle,
  InfoWrap,
  Info,
  SocialWrap,
  Social,
} from './Contacts.styled';

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [isShowUsers, setIsShowUsers] = useState(false);

  const openUserList = async () => {
    setIsShowUsers(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error('Something went wrong...');
    }
  };

  const closeUserList = () => {
    setIsShowUsers(false);
  };

  return (
    <Section>
      <Container>
        <FlexWrap>
          <FormWrap>
            <FormTitle>Запит пропозицій</FormTitle>
            <ContactsForm />
            <BtnShowUsers type="button" onClick={openUserList}>
              Користувачi, якi вже з нами
            </BtnShowUsers>
            {isShowUsers && <UsersList array={users} onClose={closeUserList} />}
          </FormWrap>
          <ContactsBox>
            <SectionTitle title={'Ми завжди Вам радi'} />
            <FlexBox>
              <ContactsList>
                <li>
                  <InfoTitle>Зв'язатися з нами:</InfoTitle>
                  <InfoWrap>
                    <HiPhone size="15" color="#3D3025" />
                    <Info href="tel:+380974663190">+38 (097) 466 31 90</Info>
                  </InfoWrap>
                </li>
                <li>
                  <InfoTitle>Написати:</InfoTitle>
                  <InfoWrap>
                    <BsFillEnvelopeFill size="15" color="#3D3025" />
                    <Info href="mailto:info@mir.electro.com">
                      info@mir.electro.com
                    </Info>
                  </InfoWrap>
                </li>
                <li>
                  <InfoTitle>Завжди бути в курсi:</InfoTitle>
                  <SocialWrap>
                    <Social href="https://www.facebook.com/">Facebook</Social>
                    <Social href="https://www.instagram.com/">Instagram</Social>
                  </SocialWrap>
                </li>
                <li>
                  <InfoTitle>Заходьте у гостi:</InfoTitle>
                  <InfoWrap>
                    <BsFillGeoFill
                      size="25"
                      color="#3D3025"
                      style={{ marginBottom: '10px' }}
                    />
                    <Info href="">
                      м. Днiпро, вул. Глинки 2, ТРЦ “Мiст-Сiтi”
                    </Info>
                  </InfoWrap>
                </li>
              </ContactsList>
              <img
                src={require(`images/map.jpg`)}
                alt="map"
                width="262"
                height="218"
                loading="lazy"
              />
            </FlexBox>
          </ContactsBox>
        </FlexWrap>
      </Container>
    </Section>
  );
};

export default Contacts;
