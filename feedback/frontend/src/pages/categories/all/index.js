import React from 'react';
import Section from '../../../components/atoms/section';
import Half from '../../../components/atoms/half';
import FlexWrapper from '../../../components/atoms/flex-wrapper';
import CategoryTableRdx from '../../../components/organisms/category-table';
import NewCategoryFormRdx from '../../../components/organisms/new-category-form';
import Container from '../../../components/atoms/container';

const Categories = () => (
  <Section>
    <Container>
      <FlexWrapper align="flex-start">
        <Half padding="1em">
          <h1>Categories</h1>
          <CategoryTableRdx />
        </Half>
        <Half padding="1em">
          <h2>Add new category</h2>
          <NewCategoryFormRdx />
        </Half>
      </FlexWrapper>
    </Container>
  </Section>
);

export default Categories;
