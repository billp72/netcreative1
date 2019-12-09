import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 5px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.2s ease;

  background-color: ${({ isVisible }) => (isVisible ? accent : ' #333')};
`;
