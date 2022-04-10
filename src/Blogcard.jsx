import React from 'react'

function Blogcard({title, link, description, image}) {
  return (
    <div id='blogcard'>
<h1>{title}</h1>
<a href={link}> Click to read! </a> 
<br></br>
<img id='blogpic' src={image}></img>

    </div>
  )
}

export default Blogcard