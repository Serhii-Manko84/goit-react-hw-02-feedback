import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, goodPercentage }) => {
  return (
    <ul>
      <li className={css.item}>
        <p className={css.text}>
          Good: <span className={css.value}>{good}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Neutral: <span className={css.value}>{neutral}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Bad: <span className={css.value}>{bad}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Total: <span className={css.value}>{total}</span>
        </p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Positive feedback:
          <span className={css.value}> {goodPercentage}</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goodPercentage: PropTypes.string.isRequired,
};
