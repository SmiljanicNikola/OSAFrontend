import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AuthenticationService } from "../services/AuthenticationService";
import KorisnikService from '../services/KorisnikService';


const Login = () => {
  
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const[korisnik,setKorisnik] = useState(undefined);

  // Funkcija koja prima naziv polja koje će se ažurirati, a potom i događaj koji je doveo do tog ažuriranja
  // Iz događaja je moguće izvući novu vrednost polja
  const handleFormInputChange = (name) => (event) => {
    const val = event.target.value;

    // ... - Destructuring assignment - omogućuje raspakivanje vrednosti objekata ili nizova
    // setCredentails će zameniti stanje novim objektom koji uzima vrednosti iz prethodnog stanja kredencijala
    // ali sa ažuriranom vrednošću [name] polja
    setCredentials({ ...credentials, [name]: val });
  };
  
  const login = async () => {
    await AuthenticationService.login(credentials);
    
  };

  // Return vraća JSX (JavaScript XML) - notaciju kroz koju je moguće elemente unutar React-a
  // Ovi elementi ujedno mogu da sadrže deklaraciju UI komponeti i poslovnu logiku
  // JSX je samo notacije te komponente koje se vraćaju ne moraju da budu samo vezane za HTML tagove
  // Koristi se i u drugim projektima poput React Native

  // JSX nije nužno koristi - ovo je samo deklarativan zapis funkcija koje će React izvesti
  // https://reactjs.org/docs/react-without-jsx.html
  
  return (

    <Container className="card col-md-6 offset-md-3" style={{backgroundColor:' #101522'}}>
      <br></br><br></br>
      <Row >
        <Col md={{ span: 6, offset: 3 }} style={{ textAlign: "center" }}>
          <Form >
            <Form.Group >
              <Form.Label style={{color:'white'}}>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleFormInputChange("username")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{color:'white', marginTop:'15px'}}>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleFormInputChange("password")}
              />
            </Form.Group><br></br>
            <Button variant="success" onClick={login}>
              Log in
            </Button><br></br>
          </Form>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
};

export default Login;
