import React from 'react';
import "./Header.css";
import NextHeader from './NextHeader';
function Header() {
  return (
    <>
    <div className='header'>
        <div className='title'>Title</div>
        <div className='links'>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <button className='btn'>Button</button>
        </div>
    </div>
    <NextHeader />
    </>
  )
}

export default Header