import React from 'react'
import Classes from './Classes'
import "./NextHeader.css"

function NextHeader() {
  return (
    <>
    <div className='nxt-header'>
        <h1 className='nxt-title'>Title</h1>
        <p className='para'>lorem In the data directory, you can find source files for class data. You can assume these are in the format of the real external API. For now, you can use this dummy data, but make sure we can plug in the real api in easily.</p>
        <button className='btn'>Read More</button>
    </div>
    <Classes />
    </>
  )
}

export default NextHeader