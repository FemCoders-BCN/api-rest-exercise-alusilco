import React from 'react';
import './picture.css';

function PictureObject({ image }) {
  return (
    <div className='productObject'>
      <img id='image' src={image.download_url} alt="Imagen" />
      <h3>Autor: {image.author}</h3>
      <p>ID de la imagen: {image.id}</p>
    </div>
  );
}

export default PictureObject;
