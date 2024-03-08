import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import PropTypes from "prop-types";
import Message from "./Message";

//PropTypes

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Please select your city by clicking on a location on the map." />
    );

  // Extract unique countries from the cities array
  const uniqueCountries = [...new Set(cities.map((city) => city.country))];
  console.log(uniqueCountries);
  // Create a new array 'countries' with objects containing country, emoji, and date
  const countries = uniqueCountries.map((country) => {
    const city = cities.find((city) => city.country === country);
    return {
      country: city.country,
      emoji: city.emoji,
      date: city.date,
      id: city.id,
    };
  });

  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
