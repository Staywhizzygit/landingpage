import React from 'react'
import Div from '../Div'

export default function Newsletter({title, subtitle, placeholder}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
      <form action="https://send.pageclip.co/mNLKo9qap4t0tePIZMPiqJwmYXWP3hsU/newsletter" class="pageclip-form" method="post">
          <input name='email' type="email" className="cs-newsletter_input" placeholder={placeholder} />
          <button type='submit' className="cs-newsletter_btn"><span>Send</span></button>
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
      </Div>
    </>
  )
}
