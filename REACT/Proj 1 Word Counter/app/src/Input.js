import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Input(props) {
    const [mode,setmode]= useState(" ")
    function text(event){
        var x = e.event.target.value;
        console.log(x)
    }

    return (
        <Form style={{marginTop:"3.5%"}}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Text Here
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    );
  }
  
  export default Input;