import  { useState } from 'react';
import classNames from 'classnames';

const ButtonComponent = () => {
  const [isActive, setIsActive] = useState(false);

  // Toggle the button's active/inactive state on click
  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Conditionally applying the 'button-active' class using classnames
  const buttonClass = classNames('button-two', isActive && 'button-two-active ');

  return (
    <div>
      <button
        className={buttonClass}
        onClick={handleClick}
      >
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  );
};

export default ButtonComponent;
