import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { editProfile, getProfile } from '../../actions/profile';
import TextInput from '../atoms/text-input';
import TextArea from '../atoms/text-area';

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
          <TextInput
            label="First Name"
            value={firstName}
            onChange={setFirstName}
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChange={setLastName}
          />
          <TextInput label="Age" type="number" value={age} onChange={setAge} />
          <TextArea label="About Me" value={aboutMe} onChange={setAboutMe} />
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
