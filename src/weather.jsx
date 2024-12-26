import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./weather.css";
import { useState } from "react";

export default function SearchBox() {
  let [cityname, setCityname] = useState("");

  function changing(event) {
    setCityname(event.target.value);
  }

  function submiting(event) {
    event.preventDefault();
    console.log(cityname);
    setCityname("");
  }

  return (
    <div className="searchbox">
      <h2>Search your state weather</h2>
      <form onSubmit={submiting}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          required
          value={cityname}
          onChange={changing}
          placeholder="Type your state"
        />
        <br />
        <br />
        <Button
          variant="contained"
          size="medium"
          className="button"
          type="submit"
        >
          Show
        </Button>
      </form>
    </div>
  );
}
