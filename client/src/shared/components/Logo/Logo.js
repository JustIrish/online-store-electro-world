import { SvgLogo, LogoLink, DisplayWrap, Wrap } from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <LogoLink href="/">
        <DisplayWrap>
          {' '}
          M<SvgLogo />R<Wrap> electro</Wrap>
        </DisplayWrap>
      </LogoLink>
    </div>
  );
};

export default Logo;
