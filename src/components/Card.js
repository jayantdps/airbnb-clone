import React from 'react'
// import katie from '../images/katie-zaferes.png'
// import star from '../images/star.png'

export default function Card(props) {
  console.log(props)
  return (
//     <div className="card">
//     {/* <img src="../images/katie-zaferes.png" className="card--image" /> */}
//     {/* <img src={katie} alt="card-img" className="card--image" /> */}
//     <img src={`../images/${props.img}`} className="card--image" />
//     <div className="card--stats">
//         <img src="../images/star.png" className="card--star"/>
//         {/* <img src={star} alt="star" className="card--star" /> */}
//         {/* <img src="../images/star.png" className="card--star" /> */}
//         <span>{props.rating}</span>
//     <span className="gray">({props.reviewCount}) • </span>
//     <span className="gray">{props.country}</span>
//             </div>
//             <p>{props.title}</p>
// <p><span className="bold">From ${props.price}</span> / person</p>
//         </div>

<div className="card">
<img src={`../images/${props.img}`} className="card--image" />
<div className="card--stats">
    <img src="../images/star.png" className="card--star" />
    <span>{props.rating}</span>
    <span className="gray">({props.reviewCount}) • </span>
    <span className="gray">{props.location}</span>
</div>
<p className="card--title">{props.title}</p>
<p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
</div>


   
    


  )
}
