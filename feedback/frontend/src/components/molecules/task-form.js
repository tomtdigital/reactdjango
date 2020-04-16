import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSortObjectArray } from '../../utils/use-sort-object-array';
import TextInput from '../atoms/text-input';
import Select from '../atoms/select';
import TextArea from '../atoms/text-area';

export const TaskForm = ({ task, categories, onSubmit }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setCategory(task.category);
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const resetForm = () => {
    setCategory('');
    setTitle('');
    setDescription('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const taskData = { category, title, description };
    if (task) {
      onSubmit(taskData, task.id);
    } else {
      onSubmit(taskData);
    }
    resetForm();
  };

  const sortObjectArray = useSortObjectArray;
  const sortedCategories =
    categories && categories.sort(sortObjectArray('category_name'));

  return (
    <form onSubmit={handleSubmit}>
      <Select label="Category" value={category} onChange={setCategory}>
        {sortedCategories.map((subj, index) => (
          <option key={index} value={subj.category_name}>
            {subj.category_name}
          </option>
        ))}
      </Select>
      <TextInput label="Title" value={title} onChange={setTitle} />
      <TextArea
        label="Description"
        value={description}
        onChange={setDescription}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

TaskForm.propTypes = {
  task: PropTypes.object,
  categories: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
