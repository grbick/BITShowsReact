import React from 'react'
import './showInfo.scss'


const ShowInfo = (props) => {
  return (
    <div className='showInfo'>
        <p>{props.show.name}</p>
        <span>{props.show.rating.average ? props.show.rating.average.toFixed(1) : 0.0}</span>
    </div>
  )
}

export default ShowInfo