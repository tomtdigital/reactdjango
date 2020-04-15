import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProfile } from '../../actions/profile';

export const ProfileDetails = ({ profile, getProfileRdx }) => {
  useEffect(() => {
    getProfileRdx();
  }, [getProfileRdx]);
  return (
    <>
      {profile ? (
        <div>
          <h3>Personal Information</h3>
          <p>First name: {profile.first_name}</p>
          <p>Last name: {profile.last_name}</p>
          <p>Age: {profile.age}</p>
          <p>About me: {profile.about_me}</p>
          <Link to="/profile/edit-profile">Edit</Link>
        </div>
      ) : (
        <div>
          <p>Could not find profile</p>
        </div>
      )}
    </>
  );
};

ProfileDetails.propTypes = {
  profile: PropTypes.object,
  getProfileRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile.profile[0],
});

export default connect(mapStateToProps, { getProfileRdx: getProfile })(
  ProfileDetails
);
