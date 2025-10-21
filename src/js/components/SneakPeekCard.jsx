import React from 'react'
import IconCurrentSneakPeekBorder from '../../assets/icons/currentsneakpeakborder.svg'
import IconCurrentSneakPeekLogo from '../../assets/icons/currentsneakpeakborderlogo.svg'

export default function SneakPeekCard({isCurrentCard, img}) {
  return (
    <>
      {
        isCurrentCard ? 
        <IconCurrentSneakPeekBorder className='main-game'>
        </IconCurrentSneakPeekBorder> :
        <div className={`sneak-peek ${isCurrentCard ? '' : 'normal-game'}`}>
          <img src={img} alt="card" />
        </div>
      }
    </>
  )
}
