import styled from 'styled-components';

const Half = styled.div`
  width: 100%;
  position: relative;
  display: ${props => (props.hideMobile ? 'none' : 'block')};
  ${props => props.margin && 'margin: auto; height: 100%;'};

  @media only screen and (min-width: 900px) {
    display: block;
    width: 50%;
    padding: ${props => (props.padding ? props.padding : '0')};
  }
`;

export default Half;
