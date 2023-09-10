import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme: { colors } }) => colors.secondaryBg};
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
`;

export const FormTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-bottom: 71px;
`;

export const ContactsBox = styled.div`
  padding: 148px 80px 135px;
  background-color: #fff;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 90px;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 330px;
`;

export const InfoTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.secondaryTxt};
  font-size: 22px;
  margin-bottom: 8px;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Info = styled.p`
  font-size: 20px;
`;

export const SocialWrap = styled.p`
  display: flex;
  gap: 40px;
`;

export const Social = styled.p`
  font-family: 'Sansation Regular';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.009;
`;
