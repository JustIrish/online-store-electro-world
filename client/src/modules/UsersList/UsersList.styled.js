import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left center;
  }
  50% {
    opacity: 0.3;
    transform: scale(0.5);
  }
  70%{
    opacity: 0.5;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ListWrap = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  padding: 80px;
  background-color: #fff;
  overflow-y: auto;
  animation: ${scaleIn} 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(204, 197, 197);
    border-radius: 5px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.primaryTxt};
  }
`;

export const ListStyled = styled.ol`
  list-style: decimal;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemStyled = styled.li``;

export const TextName = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const TextEmail = styled.p`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-size: 22px;
  margin-left: 20px;
`;
