import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { editProfile, getProfile } from '../../actions/profile';
import Label from '../atoms/label';

export const EditUserProfileForm = ({
  profile,
  getProfileRdx,
  editProfileRdx,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  useEffect(() => {
    getProfileRdx();
  }, [getProfileRdx]);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name);
      setLastName(profile.last_name);
      setAge(profile.age);
      setAboutMe(profile.about_me);
    }
  }, [profile]);

  const handleSubmit = event => {
    event.preventDefault();
    const profileUpdate = {
      first_name: firstName,
      last_name: lastName,
      age,
      about_me: aboutMe,
    };
    editProfileRdx(profileUpdate, profile.id);
  };

  return (
    <>
      {profile ? (
        <form onSubmit={handleSubmit}>
          <Label htmlFor="firstName">
            First Name
            <input
              id="firstName"
              name="firstName"
              onChange={e => setFirstName(e.target.value)}
              value={firstName || ''}
            />
          </Label>
          <Label htmlFor="lastName">
            Last Name
            <input
              id="lastName"
              name="lastName"
              onChange={e => setLastName(e.target.value)}
              value={lastName || ''}
            />
          </Label>
          <Label htmlFor="age">
            Age
            <input
              type="number"
              id="age"
              name="age"
              onChange={e => setAge(e.target.value)}
              value={age || ''}
            />
          </Label>
          <Label htmlFor="aboutMe">
            About Me
            <textarea
              id="aboutMe"
              name="aboutMe"
              onChange={e => setAboutMe(e.target.value)}
              value={aboutMe || ''}
            />
          </Label>
          <button type="submit">Submit</button>
        </form>
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
