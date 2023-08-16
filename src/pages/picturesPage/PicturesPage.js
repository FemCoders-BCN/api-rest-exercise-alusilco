import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import { LoremPicsumService } from '../../services/LoremPicsumService'
import { useEffect, useState } from 'react'


function PicturesPage() {

  const [picture, setPicture] = useState ([])

    useEffect(() => {
      const loremPicsum = LoremPicsumService();
      (loremPicsum.getAll()
      .then(response=>{setPicture(response.data)}
    ))
    }, []);


console.log(picture)


  return (
    <main>
        <h2>Aquí estarán todos los objetos de la primera llamada</h2>
        <Navbar/>
        <div>
          {picture.map((image, index) => (<PictureObject image={image} key= {index} />))}
        </div>
        <ul>
            <p>INSTRUCCIONES</p>
            <li>Crea los componentes que necesites para imprimir una lista o tarjetas que contengan lo siguiente (deberán estar todos los objetos de la llamada a la API):</li>
            <ol>
                <li>El id de la imagen.</li>
                <li>Su autor.</li>
                <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
            </ol>
            <li>Has de borrar estas instrucciones cuando lo tengas.</li>
            <li>Los estilos los has de realizar tú misma.</li>
        </ul>

    </main>
  )

  }

export default PicturesPage;