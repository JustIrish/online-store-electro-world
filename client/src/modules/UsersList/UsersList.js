import PropTypes from 'prop-types';

import { AiOutlineClose } from 'react-icons/ai';

import {
  ListWrap,
  BtnClose,
  ListStyled,
  ItemStyled,
  TextName,
  TextEmail,
} from './UsersList.styled';

const UsersList = ({ array = [], onClose }) => {
  return (
    <ListWrap>
      <BtnClose onClick={onClose}>
        <AiOutlineClose size="30" />
      </BtnClose>
      <ListStyled>
        {array.map(({ _id, name, email }) => (
          <ItemStyled key={_id}>
            <TextName>{name}</TextName>
            <TextEmail>{email}</TextEmail>
          </ItemStyled>
        ))}
      </ListStyled>
    </ListWrap>
  );
};

UsersList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UsersList;
