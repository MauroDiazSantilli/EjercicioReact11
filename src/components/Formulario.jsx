import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

function Formulario() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    if (noticias.length === 0) {
      consultarAPI();
    }
  }, [categoria]);

  const consultarAPI = async () => {
    try {
      if (categoria !== "") {
        const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=c5742b1f543a446aa597ee4f73766a4b&category=${categoria}`);
        const dato = await respuesta.json();
        setNoticias(dato.results);
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  return (
    <Container className="my-5 border border-secondary border-3 ">
      <Form>
        <Form.Group className="my-5 justify-content-center d-flex border-secondary border-3 border-bottom" controlId="categoriaForm">
          <Form.Label className="d-inline fs-4">Buscar por Categoria: </Form.Label>
          <Form.Select className="d-inline w-50 ms-3 mb-4" aria-label="Categoria" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
            <option value=''>Categorias</option>
            <option value="top">Hoy</option>
            <option value="politics">Politica</option>
            <option value="technology">Tecnologia</option>
            <option value="weather">Clima</option>
            <option value="sports">Deportes</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={noticias} />
    </Container>
  );
}

export default Formulario;