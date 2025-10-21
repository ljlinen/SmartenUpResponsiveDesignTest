import Button from './Button'
import '../../assets/css/component/live-demo-card.css'
export default function LiveDemoCard({ cardData }) {
  return (
    <div className="live-demo-card">
      <div className="background"></div>
      <div className="texture"></div>
      {
        cardData ? 
        <>
          <img className='character-image' src={cardData.imgCharacter} />
          <div className="type">
            <h3>Core Philosophies</h3>
            <div className="character-info">
              <img src={cardData.imgProfile} />
              <div className="wrap">
                <h4>{cardData.actor}</h4>
                <p>{cardData.organisation}</p>
              </div>
            </div>
            <Button value='Live Demo' />
          </div>
        </>
        : null
      }
    </div>
  )
}
