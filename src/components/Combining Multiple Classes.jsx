
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Alert = ({ type, message }) => {
  const alertClass = classNames('alert', {
    'alert-success': type === 'success',
    'alert-error': type === 'error',
    'alert-warning': type === 'warning',
  });

  return <div className={alertClass}>{message}</div>;
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  message: PropTypes.string.isRequired,
};
export default Alert;
