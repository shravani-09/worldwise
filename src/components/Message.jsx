import styles from "./Message.module.css";
import PropTypes from "prop-types";

//PropTypes
Message.propTypes = {
  message: PropTypes.string,
};
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
