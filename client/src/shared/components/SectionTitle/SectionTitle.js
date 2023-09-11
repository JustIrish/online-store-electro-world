import PropTypes from 'prop-types';

import { StyledTitle } from './SectionTitle.styled';

const SectionTitle = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
