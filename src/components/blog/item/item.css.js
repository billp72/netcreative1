import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 300;
  margin: 2rem 2rem 1rem;
  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Anchor = styled.span`
  a,
  a:visited,
  a:link {
    text-decoration: underline !important;
  }
`;
