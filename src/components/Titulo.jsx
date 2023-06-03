import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

function Titulo(){
    return(
        <section className="text-center">
        <h1><FontAwesomeIcon icon={faNewspaper} flip className='me-2' />Portal noticias</h1>
        <hr />
        </section>
    )
}

export default Titulo