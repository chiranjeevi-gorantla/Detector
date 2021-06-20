import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () =>{
  return(
      <div>
        <p className='f3'>
          {'This will detect faces in your pictures. Try it out...'}
        </p>
          <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input className='f5 pa1 w-70 center' type='tex' placeholder='Paste the image link here'/><div className='ma1'></div>
            <button className='w-30 br3 grow f4 link pv1 dib btn-color pointer'>Detect</button>
          </div>
        </div>
      </div>
  );
}

export default ImageLinkForm;