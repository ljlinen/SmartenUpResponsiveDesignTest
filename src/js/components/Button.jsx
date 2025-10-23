import '../../assets/css/component/button.css'

export default function Button({bordered, value = "My Button", EventHandler}) {
  return (
    <div className='button'>
      <div className="background" 
        style={{
          backgroundImage: bordered ? 'none' : `url('./texture.png')`,
          border: bordered ? '.59px solid' : 'none',
          borderImage: bordered ? `url('./texture.png') 50` : 'none'
        }}>
      </div>
      <input type="button" value='' onClick={EventHandler} />
      <p style={{
          color: bordered ? 'transparent' : 'var(--clr-30)',
          backgroundClip: bordered ? 'text' : 'none',
          backgroundImage: bordered ? `url('./texture.png')` : 'none',
          fontWeight: bordered ? 600 : 500,
          backgroundSize: bordered ? 'cover' : 'unset'
        }}>
        {value}
      </p>
    </div>
  )
}
