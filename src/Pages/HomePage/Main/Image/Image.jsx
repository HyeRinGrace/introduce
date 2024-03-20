import React from 'react'
import me from '../../../../assets/me.jpeg'
import './Image.css';

const Image = () => {
  return (
    <div>
        <img className = "meImage" src={me}/>
    </div>
  )
}

export default Image