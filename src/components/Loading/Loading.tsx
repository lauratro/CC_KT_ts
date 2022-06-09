import React from 'react'
import "./Loading.css"

const Loading:React.FC=()=> {
  return (
    <div style={{display:"flex",justifyContent:"center"}}><div className="loader"></div></div>
  )
}
export default Loading;