import React from 'react'
import './Image.css';
import { Fade } from 'react-awesome-reveal';

const Image = () => {
  return (
    <Fade duration={6000}>
        <img className = "meImage" src='https://i.ibb.co/hgkbWtD/X.png'/>
    </Fade>
  )
}

export default Image