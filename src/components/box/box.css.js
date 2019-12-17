import styled from 'styled-components';
//import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 10rem 4rem;
  max-width: 100%;
  background: white url(${props => props.inputColor || ''}) no-repeat fixed
    center 40%;
`;
