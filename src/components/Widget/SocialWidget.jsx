import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://www.instagram.com/staywhizzy/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link to='https://www.facebook.com/profile.php?id=100093316497931' className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link to='https://www.linkedin.com/company/staywhizzy/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link to='https://www.twitter.com/staywhizzy/' className="cs-center">
        <Icon icon="fa6-brands:twitter" />              
      </Link>
    </Div>
  )
}
