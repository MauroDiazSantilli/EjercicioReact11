import Noticia from "./Noticia";

function ListaNoticias({noticias}){
    return (
        <section className="my-5">
            <Noticia noticias={noticias}></Noticia>
        </section>
    );
};

export default ListaNoticias;