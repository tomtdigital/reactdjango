import React from 'react';
import Section from '../../components/atoms/section';
import Half from '../../components/atoms/half';
import FlexWrapper from '../../components/atoms/flex-wrapper';
import SubjectTableRdx from '../../components/organisms/subject-table';
import NewSubjectFormRdx from '../../components/organisms/new-subject-form';

const Subjects = () => (
  <Section>
    <FlexWrapper align="flex-start">
      <Half padding="1em">
        <h1>Subjects</h1>
        <SubjectTableRdx />
      </Half>
      <Half padding="1em">
        <h2>Add new subject</h2>
        <NewSubjectFormRdx />
      </Half>
    </FlexWrapper>
  </Section>
);

export default Subjects;
