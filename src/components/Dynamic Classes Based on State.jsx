//if prop and state name is same conflict then Rename either the prop or the state variable to avoid the conflict.
import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ToggleButton = ({ isActive: propIsActive }) => {
  const [isActive, setIsActive] = useState(propIsActive); // Initialize state from the prop

  const buttonClass = classNames('button', {
    'button-active': isActive,
    'button-inactive': !isActive,
  });

  return (
    <button className={buttonClass} onClick={() => setIsActive(!isActive)}>
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
};
ToggleButton.propTypes={
    isActive: PropTypes.bool.isRequired, // Prop type validation
}
export default ToggleButton;
