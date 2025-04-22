import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ItemListContainer({ greeting }) {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-center mb-4">{greeting}</h2>
          <Card className="text-center p-5 bg-light">
            <Card.Body>
              <p>Próximamente: Catálogo de Productos</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
