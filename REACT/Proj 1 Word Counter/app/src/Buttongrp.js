import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Buttongrp() {
  return (
    <ButtonGroup aria-label="Basic example" style={{
        alignItems:"center",
        margin: "2.5%"
    }}>
      <Button variant="success">UPPER</Button>
      <Button variant="success">LOWER</Button>
      <Button variant="danger">CLEAR</Button>
    </ButtonGroup>
  );
}

export default Buttongrp;
