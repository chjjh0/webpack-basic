import React from 'react';
import './assets/css/style.css'
import iu from './assets/img/iu.jpg'

export default function App() {
  return (
    <>
     <p className='title'>Hello World</p>
     <div className='imgArea'>
        <img src={iu} />
     </div>
    </>
  )
}