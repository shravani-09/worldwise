import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

//PropTypes

CountryItem.propTypes = {
  country: PropTypes.object,
  emoji: PropTypes.string,
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
