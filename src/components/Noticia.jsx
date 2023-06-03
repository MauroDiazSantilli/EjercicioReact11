import { Card, Button, Col, Row } from "react-bootstrap";

function Noticia({ noticias }) {
  return (
    <section className="container-fluid">
      <Row className="my-3">
        {noticias.map((noticia, indice) => (
          <Col md={4} lg={3} key={indice}>
            <Card className="my-5">
              {noticia.urlToImage && <Card.Img variant="top" src={noticia.urlToImage} alt="imagen de noticia" />}
              <Card.Body>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text className="text-truncate">{noticia.description}</Card.Text>
                <Button variant="danger">Ver noticia completa</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Noticia;