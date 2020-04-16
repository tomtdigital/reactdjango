import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../atoms/text-input';
import TextArea from '../atoms/text-area';

export const ProfileForm = ({ profile, onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [aboutMe, setAboutMe] = useState('');

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
    const profileData = {
      first_name: firstName,
      last_name: lastName,
      age,
      about_me: aboutMe,
    };
    if (profile) {
      onSubmit(profileData, profile.id);
    } else {
      onSubmit(profileData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="First Name" value={firstName} onChange={setFirstName} />
      <TextInput label="Last Name" value={lastName} onChange={setLastName} />
      <TextInput label="Age" type="number" value={age} onChange={setAge} />
      <TextArea label="About Me" value={aboutMe} onChange={setAboutMe} />
      <button type="submit">Submit</button>
    </form>
  );
};

ProfileForm.propTypes = {
  profile: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;
