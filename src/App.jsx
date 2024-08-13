import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Notfound from "../Components/404/Notfound.jsx"
// import Right from "../Components/Right/Right.jsx";
// import Left from "../Components/Left/left.jsx";
import Home from "../Components/Home/Home.jsx"
import { Route, Routes } from 'react-router-dom';

// import Right from "../Components/Right.jsx";


export default function App() {
    <Routes>
        {/* <Route path="/" element={<Left />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Notfound />} />
    </Routes>
  return (
    <Container>

      <Row className='row'>
        {/* <Col> <Left /> </Col> */}
        <Col> <Home /> </Col>
      </Row>

    </Container>

  );
}
