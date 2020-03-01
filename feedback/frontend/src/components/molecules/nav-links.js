import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavUL = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0;
`;

const NavLi = styled.li`
  margin-right: 1em;
  a {
    text-decoration: none;
    color: black;
  }
`;

const NavLinks = ({ data }) => (
  <NavUL>
    {data.map(item => (
      <NavLi>
        <Link to={item.path}>{item.text}</Link>
      </NavLi>
    ))}
  </NavUL>
);

NavLinks.propTypes = {
  data: PropTypes.array,
};

export default NavLinks;
