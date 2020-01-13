import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 0 0rem;
  margin: 0rem 0;
  ${MEDIA.TABLET`
    display: block;
  `};
`;
