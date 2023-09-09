import { StyledLink, Arrow, Ellipse } from './Link.styled';

const Link = ({ text }) => {
  return (
    <>
      <StyledLink href="/">
        <Ellipse />
        {text}
      </StyledLink>
      <Arrow />
    </>
  );
};

export default Link;
