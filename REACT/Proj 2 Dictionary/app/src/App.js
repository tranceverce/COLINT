import './App.css';
import { Container } from 'react-bootstrap';
import Top from './Comps/Top';
import Search from './Comps/Search';
import DispRes from './Comps/DispResult';
import React, { useState } from "react";


function App() {
  const [ver, setVer] = useState("");
  
  return (
    <div>
      <Top/>
      <Container> <Search setVer = { setVer }/> </Container>
      <Container> <DispRes  ver = { ver }/> </Container>
    </div>
  );
}

export default App;
