import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  background: ${props => (props.background ? props.background : 'transparent')};

  @media only screen and (min-width: 900px) {
    margin-bottom: ${props => props.bottomMargin};
  }

  > div {
    padding-left: 1.5em;
    padding-right: 1.5em;

    @media only screen and (min-width: 500px) {
      padding-left: 3em;
      padding-right: 3em;
    }

    @media only screen and (min-width: 900px) {
      padding-left: 4.5em;
      padding-right: 4.5em;
    }

    @media only screen and (min-width: 1100px) {
      padding-left: 7.5em;
      padding-right: 7.5em;
    }
  }
`;

export default Section;
