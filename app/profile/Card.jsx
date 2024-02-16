import React from 'react'

function Card() {
  return (
    <div className='m-10 flex flex-row'>
        <img className='rounded-m' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png"/>
        <div>
          This is a react project
        </div>
    </div>
  )
}

export default Card;