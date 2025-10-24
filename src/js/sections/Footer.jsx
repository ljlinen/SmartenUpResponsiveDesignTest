import React from 'react'
import InfiniteScroller from '../components/InfiniteScroller'
import '../../assets/css/section/footer.css'
import IconLogo from '../../assets/icons/logo.svg'
import IconTwitch from '../../assets/icons/twitch.svg'
import IconRoblox from '../../assets/icons/roblox.svg'
import IconAsus from '../../assets/icons/asus.svg'
import IconCanon from '../../assets/icons/canon.svg'
import IconMicrosoft from '../../assets/icons/microsoft.svg'
import IconGithub from '../../assets/icons/github.svg'
import IconInstagram from '../../assets/icons/instagram.svg'
import IconFacebook from '../../assets/icons/facebook.svg'
import IconTwitter from '../../assets/icons/twitter.svg'

export default function Footer() {
  return (
    <footer>
      <div className="background"></div>
      <div className="background-2"></div>
      <InfiniteScroller scrollTitles={['Gaming spaning', 'Action - packed', 'mind - bending', 'collection og games']} />
      <div className="outro-and-links">
        <div className="footer-outro">
          <span className="logo">
            <IconLogo />
            <p>board</p>
          </span>
          <p>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals .</p>
        </div>
        <div className="quicklinks">
          <div className="wrap">
            <h3>company</h3>
            <ul>
              <a href="http://#">
                <li>products</li>
              </a>
              <a href="http://#">
                <li>apps & games</li>
              </a>
              <a href="http://#">
                <li>features</li>
              </a>
            </ul>
          </div>
          <div className="wrap">
            <h3>help</h3>
            <ul>
              <a href="http://#">
                <li>support</li>
              </a>
              <a href="http://#">
                <li>about</li>
              </a>
              <a href="http://#">
                <li>contact us</li>
              </a>
            </ul>
          </div>
          <div className="wrap">
            <h3>resources</h3>
            <ul>
              <a href="http://#">
                <li>youtube playlist</li>
              </a>
              <a href="http://#">
                <li>how to - blog</li>
              </a>
              <a href="http://#">
                <li>terms & conditions</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="logos-and-socials">
        <IconTwitch />
        <IconRoblox />
        <IconAsus />
        <IconCanon />
        <IconMicrosoft />
        <div className="socials">
          <IconTwitter />
          <IconFacebook />
          <IconInstagram />
          <IconGithub />
        </div>
        <p>© Copyright 2023, All Rights Reserved by board</p>
      </div>
    </footer>
  )
}
