import Button from '../components/Button';
import LiveDemoCard from '../components/LiveDemoCard';
import '../../assets/css/section/section-four.css';
import imgProfile from '../../assets/img/testimonialprofile.png';
import imgProfile2 from '../../assets/img/testimonialprofile2.png';
import InfiniteScroller from '../components/InfiniteScroller';
import TestimonialCard from '../components/TestimonialCard';

export default function SectionThree() {
  const data = [
    {
      author: 'Arlene McCoy',
      comment: 'One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.',
      organisation: "McDonald's",
      imgProfile: imgProfile,
    },
    {
      author: 'Kathryn Murphy',
      comment: "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      organisation: "General Electric",
      imgProfile: imgProfile2
    },
  ]
  return (
    <section className='section-four'>
      <div className="testimonials-cards">
        {
          data.map((item, i) => {
            return <TestimonialCard cardData={item} key={'testimonial-card-' + i} />
          })
        }
      </div>
      <div className="bottom-indicator">
        <div className="wrap">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}
