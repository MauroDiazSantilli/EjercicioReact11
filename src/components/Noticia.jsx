import { Card, Button, Col, Row } from "react-bootstrap";

function Noticia({ noticias }) {
  return (
    <section className="container-fluid">
      <Row className="my-3">
        {noticias.map((noticia, indice) => (
          <Col md={4} lg={3} key={indice}>
            <Card className="my-5 h-100">
              {noticia.urlToImage && <Card.Img variant="top" src={noticia.urlToImage} alt="imagen de noticia" />}
              <Card.Body className="d-flex flex-column">
                <div className="mb-auto">
                  <Card.Title>{noticia.title}</Card.Title>
                  <Card.Text>{noticia.description}</Card.Text>
                </div>
                <Button variant="danger" className="mt-auto">Ver noticia completa</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Noticia;