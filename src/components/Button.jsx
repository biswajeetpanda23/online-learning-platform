import PropTypes from 'prop-types';

function Button({ text, onClick, type = 'primary' }) {
  const baseStyles = 'py-2 px-4 font-semibold rounded-lg transition ';
  const typeStyles =
    type === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-400'
      : 'bg-gray-500 text-white hover:bg-gray-400';

  return (
    <button onClick={onClick} className={baseStyles + typeStyles}>
      {text}
    </button>
  );
}

// Define PropTypes for Button component
Button.propTypes = {
  text: PropTypes.string.isRequired, // text is required and must be a string
  onClick: PropTypes.func.isRequired, // onClick is required and must be a function
  type: PropTypes.oneOf(['primary', 'secondary']), // type must be 'primary' or 'secondary'
};

// Default props (optional, already handled via default parameter in the function)
Button.defaultProps = {
  type: 'primary',
};

export default Button;
