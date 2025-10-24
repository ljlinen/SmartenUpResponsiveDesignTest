import Button from '../components/Button';
import LiveDemoCard from '../components/LiveDemoCard';
import '../../assets/css/section/section-three.css';
import imgHero from '../../assets/img/discoverhero.png';
import imgCharacter1 from '../../assets/img/character_optimised.webp';
import imgCharacter2 from '../../assets/img/character_2_optimised.webp';
import imgCharacter3 from '../../assets/img/character_3_optimised.webp';
import imgCharacter4 from '../../assets/img/character_4_optimised.webp';
import imgCharacter5 from '../../assets/img/character_5_optimised.webp';
import imgCharacter6 from '../../assets/img/character_6_optimised.webp';
import imgProf1 from '../../assets/img/PP_optimised.jpg';
import imgProf2 from '../../assets/img/PP_optimised_1.jpg';
import imgProf3 from '../../assets/img/PP_optimised_2.jpg';
import imgProf4 from '../../assets/img/PP_optimised_3.jpg';
import imgProf5 from '../../assets/img/PP_optimised_4.jpg';
import imgProf6 from '../../assets/img/PP_optimised_5.jpg';
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
        <div className="scroll-contents">
          {
            [
              {
                actor: 'Cameron Williamson',
                organisation: 'Gillette',
                imgCharacter: imgCharacter1,
                imgProfile: imgProf1,
              },
              {
                actor: 'Dianne Russell',
                organisation: 'Louis Vuitton',
                imgCharacter: imgCharacter2,
                imgProfile: imgProf2,
              },
              {
                actor: 'Jane Cooper',
                organisation: 'MasterCard',
                imgCharacter: imgCharacter3,
                imgProfile: imgProf3,
              },
              {
                actor: 'Cody Fisher',
                organisation: 'The Walt Disney Company',
                imgCharacter: imgCharacter4,
                imgProfile: imgProf4,
              },
              {
                actor: 'Wade Warren',
                organisation: 'Gillette',
                imgCharacter: imgCharacter5,
                imgProfile: imgProf5,
              },
              {
                actor: 'Robert Fox',
                organisation: "L'Oréal",
                imgCharacter: imgCharacter6,
                imgProfile: imgProf6,
              },
            ].map((item, i) => {
              return <LiveDemoCard cardData={item} key={'live-demo-card-' + i} />
            })
          }
        </div>
      </div>
      <InfiniteScroller scrollTitles={titles} />
    </section>
  )
}
