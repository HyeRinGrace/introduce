import React from 'react'
import './Image.css';
import { Fade } from 'react-awesome-reveal';
import me from '../../../../assets/me.png'

const Image = () => {
  return (
    <Fade cascade damping={0.1}>
        <img className = "meImage" src={me}/>
    </Fade>
  )
}

export default Image