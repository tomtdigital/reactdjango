import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { editProfile, getProfile } from '../../actions/profile';
import ProfileFormRdx from '../molecules/profile-form';

export const EditUserProfileForm = ({
  profile,
  getProfileRdx,
  editProfileRdx,
}) => {
  useEffect(() => {
    getProfileRdx();
  }, [getProfileRdx]);

  return (
    <>
      {profile ? (
        <ProfileFormRdx onSubmit={editProfileRdx} profile={profile} />
      ) : (
        <p>Cannot load profile</p>
      )}
    </>
  );
};

EditUserProfileForm.propTypes = {
  profile: PropTypes.object,
  getProfileRdx: PropTypes.func.isRequired,
  editProfileRdx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile.profile[0],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProfileRdx: () => dispatch(getProfile()),
  editProfileRdx: (profile, id) => dispatch(editProfile(profile, id, ownProps)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditUserProfileForm)
);
