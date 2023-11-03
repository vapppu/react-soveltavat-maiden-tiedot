const CountryData = ({ country }) => {

  if (country) {
    return (
        <section className="country">
            <h2>{country.name.common}</h2>
            <ul>
                <li>capital: {country.capital[0]}</li>
                <li>area: {country.area}</li>
                <li><figure>
                    <img src={country.flags.png} alt={country.flags.alt}></img>
                </figure>
                </li>
                <li><h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map((language) => <li>{language}</li>)}
                </ul></li>
            </ul>
        </section>
        );
  }
};
export default CountryData;
