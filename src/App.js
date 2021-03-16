import { Row, Col, Container } from "./Components/Layout/Basic";

function App() {
  return (
    <Container>
      <Row mt={3}>
        <Col size={12}>
          <p>Long column</p>
        </Col>
      </Row>
      <Row m={4} justify="center">
        <Col size={4}>
          <p>Other column</p>
        </Col>
        <Col size={4}>
          <p>Other column</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
