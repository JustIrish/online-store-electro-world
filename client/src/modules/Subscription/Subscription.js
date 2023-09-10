import { BsFillEnvelopeFill } from 'react-icons/bs';

import Container from 'shared/components/Container/Container';
import SectionTitle from 'shared/components/SectionTitle/SectionTitle';
import SearchBar from 'shared/SearchBar/SearchBar';
import Link from 'shared/components/Link/Link';

import { Section, FlexWrap, TitleWrap, Text } from './Subscription.styled';

const Subscription = () => {
  return (
    <Section>
      <Container>
        <FlexWrap>
          <TitleWrap>
            <SectionTitle
              title={
                'Хочете бути в курсi всiх останнiх новинок у свiтi побутової технiки?'
              }
            />
            <Text>Запевняємо Вас, нiякого спаму – тiльки у справi</Text>
          </TitleWrap>
          <SearchBar text={'Введiть ваш email'} icon={BsFillEnvelopeFill} />
          <div>
            <Link text={'Пiдписатися'} />
          </div>
        </FlexWrap>
      </Container>
    </Section>
  );
};

export default Subscription;
