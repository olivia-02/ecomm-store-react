import React from 'react'
import {Link} from 'react-router-dom'
import Pipe from '../img/MagrittePipe.jpg'

const Page404 = () => {
  return (
    <div style={{textAlign: "center", width: "70vw", margin: "auto"}}>
      <h2 style={{fontFamily: "Courier New"}}>Looks like that page doesn't exist or somethin, sorry.</h2>
      <Link to="/"><p>Let's try again.</p></Link>
	  <img alt={"Ceci n'est pas une page"}src={Pipe} />
	  </div>
  )
}

export default Page404