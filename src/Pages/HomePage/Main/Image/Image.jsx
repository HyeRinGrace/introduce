import React from 'react'
import './Image.css';
import { Fade } from 'react-awesome-reveal';

const Image = () => {
  return (
    <Fade cascade damping={0.1}>
        <img className = "meImage" src='https://i.ibb.co/hgkbWtD/X.png'/>
    </Fade>
  )
}

export default Image