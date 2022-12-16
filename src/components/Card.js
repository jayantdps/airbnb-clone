import React from "react";
// import katie from '../images/katie-zaferes.png'
// import star from '../images/star.png'

export default function Card(props) {
  console.log(props);
  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
  
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
          {/* {props.openSpots === 0 && <div className="card--badge">{badgeText}</div>} */}
          {badgeText && <div className="card--badge">{badgeText}</div>} 
      <img src={`../images/${props.item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
