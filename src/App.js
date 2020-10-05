import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID-19 TRACKER</h1>

      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="worldwide">worldwide</MenuItem>
          <MenuItem value="worldwide">worldwide</MenuItem>
          <MenuItem value="worldwide">worldwide</MenuItem>
          <MenuItem value="worldwide">worldwide</MenuItem>
        </Select>
      </FormControl>

      {/*Header */}
      {/*Title + select input dropdown field */}

      {/*Infobox */}
      {/*Infobox */}
      {/*Infobox */}

      {/*Table */}
      {/*Graph */}

      {/*Map */}
    </div>
  );
}

export default App;
