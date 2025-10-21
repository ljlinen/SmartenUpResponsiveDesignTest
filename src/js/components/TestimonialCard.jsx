import Button from './Button'
import '../../assets/css/component/testimonial-card.css'
import IconRatingStar from '../../assets/icons/ratingstar.svg'
import IconQuoteMark from '../../assets/icons/quotemark.svg'
import IconQuoteMarkTwo from '../../assets/icons/quotemarktwo.svg'
import IconVerified from '../../assets/icons/verified.svg'
export default function TestimonialCard({ cardData }) {
  return (
    <div className="testimonial-card">
      <div className="quotes">
        <IconQuoteMark />
        <IconQuoteMarkTwo />
      </div>
      <div className="background"></div>
      {
        cardData ?
          <>
            <div className="rating">
              <div className="wrap">
                <IconRatingStar />
                <IconRatingStar />
                <IconRatingStar />
                <IconRatingStar />
                <IconRatingStar />
              </div>
              <p>{cardData.comment}</p>
            </div>
            <div className="type">
              <div className="character-info">
                <img src={cardData.imgProfile} />
                <div className="wrap">
                  <h4>{cardData.author}</h4>
                  <p>{cardData.organisation}</p>
                </div>
              </div>
              <div className="verified">
                <IconVerified />
                <p>verified</p>
              </div>
            </div>
          </>
          : null
      }
    </div>
  )
}

