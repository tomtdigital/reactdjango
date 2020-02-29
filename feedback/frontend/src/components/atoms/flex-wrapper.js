import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div(
  props => `
  width: 100%;
  display: ${props.mobileHidden ? `none` : `flex`};
  flex-direction: ${props.direction};
  justify-content: ${props.justify};
  align-items: ${props.align};

  @media only screen and (min-width: 500px) {
    ${props.mobileHidden && `display: flex;`}
  }
`
);

const FlexWrapper = ({
  mobileHidden = false,
  justify = 'flex-start',
  align = 'center',
  direction = 'row',
  children,
}) => (
  <Wrapper
    direction={direction}
    justify={justify}
    align={align}
    mobileHidden={mobileHidden}
  >
    {children}
  </Wrapper>
);

FlexWrapper.propTypes = {
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  mobileHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FlexWrapper;
