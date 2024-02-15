import React from 'react'
import Card from './Card'

function page() {
  return (
    <div>
      <div className="m-4">
        <div className="flex flex-row">
          <img className="w-36 h-36 rounded-full border-4 border-slate-50 object-cover"
            src='https://shorturl.at/jpyCK' alt="avatar" />
          <div className="m-10 text-2xl font-black text-white">
            Hi...
          </div>
        </div>
      </div>
    <Card />
    </div>
  )
}

export default page