import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 100%;
  background: white url(${props => props.inputColor || ''}) no-repeat fixed
    center 70px;
`;
