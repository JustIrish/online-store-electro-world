import PropTypes from 'prop-types';

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

Link.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Link;
