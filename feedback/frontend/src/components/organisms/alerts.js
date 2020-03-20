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
