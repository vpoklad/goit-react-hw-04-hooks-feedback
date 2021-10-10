import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.options}>
      {options.map(option => (
        <button
          className={s.button}
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
