import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      {/* <img src={logoSrc} alt={logoAlt} /> */}
      <h4 style={{"text-transform":"none"}}><span style={{"color":"#ff4a16"}}>Stay</span>Whizzy</h4>
      <p>{text}</p>
    </Div>
  )
}
