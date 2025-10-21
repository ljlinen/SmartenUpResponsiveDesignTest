import React from 'react'
import Button from '../components/Button';
import '../../assets/css/section/section-two.css';
import SneakPeekCard from '../components/SneakPeekCard';
import imgGame from '../../assets/img/game (1).jpg';
// import imgGame2 from 'img/game (2).jpg';
import imgGame3 from '../../assets/img/game (3).jpg';

export default function SectionTwo() {
  return (
    <section className='section-two'>
      <div className="head">
        <h2>choose your <span className='texture-text'>favorite</span> games</h2>
        <p>Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.</p>
      </div>
      <div className="body">
        <div className="scrollable-contents">
          <div className="contents">
            {
              [imgGame, '', imgGame3].map((item, i) => {
                return <SneakPeekCard key={'sneak-peek-' + i} isCurrentCard={i == 1} img={item} />
              })
            }
          </div>
        </div>
        <div className="cto">
          <Button value='View All' />
          <Button bordered={true} value='Play now' />
        </div>
      </div>
    </section>
  )
}
