import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 80px 0px;
`;

export const Text = styled.p`
  width: 320px;
  margin-bottom: 70px;
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-size: 22px;
`;

export const BgText = styled.div`
  position: absolute;
  z-index: -5;
  left: -30px;
  top: 0;
  color: rgba(152, 136, 122, 0.06);
  font-family: 'Sansation Regular';
  font-size: 300px;
  font-weight: 400;
  line-height: 1.009;
  letter-spacing: 10px;

  &::before {
    content: '';
    position: absolute;
    width: 104%;
    height: 1px;
    bottom: 35px;
    left: 30px;
    background-color: ${({ theme: { colors } }) => colors.accent};
    opacity: 0.7;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin-bottom: 81px;
`;
