import styles from "./Button.module.css";
import PropTypes from "prop-types";

//PropTypes

Button.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
