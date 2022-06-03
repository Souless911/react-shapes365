import React from "react";
import collage from '../../photos/collage.png'
const titulo=()=>{
      return (
    <header>
      <div className='container header__cont'>
        <h5>Shapes-365</h5>
        <h2> Ortodoncia invisible</h2>
        <div className='foto_collage'>
          <img src={collage} alt="collage" />
        </div>
      </div>

    </header>
  )
}
export default titulo