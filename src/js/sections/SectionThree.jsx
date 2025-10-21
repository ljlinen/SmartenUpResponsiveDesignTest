import Button from '../components/Button';
import LiveDemoCard from '../components/LiveDemoCard';
import '../../assets/css/section/section-three.css';
import imgHero from '../../assets/img/discoverhero.png';
import imgCharacter1 from '../../assets/img/character.jpg';
import imgCharacter2 from '../../assets/img/character 2.jpg';
import imgCharacter3 from '../../assets/img/character 3.jpg';
import imgCharacter4 from '../../assets/img/character 4.jpg';
import imgCharacter5 from '../../assets/img/character 5.png';
import imgCharacter6 from '../../assets/img/character 6.png';
import InfiniteScroller from '../components/InfiniteScroller';

export default function SectionThree() {
  const titles = ['Gaming spaning', 'Action - packed', 'mind - bending', 'collection og games']
  return (
    <section className='section-three'>
      <div className="discover-card">
        <div className="content">
          <div className="type-lockup">
            <h2>Discover the <span className="texture-text">Virtual</span> Reality Gaming </h2>
            <p>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.</p>
            <Button bordered={true} value='Play now' />
          </div>
        </div>
        <img src={imgHero} alt='hero' />
        <div className="background"></div>
        <div className="image"></div>
      </div>
      <InfiniteScroller scrollTitles={titles} />
      <div className="head-and-cto">
        <h2>Welcome to <span>the top games</span></h2>
        <div className="cto">
          <Button value='Mewest games' />
          <Button bordered={true} value='Latest games' />
          <Button bordered={true} value='Fight games' />
          <Button bordered={true} value='sport games' />
        </div>
      </div>
      <div className="characters">
        {
          [
            {
              actor: 'Cameron Williamson',
              organisation: 'Gillette',
              imgCharacter: imgCharacter1,
              imgProfile: imgHero,
            },
            {
              actor: 'Dianne Russell',
              organisation: 'Louis Vuitton',
              imgCharacter: imgCharacter2,
              imgProfile: imgHero,
            },
            {
              actor: 'Jane Cooper',
              organisation: 'MasterCard',
              imgCharacter: imgCharacter3,
              imgProfile: imgHero,
            },
            {
              actor: 'Cody Fisher',
              organisation: 'The Walt Disney Company',
              imgCharacter: imgCharacter4,
              imgProfile: imgHero,
            },
            {
              actor: 'Wade Warren',
              organisation: 'Gillette',
              imgCharacter: imgCharacter5,
              imgProfile: imgHero,
            },
            {
              actor: 'Robert Fox',
              organisation: "L'Oréal",
              imgCharacter: imgCharacter6,
              imgProfile: imgHero,
            },
          ].map((item, i) => {
            return <LiveDemoCard cardData={item} key={'live-demo-card-' + i} />
          })
        }
      </div>
      <InfiniteScroller scrollTitles={titles} />
    </section>
  )
}
