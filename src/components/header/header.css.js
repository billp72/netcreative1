import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const Image = styled.div`
  ${MEDIA.PHONE`
      display: none;
  `};

  ${MEDIA.TABLET`
      display: none;
  `};
`;
