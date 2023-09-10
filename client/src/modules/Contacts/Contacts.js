import { HiPhone } from 'react-icons/hi';
import { BsFillEnvelopeFill, BsFillGeoFill } from 'react-icons/bs';

import Container from 'shared/components/Container/Container';
import Link from 'shared/components/Link/Link';
import SectionTitle from 'shared/components/SectionTitle/SectionTitle';

import {
  Section,
  FlexWrap,
  FormWrap,
  FormTitle,
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
  return (
    <Section>
      <Container>
        <FlexWrap>
          <FormWrap>
            <FormTitle>Запит пропозицій</FormTitle>
            <form>
              <input />
              <input />
              <input />
            </form>
            <div>
              <Link text={'Замовити дзвiнок'} />
            </div>
          </FormWrap>
          <ContactsBox>
            <SectionTitle title={'Ми завжди Вам радi'} />
            <FlexBox>
              <ContactsList>
                <li>
                  <InfoTitle>Зв'язатися з нами:</InfoTitle>
                  <InfoWrap>
                    <HiPhone size="15" color="#3D3025" />
                    <Info>+38 (097) 466 31 90</Info>
                  </InfoWrap>
                </li>
                <li>
                  <InfoTitle>Написати:</InfoTitle>
                  <InfoWrap>
                    <BsFillEnvelopeFill size="15" color="#3D3025" />
                    <Info>info@mir.electro.com</Info>
                  </InfoWrap>
                </li>
                <li>
                  <InfoTitle>Завжди бути в курсi:</InfoTitle>
                  <SocialWrap>
                    <Social>Facebook</Social>
                    <Social>Instagram</Social>
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
                    <Info>м. Днiпро, вул. Глинки 2, ТРЦ “Мiст-Сiтi”</Info>
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
