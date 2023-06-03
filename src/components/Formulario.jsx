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
        const respuesta = await fetch(`https://saurav.tech/NewsAPI/everything/bbc-news.json`);
        const datos = await respuesta.json();
        setNoticias(datos.articles);
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  return (
    <Container className="my-5 border border-secondary border-1 ">
      <Form>
        <Form.Group className="my-5 border-secondary d-flex justify-content-center" controlId="categoriaForm">
          <Form.Label className="d-inline fs-4">Buscar por Categoria: </Form.Label>
          <Form.Select className="w-50 ms-4 mb-5" aria-label="Categoria" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                <option value=''>Categorías</option>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <ListaNoticias noticias={noticias} />
    </Container>
  );
}

export default Formulario;