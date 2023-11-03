import { useState, useEffect } from "react";
import axios from "axios";

const CountryData = ({ country }) => {

  if (country) {
    return (
        <section className="country">
            <h2>{country.name.common}</h2>
        </section>
        );
  }
};
export default CountryData;
