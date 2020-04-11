import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import links from '../../data/navigation/header-nav.json';
import linksSignedIn from '../../data/navigation/header-nav-auth.json';
import NavLinks from '../molecules/nav-links.js';
import FlexWrapper from '../atoms/flex-wrapper.js';
import Container from '../atoms/container';
import { logout } from '../../actions/auth';

const HeaderNav = ({ isAuthenticated, logoutRdx }) => {
  const linkData = isAuthenticated ? linksSignedIn : links;
  return (
    <nav>
      <Container padding="1em">
        <FlexWrapper justify="space-between">
          <NavLinks data={linkData} />
          {isAuthenticated && (
            <button type="button" onClick={logoutRdx}>
              Logout
            </button>
          )}
        </FlexWrapper>
      </Container>
    </nav>
  );
};

HeaderNav.propTypes = {
  isAuthenticated: PropTypes.bool,
  logoutRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logoutRdx: logout })(HeaderNav);
