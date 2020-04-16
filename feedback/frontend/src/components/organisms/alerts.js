import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = ({ error, message }) => {
  const alert = useAlert();
  const [prevError, setPrevError] = useState();
  const [prevMessage, setPrevMessage] = useState();
  const trackedFields = [
    'category_name',
    'category',
    'title',
    'description',
    'username',
    'email',
    'password',
    'age',
  ];

  const messageData = {
    taskDeleted: {
      type: 'success',
    },
    passwordNoMatch: {
      type: 'error',
    },
  };
  const messageNames = Object.keys(messageData);

  useEffect(() => {
    setPrevError(error);
    setPrevMessage(message);
  }, [error, message, prevMessage]);

  useEffect(() => {
    if (prevError !== error) {
      trackedFields.forEach(field => {
        if (error.msg[`${field}`]) {
          alert.error(error.msg[`${field}`].join());
        }
      });
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
      messageNames.forEach(msgName => {
        if (message && message[`${msgName}`]) {
          return messageData[`${msgName}`].type === 'error'
            ? alert.error(message[`${msgName}`])
            : alert.success(message[`${msgName}`]);
        }
      });
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
