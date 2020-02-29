import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => (props.padding ? props.padding : '1.5em')};
`;

export default Container;
