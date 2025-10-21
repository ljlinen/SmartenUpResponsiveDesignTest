import IconStar from '../../assets/icons/star.svg'
import '../../assets/css/component/infinite-scroller.css'

export default function InfiniteScroller({ scrollTitles, style }) {
  return (
    <div className="infinite-scroller" style={style}>
      <div className="overlay"></div>
      <div className="image"></div>
      <div className="content">
        <ul>
          {
            scrollTitles?.length ?
            scrollTitles.map((item, i) => {
              return <li key={'scroll-title-' + i}>
                <IconStar />
                <p>{item}</p>
              </li>
            }) :
            <p>scroll titles not provided</p>
          }
        </ul>
      </div>
    </div>
  )
}
