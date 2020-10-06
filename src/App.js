import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Infobox from './InfoBox';
import './App.css';

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState('worldwide');

	useEffect(() => {
		
		const getCountriesData = async () => {
			await fetch("https://disease.sh/v3/covid-19/countries")
			.then((response) => response.json())
			.then((data) => {
				const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
				}));
				setCountries(countries);
			});
		}
		getCountriesData();
	}, [countries]);

	const onCountryChange = (event) => {
		const countryCode = event.target.value;

		setCountry(countryCode);
	}

	return (
		<div className="app">
			<div className="app__header">
				<h1>COVID-19 TRACKER</h1>
				<FormControl className="app__dropdown">
					<Select
						variant="outlined"
						value={country}
						onChange={onCountryChange}
					>
						<MenuItem value="worldwide">worldwide</MenuItem>
						{
							countries.map((country) => (
								<MenuItem value={country.value}>{country.name}</MenuItem>
							))
						}
					</Select>
				</FormControl>
			</div>
			<div className="app__stats">
				<Infobox title="Coronavirus cases" cases={3000} total={3000}></Infobox>

				<Infobox title="Recovered" cases={3000} total={3000}></Infobox>

				<Infobox title="Death" cases={3000} total={3000}></Infobox>
			</div>
      
      

      {/*Table */}
      {/*Graph */}

      {/*Map */}
    </div>
  );
}

export default App;
