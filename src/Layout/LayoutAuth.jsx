import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LayoutAuth = () => {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={5} lg={4}>
          <Card className="shadow p-4">
            <Card.Body>
              <Outlet />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutAuth;