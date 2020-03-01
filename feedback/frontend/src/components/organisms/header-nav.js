import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import linkData from '../../data/navigation/header-nav.json';
import NavLinks from '../molecules/nav-links.js';
import FlexWrapper from '../atoms/flex-wrapper.js';

const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const HeaderNav = () => (
  <FlexWrapper justify="space-between">
    <HomeLink to="/">Compass</HomeLink>
    <NavLinks data={linkData} />
  </FlexWrapper>
);

export default HeaderNav;
