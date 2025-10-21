import IconCart from '../../assets/icons/menu.svg'
import IconLogo from '../../assets/icons/logo.svg'
import IconMenu from '../../assets/icons/cart.svg'
import imgHero from '../../assets/img/headerhero.jpg'
import  '../../assets/css/section/header.css'
import InfiniteScroller from '../components/InfiniteScroller'
import Button from '../components/Button'

export default function Header() {
  return (
    <header>
      <nav>
        <span className="logo">
          <IconLogo />
          <p>board</p>
        </span>
        <ul>
          <li>Products</li>
          <li>Apps & Games</li>
          <li>features</li>
          <li>Support</li>
          <li>about</li>
        </ul>
        <span className='menu-or-cart'>
          <IconMenu />
        </span>
      </nav>
      <div className="lockup">
        <div className="type-lockup">
          <h1>Let your mind <div>explor</div> new world</h1>
          <p>Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.</p>
        </div>
        <img src={imgHero} alt="hero" />
      </div>
      <div className="infinite-scroll-and-cto">
          <InfiniteScroller  scrollTitles={['gaming spaning', 'action - packed', 'mind - bending', 'mind - bending']} />
        <div className="cto-and-achievements">
          <div className="cto">
            <Button value='Buy now' />
            <Button value='Play now' bordered={true} />
          </div>
          <div className="achievements">
            <ul>
              <li>
                <h2>300+</h2>
                <p>Unique style</p>
              </li>
              <li>
                <h2><span>200+</span></h2>
                <p>Project finished</p>
              </li>
              <li>
                <h2>500+</h2>
                <p>Happy customer</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
