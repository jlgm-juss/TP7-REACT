import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "./Card.css"

const Empleado = (props) => {


  return (
    <Container>
    <Card className="card bg">
      <Row className="no-gutters ">
        <Col md={5} lg={5}>
          <Card.Img variant="top" src={props.img} alt="" className="img" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.titulo}</Card.Text>
            <Card.Text className="text-white badge bg-primary">{props.department}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </Container>
  );
};

export default Empleado;