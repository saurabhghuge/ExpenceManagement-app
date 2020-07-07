import React from 'react'
import { icons } from '../../utils/data/icons'

const Icon = () => {
  const map = icons.map((e, i) => {
    return (
      <div key={i} className="icon_container">
        <div className="image_front">
          <div className="image_name">
            <p>{e.name}</p>
          </div>
          {String(e.img).includes('http') ? (
            <img className="image_icon" src={e.img} alt="name" />
          ) : (
            e.img
          )}
        </div>
      </div>
    )
  })

  return <div className="image_container">{map}</div>
}

export default Icon
