import { BsPlusCircle } from 'react-icons/bs';

import Container from 'shared/components/Container/Container';
import Link from 'shared/components/Link/Link';

import {
  HeroSection,
  BoxCircle,
  BoxCircleSecond,
  Wrap,
  Mark,
  Title,
  Text,
  Description,
  ImageWrap,
  FlexBox,
  ImageTitle,
  LinkWrap,
  Slider,
  ArrowWrap,
  ArrowLeft,
  ArrowRight,
  FlexWrap,
  Social,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection name="hero">
      <BoxCircle>
        <BoxCircleSecond>
          <Container>
            <ImageWrap>
              <img
                src={require(`images/hero-img.png`)}
                alt="blender"
                width="817"
                height="380"
                loading="lazy"
              />
              <FlexBox>
                <ImageTitle>Sencor SHB 4460WH</ImageTitle>
                <BsPlusCircle size="40" color="#98887A" />
              </FlexBox>
            </ImageWrap>
            <Wrap>
              <Mark>Новинка 2023</Mark>
              <Title>Занурювальний блендер нового поколiння</Title>
              <Text>Зручність. Комфорт. Якість. Гарантія.</Text>
              <Description>
                Відмінний i незамінний помічник на будь-якій кухні для
                приготування та втілення будь-яких кулінарних ідей
              </Description>
              <LinkWrap>
                <Link text="Дiзнатись бiльше" />
              </LinkWrap>
              <Slider>
                01<span>/05</span>
                <ArrowWrap>
                  <ArrowLeft />
                  <ArrowRight />
                </ArrowWrap>
              </Slider>
            </Wrap>

            <FlexWrap>
              {' '}
              <Social href="https://www.facebook.com/">Facebook</Social>
              <Social href="https://www.instagram.com/">Instagram</Social>
            </FlexWrap>
          </Container>
        </BoxCircleSecond>
      </BoxCircle>
    </HeroSection>
  );
};

export default Hero;
