import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
function App() {

  return (
    <>
    <section className='my-5 main'>
      <Titulo></Titulo>
      <Formulario></Formulario>
    </section>
      <footer className='bg-dark text-light py-4 text-center'>
        <p>&copy; Todos los Derechos Reservados</p>
      </footer>
    </>
  )
}

export default App
