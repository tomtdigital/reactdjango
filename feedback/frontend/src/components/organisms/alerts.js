import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = ({ error, message }) => {
  const alert = useAlert();
  const [prevError, setPrevError] = useState();
  const [prevMessage, setPrevMessage] = useState();

  useEffect(() => {
    setPrevError(error);
    setPrevMessage(message);
  }, [error, message, prevMessage]);

  useEffect(() => {
    if (prevError !== error) {
      if (error.msg.category)
        alert.error(`Category: ${error.msg.category.join()}`);
      if (error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
      if (error.msg.description)
        alert.error(`Description: ${error.msg.description.join()}`);
      if (error.msg.non_field_errors) {
        error.msg.non_field_errors.forEach(error => {
          if (error.includes('make a unique set')) {
            alert.error(error.replace('make a unique set', 'not be the same'));
          } else {
            alert.error(error);
          }
        });
      }
    }
  });

  useEffect(() => {
    if (message !== prevMessage) {
      if (message && message.assignmentDeleted)
        alert.success(message.assignmentDeleted);
    }
  });

  return <></>;
};

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(Alerts);
