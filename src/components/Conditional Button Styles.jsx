/*eslint-disable*/
import classNames from 'classnames';

const Button = ({ isPrimary, isDisabled, label }) => {
  const buttonClass = classNames('button', {
    'button-primary': isPrimary,
    'button-disabled': isDisabled,
    'button-secondary': !isPrimary && !isDisabled,
  });

  return <button className={buttonClass} disabled={isDisabled}>{label}</button>;
};

export default Button;
