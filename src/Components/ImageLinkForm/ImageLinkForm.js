import React from 'react';

const ImageLinkForm = () =>{
  return(
      <div>
        <p className='f3'>
          {'This is going to detect faces in your pictures. Give it a try'}
        </p>
        <div>
          <input className='f5 pa1 w-70 center' type='tex' placeholder='Give the image link'/>
          <button className='w-30 grow f4 link pv1 dib bg-light-yellow'>Detect</button>
        </div>
      </div>
  );
}

export default ImageLinkForm;