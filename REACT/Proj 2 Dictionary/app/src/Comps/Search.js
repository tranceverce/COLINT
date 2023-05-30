import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from "react";



function Search({setVer}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        console.log(inputValue);
        setVer(inputValue);

    };
  return (
    // define a funtion that takes input of a textbox react?
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Word"
          aria-label="Word"
          aria-describedby="basic-addon2"
          onChange={ handleInputChange }
        />
        <Button variant="outline-primary" id="button-addon2" onClick={ handleButtonClick} >
          Search
        </Button>
      </InputGroup>
  );
}

export default Search;