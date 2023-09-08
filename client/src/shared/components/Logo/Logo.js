import { SvgLogo, LogoLink, DisplayWrap, Box, Wrap } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink href="/">
      <DisplayWrap>
        <Box>
          M<SvgLogo />R
        </Box>
        <Wrap>electro</Wrap>
      </DisplayWrap>
    </LogoLink>
  );
};

export default Logo;
