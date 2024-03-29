import React from 'react'
import photogrid from '../images/photo-grid.png'

export default function Hero() {
  return (
   <>
     <section>
            {/* <img src="../images/photo-grid.png" className="hero--photo" /> */}
            <img src={photogrid} alt="Logo" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
        </>
  )
}
