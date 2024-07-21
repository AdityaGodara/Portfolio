import React from 'react'
import './styles/exp.css'

const ExpCardComp = (props) => {
  return (
    <>
      <a href={props.link} target='blank'> 
    <div className="exp-card columns">
     
     <div className="button-container">
       <button className="btn red-flag"><img src={`/Images/Exp/${props.img}`} alt="Exp Image" className="exp-img" /></button>
       <p className="offer">{props.date}</p>
     </div>
     <p className="secondary-heading">
       {props.title}
     </p>
     <p className="card-description">{props.desc}<br/>
     
     </p>
   </div>
   </a> 
   </>
  )
}

export default ExpCardComp
