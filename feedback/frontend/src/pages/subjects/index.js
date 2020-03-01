import React from 'react';
import Section from '../../components/atoms/section';
import Half from '../../components/atoms/half';
import FlexWrapper from '../../components/atoms/flex-wrapper';

const Subjects = () => (
  <Section>
    <FlexWrapper align="flex-start">
      <Half padding="1em">
        <h1>Subjects</h1>
      </Half>
      <Half padding="1em">
        <h2>Add new subject</h2>
      </Half>
    </FlexWrapper>
  </Section>
);

export default Subjects;
