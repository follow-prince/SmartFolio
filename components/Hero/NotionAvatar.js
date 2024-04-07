// https://react-svgr.com/playground/
import * as React from 'react'

const NotionAvatar = (props) => (
  <div    style={{
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  
  }} className="myCard">
  <div className="innerCard">
    <div className="frontSide">
      <img className='portfolio-img' alt=""  src="/portrait.png" />
    </div>
    <div className="backSide">
      <img className='portfolio-img1' alt=""  src="/portrait1.png" />
    </div>
  </div>
</div>
 


)

export default NotionAvatar

