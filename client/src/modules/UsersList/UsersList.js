import PropTypes from 'prop-types';

import { AiOutlineClose } from 'react-icons/ai';
import Spinner from 'shared/components/Spinner/Spinner';

import {
  ListWrap,
  BtnClose,
  ListStyled,
  ItemStyled,
  TextName,
  TextEmail,
} from './UsersList.styled';

const UsersList = ({ isLoading, array = [], onClose }) => {
  return (
    <ListWrap>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </ListWrap>
  );
};

UsersList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
  onClose: PropTypes.func.isRequired,
};

export default UsersList;
