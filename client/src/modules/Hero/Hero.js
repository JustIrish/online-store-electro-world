import Container from 'shared/components/Container/Container';
import {
  HeroSection,
  Wrap,
  Mark,
  Title,
  Text,
  Description,
  Link,
  Arrow,
  Slider,
  FlexWrap,
  Social,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Wrap>
          <Mark>Новинка 2023</Mark>
          <Title>Занурювальний блендер нового поколiння</Title>
          <Text>Зручність. Комфорт. Якість. Гарантія.</Text>
          <Description>
            Відмінний і незамінний помічник на будь-якій кухні для приготування
            та втілення будь-яких кулінарних ідей
          </Description>
          <Link href="/">Дiзнатись бiльше</Link>
          <Arrow />
          <Slider>01/05</Slider>
        </Wrap>
        <FlexWrap>
          {' '}
          <Social>Facebook</Social>
          <Social>Instagram</Social>
        </FlexWrap>
      </Container>
    </HeroSection>
  );
};

export default Hero;
