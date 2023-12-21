import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What services does your digital agency offer?',
      answer: 'We at StayWhizzy offer a comprehensive range of digital services including web design, mobile app development, digital marketing, branding, SEO, and content creation.'
    },
    {
      question: 'How do you determine the right strategy for my business?',
      answer: 'Our process begins with understanding your business goals, target audience, and market. We conduct thorough research and analysis to tailor a strategy that aligns with your objectives.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: "While we've worked across various industries, our expertise spans technology, e-commerce, healthcare, finance, and education."
    },
    {
      question: 'Are you open to collaborations or partnerships?',
      answer: "Absolutely. We're open to exploring collaborations and partnerships that align with our values and goals. Feel free to reach out to discuss potential opportunities."
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
